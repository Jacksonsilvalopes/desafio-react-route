
import { NavLink, Link } from 'react-router-dom'
import home from '../../assets/home-svgrepo.png'
import './styles.css'


function Header() {
    return (
        <header className=" flex  justify-center items-center h-17.5 bg-primary">
            <div className="flex flex-row justify-between text-white w-3/4 h-7.5">
                <nav >
                    <NavLink to="/home" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                    Inicio
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                        Produtos
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                        Sobre nós
                    </NavLink>
                </nav>
                <div className="">
                    <Link to="/">
                    <img src={home} />
                    </Link>                    
                </div>
            </div>
        </header>
    )
}

export default Header