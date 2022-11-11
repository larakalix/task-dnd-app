import clsx from "clsx";
import { Status } from "@/types/drop-zones";
import { Task } from "@/types/task";
import { DropItem } from "./DropItem";

type Props = {
    status: Status;
    items: Task[];
    isDragging: boolean;
    handleDragging: (dragging: boolean) => void;
    handleDrop: (e: React.DragEvent<HTMLDivElement>, status: Status) => void;
};

export const DropZone = ({
    status,
    items,
    isDragging,
    handleDragging,
    handleDrop,
}: Props) => {
    const styles = clsx({
        ["border-black"]: isDragging,
        ["border-t-dz-gray"]: !isDragging,
    });

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
        e.preventDefault();

    return (
        <div
            className={`border ${styles} h-[90vh] w-full rounded-md bg-t-dz-gray p-4`}
            onDrop={(event) => handleDrop(event, status)}
            onDragOver={handleDragOver}
        >
            <span className="text-t-dz-black block mb-2">{status}</span>

            {items.map(
                (item, index) =>
                    status === item.status && (
                        <DropItem
                            key={`item-${index}`}
                            item={item}
                            handleDragging={handleDragging}
                        />
                    )
            )}
        </div>
    );
};
