import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
