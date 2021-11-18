import { theAcademic } from "../data/metatoonzData"
import DetailDescription from "../components/detailComps/DetailDescription"
import Breadcrumbs from "../components/UIcomponents/Breadcrumbs"
import { useState } from "react"
import Image from "next/image"

const TheAcademic = () => {

    const commonInfo = theAcademic[0]

    const primarySkin = theAcademic[1]

    const secondarySkin = theAcademic[2]

    const tertiarySkin = theAcademic[3]


    const viewprimarySkin = () => {
        return (
        <div className="mb-4">
            <video playsInline autoPlay loop controls src={primarySkin.video} className="detail-viewer h-400">
                </video>
        </div>
        )
    }
    const viewsecondarySkin = () => {
        return (
        <div className="mb-4">
            <video playsInline autoPlay loop controls src={secondarySkin.video} className="detail-viewer h-400">
                </video>
        </div>
        )
    }
    const viewtertiarySkin = () => {
        return (
        <div className="mb-4">
            <video playsInline autoPlay loop controls src={tertiarySkin.video} className="detail-viewer h-400">
                </video>
        </div>
        )
    }

    const ThreeDViewPrimary= () => {
        return (
            <div className="mb-4">
                <model-viewer className="detail-viewer" environment-image="neutral" shadow-intensity="1" shadow-softness="1" camera-controls
                src={primarySkin.threeDSrc} alt={commonInfo.threeDAlt} style={{backgroundColor: "rgb(230, 230, 230)", height: "420px", width: "auto"}} exposure="1" ar-status="not-presenting" loading="eager">
            </model-viewer>
        </div>
        )
    }

    const ThreeDViewSecondary= () => {
        return (
            <div className="mb-4">
                <model-viewer className="detail-viewer" environment-image="neutral" shadow-intensity="1" shadow-softness="1"
                src={secondarySkin.threeDSrc}
                alt={commonInfo.threeDAlt} style={{backgroundColor: "rgb(230, 230, 230)", height: "420px", width: "auto"}} exposure="1" ar-status="not-presenting" loading="eager" camera-controls>
            </model-viewer>
        </div>
        )
    }
    const ThreeDViewTertiary= () => {
        return (
            <div className="mb-4">
                <model-viewer className="detail-viewer" environment-image="neutral" shadow-intensity="1" shadow-softness="1"
                src={tertiarySkin.threeDSrc}
                alt={commonInfo.threeDAlt} style={{backgroundColor: "rgb(230, 230, 230)", height: "420px", width: "auto"}} exposure="1" ar-status="not-presenting" loading="eager" camera-controls>
            </model-viewer>
        </div>
        )
    }

    const [viewMode, setViewMode] = useState(viewprimarySkin);
    const [metatoonSkin, setmetatoonSkin] = useState(primarySkin)

    const changeViewMode = (viewMode) => {
        setViewMode(viewMode)
    }
    const changemetatoonSkin = (metatoonSkin) => {
        setmetatoonSkin(metatoonSkin)
    }

    const VideoBtn = (props) => {
        const videoThumbnail = props.videoThumbnail
        const viewSkin = props.viewSkin
        const metatoonSkin = props.metatoonSkin
        return (
        <button className="w-1/4 p-2"  onClick ={ () => { changeViewMode(viewSkin); changemetatoonSkin(metatoonSkin)} }>
            <Image height="135" width="100" src={videoThumbnail} alt="a clickable thumbnail" className="rounded shadow cursor-pointer" />
        </button>
        )
    }
    const ThreeDBtn = (props) => {
        const viewSkin = props.viewSkin
        const buttonThumbnail = props.buttonThumbnail
        const metatoonSkin = props.metatoonSkin
        return (
            <button className="w-1/4 p-2"  onClick ={ () => { changeViewMode(viewSkin); changemetatoonSkin(metatoonSkin)} }>
                <div className="relative">
                    <h3 className="z-40 absolute-center text-3xl font-nunito text-black">3D</h3>
                    <Image height="135" width="100" src={buttonThumbnail} alt="a clickable thumbnail" className="rounded shadow cursor-pointer opacity-50" />
                    </div>
            </button>
        )
    }


    return (
        <div>
            <title>#6 Academic</title>

            <meta property="og:title" content="#6 Academic - a Metatoon by KavanMeta" />
            <meta property="og:url" content="https://kavanmeta.io/theAcademic" />
            <meta property="og:image" content="https://kavanmeta.io/academic/academic-social.jpg" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="A mathematics scholar turned tech-CEO. His product development strategy is guided by the academic rigour of his past. In an industry ridden with young men fanatic about shipping early and often, he doggedly remains the adult in the room.."/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@kavanmeta"/>
            <meta name="twitter:url" content="https://kavanmeta.io/theAcademic"/>
            <meta name="twitter:title" content="#6 Academic - a Metatoon by KavanMeta"/>
            <meta name="twitter:description" content="A mathematics scholar turned tech-CEO. His product development strategy is guided by the academic rigour of his past. In an industry ridden with young men fanatic about shipping early and often, he doggedly remains the adult in the room."/>
            <meta name="twitter:image" content="https://kavanmeta.io/academic/academic-social.jpg/"/>

            <Breadcrumbs title={commonInfo.metatoon}/>
            <main className="flex flex-col justify-evenly sm:max-w-md  md:max-w-4xl md:flex-row mx-auto mt-14">

                <div className="lg:w-1/2 px-4">
                    {viewMode}
                    <div className="flex flex-wrap  max-w-sm mx-auto">
                        <VideoBtn  videoThumbnail={primarySkin.image} viewSkin={viewprimarySkin} metatoonSkin={primarySkin}/>
                        <VideoBtn  videoThumbnail={secondarySkin.image} viewSkin={viewsecondarySkin} metatoonSkin={secondarySkin}/>
                        <VideoBtn  videoThumbnail={tertiarySkin.image} viewSkin={viewtertiarySkin} metatoonSkin={tertiarySkin}/>
                        <ThreeDBtn viewSkin={ThreeDViewPrimary} buttonThumbnail={primarySkin.image} metatoonSkin={primarySkin}/>
                        <ThreeDBtn viewSkin={ThreeDViewSecondary} buttonThumbnail={secondarySkin.image} metatoonSkin={secondarySkin}/>
                        <ThreeDBtn viewSkin={ThreeDViewTertiary} buttonThumbnail={tertiarySkin.image} metatoonSkin={tertiarySkin}/>

                    </div>
                </div>
                <DetailDescription metatoon={commonInfo} metatoonSkin={metatoonSkin}/>

            </main>
        </div>
    )
}

export default TheAcademic
