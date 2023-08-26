export interface DataSchema{
  _id:string,
  client: { img:string,name:string },
  host: { img:string,name:string },
  details: string,
  task: {total:number,completed:number}
  participant: number,
  chat: number,
  attachment: unknown[],
  date: string
}