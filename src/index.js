import React from 'react';

export default class MainView extends React.Component {
    render() {
        return(
            <div>
                Hello World
            </div>
        );
    }
}

React.render(
    React.createElement(MainView),
    document.getElementById('app')
);