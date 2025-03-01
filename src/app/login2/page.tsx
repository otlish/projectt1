"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Login2 = () => {
  const [user, setUser] = useState<{ firstName: string; lastName: string; email: string } | null>(null);

  useEffect(() => {
    // Fetch logged-in user from localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <section>
      <div className="mt-32 ml-10 mr-10">
        <div className="flex justify-between">
          <p>
            <Link href="/" className="underline">
              Return to Store
            </Link>
          </p>
          <p className="font-bold text-3xl">MY ACCOUNT</p>
          <p>
            <Link
              href="/"
              className="underline"
              onClick={() => {
                localStorage.removeItem("loggedInUser");
                setUser(null);
              }}
            >
              Log out
            </Link>
          </p>
        </div>
        <div className="flex mt-32 gap-96">
          <div>
            {/* Display first & last name */}
            <p className="font-bold text-xl mb-4">
              {user ? `${user.firstName} ${user.lastName}` : "Guest"}
            </p>
            <p>{user?.email || "No email available"}</p>
            <p className="mt-2">Nepal</p>
            <p className="underline">View Address (1)</p>
          </div>
          <div className="ml-24 mt-10">
            <p> You haven't placed any orders yet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login2;