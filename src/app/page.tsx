import { ProductServices } from "./services/products-services";
import ProductCard from "./Components/ProductCard/CardPage";

export default async function Home() {
  const products = await ProductServices.getProductByCategory(
    "furniture/?limit=4"
  );
  console.log("Fetched items:", products);

  return (
    <div className="min-h-screen bg-yellow-50 font-sans p-4 sm:p-10">
      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sofa-chair-modern-furniture-sale-template-design-502b2da2c3e576648d4f14da9595e53d_screen.jpg?ts=1660651542"
            alt="Furniture Sale Banner"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          />
          <img
            src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp"
            alt="Featured Sofa"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          />
        </div>

        <p className="text-3xl font-extrabold text-red-700">
          50% OFF Limitted Sale/-
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.products.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </div>
  );
}
