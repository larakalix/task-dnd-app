import { createContext } from "react";

type ContextProps = {
    isDragging: boolean;
    handleDragging: (dragging: boolean) => void;
};

export const HomeContext = createContext({
    isDragging: false,
    handleDragging: (dragging: boolean) => {},
} as ContextProps);

export default HomeContext;
