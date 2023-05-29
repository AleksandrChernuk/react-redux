import { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handlwKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlwKeyDown);
  }

  handlwKeyDown = (e) => {
    if (e.keydown === "Escape") {
      this.props.onClose();
    }
  };

  handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
      console.log(e.target);
    }
  };
  render() {
    return createPortal(
      <div className={s.backdrop} onClick={this.handleBackDropClick}>
        <div className={s.content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default ModalWindow;
