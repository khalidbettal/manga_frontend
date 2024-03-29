import { createBrowserRouter } from "react-router-dom";
import { Login, Register, Home, About, ContactUs, Post , Profile } from "./components/Index";
import { AppLayout } from "./container/AppLayout";




const router = createBrowserRouter ([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/posts",
                element: <Post />
            },
            {
                path: "/profile",
                element: <Profile  />
            }
            
        ]
    }

])


export default router