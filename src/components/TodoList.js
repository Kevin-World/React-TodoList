import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import ListItem from './ListItem';

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
  }

  handleBtnClick = () => {
    if (this.state.inputVal.length > 0)
      this.setState({
        list: [...this.state.list, this.state.inputVal],
        inputVal: ''
      })
  }

  handleInputChande = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }

  handleItemDelete = (index) => {
    var list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel-heading">
            <div className="input-group">
              <input
                className="form-control"
                value={this.state.inputVal}
                onChange={this.handleInputChande} />
              <span className="input-group-btn"><button
                className="btn btn-primary"
                onClick={this.handleBtnClick}>Add</button></span>
            </div></div>
          <div className="panel-body">
            <ListItem list={this.state.list} itemDelete={this.handleItemDelete} />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
