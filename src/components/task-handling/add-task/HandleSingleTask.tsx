import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import clsx from "clsx";
import { useAddTask } from "./hooks/useAddTask";
import { FormField } from "@/components/generics/form-field/FormField";
import { IHandleSingleTaskProps, SingleTaskSource } from "@/types/task";
import { FormTaskLabel } from "@/components/generics/form-field/FormTaskLabel";
import { SingleTaskInfo } from "./sibblings/SingleTaskInfo";

export const HandleSingleTask = ({
    status,
    task,
    source,
}: IHandleSingleTaskProps) => {
    const {
        labels,
        validationSchema,
        formFields,
        initialValues,
        createTask,
        changeTask,
        handleLabelChange,
    } = useAddTask({ task, status });

    const buttonStyles = clsx({
        ["bg-blue-500"]: !task,
        ["bg-green-500"]: task,
    });

    return (
        <div className="flex flex-col items-center justify-center">
            <Toaster />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Formik
                    enableReinitialize
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(false);

                        if (task) {
                            changeTask(task.id!, values);
                            toast.success("Task updated");
                        } else {
                            createTask(values);
                            toast.success("Successfully created!");
                        }

                        actions.resetForm();
                    }}
                >
                    {({ errors, isSubmitting }) => (
                        <Form className="w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3">
                                {formFields.map(({ label, name, disabled }) => (
                                    <FormField
                                        key={`field_${name}`}
                                        label={label}
                                        name={name}
                                        disabled={disabled}
                                        isSubmitting={isSubmitting}
                                    />
                                ))}
                                <div
                                    className="flex flex-wrap items-center justify-start space-x-3"
                                    role="group"
                                    aria-labelledby="checkbox-group"
                                >
                                    {labels.map(({ id, ...props }) => (
                                        <FormTaskLabel
                                            key={id}
                                            label={{
                                                id,
                                                ...props,
                                            }}
                                            checked={initialValues.labels
                                                .map((label) => label.id)
                                                .includes(id)}
                                            handleLabelChange={
                                                handleLabelChange
                                            }
                                        />
                                    ))}
                                </div>
                            </div>

                            <button
                                disabled={isSubmitting}
                                className={`rounded-md ${buttonStyles} px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-4`}
                                type="submit"
                            >
                                {task ? "Update task" : "Create task"}
                            </button>
                        </Form>
                    )}
                </Formik>

                {source === SingleTaskSource.SingleView && task && (
                    <SingleTaskInfo task={task} />
                )}
            </div>
        </div>
    );
};
