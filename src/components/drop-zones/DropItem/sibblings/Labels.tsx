import { ITaskLabel } from "@/types/task";

type Props = {
    labels: ITaskLabel[];
};

export const Labels = ({ labels }: Props) => {
    return (
        <div className="w-full flex justify-items-start space-x-3 my-4">
            {labels.map(({ id, color }) => (
                <span
                    key={id}
                    className={`${color} w-6 h-[0.4rem] rounded-md`}
                ></span>
            ))}
        </div>
    );
};
