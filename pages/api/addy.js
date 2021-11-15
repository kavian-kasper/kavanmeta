import axios from "axios";

export default async (req, res) => {
    const URL = "https://api.nft-maker.io/GetAddressForRandomNftSale/" + process.env.APIKEY + process.env.PROJECTID + "1"
    const response = await axios.get(URL);
    res.status(200).json({ addy: response.data });
}
