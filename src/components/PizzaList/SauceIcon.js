const SauceIcon = (props) => {
  return (
    <img
      className="sauce-icon"
      src={require(`../../img/${props.sauce}`)}
      alt="sauce"
    />
  );
};

export default SauceIcon;
