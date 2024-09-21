// export interface product{
//     name : string,
//     description : string,
//     price :number,
//     count : string
// }


export type product = {
    id : number;
    image? : string,
    name : string,
    description : string,
    price :number,
    counts ?: string,
}