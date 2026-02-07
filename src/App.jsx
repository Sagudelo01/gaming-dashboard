import { PiHouseSimpleDuotone } from "react-icons/pi";
import { PiAppStoreLogoFill } from "react-icons/pi";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-[#141414] min-h-screen">
        <aside className="fixed left-0 top-0 w-80 h-full overflow-y-scroll hide-scrollbar border-r border-gray-800/17 p-8">
          <div>

            {/* LOGO */}
            <h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10">
              Tu logo
            </h1>

            <ul>

              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#1A1A1A] py-2 px-4 rounded-xl transition-colors duration-300">
                  <PiHouseSimpleDuotone />
                  Home
                </a>
              </li>

               <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#1A1A1A] py-2 px-4 rounded-xl transition-colors duration-300">
                  <PiAppStoreLogoFill />
                  Store
                </a>
              </li>

               <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#1A1A1A] py-2 px-4 rounded-xl transition-colors duration-300">
                  <PiHouseSimpleDuotone />
                  Library
                </a>
              </li>

               <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#1A1A1A] py-2 px-4 rounded-xl transition-colors duration-300">
                  <PiHouseSimpleDuotone />
                  Friends
                </a>
              </li>

               <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#1A1A1A] py-2 px-4 rounded-xl transition-colors duration-300">
                  <PiHouseSimpleDuotone />
                  Live
                </a>
              </li>
              
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default App;
