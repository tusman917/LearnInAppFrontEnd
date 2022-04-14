import { useState } from "react";
import classes from "./CreditCard.module.css";
import ShowCardButton from "./ShowCardButton";

const CreditCard = ({ card, getCardDetails }) => {
  const [showCardNumber, setShowCardNumber] = useState(false);

  const showCardNumberHandler = () => {
    getCardDetails("true")
    setShowCardNumber(true);
  };

  return (
    <div>
      <div className={classes.card}>
        <div className={classes["card-title"]}>REMAINING BALANCE</div>
        <div className={classes.amount}>{(card?.balance || 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
        <div className={classes["card-number"]}>
          {card?.cardNumber}
        </div>
        {!showCardNumber ? (
          <ShowCardButton onClick={showCardNumberHandler} />
        ) : (
          <div className={classes.cvv}>CVV: 123 EXP: 12/24</div>
        )}
      </div>
      <p className={classes["card-issue"]}>
        Program doesn’t accept cards? We can help. <a href="#">Contact us.</a>
      </p>
    </div>
  );
};

export default CreditCard;
