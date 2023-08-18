import { BrowserRouter, Routes, Route, useNavigate, Link, Outlet } from 'react-router-dom';
function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/figma">Figma</Link>
                    </li>
                    <li>
                        <Link to="/mission">Mission</Link>
                    </li>
                    <li>
                        <Link to="/future">Future</Link>
                    </li>
                  

                </ul>
            </nav>

            <Outlet />

        </>
    );

}

export default Layout;