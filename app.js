const GroceryListItem = (props) => (

  <li>{props.food}</li>
);

const GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItem foods={['Pizza', 'Pinnapple', 'Ham']} />
  </div>
);


// const Chicken = () => (
//   <li>Chicken</li>
// );
// const Bread = () => (
//   <li>Bread</li>
// );

//Models
ReactDOM.render(<GroceryList />, document.querySelector("#app"))
