import Link from "../Link/Link";
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 'home', path: '/', name: 'Home' },
        { id: 'about', path: '/about', name: 'About' },
        { id: 'courses', path: '/courses', name: 'Courses' },
        { id: 'contact', path: '/contact', name: 'Contact' },
        { id: 'dashboard', path: '/dashboard', name: 'Dashboard' },
    ];


    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="md:container mx-auto">
                <div className="md:hidden text-2xl" onClick={() => setOpen(!open)} >
                    {
                        open === true ?
                            <AiOutlineClose></AiOutlineClose> : <AiOutlineAlignLeft></AiOutlineAlignLeft>
                    }

                </div>
                <ul className={`${open ? 'top-16' : '-top-60'} md:flex duration-1000 absolute md:static bg-yellow-200 px-6`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </div>
        </nav>
    );
};


export default Navbar;