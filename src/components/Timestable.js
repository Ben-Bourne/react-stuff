import React, { Component } from 'react';
import '../App.css';

class Timestable extends Component {
    
    render() {
        let table = [];
        for (let i = 1; i <= 12; i++) {
            let row = [];
            for(let j = 1; j <= 12; ++j){
                row.push(<a>{i * j} </a>);
            }
            table.push(row);
            table.push(<br/>);
        }
        return (
            <div>
                <h1>Timestable</h1>
                {table}
            </div>
        );
    }
}

export default Timestable;