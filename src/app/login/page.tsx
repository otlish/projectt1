import Link from "next/link";
// import "./login.css"
import Image from "next/image";
export default function Login() {
    return(
        // kushal ko login 
    <div className="mt-32">
          <div className="flex flex-col items-center mt-16">
        <h1 className="font-bold text-3xl font-sans text-gray-900 mb-2">LOGIN</h1>
        <div className="flex flex-col w-[420px] mt-5">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full h-12 border border-gray-300 px-3 mt-2"
          />
        </div>
        <div className="flex flex-col w-[420px] mt-5">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="w-full h-12 border border-gray-300 px-3 mt-2 text-xs"
            placeholder="Forgot Your Password?"
          />
        </div>
        <div className="flex justify-between items-center w-[420px] mt-5">
          <button className="bg-orange-600 text-white w-[110px] h-[43px] border border-solid border-transparent hover:bg-gray-900">
            Sign in
          </button>
          <a
            href="/signup"
            className="text-sm underline text-gray-700 hover:text-gray-900"
          >
            Create Account
          </a>
        </div>
      </div>
        {/* maile add gareko components */}
      <div className="flex justify-between mt-24 ml-12 mb-12 mr-20">
        <div>
            <Image src="/images/loginimg.png" alt="Example image" width={700} height={0} className="rounded-md w-[700px] h-[700px] object-contain " />
            </div>
            <div className="flex justify-center items-center flex-col">
                <div className="flex">
                    <p className="font-light text-3xl mr-3">WHY</p>
                    <p className="font-bold text-3xl">CREATE AN ACCOUNT?</p>
                </div>
                <p className="mt-5">Because you can view all your past orders, profile information, & saved addresses.</p>
                <p className="mt-5">When you log in, the details stored in the account are auto-filled during checkout</p>
                <p>for a faster checkout experience!</p>
                <p className="mt-5 font-semibold">No more missing drops and merch selling out before you can check out!</p>
            </div>
      </div>
    </div>
      
    );
}