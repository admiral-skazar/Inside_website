

import './App.css'

import {Sidebar} from "./components/Sidebar.jsx";
import profile from "./assets/profile.jpeg"
import {Home} from "./pages/Home.jsx";
import Loginsignup, {Login} from "./pages/Login.jsx";
import { Mainlayout } from './pagelayout/mainlayout';
function App() {


  return (
      <body>
     
      <Loginsignup/>
      </body>

    // <section className={"flex flex-row  w-screen bg-[#1E1E1E]"}>
    //
    //     <div className="grid grid-cols-7">
    //         <aside className="self-start sticky top-0  col-span-1">
    //             <Sidebar image={profile} name={"Navneetkrh"}/>
    //         </aside>
    //
    //         <main className="col-span-6">
    //             <Home/>
    //         </main>
    //     </div>
    //
    //
    //
    //
    // </section>
  )
}

export default App
