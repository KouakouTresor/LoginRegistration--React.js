import React, { Component } from 'react';

class Form extends Component {
    initialState = {
        tache: "",
        jour: ""
    };

    state = this.initialState

    handlechange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }


    submitForm = (event) => {
        event.preventDefault()
        this.props.addTache(this.state.tache, this.state.jour)
        this.setState(this.initialState)

    }

    render() {
        return (
            <div className="form">
                <form className="formConnect " onSubmit={this.submitForm}>
                    <h1 className="text-center mt-5">La liste des tâches</h1>
                    <div>
                        Tache:<input type="text" placeholder="tache.." className="form-control mb-2" name="tache" onChange={this.handlechange} value={this.state.tache} required />
                            Jour:<input type="text" placeholder="date.." className="form-control mb-2" name="jour" onChange={this.handlechange} value={this.state.jour} required />
                    </div>

                    <input className="btn btn-success mt-1 col" type="submit" value="Ajouter" />
                </form>
            </div>
        );
    }

}
export default Form;