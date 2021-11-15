import Link from "next/link";

const Breadcrumbs = (props) => {
    const title = props.title;

    return (
            <nav className="flex my-4 px-2 sm:px-6 lg:px-8" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">

                    <li className="inline-flex items-center">
                        <Link href="/">
                            <a className="text-gray-400 hover:text-gray-900 inline-flex items-center">
                        Home
                        </a>
                        </Link>
                    </li>

                    <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <a href="#" className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">{title}</a>
                        </div>
                    </li>
                </ol>
            </nav>
    )
}

export default Breadcrumbs
