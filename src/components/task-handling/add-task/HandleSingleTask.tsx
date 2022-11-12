import { Form, Formik } from "formik";
import { useAddTask } from "./hooks/useAddTask";
import { FormField } from "@/components/generics/form-field/FormField";

export const HandleSingleTask = () => {
    const { validationSchema, formFields, initialValues, createTask } =
        useAddTask();

    return (
        <div className="flex items-center justify-center">
            <Formik
                enableReinitialize
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(false);

                    createTask(values);

                    actions.resetForm();
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
                            Create task
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
