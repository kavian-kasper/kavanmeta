import Footer from "./Footer"
import TopNav from "./TopNav"

function Layout({ children }) {

    return (
        <div>
            <TopNav/>
                <div className="layout pb-12 mx-auto">
                    {children}
                </div>
            <Footer />
       </div>
    )
}

export default Layout
