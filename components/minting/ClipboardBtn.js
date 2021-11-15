import { useState } from "react";

const ClipboardBtn = (props) => {
    const mintAddress = props.mintAddress;

    const [buttonText, setButtonText] = useState("COPY ADDRESS");

    const inputHandler = event => {
    setmintAddress(event.target.value);
  }

  const copy = async () => {
    await navigator.clipboard.writeText(mintAddress);
    setButtonText("COPIED!")
  }

    return (
        <div>
            <p className="break-all flex justify-center mx-auto py-5 px-4 text-lg leading-6 font-medium text-gray-500 max-w-full" type="text" onChange={inputHandler} disabled={true}>
            {mintAddress}</p>
            <button className="btn-secondary-sm flex mx-auto" onClick={copy} disabled={!mintAddress}>{buttonText}</button>
        </div>
    )
}

export default ClipboardBtn
