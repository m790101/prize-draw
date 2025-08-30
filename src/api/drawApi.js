import axiosClient from "@/libs/axioClient";

const setPrizeList = async (data) => {
  try {
    const result = await axiosClient.post("/prizes", data);
    return result.data;
  } catch (error) {
    console.log("error api", error);
    return error;
  }
};

const drawWinner = async (sessionData) => {
  try {
    const result = await axiosClient.post("/draw", sessionData);
    return result.data;
  } catch (error) {
    console.log("error api", error);
    return error;
  }
};

export { setPrizeList, drawWinner };
