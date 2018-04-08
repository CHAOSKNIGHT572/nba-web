import React from 'react';
import logo from '../assets/images/nba-logoman-word-white.svg';

export class TopNavBar extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}