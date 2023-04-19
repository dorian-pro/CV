import React, {Component} from 'react';
import {LoisirData} from "./LoisirData.jsx";
import './Loisir.css'
class Loisir extends Component {
    render() {
        return (
            <>
                <div className="loisir">
                    <h2>Loisir</h2>

                    <ul className="list_loisir">
                        {LoisirData.map((item, index) => {
                            return(
                                <li key={index}><span>{item.name}</span></li>
                            )
                        })}
                    </ul>
                </div>
            </>
        );
    }
}

export default Loisir;