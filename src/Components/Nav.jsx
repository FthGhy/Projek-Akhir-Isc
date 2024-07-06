
export default function Nav() {
  return (
    
  

<nav className="bg-black dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
  <div class="w-12 h-12 bg-viole-700 dark:bg-viole-700 py-2">
    <p class="text-xs tracking-widest font-semibold text-putih text-center items-center"></p>
    <p class="text-xs tracking-widest font-semibold text-putih text-center items-center"></p>
  </div>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center px-96 justify-between hidden w-full  md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-10 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-whit dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:text-violet-500 text-red-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-violet-500 dark:text-white text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-white">About</a>
      </li>
      <li>
        <a href="/menu" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-white">Pesan</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-white">Wisata</a>
      </li>
    </ul>
    
  </div>
  <div className="flex md:order-2 items-center rounded-full px-5">  
    <a href="#">
      <div class="flex items-center rounded-full px-5"> 
      </div>
    </a>
    <a href="#">
      <div class="flex items-center rounded-full px-5"> 
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
    </a>
   
    
  </div>
  </div>
</nav>



  )
}
