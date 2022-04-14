import CreditCard from "./CreditCard";
import classes from "./CardHolder.module.css";
const CardHolder = ({ card, getCardDetails }) => {
  return (
    <section className={classes.row}>
      <CreditCard
        card={card}
        className={classes.column}
        getCardDetails={getCardDetails}
      />
      <div className={`${classes.cardholder} ${classes.column}`}>
        <div>
          <p>CARD HOLDER</p>
          <h2>
            {card?.holder?.firstName} {card?.holder?.lastName}
          </h2>
        </div>
        <div>
          <p>BILLING ADDRESS</p>
          <h2>
            {card?.holder?.address.billing.line1}
            <br></br>
            {card?.holder?.address.billing.city},{" "}
            {card?.holder?.address.billing.state}{" "}
            {card?.holder?.address.billing.zipcode}
          </h2>
        </div>
      </div>
    </section>
  );
};
export default CardHolder;
