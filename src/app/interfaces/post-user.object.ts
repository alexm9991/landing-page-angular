export interface IPostUser {
  id: number,
  title: string,
  body: string
}



export interface ILocalJsonPostUser {
  data: ILocalPostUser[]
}

export interface ILocalPostUser {

  name: string,
  avatar: string,
  coverImage: string,

}
