import Image from "next/image";
import water from "@/assets/water.jpg";
import creame from "@/assets/creame.jpg";
import cap from "@/assets/cap.jpg";

export default function SummerTips() {
  return (
    <div className="container mx-auto bg-[#EFE3CA] my-5 md:my-20 py-10 md:px-10 xl:px-30 rounded-xl flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-center md:text-left">
        Summer Care Tips
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 xl:gap-10 text-center">
        <div className="bg-base-200 rounde-xl shadow pb-5 md:p-5 xl:p-10 rounded-xl">
          <Image
            className="rounded-xl"
            src={water}
            alt="water"
            height={100}
            width={400}
          />
          <h2 className="text-xl font-bold mt-3">Stay Hydrated</h2>
          <p className="text-md text-gray-500">
            Drink 8+ glasses of water daily to beat the heat
          </p>
        </div>
        <div className="bg-base-200 rounde-xl shadow md:p-5 xl:p-10 rounded-xl">
          <Image
            className="rounded-xl"
            src={creame}
            alt="creame"
            height={100}
            width={400}
          />
          <h2 className="text-xl font-bold mt-3">Use SPF Daily</h2>
          <p className="text-md text-gray-500">
            Apply SPF 30+ sunscreen every 2 hours outdoors
          </p>
        </div>
        <div className="bg-base-200 rounde-xl shadow md:p-5 xl:p-10 rounded-xl">
          <Image
            className="rounded-xl"
            src={cap}
            alt="cap"
            height={100}
            width={400}
          />
          <h2 className="text-xl font-bold mt-3">Cover Up</h2>
          <p className="text-md text-gray-500">
            Wear wide hats & UV protective clothing outside
          </p>
        </div>
      </div>
    </div>
  );
}
