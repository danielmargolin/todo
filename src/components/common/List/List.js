const List = ({ items, component: Component, onChange }) => {
  const onDelete = (id) => {
    onChange(items.filter((item) => item.id !== id));
  };

  return (
    <ul>
      {items.map((item) => (
        <Component
          key={item.id}
          onDelete={onDelete}
          {...item}
        />
      ))}
    </ul>
  );
};

export default List;
