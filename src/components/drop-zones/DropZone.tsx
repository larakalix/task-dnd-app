import clsx from "clsx";
import { FormButtonType, Status } from "@/types/drop-zones";
import { ITask } from "@/types/task";
import { DropItem } from "./DropItem/DropItem";
import { StateProps } from "@/context/HomeContext";
import { Modal } from "../generics/modal/Modal";
import { HandleSingleTask } from "../task-handling/add-task/HandleSingleTask";

type Props = {
    status: Status;
    tasks: ITask[];
    dragging: StateProps;
    handleDrop: (e: React.DragEvent<HTMLDivElement>, status: Status) => void;
};

export const DropZone = ({ status, tasks, dragging, handleDrop }: Props) => {
    const styles = clsx({
        ["border-dashed border-blue-500"]: dragging.isDragging,
        ["border-solid border-t-dz-gray"]: !dragging.isDragging,
    });

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
        e.preventDefault();

    return (
        <div
            className={`border-2 ${styles} h-[90vh] w-full rounded-md bg-t-dz-gray px-2 py-3`}
            onDrop={(event) => handleDrop(event, status)}
            onDragOver={handleDragOver}
        >
            <div className="flex justify-between items-center mb-4">
                <span className="text-t-dz-black">{status}</span>

                <Modal
                    title="Create task"
                    buttonLabel="+"
                    buttonType={FormButtonType.DropZoneButton}
                >
                    <HandleSingleTask status={status} />
                </Modal>
            </div>

            {tasks.length === 0 && (
                <Modal
                    title="Create task"
                    buttonLabel="Create new task"
                    buttonType={FormButtonType.EmptyDropZoneButton}
                >
                    <HandleSingleTask status={status} />
                </Modal>
            )}

            {tasks.map(
                (task, index) =>
                    status === task.status && (
                        <DropItem
                            key={`item-${index}`}
                            task={task}
                            index={index}
                        />
                    )
            )}
        </div>
    );
};
