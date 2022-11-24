import { useState } from "react";
import { DropZone } from "@/components/drop-zones/DropZone";
import { Status } from "@/types/drop-zones";
import { ViewWrapper } from "@/wrapper/ViewWrapper";
import { useTaskStore } from "@/store/taskStore";
import { HandleSingleTask } from "@/components/task-handling/add-task/HandleSingleTask";
import { Modal } from "@/components/generics/modal/Modal";
import HomeContext, { StateProps } from "@/context/HomeContext";

const typesHero: Status[] = [Status.Backlog, Status.InProgress, Status.Done];

const { Provider } = HomeContext;

export const HomeView = () => {
    const [dragging, setDragging] = useState<StateProps>({
        isDragging: false,
        taskId: null,
    });
    const { tasks, updateTask } = useTaskStore((state) => state);

    const handleDragging = (isDragging: boolean, taskId: string) => {
        setDragging((state) => ({ ...state, isDragging, taskId }));
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
        e.preventDefault();
        const _id = e.dataTransfer.getData("_id");
        const _status = e.dataTransfer.getData("_status");
        if (!_id || status === _status) return;

        updateTask(_id, { status, isLocked: status === Status.Done });
        handleDragging(false, _id);
    };

    return (
        <Provider value={{ dragging, handleDragging }}>
            <ViewWrapper title="Tasks">
                <div className="grid grid-cols-3 gap-3">
                    {typesHero.map((type, index) => (
                        <DropZone
                            key={`zone-${index}`}
                            status={type}
                            tasks={tasks.filter((s) => s.status === type)}
                            dragging={dragging}
                            handleDrop={handleDrop}
                        />
                    ))}
                </div>
            </ViewWrapper>
        </Provider>
    );
};
