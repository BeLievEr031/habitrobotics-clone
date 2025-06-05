
function Home() {
    return (
        <div className="pt-16">
            <div className="flex-col sm:flex-row sm:flex justify-evenly items-center">
                <div className="w-full md:w-[55%] lg:w-[42%] px-6">
                    <img
                        src="https://habitrobotics.com/wp-content/uploads/2025/04/BoogieWoogie.jpg"
                        alt="BoogieWoogie.jpg"
                        className="w-full"
                    />
                </div>

                <div className="text-center sm:text-left pt-6 sm:pt-0">
                    <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl">robotics, realized.</h1>
                    <p className="sm:my-2 md:my-4 lg:my-8 sm:text-2xl text-xl w-full sm:w-10/12 text-neutral-500">
                        Reshaping neighborhood services with intelligent robotics.
                    </p>
                </div>

            </div>

            <div className="w-full pt-16">
                <iframe width="560" src="https://www.youtube.com/embed/gOQL87xoUxk?si=BnYS4XKy8kOFdK8j" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                    className="w-full h-[50vh] sm:h-screen"
                ></iframe>

            </div>
        </div>
    )
}

export default Home