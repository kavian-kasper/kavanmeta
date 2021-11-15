import { useState } from "react"
import Countdown from "react-countdown";
import ClipboardBtn from "./ClipboardBtn";
import axios from "axios";

export const MintBtn = (props) => {
    const price = props.price

    const [buttonMsg, setButtonMsg] = useState("MINT METATOON");
    const [mintAddress, setMintAddress] = useState(null);
    const mintButton = <button className="mintButton btn-primary-lg mx-auto" onClick={fetchPaymentAddress} dangerouslySetInnerHTML={{ __html:`${buttonMsg}`}}></button>

    const AddressExpired = () => <span className="mx-auto text-base text-red-700 font-bold">This address has now expired and cannot be used anymore.
                                <span className="block">Refresh this page to receive a new address.</span></span>;

    async function fetchPaymentAddress () {

        try {
            const mintBtnDOM = document.querySelector(".mintButton")
            setButtonMsg("FETCHING ADDRESS...")
            const fetchMintAddress =  await axios.get('/api/addy');
            const data = fetchMintAddress.data.addy
            console.log(data)

            mintBtnDOM.style.display = "none";
            setMintAddress(data.paymentAddress)
            }
            catch (error) {
            console.log(error)
            }
        }

        return (
        <div className=" mt-20 lg:mt-28 flex flex-col border-primary border-solid border-4 py-10">
            <div className="mx-auto">
            {mintButton}
           { mintAddress ?

               <div className="text-center">
                    <p className="mx-auto text-base text-gray-500">
                        Send exactly {price} ADA to this address:
                    </p>
                    <ClipboardBtn mintAddress={mintAddress} />
                </div>
           : "" }
            </div>


            <div className="mx-auto text-base text-gray-500">
                { mintAddress ?
                <div className="mt-5">
                <Countdown date={Date.now() + 60000*20}><AddressExpired /></Countdown>
                </div>
                : ""}
            </div>
        </div>
    )
}
