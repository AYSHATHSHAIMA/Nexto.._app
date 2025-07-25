import { ServiceBase } from "./service-base"

 export class ProductServices extends ServiceBase{
    static getProducts= async()=>{
        try{
        const productsResponse =await fetch(this.getUrl('/products'));
        const products = await productsResponse.json();
        return products;
        }
        catch{
                console.log("Failed to fetch Products")
        }
    }
 

     static getProductById= async(id: number)=>{
        try{
        const productResponse =await fetch(this.getUrl('/products/'+ id ));
        const product = await productResponse.json();
        return product;
    } catch{
            console.log(`failed to fetch single product${id}`)
    }
    }

}