import axios from "axios";

export default async (req, res) => {
    const URL = "https://api.countapi.xyz/hit/kavanmetaIndex/gimmeshelter";
    const response = await axios.get(URL);
    res.status(200).json({ visited: response.data });
}
