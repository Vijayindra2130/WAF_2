export const revalidate = 60;

export default async function ProductsPage() {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await response.json();
  const products = data.products;

  return (
    <div>
      <h1>Products</h1>

      {products.map((product: any) => (
        <p key={product.id}>
          {product.title}
        </p>
      ))}
    </div>
  );
}