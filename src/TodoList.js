import React, { Component } from 'react';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        'Kevin',
        'Tony',
        'Jacky'
      ],
      inputVal: ''
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChande = this.handleInputChande.bind(this);
    this.handleRefClick = this.handleRefClick.bind(this);
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
  }

  handleInputChande(e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  handItemClick(index) {
    console.log(index);
    var list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  handleRefClick() {
    this.refs.myTextInput.focus();
  }

  render() {
    return (
      <div>
        <input value={this.state.inputVal} onChange={this.handleInputChande} />
        <button onClick={this.handleBtnClick}>Add</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={this.handItemClick.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
