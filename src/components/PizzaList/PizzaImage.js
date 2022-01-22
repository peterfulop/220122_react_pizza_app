const PizzaImage = (props) => {
  return (
    <img
      className="pizza-icon"
      src={require(`../../img/${props.image}`)}
      alt={props.name}
      title={props.name}
    />
  );
};

export default PizzaImage;
