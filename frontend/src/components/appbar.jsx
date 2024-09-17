import CountdownCircle from "./counter";

export const AppBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container flex justify-between items-center">
        
        {/* Left: Logo/Title */}
        <div className="text-6xl  text-teal text-lg font-bold text-teal pl-20">
          HODLINFO
        </div>
        
        {/* Center: 3 Buttons */}
        <div className="flex space-x-2 justify-between">
          <div><button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-grey focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-grey dark:hover:bg-grey dark:focus:ring-blue-800" type="button">INR <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>
            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            </div>
            </div>
            <div><button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-grey focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-grey dark:hover:bg-grey dark:focus:ring-blue-800" type="button">BTC <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>
            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            </div>
            </div>
          <button className="bg-grey text-white py-2 px-4 rounded">
            Buy BTC
          </button>
        </div>

        {/* Right: 3 Buttons */}
        <div className="flex space-x-4 flex-cols">
          <CountdownCircle/>
          <button type="button" className="focus:outline-none text-white bg-teal hover:bg-teal focus:ring-4 focus:ring-teal font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Connect Telegram</button>
          <label className="inline-flex items-center me-5 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked/>
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
            </label>
        </div>
      </div>
    </nav>
  );
}

