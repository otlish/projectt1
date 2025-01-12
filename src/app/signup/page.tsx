import "../login/login.css"
export default function Signup(){
  
    return(
        <div className="flex flex-col items-center my-28">
        <h1 className="font-bold text-3xl font-sans text-gray-900 mb-2">
          CREATE ACCOUNT
        </h1>
        <div className="flex flex-col w-[420px] mt-5">
          <label className="text-sm text-gray-700">First Name</label>
          <input
            type="text"
            className="w-full h-12 border border-gray-300 px-3 mt-2"
          />
        </div>
        <div className="flex flex-col w-[420px] mt-5">
          <label className="text-sm text-gray-700">Last Name</label>
          <input
            type="text"
            className="w-full h-12 border border-gray-300 px-3 mt-2"
          />
        </div>
        <div className="flex flex-col w-[420px] mt-5">
          <label className="text-sm text-gray-700">Email</label>
          <input
            type="email"
            className="w-full h-12 border border-gray-300 px-3 mt-2"
          />
        </div>
        <div className="flex flex-col w-[420px] mt-5">
          <label className="text-sm text-gray-700">Password</label>
          <input
            type="password"
            className="w-full h-12 border border-gray-300 px-3 mt-2"
          />
        </div>
        <div className="flex justify-between items-center w-[420px] mt-5">
          <button className="bg-orange-600 text-white w-[110px] h-[43px] border border-solid border-transparent hover:bg-gray-900">
            Create
          </button>
        </div>
      </div>
      
    );
}