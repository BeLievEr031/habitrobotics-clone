import { ChevronRight } from "lucide-react"


function Career() {
    return (
        <div className="relative">
            <img src="https://habitrobotics.com/wp-content/uploads/2025/01/El_Segundo_California_aerial.jpg" alt="El_Segundo_California_aerial.jpg"
                className="h-[110vh] w-full"
            />

            <div className="absolute left-8 bottom-12 text-white space-y-6">
                <h1 className="text-5xl">
                    El Segundo, CA
                </h1>
                <p className="text-2xl w-[55%]">
                    HABIT is headquartered in El Segundo, a coastal hub of innovation located a few minutes south of LAX.
                </p>
                <button className="px-10 py-4 border rounded-full flex gap-1 items-center text-xl cursor-pointer">
                    <span>Careers</span>
                    <ChevronRight className="mt-1" size={20} />
                </button>
            </div>
        </div>
    )
}

export default Career