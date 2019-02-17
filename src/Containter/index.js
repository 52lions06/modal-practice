import React, { Component } from "react";
import PropTypes from "prop-types";
import { TriggerButton } from "../TriggerButton";
import { Modal } from "../Modal";

export default class Container extends Component {
  static propTypes = {
    triggerText: PropTypes.string,
    onSubmit: PropTypes.func
  };

  // this state is setting the condition to see or not see the modal
  state = {
    isShown: false
  };

  showModal = () => {
    // The setState can take a callback function, we can use that to focus on closeButton
    //(in the modal) as model becomes visible and toggle the scroll lock.
    this.setState({ isShown: true }, () => {
      // closeButton = buttonRef in Modal
      // this is how we FOCUS on the close button
      this.closeButton.focus();
    });

    this.toggleScrollLock(); // adds className
  };

  toggleScrollLock = () => {
    // grabs the entire page and toggles the "class / className" if true
    document.querySelector("html").classList.toggle("scroll-lock");
  };

  closeModal = () => {
    this.setState({ isShown: false });
    // this is how we FOCUS on the trigger button
    this.TriggerButton.focus();
    this.toggleScrollLock(); // should remove className
  };

  onKeyDown = event => {
    // this is to press the escape key break it down
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };

  onClickOutside = event => {
    // this is if we have the modal and it has a value then we close it
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  render() {
    return (
      <React.Fragment>
        <TriggerButton
          showModal={this.showModal}
          buttonRef={n => (this.TriggerButton = n)}
          triggerText={this.props.triggerText} // this is the text coming in
        />
        {this.state.isShown ? (
          <Modal
            onSubmit={this.props.onSubmit}
            modalRef={n => (this.modal = n)} // this is to open the modal
            buttonRef={n => (this.closeButton = n)} // this is the button to close the modal
            closeModal={this.closeModal} // this closes the modal
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
          />
        ) : null}
        {/* this.state == condition / if true / if false */}
      </React.Fragment>
    );
  }
}

// we need these containers since the background is a part of the
// entire component. It also includes the Modal.
// also being able to click outside of the modal to close it is important

// FOCUS: we need to have focus to close the modal + to reopen the triggerButton

/**
 * How Ref works:
 *
 * 1. What button or item do I need to referenced
 * 2. but a ref on that element
 * 3. name this ref ( ref = value => this.NAME_REF = value)
 */
