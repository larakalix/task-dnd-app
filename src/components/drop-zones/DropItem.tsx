import { Task } from "@/types/task";

type Props = {
    item: Task;
    handleDragging: (dragging: boolean) => void;
};

export const DropItem = ({ item, handleDragging }: Props) => {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("_id", `${item.id}`);
        e.dataTransfer.setData("_status", `${item.status}`);
        handleDragging(true);
    };

    const handleDragEnd = () => handleDragging(false);

    return (
        <div
            className="w-full rounded-md shadow-sm bg-white mb-2 min-h-[6rem] px-3 py-2 cursor-move"
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <span className="text-t-dz-black font-normal">{item.title}</span>

            <p className="text-gray-500 text-[0.9rem] font-light">{item.description}</p>
        </div>
    );
};
