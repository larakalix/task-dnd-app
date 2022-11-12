import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
    title: string;
    children: JSX.Element | JSX.Element[];
    showFromOutside?: boolean;
    outsideFn?: () => void;
};

export const Modal = ({
    title,
    children,
    showFromOutside = false,
    outsideFn = undefined,
}: Props) => {
    if (showFromOutside) console.log(showFromOutside);
    if (outsideFn) console.log(outsideFn);

    const [isOpen, setIsOpen] = useState(showFromOutside || false);

    const handleModal = () => setIsOpen((state) => (state = !state));

    return (
        <>
            <button
                type="button"
                onClick={outsideFn || handleModal}
                className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mb-4"
            >
                {title}
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={outsideFn || handleModal}
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
                                            onClick={outsideFn || handleModal}
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
