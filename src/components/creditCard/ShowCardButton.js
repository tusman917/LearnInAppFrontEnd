import classes from "./ShowCardButton.module.css";
const ShowCardButton = (props) => {
  return (
    <div className={classes}>
      <button style={{ borderRadius: '100px', marginBottom: '2.5rem', height: 35, paddingTop: 5 }} onClick={props.onClick}>SHOW CARD INFORMATION</button>
    </div>
  );
};

export default ShowCardButton;
