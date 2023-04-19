import React, {Component} from 'react';
import './header.css'
class Header extends Component {
    render() {
        return (
            <>
                <div className="block_name">
                    <span>Dorian Maréchal</span>
                    <h1>formation développeur full stack</h1>
                </div>
            </>
        );
    }
}

export default Header;