import Image from "next/image";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";

export default async function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center">
      <div className="card bg-base-100 w-96 lg:w-85 xl:w-96 shadow-xl p-3">
        <figure className="aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            height={10}
            width={400}
          />
        </figure>
        <div className="card-body bg-base-200">
          <p className="text-[#093C5D]">{product.category}</p>
          <h2 className="card-title text-xl font-bold">{product.name}</h2>
          <div className="flex justify-between items-center gap-48 lg:gap-38">
            <p className="text-2xl font-semibold flex items-center">
              {product.rating}
              <span className="text-[#FFA02E]">
                <IoMdStar />
              </span>
            </p>
            <p className="text-2xl font-semibold">${product.price}</p>
          </div>
          <div className="card-actions">
            <Link className="w-full" href={`/products/${product.id}`}>
              <button className="btn bg-[#3B7597] text-white w-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
