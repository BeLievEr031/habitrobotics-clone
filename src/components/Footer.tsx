import clsx from "clsx"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="container w-10/12 mx-auto">
            <div className="w-full flex-wrap flex justify-between items-center py-12 sm:py-16">
                <div>
                    <img src="https://habitrobotics.com/wp-content/uploads/2025/01/Habit2.png" alt="Habit2.png"
                        width={70}
                    />
                    <p className="pt-4 text-neutral-800 font-light">robotics, realized.</p>
                </div>
                <div className="space-x-4 pt-6 sm:pt-0">
                    <Link to={"/"} className={clsx("font-light text-xl sm:pr-28 pr-14")}>home</Link>
                    <Link to={"/carrers"} className={clsx("font-light text-xl")}>carrers</Link>
                </div>
            </div>
            <div className="flex flex-wrap justify-between items-center pb-4">
                <p className="pt-4 text-neutral-800 font-light">Copyright © 2025 HABIT Robotics, Inc. All rights reserved.</p>
                <Link to={"/privacy-policy"} className="sm:pt-4 pt-2 text-neutral-800 font-light underline">privacy policy</Link>
            </div>
        </div>
    )
}

export default Footer