import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Outlet />
            {/* Footer will go here */}
        </div>
    )
}
