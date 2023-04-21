import React, {Component} from 'react';
import {CoordonneData} from "./CoordonneData.jsx";
import './coordonne.css'
class Coordonne extends Component {
    render() {
        return (
            <>
                <div className="coordonne">
                    <h2>coordonnées</h2>
                    <div className="infos">
                        {CoordonneData.map((item, index) => {
                            return (
                                    <div className={item.class} key={index}>
                                        <a href={item.href} target="_blank"><span>{item.icon}</span> {item.info}</a>
                                    </div>
                            )
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default Coordonne;