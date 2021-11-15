import HeadInfo from "../components/Head";
import { MintBtn } from "../components/minting/MintBtn";
import { useState, useEffect} from "react";
import axios from "axios";
import MintCount from "../components/minting/MintCount";
import Link from "next/link";

const MintMetatoon = ({results}) => {

    const price = 30
    const initialStock = 937
    const reservationTime = 20

    const [nftCount, setNftCount] = useState(initialStock - results.sold - results.reserved);

    useEffect(() => {
        try {
          fetch ('/api/mintVisit')
        }
        catch (error) {
          console.log(error)
        }

        },[] );

    return (
        <div>
            <HeadInfo title="Mint Metatoonz"/>
        {nftCount === 0 ?
            <div className="min-h-screen text-center text-3xl font-nunito mt-20">The Metatoonz are sold out. Follow
                <Link href="https://twitter.com/KavanMeta">
            <a className="text-indigo-500" target="_blank"> @kavanmeta </a></Link>
            for news about future drops.</div>
            :
        <main className="flex flex-col justify-evenly mt-14 max-w-4xl mx-auto px-2">

        <MintCount nftCount={nftCount} initialStock={initialStock}/>
            <div>

                        <h3 className="text-2xl font-nunito text-gray-900 tracking-tight sm:text-3xl">How to mint in 4 easy steps.</h3>
                        <p className="mt-2 text-base text-gray-500"> Minting works by <span className="text-black font-bold">manually entering a temporary address</span> into <span className="text-black font-bold">your own wallet</span> and
                            <span className="text-black font-bold"> sending the exact amount</span> of ADA specified by the NFT creator.
                            Once the address receives the amount, it will <span className="text-black font-bold">automatically mint a random</span> Metatoon and send it to your wallet.
                            Good luck!
                        </p>



                <dl className="mt-10 space-y-10">
                    <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  bg-gray-900 text-white font-extrabold text-xl">
                                1
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900 font-nunito">Click on the MINT METATOON button below. An ADA address will appear.</p>
                        </dt>
                        <dd className="mt-1 ml-16 text-base text-gray-500">
                            This address will be valid for {reservationTime} minutes. If you want to reset the timer, simply refresh this page, click the mint button again, and use the new address.
                        </dd>
                    </div>

                    <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  bg-gray-900 text-white font-extrabold text-xl">
                                        2
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 font-nunito">Copy the address. Paste it into your ADA wallet&apos;s SEND field.</p>
                                </dt>
                                <dd className="mt-1 ml-16 text-base text-gray-500">
                                <span className="text-red-700 font-bold">Do not send money from an exchange</span> (Coinbase, Binance, KuCoin etc.). Your Ada will be lost. Instead, use wallets such as Nami, Daedalus or Yoroi.
                                </dd>
                            </div>

                            <div className="relative">
                            <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  bg-gray-900 text-white font-extrabold text-xl">
                                        3
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 font-nunito">Enter the amount to be sent to <span className="font-extrabold text-black">EXACTLY {price} ADA</span>.</p>
                                </dt>
                                <dd className="mt-1 ml-16 text-base text-gray-500">
                                    No more, no less. Simply {price} ADA. Otherwise the automated minting will fail.
                                </dd>
                            </div>

                            <div className="relative">
                            <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  bg-gray-900 text-white font-extrabold text-xl">
                                        4
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 font-nunito">Click send and voila! Wait for a few minutes and refresh your wallet to receive your NFT.</p>
                                </dt>
                                <dd className="mt-1 ml-16 text-base text-gray-500">
                                If you want to mint another Metatoon, simply refresh the page and repeat the process.
                                    NOTE: If the Cardano network is unusually congested while you&apos;re minting, it may take longer for you to receive your NFT.
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <MintBtn price={price} />
                    <div>

                    </div>

        </main>
     }
        </div>
    )
}
export default MintMetatoon

export async function getServerSideProps () {

    try {

    const URL = "https://api.nft-maker.io/GetCounts/" + process.env.APIKEY + process.env.PROJECTID;
    const {data} = await axios.get(URL);
    console.log(data)
    return {
        props: {
            results: data
        }
    }
} catch (error) {
    console.log(error)
}
}
