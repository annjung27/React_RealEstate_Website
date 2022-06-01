import React from 'react'
import './AgentSection.css'
import { Button } from './Button'

function Agent() {
  return (
    <div className='agent-container'>
      <div className='agent-img-wrapper'>
        <img src='images/agent_1.jpg' className='agent-img' alt='agent-img'/>
      </div>
      <div className='agent-info'>
        <h2 className='name'>ALEX MILLER</h2>
        <p className='title'>BAY AREA TOP REAL ESTATE AGENT </p>
        <p className='detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut pharetra iaculis mauris quis congue. Vestibulum imperdiet placerat maximus. Duis molestie ut erat et aliquet. Mauris sit amet justo vitae enim laoreet mollis nec ut mi. Cras mattis leo sed blandit convallis. Ut eleifend eleifend cursus.  
        </p>
        <Button
        path='/services'
        className='btn'
        buttonStyle='btn--outline'
        buttonSize ='btn--medium'
        >LEARN MORE</Button>
      </div>        
        
    </div>
  )
}

export default Agent