import axios from "axios";

axios.defaults.baseURL = "https://learnin-app.herokuapp.com/";

export const getTransactions = async () => {
  return await axios({ method: "get", url: "/transactions" });
};

export const getCard = async (showInfo) => {
  return await axios({ method: "get", url: `/card-details?show-card-number=${showInfo}`,  });
};
