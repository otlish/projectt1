"use client"
import { useState } from "react";
import Image from "next/image";

export default function Buy() {
  const [subscription, setSubscription] = useState("one-time");

  return (
    <section>
      <div className="flex justify-between">
        {/* Product Image */}
        <div className="ml-32 mt-32">
          <Image src="/images/pinky.png" alt="Example image" width={600} height={600} className="rounded-md w-[600px] h-[600px]" />
        </div>
        
        {/* Product Details */}
        <div className="mr-60 mt-44 w-[450px]">
          <h1 className="font-bold text-3xl font-sans text-gray-900 mb-3">ITHOLATE PROTEIN</h1>
          <h2 className="font-normal text-2xl text-gray-700">RS.5799</h2>
          <hr className="my-4 border-t border-gray-300 mb-7" />

          {/* Size Selection */}
          <h1 className="text-gray-700 mb-2">Size</h1>
          <select className="w-[450px] h-12 mb-7 pl-2 border border-gray-400 rounded-md">
            <option value="30">30 Serving</option>
            <option value="100">100 Serving</option>
          </select>

          {/* Subscription Option */}
          <div className="border border-black rounded-md p-4 mb-3">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <input
                  type="radio"
                  name="purchase"
                  value="subscribe"
                  checked={subscription === "subscribe"}
                  onChange={() => setSubscription("subscribe")}
                  className="mr-2"
                />
                Subscribe & Save 10%
              </div>
              <span className="font-bold">Rs. 5219</span>
            </label>
            {subscription === "subscribe" && (
              <select className="w-full h-10 mt-2 p-2 border border-gray-400 rounded-md">
                <option>Delivery every 4 weeks</option>
                <option>Delivery every 6 weeks</option>
                <option>Delivery every 8 weeks</option>
              </select>
            )}
          </div>

          {/* One-time Option */}
          <div className="border border-black rounded-md p-4 mb-7">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <input
                  type="radio"
                  name="purchase"
                  value="one-time"
                  checked={subscription === "one-time"}
                  onChange={() => setSubscription("one-time")}
                  className="mr-2"
                />
                One-time
              </div>
              <span className="font-bold">Rs. 5799</span>
            </label>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-orange-700 hover:bg-black h-12 w-full border-black text-white rounded-md mb-10">
            Add to Cart
          </button>

          {/* Product Description */}
          <p className="font-semibold mb-3">Spikes Strength</p>
          <p className="font-semibold mb-3">Generates Muscular Power</p>
          <p className="font-semibold mb-3">Improves Muscle Fullness</p>
          <p className="font-semibold mb-10">Tried And True.</p>
          <p>
            Itholate protein was one of the first sports nutrition supplements to ever hit the market decades ago; there’s a reason it has
            withstood the tests of time. This strength builder has been proven time and time again to enhance power output.
          </p>
          <br />
          <p>
            Creatine is a naturally occurring compound in the body that plays a critical role in the production of ATP, the primary source of energy
            for your muscles. Raw Nutrition's Creatine delivers pure, high-quality creatine monohydrate to help increase muscle energy, strength, and
            endurance so you can push harder and train longer.
          </p>
          <br />
          <p>Shop Creatine and feel the effects of one of the safest and most studied supplements currently available!</p>
        </div>
      </div>
    </section>
  );
}
