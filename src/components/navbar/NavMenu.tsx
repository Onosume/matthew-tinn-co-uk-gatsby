import React from "react";
import { Link } from "gatsby"
import "../../styles/components/navbar/NavMenu.scss";

export const NavMenu: React.FunctionComponent<any> = (props) => {
    const navMenuVisibleStyle: React.CSSProperties = {
        transform: "translateX(0)"
    };

    const navMenuHiddenStyle: React.CSSProperties = {
        transform: "translateX(-100%)"
    };
    
    return (
        <div className="navmenu" style={props.navMenuVisible == true ? navMenuVisibleStyle : navMenuHiddenStyle}>
            <div className="navmenu-links">
                <div className="navmenu-links-link_container">
                    <Link to="/">
                        <div className="navmenu-links-link">
                            Home
                        </div>
                    </Link>

                </div>
                <div className="navmenu-links-link_container">
                    <a className="navmenu-links-link" href="https://me.matthewtinn.co.uk" target="_blank">Social Microsite</a>
                </div>
            </div>
        </div>
    )
}