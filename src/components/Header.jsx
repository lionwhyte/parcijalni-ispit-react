import React from "react";
import PropTypes from "prop-types";

function Header(props) {
    const { avatar, name, bio, location } = props;

    return (
        <header>
            <img src={avatar} alt=""></img>
            <h1>{name}</h1>
            <p>
                <b>Bio:</b> {bio}
            </p>
            <p>
                <b>Location:</b> {location}
            </p>
            <p>
                <b>REPOSITORIES:</b>
            </p>
        </header>
    );
}

Header.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    location: PropTypes.string,
};

export default Header;
