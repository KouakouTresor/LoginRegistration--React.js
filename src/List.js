import React, {Component} from 'react';

class List extends Component {
    handleCheck = event => {
        this.props.checkTache(parseInt(event.target.getAttribute("data-index")));
    };

    render() {

        return (
            <ul className="list-group col-3 mt-3 mb-3">
                    {this.props.taches.map((tache, i) => {
                        return (
                            
                            <li className="list-group-item" key={i}> 
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
