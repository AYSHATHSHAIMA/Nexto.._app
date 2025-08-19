import ProductCard from "@/app/Components/ProductCard/CardPage";
import { ProductServices } from "@/app/services/products-services";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = decodeURIComponent(params.category);

  const data = await ProductServices.getProductByCategory(categoryName);
  const products = data?.products ?? [];

  return (
    <div className="min-h-screen bg-yellow-50 py-8 px-4">
      <h1 className="text-3xl font-extrabold italic bg-amber-300 mb-8 text-center text-black">
        Category: {categoryName}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
