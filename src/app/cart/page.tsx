import Image from "next/image";


export default function CartPage() {
    return (
        <div className="max-w-4xl mx-auto p-6 font-sans mt-20">
    {/* <!-- Cart Header --> */}
    <h1 className="text-3xl font-bold mb-6">YOUR CART (3)</h1>
    
    {/* <!-- Shipping Alert --> */}
    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-medium">Shipping & Billing Address MUST Match to Place an Order</p>
    </div>

    {/* <!-- Free Shipping Messages --> */}
    <div className="mb-8 space-y-2">
        <p className="text-green-600 font-semibold">🎉 Congrats! You've unlocked Free Shipping!</p>
        <p className="text-gray-600">You are $18.01 away from free shipping!</p>
    </div>

    {/* <!-- Cart Items --> */}
    <div className="space-y-8">
        {/* <!-- Item 1 --> */}
        <div className="flex gap-6 border-b pb-6">
            <div className="w-24 h-24 bg-gray-200"></div>
            <div className="flex-1">
                <h3 className="font-bold text-lg">Endurance Sunglasses</h3>
                <p className="text-gray-600">Color: Black</p>
                <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center border rounded">
                        <button className="px-3 py-1">-</button>
                        <span className="px-3">1</span>
                        <button className="px-3 py-1">+</button>
                    </div>
                    <span className="font-bold">$27.99</span>
                </div>
            </div>
        </div>

        {/* <!-- Item 2 --> */}
        <div className="flex gap-6 border-b pb-6">
            <div className="w-24 h-24 bg-gray-200"></div>
            <div className="flex-1">
                <h3 className="font-bold text-lg">Essential Pre-Workout</h3>
                <p className="text-gray-600">Flavor: Grape</p>
                <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center border rounded">
                        <button className="px-3 py-1">-</button>
                        <span className="px-3">1</span>
                        <button className="px-3 py-1">+</button>
                    </div>
                    <span className="font-bold">$54.00</span>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Order Summary --> */}
    <div className="mt-8 space-y-4">
        <div className="flex justify-between">
            <span>SUBTOTAL</span>
            <span className="font-bold">$81.99</span>
        </div>
        <div className="flex justify-between">
            <span>Checkout+ Package Protection</span>
            <span>$1.67</span>
        </div>
        <div className="flex justify-between font-bold text-xl">
            <span>CHECKOUT+ TOTAL</span>
            <span>$83.66</span>
        </div>
    </div>

    {/* <!-- Actions --> */}
    <div className="mt-8 space-y-4">
        <button className="w-full bg-black text-white py-4 rounded font-bold hover:text-gray-200">
            CHECKOUT
        </button>
        <p className="text-center text-blue-600 hover:underline cursor-pointer">
            Continue without package protection
        </p>
        <button className="w-full bg-violet-600 text-white py-4 rounded font-bold hover:bg-violet-500 flex items-center justify-center gap-2">
           
            KHALTI
            <Image src="/images/khalto.png" alt="Example image" width={335} height={470} className="rounded-md w-[75px] h-[42px] " />
        </button>
        <p className="text-center text-gray-600 hover:underline cursor-pointer mt-4">
            CONTINUE SHOPPING
        </p>
    </div>
</div>
    )
};