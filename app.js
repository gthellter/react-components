const { useState } = React;

const GroceryListItem = (props) => {
  const [isOver, setIsOver] = useState(false);

  //change style of onHover
  const style = {
    fontWeight: isOver ? 'bold' : 'normal'
  };
  return (
  <li style={style} onMouseOver={() => setIsOver(!isOver)}>
    {props.food}
  </li>
  );
};



const GroceryList = (props) => (
    <ul>
      {props.foods.map((food) => (
        <GroceryListItem food={food} />
        ))}
    </ul>
);

const MyList = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList foods={['Pizza', 'Pinnapple', 'Ham']} />
  </div>
);

//Models
ReactDOM.render(<MyList />, document.getElementById("app"));
