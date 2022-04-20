import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faExclamationCircle, faTrash} from '@fortawesome/fontawesome-free-solid'

import "./styles/popup.css"

export default class Popup extends Component {
  // after 2 seconds (animation)
  callOnClose(){
    setTimeout(() => {
      this.props.onClose()
    }, 2000);
  }

  getVariantIcon(){
    switch(this.props.variant){
      case "trash":
        return <FontAwesomeIcon icon={faTrash} />
      case "danger":
        return <FontAwesomeIcon  icon={faExclamationCircle} />
      case "warning":
        return <FontAwesomeIcon icon={faExclamationCircle} />
      default:
      case "success":
        return <FontAwesomeIcon icon={faCheck} />
    }
  }

  render() {
    if(this.props.show){
      if(this.props.animated && this.props.onClose){
        this.callOnClose()
      }

      return (
        <div className={`popupContainer ${this.props.variant?this.props.variant:"success"} ${this.props.size} ${this.props.animated ? "animated":null}`}>
          {this.getVariantIcon()}
        </div>
      )
    }

    return null
  }
}
