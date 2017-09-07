import React from 'react';

class List extends React.Component{
    render(){
        const {value, onClick} = this.props; 
        return(
            <ul>
                <li className="list">{this.props.item}<button onClick={()=>onClick(value)} value={value} aria-label="delete" type="button" className="delete">Delete</button></li>
            </ul>
        )
    }
}
export default List;
