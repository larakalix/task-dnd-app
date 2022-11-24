import { useContext } from "react";
import clsx from "clsx";
import { FiLock, FiUnlock } from "react-icons/fi";
import HomeContext from "@/context/HomeContext";
import { ITask, SingleTaskSource } from "@/types/task";
import { DropItemActions } from "../DropItemActions";
import { useTaskStore } from "@/store/taskStore";
import { ItemFooter, Labels } from "./sibblings";
import { FormButtonType } from "@/types/drop-zones";
import { Modal } from "@/components/generics/modal/Modal";
import { HandleSingleTask } from "@/components/task-handling/add-task/HandleSingleTask";

type Props = {
    task: ITask;
    index: number;
};

export const DropItem = ({ task, index }: Props) => {
    const { dragging, handleDragging } = useContext(HomeContext);
    const { reorderTasks } = useTaskStore((state) => state);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("_id", `${task.id}`);
        e.dataTransfer.setData("_status", `${task.status}`);
        e.dataTransfer.setData("_index", `${index}`);
        handleDragging(true, task.id!);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (dragging.taskId === task.id) return;

        reorderTasks(dragging.taskId!, task.id!);
    };

    const handleDragEnd = () => handleDragging(false, task.id!);

    const styles = clsx({
        ["border-2 border-green-500"]:
            dragging.isDragging && dragging.taskId === task.id,
    });

    return (
        <>
            <div
                className={`w-full rounded-md shadow-sm bg-white mb-2 min-h-[6rem] px-3 py-2 cursor-move ${styles}`}
                draggable={!task.isLocked}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
            >
                <div className="flex items-end justify-between">
                    <div className="flex items-center">
                        <Modal
                            title={task.title}
                            buttonLabel={task.title}
                            buttonType={FormButtonType.TaskButton}
                        >
                            <HandleSingleTask
                                status={task.status}
                                task={task}
                                source={SingleTaskSource.SingleView}
                            />
                        </Modal>
                        {task.isLocked ? (
                            <FiLock className="ml-2 text-sm text-blue-500" />
                        ) : (
                            <FiUnlock className="ml-2 text-sm text-gray-400" />
                        )}
                    </div>
                    <DropItemActions task={task} />
                </div>

                <Labels labels={task.labels} />

                <p className="text-gray-500 text-[0.9rem] font-light pr-8">
                    {task.description}
                </p>

                <ItemFooter
                    labels={task.labels.length}
                    comments={task.comments.length}
                    users={0}
                />
            </div>
        </>
    );
};
