import Image from "next/image";
import { ProductServices } from "../services/products-services";
import ProductCard from "../Components/ProductCard/CardPage";
import { Suspense } from "react";
import Loading from "../Components/Loading/Loading";

export default async function Home() {
  const products = await ProductServices.getProducts();
  console.log("Fetched items:", products);

  return (
    <main className="flex flex-wrap justify-center items-start gap-4 p-1">
        <Suspense fallback={<Loading/>}>
            {products.products.map((p: any) => (
           
                   <ProductCard key={p.id} product={p}     />
                 ))}
        </Suspense>
            
           
    
          
          </main>
  );
}
