import NavbarMenu from "./NavbarMenu";
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <a className="text-2xl font-bold text-green-500 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-red-500 dark:hover:text-gray-300" href="#">RBook</a>
            </div>
            <div className="flex md:hidden">
              <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 md:flex md:items-center md:justify-between">
            <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
              <Link href="/" className="px-2 py-1 mx-2 mt-2 text-base font-medium text-red-500 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Explore</Link>
              <Link href="/mall" className="px-2 py-1 mx-2 mt-2 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Mall</Link>
              <a href="#" className="px-2 py-1 mx-2 mt-2 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Random Item</a>
              <a href="#" className="px-2 py-1 mx-2 mt-2 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Experts</a>
              {/* <NavbarMenu /> */}
              <div className="dropdown dropdown-hover transition-colors duration-200">
                <label tabIndex={0} className="btn btn-ghost rounded-btn text-base font-medium normal-case">CreatorHome</label>
                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
            </div>
            <div className="flex items-center mt-4 gap-4  md:mt-0 ">
              <div className="indicator">
                <span className="indicator-item badge badge-secondary">8</span>
                <button className=" hidden mx-4 text-gray-600  transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </button>
              </div>
              <div className="indicator">
                <span className="indicator-item badge badge-secondary">99+</span>
                <button className="hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar"></img>
                </div>
                <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">Khatab wedaa</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
}

export default Navbar