import React, { Component } from 'react';
import Connect from './Connect';
import Form from './Form';
import List from './List'
import Disconnect from './Disconnect'
import Inscription from './Inscription';
class App extends Component {
  initialState = {
    persons: [
      {
        account: "Tresor",
        password: "bbb",
        tasks: []

      },

    ],

    userChecked: {},
    isInscriptionFormDisplayed: false,
    userTasksConnected: [],
  }


  state = this.initialState

  handleCheck = (account, password) => {
    const user = this.state.persons.find((user) => user.account === account && user.password === password);
    this.setState({ userChecked: user === undefined ? {} : user },)

  }

  addTache = (tache, jour) => {
    this.setState({
      userTasksConnected: [...this.state.userTasksConnected, { tache: tache, jour: jour, checked: false }
      ],

    })
  }

  handleDisconnect = () => {
    this.setState({
      userChecked: {}
    })
  }


  addInscription = () => {
    this.setState({ isInscriptionFormDisplayed: true })
  }

  removeTache = () => {

    if (window.confirm("Supprimer la tache?")) {

      this.setState({ userTasksConnected: this.state.userTasksConnected.filter(tache => !tache.checked) });
    }


  }

  removeAllTaches = () => {
    if (window.confirm("Tout supprimer?")) {
      this.setState({ userTasksConnected: [] },);
    }
  }



  checkTache = (index) => {
    this.setState({
      userTasksConnected: this.state.userTasksConnected.map((tache, i) => {
        if (index === i) {
          tache.checked = !tache.checked
        }
        return tache
      })
    })
  }


  removeUser = (account) => {
    const { persons, userChecked } = this.state
    this.setState({ userChecked: {}, persons: persons.filter(user => user.account !== userChecked.account) })
  }

  addAccount = user => {
    const newAccount = this.state.persons.find(element => user.account === element.account);
    if (newAccount === undefined) {
      this.setState({ persons: [...this.state.persons, user] }, this.userChecked)
    } else {
      alert("user déjà existant")
    }

  }

  render() {

    return (
      <div className="container-fluid">

        {
          this.state.userChecked.account !== undefined ?
            <div>
              <div className="row justify-content-center">
                <Form addTache={this.addTache} newstate={this.state.persons} />
              </div>
              <div className="row justify-content-center">
                <List taches={this.state.userTasksConnected} checkTache={this.checkTache} />
              </div>
              <div className="row justify-content-center">
                <button className="btn btn-danger col-1 mr-1 " onClick={this.removeTache}>Supprimer les tâches accomplies</button>
                <button className="btn btn-warning col-1 mr-1" onClick={this.removeAllTaches}>Supprimer toutes les tâches</button>
                <button className="btn btn-info col-1 " onClick={this.removeUser}>Remove User</button>
              </div>
              <div className="">
                <Disconnect className="row justify-content-center" disconnect={this.handleDisconnect} />
              </div>
            </div>
            :
            <div className="row justify-content-center">
              {this.state.isInscriptionFormDisplayed === true ? <Inscription addAccount={this.addAccount} /> : <Connect addInscription={this.addInscription} check={this.handleCheck} />}
            </div>
        }
      </div>
    )
  }

}

export default App;

