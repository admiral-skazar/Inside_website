

import './App.css'

import {Sidebar} from "./components/Sidebar.jsx";
import profile from "./assets/profile.jpeg"
import {Home} from "./pages/Home.jsx";
import {Login} from "./pages/Login.jsx";
function App() {


  return (
      <body>
      <div className="flex">
          <aside className="w-56 fixed left-0 top-0 pb-10 h-screen bg-[#1E1E1E]">
                <Sidebar image={profile} name={"Navneetkrh"}/>
          </aside>
          <main className="flex-1 ml-56">
              <Home/>

          </main>
      </div>
      {/*  <Login/>*/}
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
