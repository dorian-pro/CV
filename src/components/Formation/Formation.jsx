import React, {Component} from 'react';
import {FormationData} from "./FormationData.jsx";
import './Formation.css'

class Formation extends Component {
    render() {
        return (
            <>
                <div className="formation">
                    <h2>formation</h2>
                   <div className="container_formation">
                       <div className="container_list">
                           <div className="dotbar">
                               <div className="dot"></div>
                               <div className="dot"></div>
                           </div>
                       </div>
                       <ul>
                           {FormationData.map((item,index) => {
                               return(
                                   <>
                                       <li key={index}>
                                           <h3>{item.title}</h3>
                                           <span>{item.dateDebut} {item.iconDate} {item.dateFin}</span>

                                           <ul>
                                               {item.subList.map((item) => {
                                                   return(
                                                       <>
                                                           <li>{item}</li>
                                                       </>
                                                   )
                                               })}
                                           </ul>
                                       </li>
                                   </>
                               )
                           })}
                       </ul>
                   </div>
                </div>
            </>
        );
    }
}

export default Formation;