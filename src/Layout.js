import { Outlet, Link } from "react-router-dom";

export default function Layout(){
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/todo">TodoScreen</Link>
                    </li>
                    <li>
                        <Link to="/form">Form</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};