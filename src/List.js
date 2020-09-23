import React, {Component} from 'react';

class List extends Component {
    handleCheck = event => {
        this.props.checkTache(parseInt(event.target.getAttribute("data-index")));
    };

    render() {

        return (
            <ul>
                    {this.props.taches.map((tache, i) => {
                        return (
                            
                            <li key={i}> 
                                <input   onChange={this.handleCheck} checked={tache.checked} data-index={i} type="checkbox" />
                                <span>{tache.jour}</span>
                                <span>{tache.tache}</span>
                            </li>
                        );     
                    } ) }
            </ul>)

    }
}
export default List;
