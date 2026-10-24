import React, { Component } from 'react'
import '../App.css'
import { Redirect } from 'react-router-dom'

export class Connexion extends Component {
  state = {
    pseudo : '',
    goToChat: false,
    
  }
  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.setState({ goToChat:true })
  }


  render() {
    if (this.state.goToChat) {
      return  <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }
    return (
      <div className="connexionBox" >
        <form 
        className="connexion" 
        onSubmit={this.handleSubmit} >
            <input 
              type="text" 
              placeholder="pseudo" 
              required 
              value={this.state.pseudo} 
              onChange={this.handleChange} />
            <button type="submit" >Go</button>
        </form>
        
      </div>
    )
  }
}

export default Connexion
