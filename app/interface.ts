export interface simplifiedProduct{
    title: string;
    _id: string;
    imagesUrl: string;
    price: number;
    slug: string;
    categoryName: string;
}


export interface fullProduct{
    title: string;
    _id: string;
    images: any;
    price: number;
    slug: string;
    categoryName: string;
    description: string;
    price_id:string;
}