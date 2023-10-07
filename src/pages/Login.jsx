import Login_page from "../assets/Login_page.gif"
import bg from "../assets/bg.gif";
export const Login =()=> {
    return (
        <div className={"flex flex-row justify-evenly h-screen w-full bg-[#1c164c] "}>
            <div className={ "flex flex-col justify-center items-center  w-1/2"}>
                <div className={"h-24 w-64 flex flex-col justify-center items-center "}>
                    <div className={"flex-row justify-start w-56"}>
                        <h3 className={"text-white my-1 mx-2 text-1xl text-left"}>Email :</h3>
                    </div>
                    <input type={"text"} className={" h-8 w-56 rounded-3xl text-center bg-grayish border-2 border-gray-500 "} placeholder={"Type to Search"}/>
                </div>
                <div className={"h-24 w-64 flex flex-col justify-center items-center "}>
                    <div className={"flex-row justify-start w-56"}>
                        <h3 className={"text-white my-1 mx-2 text-1xl text-left"}>Password :</h3>
                    </div>
                    <input type={"text"} className={" h-8 w-56 rounded-3xl text-center bg-grayish border-2 border-gray-500 "} placeholder={"Type to Search"}/>
                </div>
            </div>
            <div className={"w-1/2 bg-cover "} style={{ backgroundImage: `url(${Login_page})`  }}>
                <div className="w-full h-full flex  justify-center items-center
             bg-gradient-to-l from-transparent to-[#1c164c] backdrop-brightness-80 flex-col">
                </div>
            </div>
        </div>
    )
}