export const getGadgets = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=30", {
    cache: "no-store",
  });

  const data = await res.json();
  return data.products;
};