const ShoppingItem = ({ id, name, isBought, onDelete, onComplete }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={isBought}
        onChange={() => {
          onComplete(id);
        }}
      />
      <span style={isBought ? { textDecoration: "line-through" } : {}}>
        {name}
      </span>
      <div className="delete-todo" onClick={onDelete}>
        Delete
      </div>
    </li>
  );
};

export default ShoppingItem;
