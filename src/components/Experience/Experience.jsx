import React, {Component} from 'react';
import {ExperienceData} from "./ExperienceData.jsx";
import './Experience.css'
class Experience extends Component {
    render() {
        return (
            <>
                <div className="experience">
                    <h2>experience</h2>
                    <div className="container_list">
                        <div className="dotbar">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                        <ul className="list_experience">

                            {ExperienceData.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <h3>{item.title}</h3>
                                        <span>{item.dateDebut} {item.iconDate} {item.dateFin}</span>

                                        <ul>
                                            {item.subList.map((item, index) => {
                                                return(
                                                    <li key={index}>
                                                        {item}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default Experience;