import axiosClient from "@/libs/axioClient";

const drawRestaurants= async (options) => {
  try {
    const result = await axiosClient.post("/restaurant/draw", options);
    return result.data;
  } catch (error) {
    console.log("error api", error);
    return error;
  }
};


export {drawRestaurants};