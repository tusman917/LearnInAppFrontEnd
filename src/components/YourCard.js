import CardHolder from "./creditCard/CardHolder";
import classes from "./YourCard.module.css";
import Card from "./UI/Card";

const YourCard = ({ card, getCardDetails }) => {
  return (
    <section className={classes["your-card"]}>
      <Card>
        <div className={classes.title}>
          <h2>Your Card</h2>
          <p>
            Use this card to pay to for programs in your plan. Purchases will be
            visible by your manager.
          </p>
        </div>
        <CardHolder card={card} getCardDetails={getCardDetails}/>
      </Card>
    </section>
  );
};

export default YourCard;
