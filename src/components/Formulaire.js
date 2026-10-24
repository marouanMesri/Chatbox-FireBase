import React, { Component } from 'react'

export class Formulaire extends Component {
    state = {
        message : '',
        length: this.props.length
    }
    // Soumet le formulaire
    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }
    //change le state de ce que l'on ecris
    //Compte le nombre de caractere ecris
    handleChange = event => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({message, length})
    }
    // creer le message a partir du state global 
    createMessage = () => {
        const {addMessage, pseudo, length} = this.props

        const message = {
            pseudo,
            message : this.state.message
        }
        addMessage(message)
        //Reset
        this.setState({message:'', length:length})
    }
    handleKeyUp = event => {
        if(event.key === 'Enter'){
            this.createMessage()
        }
    }

  render() {
    return (
      <form  
      className="form" 
      onSubmit={this.handleSubmit} >
          <textarea 
          required
          maxLength={this.props.length}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          value={this.state.message}
          />
          <div className="info">{this.state.lenth}</div>
          <button type='submit' >Envoyer</button>
      </form>
    )
  }
}

export default Formulaire
