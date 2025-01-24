

export default function Header() {
    return(
        <header className=" bg-transparent fixed  top-[0px] w-[100%] h-[82px]  flex justify-center  z-50 ">
            <div className=" w-[95%] flex items-center justify-between h-full bg-transparent phone:w-[540px] tablet:w-[720px] desktop:justify-between laptop:w-[960px] desktop:w-[98%]" >
                <div className=" laptop:w-[225px] desktop:mr-[60px] ">
                    <img src="./src/assets/evangadi-logo-white.png" alt="" />
                </div>
                <ul className=" text-white list-none  hidden laptop:flex w-[720px] gap-x-[30px] justify-end  items-center h-full desktop:w-[915px] desktop:ml-[20px] desktop:justify-between ">
                    <li>Home</li>
                    <li>Partnership</li>
                    <li>Academy</li>
                    <li>Scholarship</li>
                    <li>Immersive</li>
                    <li>Contact</li>
                    <li>
                        <button className=" bg-white px-[34px]  py-[12px] rounded-full flex items-center text-black ml-[10px] desktop:ml-[15px] ">
                            Sign In
                        </button>
                    </li>
                    
                </ul>
                <div className=" h-[35px] w-[35px] flex justify-evenly flex-col items-end laptop:hidden  ">
                    <div className=" bg-one w-[35px] h-[3px] "></div>
                    <div className=" bg-one w-[29px] h-[3px] "></div>
                    <div className=" bg-one w-[35px] h-[3px] "></div>
                </div>
            </div>
        </header>
    )
}