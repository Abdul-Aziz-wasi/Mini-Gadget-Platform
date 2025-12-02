
export const getGadgets = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=30", {
    cache: "no-store",
  })

  const data = await res.json()
  return data.products
}


export async function getGadgetById(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch gadget");
  }

  return res.json();
}
