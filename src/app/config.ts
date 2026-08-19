const rawString = import.meta.env.VITE_API_ALL || "";


const values = rawString.split(",");


export const API_Lawyer = values[0] || "";
export const API_CARDS = values[1] || "";
export const API_COMMENTS = values[2] || "";