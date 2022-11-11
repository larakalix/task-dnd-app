import clsx from "clsx";
import { Status } from "@/types/drop-zones";
import { Task } from "@/types/task";
import { DropItem } from "./DropItem";

type Props = {
    status: Status;
    items: Task[];
    isDragging: boolean;
    handleDrop: (e: React.DragEvent<HTMLDivElement>, status: Status) => void;
};

export const DropZone = ({ status, items, isDragging, handleDrop }: Props) => {
    const styles = clsx({
        ["border-dashed border-blue-500"]: isDragging,
        ["border-solid border-t-dz-gray"]: !isDragging,
    });

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
        e.preventDefault();

    return (
        <div
            className={`border-2 ${styles} h-[90vh] w-full rounded-md bg-t-dz-gray px-2 py-3`}
            onDrop={(event) => handleDrop(event, status)}
            onDragOver={handleDragOver}
        >
            <span className="text-t-dz-black block mb-2">{status}</span>

            {items.map(
                (item, index) =>
                    status === item.status && (
                        <DropItem key={`item-${index}`} item={item} />
                    )
            )}
        </div>
    );
};
