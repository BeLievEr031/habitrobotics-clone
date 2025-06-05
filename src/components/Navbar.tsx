import { LucideMenu } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import clsx from "clsx";
function Navbar() {
    const location = useLocation();
    return (
        <div className="container py-4 flex justify-between items-center w-11/12 mx-auto sticky top-0">
            <img src="https://habitrobotics.com/wp-content/uploads/2025/01/Habit2.png" alt="Habit2.png"
                width={120}
            />
            <div className="space-x-4 sm:block hidden">
                <Link to={"/"} className={clsx(
                    "font-light text-xl",
                    {
                        "underline": location.pathname.includes("/")
                    }
                )}>home</Link>
                <Link to={"/carrers"}
                    className={clsx(
                        "font-light text-xl",
                        {
                            "underline": location.pathname.includes("/carrers")
                        }
                    )}
                >carrers</Link>
            </div>

            <LucideMenu className="block sm:hidden" />
            <div className="">

            </div>
        </div >
    )
}

export default Navbar