import React, {Component} from 'react';


class Connect extends Component{

 

    initialState = {
                personAccount:"",
                personPassword:""
                };
              
    

    state = this.initialState;


    handleChange = (event) => {
        const{name, value} = event.target;
        this.setState({
            [name]:value
        });
       
    }

    submit = (event) => {
        const {personAccount, personPassword} = this.state;
        event.preventDefault();
        this.props.check(personAccount, personPassword);
        this.setState(this.initialState);
    }




    render() {
            return(
                <div className="form">
                    <form className = "formConnect" onSubmit= {this.submit}>
                        <h2>Formulaire</h2>
                        <fieldset className="connectSub">
                                <legend>Contact</legend>
                                <div className="nom">
                                <img className="icon" src="https://www.iconfinder.com/data/icons/eldorado-user/40/user-512.png" alt="account"/><br/>

                                    Account:<input type="text" placeholder="Nom.." name="personAccount"  onChange = {this.handleChange}  value={this.state.personAccount} required/> <br/>
                                    Password:<input type="text" placeholder="Prenom.." name="personPassword" onChange = {this.handleChange}  value = {this.state.personPassword}required/><br/>
           
                                    
                                </div>
                                

                               
                                <input className="connect" type="submit" value="Se connecter" />
                        </fieldset>

                        
                    </form>
                    <button onClick={this.props.addInscription}>Inscription</button>
                    
                </div>
            )
        }
}

export default Connect; 