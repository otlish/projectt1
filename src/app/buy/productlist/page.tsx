import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

export default function Home() {
  return (
    <main>
      {/* Your existing sections remain the same */}
      <section>
        <div className="relative flex mr-5">
          <div className="mb-5 ml-5">
            <Link href="/product/1"> {/* Dynamic product page link */}
              <a>
                <Image src="/images/tshirt.png" alt="T-shirt" width={850} height={0} className="rounded-md w-[850px] h-[460px] object-cover" />
              </a>
            </Link>
            <div className="absolute top-64 left max-w-60 ml-7">
              <p className="mt-8 mb-5 text-sm font-normal text-white">BLACK FRIDAY MERCH</p>
              <p className="mb-5 text-3xl font-bold text-white">NEW MERCH</p>
              <button className="w-40 h-12 font-normal text-white bg-orange-700 hover:bg-black">SHOP NOW</button>
            </div>
          </div>
        </div>
      </section>
      {/* Other sections */}
    </main>
  );
}
