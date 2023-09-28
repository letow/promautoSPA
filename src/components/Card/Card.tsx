import "./Card.scss";
import Email from "./../../img/email.svg";
import Website from "./../../img/web.svg";
import Phone from "./../../img/phone.svg";
import Street from "./../../img/street.svg";
import Suite from "./../../img/suite.svg";
import City from "./../../img/city.svg";
import Zipcode from "./../../img/zip.svg";
import NameCompany from "./../../img/company.svg";
import CatchPhrase from "./../../img/catch.svg";
import BS from "./../../img/bs.svg";
import { FC, useEffect, useState } from "react";
import { User } from "src/types/User";

interface ICardProps {
    user: User;
    activeCard: (open: boolean) => void;
}

const Card: FC<ICardProps> = ({ user, activeCard }) => {
    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        setOpen((prev) => !prev);
    };

    const avatarLetters = () => {
        if (!user.name) return;

        const nameArr = user.name.split(" ");
        return nameArr[0][0] + nameArr[1][0];
    };

    useEffect(() => {
        activeCard(open);
    }, [open]);

    return (
        <>
            <div className={`card ${open ? "zindex5" : ""}`} onClick={clickHandler}>
                <div className="card-header">
                    <div className="avatar">{avatarLetters() || "AB"}</div>
                    <div className="names">
                        <span className="name">{user.name || `{email}`}</span>
                        <span className="username">{user.username || `{email}`}</span>
                    </div>
                </div>
                <div className="card-info">
                    <div className="email info-item">
                        <div className="svg-container">
                            <Email />
                        </div>
                        <span className="email-text">
                            email: {user.email || `{email}`}
                        </span>
                    </div>
                    <div className="website info-item">
                        <div className="svg-container">
                            <Website />
                        </div>
                        <span className="website-text">
                            website: {user.website || `{email}`}
                        </span>
                    </div>
                    <div className="phone info-item">
                        <div className="svg-container">
                            <Phone />
                        </div>
                        <span className="phone-text">
                            phone: {user.phone || `{email}`}
                        </span>
                    </div>
                    <div className={`full-info ${open ? "" : "collapsed"}`}>
                        <div className="street info-item">
                            <div className="svg-container">
                                <Street />
                            </div>
                            <span className="street-text">
                                street: {user.street || `{email}`}
                            </span>
                        </div>
                        <div className="suite info-item">
                            <div className="svg-container">
                                <Suite />
                            </div>
                            <span className="suite-text">
                                suite: {user.suite || `{email}`}
                            </span>
                        </div>
                        <div className="city info-item">
                            <div className="svg-container">
                                <City />
                            </div>
                            <span className="city-text">
                                city: {user.city || `{email}`}
                            </span>
                        </div>
                        <div className="zipcode info-item">
                            <div className="svg-container">
                                <Zipcode />
                            </div>
                            <span className="zipcode-text">
                                zipcode: {user.zipcode || `{email}`}
                            </span>
                        </div>
                        <div className="namecompany info-item">
                            <div className="svg-container">
                                <NameCompany />
                            </div>
                            <span className="namecompany-text">
                                name company: {user.companyName || `{email}`}
                            </span>
                        </div>
                        <div className="catch-phrase info-item">
                            <div className="svg-container">
                                <CatchPhrase />
                            </div>
                            <span className="catch-phrase-text">
                                catchPhrase: {user.catchPhrase || `{email}`}
                            </span>
                        </div>
                        <div className="bs info-item">
                            <div className="svg-container">
                                <BS />
                            </div>
                            <span className="bs-text">bs: {user.bs || `{email}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
