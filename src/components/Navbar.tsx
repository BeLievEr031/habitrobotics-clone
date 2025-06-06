import { LucideMenu } from "lucide-react"
import { Link } from "react-router-dom"
import clsx from "clsx";
function Navbar() {
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

            <LucideMenu className="block sm:hidden" />
        </div >
    )
}

export default Navbar