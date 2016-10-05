import { IProduct } from '../products/product'

export interface ICartLine{
    product: IProduct;
    count: number;
}