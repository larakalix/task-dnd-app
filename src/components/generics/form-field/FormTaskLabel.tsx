import { ITask, ITaskLabel } from "@/types/task";
import clsx from "clsx";

type Props = {
    checked: boolean;
    label: ITaskLabel;
    handleLabelChange: (id: string) => void;
};

export const FormTaskLabel = ({ checked, label, handleLabelChange }: Props) => {
    const buttonStyles = clsx({
        [`${label.color} border border-white rounded-md text-white text-[0.8rem] px-3 py-[2px]`]:
            checked,
        ["bg-white border border-input-border text-t-dz-black"]: !checked,
    });

    return (
        <button
            type="button"
            className={`${buttonStyles} rounded-md text-[0.8rem] px-3 py-[2px]`}
            onClick={() => handleLabelChange(label.id)}
        >
            {label.title}
        </button>
    );
};
