import { useContext } from "react";
import clsx from "clsx";
import { FiLock, FiUnlock } from "react-icons/fi";
import HomeContext from "@/context/HomeContext";
import { Task } from "@/types/task";
import { DropItemActions } from "./DropItemActions";
import { useTaskStore } from "@/store/taskStore";

type Props = {
    item: Task;
    index: number;
};

export const DropItem = ({ item, index }: Props) => {
    const { dragging, handleDragging } = useContext(HomeContext);
    const { reorderTasks } = useTaskStore((state) => state);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("_id", `${item.id}`);
        e.dataTransfer.setData("_status", `${item.status}`);
        e.dataTransfer.setData("_index", `${index}`);
        handleDragging(true, item.id!);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (dragging.taskId === item.id) return;

        reorderTasks(dragging.taskId!, item.id!);
    };

    const handleDragEnd = () => handleDragging(false, item.id!);

    const styles = clsx({
        ["border-2 border-green-500"]:
            dragging.isDragging && dragging.taskId === item.id,
    });

    return (
        <>
            <div
                className={`w-full rounded-md shadow-sm bg-white mb-2 min-h-[6rem] px-3 py-2 cursor-move ${styles}`}
                draggable={!item.isLocked}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
            >
                <div className="flex items-end justify-between">
                    <h3 className="flex items-center text-t-dz-black font-normal">
                        {item.title}
                        {item.isLocked ? (
                            <FiLock className="ml-2 text-sm text-blue-500" />
                        ) : (
                            <FiUnlock className="ml-2 text-sm text-gray-400" />
                        )}
                    </h3>
                    <DropItemActions task={item} />
                </div>

                <p className="text-gray-500 text-[0.9rem] font-light pr-8">
                    {item.description}
                </p>
            </div>
        </>
    );
};
