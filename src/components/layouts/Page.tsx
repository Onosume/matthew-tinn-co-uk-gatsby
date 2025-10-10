import React from "react";
import "../../styles/components/layouts/Page.scss";
import { Navbar } from "../navbar/Navbar";

export const Page: React.FunctionComponent<any> = ({ children }) => {
    return (
        <div className="page">
            <Navbar></Navbar>
            <main>
                {children}
            </main>
        </div>
    )
}