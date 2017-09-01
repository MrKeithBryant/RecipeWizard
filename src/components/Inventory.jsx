import React from 'react';
import ToDo from './ToDo.js';
import '../styles/App.css'

export default class Inventory extends React.Component{
    render (){
        return(
            <div>
            <div className="all">
                <div className="category">
                    <h2 className="meat">Meats</h2>
                    <ToDo category="meat"/>
                </div>

                <div className="category">
                    <h2 className="veggie">Veggies</h2>
                    <ToDo category="veggie"/>
                </div>

                <div className="category">
                    <h2 className="spice">Spices</h2>
                    <ToDo category="spice"/>
                </div>

                <div className="category">
                    <h2 className="fruit">Fruits</h2>
                    <ToDo category="fruit"/>
                </div>
                
                <div className="category">
                    <h2 className="dairy">Dairy</h2>
                    <ToDo category="dairy"/>
                </div>
                </div>
                     <button className="rbut" type="submit">Recipe Wizard</button>
                </div>
        )
    }
}