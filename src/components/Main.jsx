import React from "react";

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

export default Main;
