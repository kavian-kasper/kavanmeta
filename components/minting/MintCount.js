const MintCount = (props) => {
    const nftCount = props.nftCount
    const initialStock = props.initialStock

    return (
        <div className="flex align-bottom mb-10">
            <svg className="accent bg-black border-black border-solid border-2 rounded-lg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3.4em" height="3.4em"
            viewBox="0 0 16 16"><g fill="currentColor">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093l3.473-4.425a.75.75 0 0 1 1.08-.022z"/></g></svg>

            <h2 className="ml-4 text-3xl font-nunito  text-gray-900 ">
                {nftCount}/{initialStock} <span className="block text-base">Metatoons available.</span>
            </h2>
        </div>
    )
}

export default MintCount
