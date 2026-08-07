export interface IFormCommenters {
    id?: number,
    image: string,
    job: string,
    name: string,
    icon: string,
    comment: string
}

export interface IComentatersform {
  comments: IFormCommenters
}