import React from "react";

function Navbar() {
  return (
    <div className="flex" >
      <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        <p>Homestay Sena Bayu</p>
      </div>
      <div>
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Rooms</a>
          </li>
          <li>
            <a className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">About Us</a>
          </li>
          <li>
            <a className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Contact Us</a>
          </li>
          <li>
            <a className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
