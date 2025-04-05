
import { NavLink } from 'react-router-dom'

import './styles.css'


function SubHeader() {
    return (
        <header className=" flex  justify-start items-center h-15 bg-secondary">
            <div className="flex pl-5  justify-start text-black w-3/4 h-7.5">
                <nav >
                    <NavLink to="/products/computers" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                        Computadores
                    </NavLink>
                    <NavLink to="/products/electronics" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                        Eletrônicos
                    </NavLink>
                    <NavLink to="/products/books" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                        Livros
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default SubHeader