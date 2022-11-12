import { createContext } from "react";

export type StateProps = {
    isDragging: boolean;
    taskId: string | null;
};

export type ContextProps = {
    dragging: StateProps;
    handleDragging: (dragging: boolean, taskId: string) => void;
};

export const HomeContext = createContext({
    dragging: {
        isDragging: false,
        taskId: null,
    },
    handleDragging: (dragging: boolean) => {},
} as ContextProps);

export default HomeContext;
