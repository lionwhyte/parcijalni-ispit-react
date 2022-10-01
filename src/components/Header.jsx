import React from "react";

export default function Header(props) {
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
