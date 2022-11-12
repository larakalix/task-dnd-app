import { Form, Formik } from "formik";
import { FormField } from "@/components/generics/form-field/FormField";
import { HandleSummaryTask } from "@/components/task-handling/summary-task/HandleSummaryTask";

type Props = {
    id: string;
};

export const SingleTaskView = ({ id }: Props) => {
    return (
        <div>
            <HandleSummaryTask id={id} />
        </div>
    );
};
