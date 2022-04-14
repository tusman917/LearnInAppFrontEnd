import axios from "axios";

axios.defaults.baseURL = "http://localhost:9999";

export const getTransactions = async () => {
  return await axios({ method: "get", url: "/transactions" });
};

export const getCard = async (showInfo) => {
  return await axios({ method: "get", url: `/card-details?show-card-number=${showInfo}`,  });
};
