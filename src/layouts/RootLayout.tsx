import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="min-h-screen">
            {/* Navbar willl go here */}
            <Outlet />
            {/* Footer will go here */}
        </div>
    )
}
