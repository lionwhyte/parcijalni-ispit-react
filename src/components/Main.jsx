import React from "react";
import PropTypes from "prop-types";

class Main extends React.Component {
    render() {
        return (
            <main>
                <ul>
                    {this.props.list.map((item, index) => {
                        return <li key={index}>{item.name}</li>;
                    })}
                </ul>
            </main>
        );
    }
}

Main.propTypes = {
    list: PropTypes.array,
};

export default Main;
