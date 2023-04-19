import React, {Component} from 'react';
import './competence.css'
import {CompetenceData} from "./CompetenceData.jsx";
class Competence extends Component {
    render() {
        return (
            <>
                <div className="competence">
                    <h2>compétences</h2>
                    <ul className="list_competence">
                        {CompetenceData.map((item, index) => {
                            return(
                                <li key={index}>
                                    <h3>{item.title}</h3>
                                    <ul>
                                        {item.subList.map((item, index) => {
                                            return (
                                                <li key={index}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>
        );
    }
}

export default Competence;