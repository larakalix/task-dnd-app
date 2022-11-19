import { Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { FormField } from "@/components/generics/form-field/FormField";
import { useAddTask } from "../add-task/hooks/useAddTask";
import { useSingleTask } from "./hooks/useSingleTask";

type Props = {
    id: string;
};

export const HandleSummaryTask = ({ id }: Props) => {
    const { validationSchema, formFields, initialValues, changeTask } =
        useAddTask();

    const { getTask } = useSingleTask(id);

    const task = getTask(id);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 py-6">
            <Toaster />
            <Formik
                enableReinitialize
                validationSchema={validationSchema}
                initialValues={task ?? initialValues}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(false);

                    changeTask(id, values);

                    toast.success("Successfully updated!");
                }}
            >
                {({ errors, isSubmitting }) => (
                    <Form className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            {formFields.map(({ label, name, disabled }) => (
                                <FormField
                                    key={`field_${name}`}
                                    label={label}
                                    name={name}
                                    disabled={disabled}
                                    isSubmitting={isSubmitting}
                                />
                            ))}
                        </div>

                        <button
                            disabled={isSubmitting}
                            className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-4"
                            type="submit"
                        >
                            Update task
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
