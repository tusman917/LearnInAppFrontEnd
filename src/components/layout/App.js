import YourCard from "../YourCard";
import { DataTable } from "../table/DataTable";
import { useEffect, useState } from "react";
import { getCard, getTransactions } from "../../services";
import moment from "moment";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [card, setCard] = useState({});
  const [isReady, setIsReady] = useState(false);

  const getTransactionData = async () => {
    try {
      const { data } = await getTransactions();
      var reduced = data.reduce(function (filtered, option) {
        let output
        if ('date' in option) {
          output = { ...option, date: moment(option.date).format('l')}
        }
        if ('amount' in option) {
          output = { ...option, ...output, amount: (option.amount).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        }
        filtered.push(output);
        return filtered;
      }, []);

      setTransactions(reduced);
    } catch (error) {
      setIsReady(true);
      setTransactions([])
    }
  };

  const getCardDetails = async (showInfo) => {
    try {
      const response = await getCard(showInfo);
      setCard(response.data)
      setIsReady(true);
    } catch (error) {
      setIsReady(true);
      setCard({})
    }
  };

  useEffect(() => {
    getTransactionData();
    getCardDetails("false");
  }, []);
  
  return (
    <div>
      <YourCard card={card} getCardDetails={getCardDetails}/>
      {isReady && (
        <DataTable tableData={transactions} title="Transactions"/>
      )}
    </div>
  );
}

export default App;
