

import type { ILawers } from "../UI/Cards/OurLawersCard/lib/types/typeOurLawers";

export const getFetchLawers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data: ILawers[] = await response.json();
    return data.filter((item) => item.id < 5)
}