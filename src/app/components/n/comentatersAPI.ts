import type { IFormCommenters } from "./../UI/Cards/ComentatersCard/lib/types/typeComentatersCard"


export const getsFetchComment = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments")
    const dataComment: IFormCommenters[] = await response.json()
    return dataComment.filter((commenter) => commenter.id < 3)
}