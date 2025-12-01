import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <footer className="text-center py-4 bg-light mt-auto border-top">
                <p className="mb-0">Star Wars Blog &copy; {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}

