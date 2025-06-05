import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy />
            },
        ]
    }
])

export default router;