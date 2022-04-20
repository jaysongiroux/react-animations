import React, { Component } from 'react'
import InLinePopup from './InLinePopup'
import "./styles/modal.css"

export default class Modal extends Component {
  // after 2 seconds (animation)
  callOnClose(){
    setTimeout(() => {
      this.props.onClose()
    }, 2000);
  }

  render() {
    if(this.props.show){
      this.callOnClose()
      return (
        <>
          <div className="modal">
            <div className="screenModalContainer">
              <div className="modalContainer">
                <InLinePopup 
                  animated={true} 
                  show={this.props.show} 
                  size="large" 
                  variant={this.props.variant}
                />
                {this.props.message &&
                  <div className="content">
                    {this.props.message}
                  </div>
                }
              </div>
            </div>
          </div>
          {this.props.backdrop &&
            <div className="overlayContainer" />
          }
        </>
      )
    }
    return null
  }
}
