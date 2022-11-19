import Link from "next/link";
import React from "react";

export const Layout = () => {
    return (
        <div className="bg-t-dz-layout w-full flex items-center justify-between px-4 py-6">
            <Link href="/" passHref>
                <span className="font-bold">Team name</span>
            </Link>
            <div>Users</div>
        </div>
    );
};
