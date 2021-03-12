import React, { Component } from 'react';

class Inscription extends Component {
    initialState = {
        nom: "",
        password: "",
        confirmPassword: ""

    };


    state = this.initialState;


    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });

    }



    handleSubmit = event => {
        event.preventDefault();
        if (this.state.password === this.state.confirmPassword) {
            const user = { account: this.state.nom, password: this.state.password, tasks: [] }
            this.props.addAccount(user);
            alert('inscription valide')

        } else {
            alert('foutue !!!')
        }

    }



    render() {
        return (
            <div>
                <form className="formInscription mt-5" onSubmit={this.handleSubmit} novalidate>
                    <legend className="inscription">Formulaire de Souscription</legend>
                        Nom: <input className="inscrInput" type="text" name="nom" value={this.state.nom} onChange={this.handleChange} /><br />
                        Password: <input className="inscrInput" type="text" name="password" value={this.state.password} onChange={this.handleChange} /><br />
                    {/*  Date de Naissance: <input  className="inscrInput"   type="text" name="nom" value={this.state.date} onChange={this.handleChange}/><br/>
                        Ville: <input type="text"   className="inscrInput"  name="nom" value={this.state.ville}  onChange={this.handleChange}/>   */}
                        confirmPassword: <input className="inscrInput" type="text" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} /><br />
                    <input type="submit" />
                </form>
            </div>

        )
    }
}

export default Inscription;