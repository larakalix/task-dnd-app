import { ITask } from "@/types/task";
import Image from "next/image";

type Props = {
    task: ITask;
};

export const SingleTaskInfo = ({ task }: Props) => {
    return (
        <div className="w-full mt-8">
            <div className="w-full rounded-md shadow-sm bg-t-dz-layout mb-2 px-3 py-2">
                {task.comments.length === 0 && (
                    <p className="text-gray-500 text-sm flex items-center justify-center min-h-[6rem]">
                        No comments yet
                    </p>
                )}
                {task.comments.map((comment) => (
                    <div key={comment.id} className="w-full">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Image
                                        className="rounded-full"
                                        src={`https://api.multiavatar.com/${comment.user}.png`}
                                        width={40}
                                        height={40}
                                        alt={comment.id}
                                    />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        {comment.user}
                                    </p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime="2020-01-07">
                                            {comment.date}
                                        </time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                            <p>{comment.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
