

export default function TopSection() {
    return(
        <div className=" top-section bg-[url(./src/assets/hammer-kid-mobile2.jpg)] w-full  bg-no-repeat bg-cover pt-[300px] flex justify-center pb-[100px]">
            <div className=" flex flex-col items-center pt-[10px] w-[96%] phone:w-[98%]">
                <div className=" w-[90%] mb-[20px] ">
                    <h1 className=" text-[35px] phone:text-[46px] text-white font-extrabold text-center ">
                        Next class will start on Dec 5, 2024
                    </h1>
                </div>
                <div className=" mb-[30px] ">
                    <p className=" text-[16px] phone:text-[20px] text-white font-semibold text-center ">
                        Please watch this video to get full information about the class.
                    </p>
                </div>
                <div className=" flex flex-col gap-y-[15px] items-center">
                    <button className=" px-[35px] py-[11px] bg-one rounded-full text-white font-semibold ">
                        Join Class
                    </button>
                    <button className=" px-[32px] py-[11px] bg-white rounded-full text-black font-semibold ">
                        Sign In
                    </button>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}