import React from "react";
import { navigate, Link } from "gatsby";
import "../../styles/components/homepage/HomepageProfile.scss";

export const HomepageProfile: React.FunctionComponent<any> = () => {
    return (
        <div className="homepage-profile"> 
            <div className="homepage-profile-photo-container">
                <div className="homepage-profile-photo">
                    <img className="homepage-profile-photo-img" src="/images/avatar_600.jpg" alt="Profile photo of Matthew Tinn" />
                </div>
            </div>
            <h1 className="homepage-profile-name">
                Matthew Jennifer Tinn
            </h1>
            <hr className="homepage-profile-hr" />
            <div className="homepage=profile-description">
                <p>Programmer specialising in web development and cloud technologies.</p>
                <p>Writer and Japanese popular culture critic.</p>
            </div>
            <hr className="homepage-profile-hr"/>
            <div className="homepage-profile-cta_container">
                <Link
                    to="/profile"
                >
                    <button className="homepage-profile-cta_button ">
                        Find Out More
                    </button>
                </Link>
            </div>
            <hr className="homepage-profile-hr"/>
            <div className="homepage-profile-social_icons">
                <a href="https://twitter.com/OnosumeKatsudou" target="_blank" className="homepage-profile-social_icons-icon">
                    <img src="/icons/twitter/Twitter_Social_Icon_Square_Color.png" alt="Twitter Icon" />
                </a>
                <a href="https://github.com/Onosume" target="_blank" className="homepage-profile-social_icons-icon">
                    <img src="icons/github/GitHub-Mark-Light-120px-plus.png" alt="GitHub Icon" />
                </a>
                <a href="https://www.linkedin.com/in/matthewtinn/" target="_blank" className="homepage-profile-social_icons-icon">
                    <img src="icons/linkedin/LI-In-Bug.png" alt="LinkedIn Icon" />
                </a>
            </div>
        </div>
    )
}