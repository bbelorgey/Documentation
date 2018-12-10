import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAction } from '../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textItem:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.textItem);
//  reset du state puis du imput
    this.setState({textItem:''});
  }
  handleChange(event){
    const input = event.target;
    const {name, value} = input;
    this.setState({[name]:value})
  }
  render() {
    const {textItem} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="textItem" 
          value={textItem} 
          onChange={this.handleChange}
        />
        <button type="submit" >ENVOYER</button>
      </form>
    )
  }

}
// dispatch action to props des actions dans actions/index.js
const mapDispatchToProps = dispatch => {
  return {
    addTodo: textItem => dispatch(addAction(textItem))
  }
};
export default connect(null, mapDispatchToProps)(AddTodo);