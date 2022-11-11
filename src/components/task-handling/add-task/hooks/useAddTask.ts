import * as yup from "yup";
import { FormField } from "@/types/form-field";
import { Task } from "@/types/task";
import { Status } from "@/types/drop-zones";
import { useTaskStore } from "@/store/taskStore";

export const useAddTask = () => {
    const { addTask } = useTaskStore((state) => state);

    const validationSchema = yup.object().shape({
        title: yup.string().required("Title required").min(8, "Too Short!"),
        description: yup
            .string()
            .required("Description required")
            .min(12, "Too Short!"),
    });

    const formFields: FormField[] = [
        { label: "Title", name: "title", disabled: false },
        { label: "Description", name: "description", disabled: false },
    ];

    const initialValues: Omit<Task, "id"> = {
        title: "",
        description: "",
        status: Status.Backlog,
    };

    const createTask = (values: Omit<Task, "id">) => {
        const task: Task = {
            id: new Date().getTime().toString(),
            ...values,
        };

        addTask(task);
    };

    return {
        validationSchema,
        formFields,
        initialValues,
        createTask,
    };
};
