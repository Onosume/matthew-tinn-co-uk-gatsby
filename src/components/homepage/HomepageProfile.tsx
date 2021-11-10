import React from "react";
import { navigate } from "gatsby";
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
                Matthew Tinn
            </h1>
            <hr className="homepage-profile-hr" />
            <div className="homepage=profile-description">
                <p>Programmer specialising in web development and cloud technologies.</p>
                <p>Writer and Japanese popular culture critic.</p>
            </div>
            <hr className="homepage-profile-hr"/>
            <div className="homepage-profile-cta_container">
                <button>
                    Find Out More
                </button>
            </div>
            <hr className="homepage-profile-hr"/>
            <div className="homepage-profile-social_icons">
                <div className="homepage-profile-social_icons-icon">
                    <img src="/icons/twitter/Twitter_Social_Icon_Square_Color.png" alt="Twitter Icon" />
                </div>
                <div className="homepage-profile-social_icons-icon">
                    <img src="icons/github/GitHub-Mark-Light-120px-plus.png" alt="GitHub Icon" />
                </div>
                <div className="homepage-profile-social_icons-icon">
                    <img src="icons/linkedin/LI-In-Bug.png" alt="LinkedIn Icon" />
                </div>
            </div>
        </div>
    )
}