import { BsChatLeftDots } from "react-icons/bs";
import { MdOutlineLabel } from "react-icons/md";
import { TbUsers } from "react-icons/tb";

type Props = {
    labels: number;
    comments: number;
    users: number;
};

export const ItemFooter = ({ labels, comments, users }: Props) => {
    return (
        <ul className="w-full border-t border-t-dz-gray mt-4 pt-4 flex items-center justify-start pb-2">
            <li className="flex items-center justify-center px-2">
                <MdOutlineLabel className="text-gray-400 text-[0.9rem]" />
                <span className="text-gray-500 text-[0.9rem] mx-2">
                    {labels}
                </span>
            </li>
            <li className="flex items-center justify-center px-2">
                <BsChatLeftDots className="text-gray-400 text-[0.9rem]" />
                <span className="text-gray-500 text-[0.9rem] mx-2">
                    {comments}
                </span>
            </li>
            <li className="flex items-center justify-center px-2">
                <TbUsers className="text-gray-400 text-[0.9rem]" />
                <span className="text-gray-500 text-[0.9rem] mx-2">
                    {users}
                </span>
            </li>
        </ul>
    );
};
