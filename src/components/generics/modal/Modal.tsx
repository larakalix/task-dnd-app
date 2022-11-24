import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { FormButtonType } from "@/types/drop-zones";

type Props = {
    title: string;
    buttonLabel: string;
    buttonType: FormButtonType;
    children: JSX.Element | JSX.Element[];
};

export const Modal = ({ title, buttonLabel, buttonType, children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => setIsOpen((state) => (state = !state));

    const buttonStyles = clsx({
        ["rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mb-4"]:
            buttonType === FormButtonType.Submit,
        ["rounded-full bg-t-gray-button p-2 text-sm font-medium text-t-dz-black w-8 h-8 flex items-center justify-center"]:
            buttonType === FormButtonType.DropZoneButton,
        ["23123"]: buttonType === FormButtonType.TaskButton,
        ["w-full rounded-md h-[10rem] bg-t-gray-button p-2 text-sm font-medium text-t-dz-black opacity-50"]:
            buttonType === FormButtonType.EmptyDropZoneButton,
    });

    return (
        <>
            <button
                type="button"
                onClick={handleModal}
                className={buttonStyles}
            >
                {buttonLabel}
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={handleModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <div className="mt-2">{children}</div>

                                    <div className="mt-12">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={handleModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
