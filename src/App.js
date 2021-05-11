import React from 'react'
import {ChatEngine} from 'react-chat-engine'

import {ChatFeed} from './components/ChatFeed.jsx'

import './App.css'
import { Login } from './components/Login.jsx'

export const App = () => {

  if(!localStorage.getItem('username')) return <Login/>
  return (
    <ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='4753bdfe-41bc-4b4c-bf41-8e9755b69e72'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
  )
}

