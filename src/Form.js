import React, {Component}from 'react';

class Form extends Component {
initialState = {
    tache:"",
    jour:""
};

state = this.initialState

handlechange = (event) =>{
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
    console.log(this.state)
}


submitForm = (event) =>{
    event.preventDefault()
    this.props.addTache(this.state.tache, this.state.jour)
    this.setState(this.initialState)

}

 render() {
     return (
         
           <form onSubmit = {this.submitForm}>
             Tache: <input  type="text" name="tache" onChange={this.handlechange} value={this.state.tache}/>
             Jour: <input  type="text" name="jour" onChange={this.handlechange} value={this.state.jour}/>
             <input className="ajouter" type="submit" value="Ajouter" />
            </form>
        
     );
 }
   
}
export default Form;