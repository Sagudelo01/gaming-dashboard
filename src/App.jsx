import {useState} from "react";
import { PiHouseSimpleDuotone,PiAppStoreLogoFill, PiBookBookmarkDuotone, PiUsersFourDuotone, PiBroadcastDuotone, PiDownloadSimpleFill, PiGearSixDuotone, PiCircleFill, PiList } from "react-icons/pi";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-[#141414] min-h-screen">
        <aside className={`fixed top-0 w-80 h-full overflow-y-scroll hide-scrollbar border-r border-gray-800/17 p-8 flex flex-col justify-between bg-[#141414] ${showMenu ? "left-0" : "-left-full"} transition-all duration-300 lg:left-0`}>
          <div>

            {/* LOGO */}
            <h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10">
              Tu logo
            </h1>

            <ul>

              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#1A1A1A] py-3 px-4 rounded-xl transition-colors duration-300">
                  <PiHouseSimpleDuotone />
                  Home
                </a>
              </li>

               <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#1A1A1A] py-3 px-4 rounded-xl transition-colors duration-300">
                  <PiAppStoreLogoFill />
                  Store
                </a>
              </li>

               <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#1A1A1A] py-3 px-4 rounded-xl transition-colors duration-300">
                  <PiBookBookmarkDuotone />
                  Library
                </a>
              </li>

               <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#1A1A1A] py-3 px-4 rounded-xl transition-colors duration-300">
                  <PiUsersFourDuotone />
                  Friends
                </a>
              </li>

               <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#1A1A1A] py-3 px-4 rounded-xl transition-colors duration-300">
                  <PiBroadcastDuotone />
                  Live
                </a>
              </li>
              
            </ul>
          </div>

          <div>
            <ul>

              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#1A1A1A] py-3 px-4 rounded-xl transition-colors duration-300">
                  <PiDownloadSimpleFill />
                  Downloads
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#1A1A1A] py-3 px-4 rounded-xl transition-colors duration-300">
                  <PiGearSixDuotone />
                  Settings
                </a>
              </li>

              <li>
                <a href="#" className="relative text-gray-300 flex items-center gap-4 hover:bg-[#1A1A1A] py-3 px-4 rounded-xl transition-colors duration-300">
                  <img src="/src/img/gato.jpg" alt="Profile" className="w-6 h-6 rounded-full" />
                  <PiCircleFill className="absolute text-green-600 bottom-2.5 left-8 text-[8px]" />
                  Profile
                </a>
              </li>
              
            </ul>
          </div>

          {/* INICIO BOTON MOVIL */}
          <button onClick={toggleMenu} className="bg-blue-600 text-white fixed bottom-8 right-6 p-2 text-lg rounded-full">
            <PiList />
          </button>
          {/* FINAL BOTON MOVIL */}
        </aside>
      </div>
    </>
  );
}

export default App;
