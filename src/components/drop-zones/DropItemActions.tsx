import { Fragment } from "react";
import Link from "next/link";
import { TbDotsVertical } from "react-icons/tb";
import { Menu, Transition } from "@headlessui/react";
import { FiEdit, FiLock, FiTrash, FiUnlock } from "react-icons/fi";
import { Task } from "@/types/task";
import { useTaskStore } from "@/store/taskStore";

type Props = {
    task: Task;
};

export const DropItemActions = ({ task }: Props) => {
    const { updateTask } = useTaskStore((state) => state);

    const lockTask = () => {
        updateTask(task.id!, { isLocked: !task.isLocked });
    };

    return (
        <>
            <div className="text-right">
                <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium">
                        <TbDotsVertical className="text-black" />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            href={`/task/${task.id}`}
                                            className={`${
                                                active
                                                    ? "bg-blue-500 text-white"
                                                    : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            <FiEdit
                                                className="mr-4 h-4 w-4"
                                                aria-hidden="true"
                                            />
                                            Edit task
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={lockTask}
                                            className={`${
                                                active
                                                    ? "bg-blue-500 text-white"
                                                    : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            {task.isLocked ? (
                                                <>
                                                    <FiUnlock
                                                        className="mr-4 h-4 w-4"
                                                        aria-hidden="true"
                                                    />
                                                    Unlock
                                                </>
                                            ) : (
                                                <>
                                                    <FiLock
                                                        className="mr-4 h-4 w-4"
                                                        aria-hidden="true"
                                                    />
                                                    Lock
                                                </>
                                            )}
                                        </button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            href={`/task/${task.id}`}
                                            className={`${
                                                active
                                                    ? "bg-blue-500 text-white"
                                                    : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            <FiTrash
                                                className="mr-4 h-4 w-4"
                                                aria-hidden="true"
                                            />
                                            Delete
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </>
    );
};
