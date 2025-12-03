import { getGadgetById } from "@/lib/api";
import Link from "next/link";

export default async function GadgetDetails({ params }) {
  const { id } = await params;

  const gadget = await getGadgetById(id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

        <Link href="/">
        <button className="bg-[#FF9900] btn hover:bg-gray-300 text-black px-4 py-2 mb-4 rounded">
          ← Back to Home
        </button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="flex flex-col items-center">
          <img
            src={gadget.thumbnail}
            alt={gadget.title}
            className="w-full max-w-sm rounded-lg shadow-md border"
          />
          <div className="flex gap-3 mt-4">
            {gadget.images.map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-16 h-16 border rounded-md cursor-pointer hover:scale-105 duration-200"
              />
            ))}
          </div>
        </div>
        
        <div className="col-span-1 space-y-4">
          <h1 className="text-3xl font-bold">{gadget.title}</h1>
          <p className="text-white text-lg">{gadget.description}</p>
          
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-xl">★</span>
            <span className="font-medium">{gadget.rating} / 5</span>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {gadget.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-black rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="space-y-1 text-white text-sm">
            <p><strong>Brand:</strong> {gadget.brand}</p>
            <p><strong>Category:</strong> {gadget.category}</p>
            <p><strong>SKU:</strong> {gadget.sku}</p>
            <p><strong>Stock:</strong> {gadget.stock}</p>
            <p><strong>Warranty:</strong> {gadget.warrantyInformation}</p>
            <p><strong>Shipping:</strong> {gadget.shippingInformation}</p>
            <p><strong>Availability:</strong> {gadget.availabilityStatus}</p>
          </div>
          </div>
          
          <div className="border p-5 rounded-lg shadow-md h-fit space-y-4">
            <div>
            <p className="text-3xl font-bold text-orange-600">${gadget.price}</p>
            <p className="text-sm text-white">
              Save {gadget.discountPercentage}% today!
            </p>
          </div>
          
          <p className="text-green-600 font-semibold">{gadget.availabilityStatus}</p>
          
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md">
            Buy Now
          </button>
          
          <p className="text-sm text-white mt-3">
            <strong>Return Policy:</strong> {gadget.returnPolicy}
          </p>
        </div>
      </div>
    </div>
  );
}

