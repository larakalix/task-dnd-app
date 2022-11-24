import * as yup from "yup";
import { IFormField } from "@/types/form-field";
import { IHandleSingleTaskProps, ITask } from "@/types/task";
import { Status } from "@/types/drop-zones";
import { useTaskStore } from "@/store/taskStore";

export const useAddTask = ({
    status = Status.Backlog,
    task,
}: Omit<IHandleSingleTaskProps, "source">) => {
    const { labels, addTask, updateTask } = useTaskStore((state) => state);

    const validationSchema = yup.object().shape({
        title: yup.string().required("Title required").min(8, "Too Short!"),
        description: yup
            .string()
            .required("Description required")
            .min(12, "Too Short!"),
    });

    const formFields: IFormField[] = [
        { label: "Title", name: "title", disabled: false },
        { label: "Description", name: "description", disabled: false },
    ];

    const initialValues: Omit<ITask, "id"> = !task
        ? {
              title: "",
              description: "",
              status,
              isLocked: false,
              labels: [],
              comments: [],
          }
        : task!;

    const createTask = (values: Omit<ITask, "id">) => {
        const task: ITask = {
            id: new Date().getTime().toString(),
            ...values,
        };

        addTask(task);
    };

    const changeTask = (id: string, values: Omit<ITask, "id">) => {
        updateTask(id, values);
    };

    const handleLabelChange = (id: string) => {
        const label = labels.find((label) => label.id === id);

        if (label && task) {
            if (task.labels.map((label) => label.id).includes(id))
                task.labels = task.labels.filter((l) => l.id !== label.id);
            else task.labels.push(label);

            updateTask(task.id!, task);
        }
    };

    return {
        labels,
        validationSchema,
        formFields,
        initialValues,
        createTask,
        changeTask,
        handleLabelChange,
    };
};
