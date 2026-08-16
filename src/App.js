import React, { Component, createRef } from 'react'
import './App.css'

import Message from './components/Message'
import Formulaire from './components/Formulaire'

// Import BD firebase
import base from './base'

//Animation
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import './animation.css'

class App extends Component {
  state = {
    messages : {},
    pseudo : this.props.match.params.pseudo
  }
  messagesRef = createRef()

  componentDidUpdate(){
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  componentDidMount(){
    base.syncState('/',{
      context : this,
      state : 'messages'
    })
  }
  isUser = pseudo => pseudo === this.state.pseudo

  addMessage = message => {
    const messages = {...this.state.messages}
    messages[`numero-${Date.now()}`] = message

    // ne garde que les 10 derniers messages
    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null        
      });


    this.setState({ messages })

  }

  render () {
    const messages =Object
      .keys(this.state.messages)
      .map(key => (
        <CSSTransition 
          key = {key}
          timeout={2000}
          classNames='fade' >
            <Message           
            isUser={this.isUser}
            pseudo = {this.state.messages[key].pseudo}
            message={this.state.messages[key].message} />
        </CSSTransition>
      ))
    return (
      <div className='box' >
        <div>
          <div className="messages" ref={this.messagesRef}>
            <TransitionGroup className="message">
              {messages}
            </TransitionGroup>
          </div>
          <Formulaire
            length={140} 
            addMessage={this.addMessage} 
            pseudo={this.state.pseudo} />
        </div>
      </div>
    )
  }
}

export default App
