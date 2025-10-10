import React, {useState} from "react";
import { useStaticQuery, graphql, Link } from "gatsby"
import "../../styles/components/navbar/Navbar.scss";
import { NavMenu } from "./NavMenu";
import { NavMenuOverlay } from "./NavMenuOverlay";

export const Navbar: React.FunctionComponent<any> = () => {
    const data = useStaticQuery(graphql`
        query NavbarSiteDataQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const [navMenuVisible, setNavMenuVisible] = useState(false);

    const toggleNavMenu = () => {
        if (navMenuVisible == false) {
            setNavMenuVisible(true);
        }
        else if (navMenuVisible == true) {
            setNavMenuVisible(false);
        }
    }

    return (
        <div className="navbar">
            <div className="navbar-hamburger_icon_container" onClick={toggleNavMenu}>
                <img className={navMenuVisible == false ? "navbar-hamburger_icon_container-icon_displayed" : "navbar-hamburger_icon_container-icon_not_displayed"} src="/icons/menu_white_48dp.svg" alt="Menu" />
                <img className={navMenuVisible == true ? "navbar-hamburger_icon_container-icon_displayed" : "navbar-hamburger_icon_container-icon_not_displayed"} src="/icons/close_white_48dp.svg" alt="Menu" />
            </div>
            <div className="navbar-title">
                
                <Link to="/">
                    <img src="/images/onosume.jpg" alt="Onosume Logo" />
                    <span>MJT</span>
                </Link>
            </div>
            <NavMenu
                navMenuVisible={navMenuVisible}
            />
            {navMenuVisible == true &&
                <NavMenuOverlay
                    toggleNavMenu={toggleNavMenu}
                />
            }
        </div>
    )
}