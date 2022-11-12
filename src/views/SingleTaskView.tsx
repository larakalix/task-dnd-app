type Props = {
    id: string;
};

export const SingleTaskView = ({ id }: Props) => {
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};
