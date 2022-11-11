import { useState } from "react";
import { DropZone } from "@/components/drop-zones/DropZone";
import { Status } from "@/types/drop-zones";
import { ViewWrapper } from "@/wrapper/ViewWrapper";
import { useTaskStore } from "@/store/taskStore";

const typesHero: Status[] = [Status.Backlog, Status.InProgress, Status.Done];

export const HomeView = () => {
    const [isDragging, setIsDragging] = useState(false);
    const { tasks, updateTask } = useTaskStore((state) => state);

    const handleDragging = (dragging: boolean) => setIsDragging(dragging);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
        e.preventDefault();
        const _id = e.dataTransfer.getData("_id");
        const _status = e.dataTransfer.getData("_status");
        if (!_id || status === _status) return;
        
        updateTask(_id, status);
        handleDragging(false);
    };

    return (
        <ViewWrapper title="Tasks">
            <div className="grid grid-cols-3 gap-3">
                {typesHero.map((type, index) => (
                    <DropZone
                        key={`zone-${index}`}
                        status={type}
                        items={tasks.filter((s) => s.status === type)}
                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleDrop={handleDrop}
                    />
                ))}
            </div>
        </ViewWrapper>
    );
};
