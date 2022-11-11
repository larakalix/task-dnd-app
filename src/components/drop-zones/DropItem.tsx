import { useContext } from "react";
import HomeContext from "@/context/HomeContext";
import { Task } from "@/types/task";
import clsx from "clsx";

type Props = {
    item: Task;
};

export const DropItem = ({ item }: Props) => {
    const { isDragging, handleDragging } = useContext(HomeContext);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("_id", `${item.id}`);
        e.dataTransfer.setData("_status", `${item.status}`);
        handleDragging(true);
    };

    const handleDragEnd = () => handleDragging(false);

    const styles = clsx({
        ["border-2 borde-blue-500"]: isDragging,
        ["border-2 border-t-dz-gray"]: !isDragging,
    });

    return (
        <div
            className={`w-full rounded-md shadow-sm bg-white mb-2 min-h-[6rem] px-3 py-2 cursor-move ${styles}`}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <span className="text-t-dz-black font-normal">{item.title}</span>

            <span>{isDragging ? "is dragging" : "no is not dragging"}</span>

            <p className="text-gray-500 text-[0.9rem] font-light">
                {item.description}
            </p>
        </div>
    );
};
