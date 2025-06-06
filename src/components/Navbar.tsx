import { LucideMenu, X } from "lucide-react"
import { Link } from "react-router-dom"
import clsx from "clsx";
import { useState } from "react";
function Navbar() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="container py-4 flex justify-between items-center w-11/12 mx-auto">

            <img src="https://habitrobotics.com/wp-content/uploads/2025/01/Habit2.png" alt="Habit2.png"
                width={120}
            />

            <div className="space-x-4 sm:block hidden">
                <Link to={"/"} className={clsx(
                    "font-light text-xl"
                )}>home</Link>
                <Link to={"/careers"}
                    className={clsx(
                        "font-light text-xl"
                    )}
                >carrers</Link>
            </div>

            <LucideMenu className="block sm:hidden cursor-pointer" onClick={() => setToggle(!toggle)} />


            {toggle && <div className={clsx("absolute bg-white w-full h-full z-50 top-0 left-0  px-4 pt-4")}>
                <div className="flex justify-end cursor-pointer">
                    <X onClick={() => setToggle(!toggle)} />
                </div>
                <div className="flex flex-col justify-end items-end py-2 space-y-3">
                    <Link to={"/"} className={clsx(
                        "font-light text-xl"
                    )}
                        onClick={() => setToggle(!toggle)}
                    >home</Link>

                    <Link to={"/careers"}
                        className={clsx(
                            "font-light text-xl"
                        )}
                        onClick={() => setToggle(!toggle)}
                    >carrers</Link>
                </div>
            </div>}
        </div >
    )
}

export default Navbar