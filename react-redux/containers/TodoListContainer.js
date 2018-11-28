import React from 'react'
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const TodoListContainer = ({items}) => (
  <TodoList items={items} />
)
const mapStateToProps = state => {
  return {
    items: state 
  }
}

export default connect(mapStateToProps) (TodoListContainer);