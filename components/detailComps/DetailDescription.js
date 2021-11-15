const DetailDescription = (props) => {
    const metatoon = props.metatoon

    const metatoonSkin = props.metatoonSkin

    return (
            <div className="lg:w-1/2 px-4 mt-6 lg:mt-0 order-2 lg:order-none">

                <h2 className="text-4xl mb-2 font-semibold">{metatoon.metatoon}</h2>
                <table className="w-full mb-6">
                    <tbody>

                    <tr className="border-t">
                                <td className="py-3">Collection</td>
                                <td className="text-right">
                                    {metatoon.collection}
                                </td>
                            </tr>

                            <tr className="border-t">
                                <td className="py-3">Sub collection</td>
                                <td className="text-right">
                                    Six Virtues of Charles
                                </td>
                            </tr>
                        {/* <tr className="border-t">
                            <td className="py-3">Rarity</td>
                            <td className="text-right">
                                {metatoon.rarity}
                            </td>
                            </tr> */}

                            <tr className="border-t">
                                <td className="py-3">Avatar supply</td>
                                <td className="text-right">
                                {metatoon.avatarSupply}
                                </td>
                            </tr>

                            <tr className="border-t">
                                <td className="py-3">Avatar skins</td>
                                <td className="text-right">
                                    {metatoon.avatarSkins}
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <table className="w-full mb-6">
                    <tbody>

                        <tr className="border-t">
                            <td className="py-3">Skin</td>
                            <td className="text-right">
                                {metatoonSkin.skin}
                            </td>
                            </tr>

                            <tr className="border-t">
                                <td className="py-3">Skin supply</td>
                                <td className="text-right">
                                {metatoonSkin.skinSupply}
                                </td>
                            </tr>

                        </tbody>
                    </table>


                    <h2 className="text-2xl mb-2 font-semibold">Virtue</h2>
                    <p>{metatoon.virtue}</p>
                </div>

        )
}

export default DetailDescription
