export default function Product() {
  const price = 5000;

  return (
    <div
      style={{
        color: price > 1000 ? "red" : "green",
      }}
    >
      Product Price: ${price}
    </div>
  );
}