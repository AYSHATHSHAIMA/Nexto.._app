import { ServiceBase } from "./service-base"

 export class ProductServices extends ServiceBase{
    static getProducts= async()=>{
        try{
        const productResponse = await fetch(this.getUrl('/products'));

        const products = await productResponse.json();
        console.log("Fetching from:", this.getUrl("/products"));
        return products;
        }
        catch{
                console.log("Failed to fetch Products");
                return [];
        }
    }
 

     static getProductById= async(id: number)=>{
        try{
        const productResponse =await fetch(this.getUrl('/products/'+ id ));
        const product = await productResponse.json();
        return product;
    } catch{
            console.log(`failed to fetch single product${id}`)

            return null;
            
    }
    }



      static async getProductByCategory(category: string) {
    try {
      const res = await fetch(this.getUrl(`/products/category/${category}`));
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(`Failed to fetch category ${category}`, error);
      return null;
    }
  }



}