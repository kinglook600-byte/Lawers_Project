import {create} from "zustand"
import { baseApiReq } from "../../lib/core/baseApiReq";


export const useUserStore = create(() => ({
  getHomeOurLawyers: async () => {
    try {
      const res = await baseApiReq.get("/users", {
      params: { _limit: 4 },
      timeout: 6000,
    });
      return res.data;
    } catch (error) {
      console.log("Error fetching all users:", error);
    }
  }
}))