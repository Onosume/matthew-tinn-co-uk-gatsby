import React from "react";
import "../../styles/components/navbar/NavMenuOverlay.scss";

export const NavMenuOverlay: React.FunctionComponent<any> = (props) => {
    return (
        <div className="navMenuOverlay" onClick={props.toggleNavMenu}></div>
    )
}