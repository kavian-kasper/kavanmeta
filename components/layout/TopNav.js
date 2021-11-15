import Link from "next/link"
import { useState } from "react";
import GitIcon from "./GitIcon"

const TopNav = () => {

    return (
        <nav className="px-4 lg:px-8 accent-bg">

            {/* nav container styles */}
            <div className="text-gray-900">

                {/* flex container: logo, primary, secondary */}
                <div className="flex items-center justify-between py-3">

                    {/* logo */}
                    <div>
                        <Link href="/">
                            <a>
                                {/* <Image src="/profile.png" alt="" width="104" height="104"/> */}
                                <h1 className="text-lg font-nunito">KavanMeta</h1>
                            </a>
                         </Link>
                         <p className="font-semibold text-xs minus-margin-sm tracking-tight">Artist & Developer <span className="block md:inline md:text-sm">preparing for a metaverse</span></p>
                    </div>

                    {/* group primary & secondary navs*/}
                    {/* <div className=" items-center space-x-4"> */}
                        {/* primary */}


                        {/* secondary */}
                        <div className="flex items-center">
                        <Link href="/mintMetatoon">
                            <a className=" mr-2 btn-secondary-sm">
                                Mint
                                </a>
                        </Link>
                            {/* <Link href="/about"><a className="px-4 text-sm font-nunito">About</a></Link> */}
                            <GitIcon/>
                        </div>

                    {/* </div> */}

                </div>
            </div>
       </nav>
    )
}

export default TopNav
