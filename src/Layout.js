import { BrowserRouter, Routes, Route, useNavigate, Link, Outlet } from 'react-router-dom';
function Layout(){
    return (
        <>
            <nav>
                SDFGUUIGF

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/figma">Figma</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />

        </>
    );

}

export default Layout;