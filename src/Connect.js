import React, { Component } from 'react';


class Connect extends Component {



    initialState = {
        personAccount: "",
        personPassword: ""
    };



    state = this.initialState;


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    }

    submit = (event) => {
        const { personAccount, personPassword } = this.state;
        event.preventDefault();
        this.props.check(personAccount, personPassword);
        this.setState(this.initialState);
    }




    render() {
        return (
            <div className="form">
                        <form className="formConnect" onSubmit={this.submit} novalidate>
                            <h1 className="text-center mt-5">Connexion</h1>
                                <div>
                                    <img className="icon mt-3" src="https://www.iconfinder.com/data/icons/eldorado-user/40/user-512.png" alt="account" /><br />
                                    Account:<input type="text" placeholder="Nom.." name="personAccount" className="form-control" onChange={this.handleChange} value={this.state.personAccount} required /><br />
                                    Password:<input type="text" placeholder="Prenom.." name="personPassword" className="form-control" onChange={this.handleChange} value={this.state.personPassword} required /><br />
                                </div>
                                <input className="btn btn-success col" type="submit" value="Se connecter" />
                        </form>           
                    <button className="btn btn-light mt-1 col" onClick={this.props.addInscription}>Inscription</button>

            </div>
        )
    }
}

export default Connect;