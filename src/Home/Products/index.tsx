import { Outlet } from "react-router-dom"
import SubHeader from "../../components/SubHeader"


function Products() {
    return (
        <>
            <main className="  w-3/4 justify-self-center my-5" >
                <SubHeader />
                <Outlet />
            </main>
        </>
    )
}

export default Products