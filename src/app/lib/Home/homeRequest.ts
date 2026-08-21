import { baseApiReq } from "../core/baseApiReq";

export const getHomeCommentApi = async () => {
  try {
    const res = await baseApiReq.get(`/comments`, {
      params: { _limit: 2 },
      timeout: 6000,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHomeBlockCards = async () => {
  try {
    const res = await baseApiReq.get("/posts", {
      params: { _limit: 6 },
      timeout: 6000,
    });
    return res;
  } catch (error) {
    console.log("Error fetching all users:", error);
  }
};

// export const getHomeOurLawyers = async () => {
//   try {
//     const res = await baseApiReq.get("/users", {
//       params: { _limit: 4 },
//       timeout: 6000,
//     });
//     return res.data;
//   } catch (error) {
//     console.log("Error fetching all users:", error);
//   }
// };
