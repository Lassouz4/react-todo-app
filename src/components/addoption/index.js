import React, { Component } from "react";
import Options from "../options/";
import "./addoption.css";

class AddOption extends Component {
  state = {
    list: ["Clean", "Work"]
  };

  saveOption = event => {
    event.preventDefault();
    let text = event.target.elements.text.value;

    if (text) {
      this.setState({ list: [...this.state.list, text] });
    }
    event.target.elements.text.value = "";
  };

  removeAll = () => {
    this.setState({ list: [] });
  };

  remover = item => {
    const lista = [...this.state.list];
    const index = lista.indexOf(item);

    if (index !== -1) {
      lista.splice(index, 1);
      this.setState({ list: lista });
    }
  };

  render() {
    const { list } = this.state;
    return (
      <div className="add-option">
        <h3 className="menu h3">
          Your options :
          <button onClick={this.removeAll} className="remove-all">
            Remove all
          </button>
        </h3>

        <Options list={list} onClick={this.remover} />

        <form className="form-add-option" onSubmit={this.saveOption}>
          <input
            className="input"
            type="text"
            name="text"
            placeholder="Type your option"
          />
          <button className="button" type="submit">
            Add Option
          </button>
        </form>
      </div>
    );
  }
}

export default AddOption;
