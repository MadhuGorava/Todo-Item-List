// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoList, deleteUser} = props
  const {title, id} = todoList
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-container">
      <p className="item-title">{title}</p>
      <button type="button" onClick={onDelete} className="delete-button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
