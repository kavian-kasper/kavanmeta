import Link from "next/link";

const ThumbnailList = ( props ) => {
    const metatoonz = props.metatoonz;

    return (
        <ul className="thumbnail-grid-2 mx-5 lg:mx-auto lg: max-w-5xl">

            { metatoonz.map((metatoon) => (
            <li className="thumbnail-2" key={metatoon[0].id}>
                <div className="flex-1 flex flex-col">
                    <span className="inline-block relative">
                        <Link href={"/"+`${metatoon[0].slug}`}>
                            <a>
                                <img className="flex-shrink-0 mx-auto bg-black rounded-t-lg object-cover" src={metatoon[0].image}  alt={metatoon[0].imgAlt}/>
                            </a>
                        </Link>
                        <span className="absolute bottom-1 right-1 px-2 py-1 text-black font-nunito tracking-wide text-xs font-medium accent-bg rounded-full">
                            {metatoon[0].rarity}
                        </span>
                    </span>

                    <div className="p-4 h-full flex flex-col justify-between">
                    <Link href={"/"+`${metatoon[0].slug}`}>
                        <h2 className="font-nunito mt-1 text-md lg:text-xl cursor-pointer break-words">{metatoon[0].metatoon}</h2>
                        </Link>
                        <dl className="mt-1 flex flex-row justify-between">
                            <dt className="text-gray-500 text-sm font-bold font-nunito">Avatar supply:</dt>
                            <dd className="text-gray-500 text-sm">{metatoon[0].avatarSupply}</dd>
                        </dl>
                        <dl className="mt-1 flex flex-col">
                            <dt className="text-gray-500 text-sm font-bold font-nunito">Avatar skins:</dt>
                            <dd className="text-gray-500 text-sm">{metatoon[0].avatarSkins}</dd>
                        </dl>
                    </div>
                </div>
            </li>
                ))}

        </ul>
    );
}

export default ThumbnailList
