import React, { useState } from "react";

const LoginHeader = () => {
  const [user,setUser] = useState(true)
  return (
    <div className="flex flex-row justify-between">
      <div className="absolute w-screen bg-gradient-to-b from-black flex flex-row justify-between">
        <img
          className="h-30 w-64 pl-5 pt-2"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
        { user && <div className="flex flex-row items-center mr-10">
          <button className="bg-red-500 h-8 w-20 rounded-md p-1 text-white">
            Sign Out
          </button>
        </div>}
      </div>
    </div>
  );
};

export default LoginHeader;
