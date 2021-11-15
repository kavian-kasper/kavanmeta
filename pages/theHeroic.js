import { theHeroic } from "../data/metatoonzData"
import DetailDescription from "../components/detailComps/DetailDescription"
import Breadcrumbs from "../components/UIcomponents/Breadcrumbs"
import HeadInfo from "../components/Head"
import { useState } from "react"

const TheHeroic = () => {

    const commonInfo = theHeroic[0]

    const primarySkin = theHeroic[1]

    const secondarySkin = theHeroic[2]

    const viewprimarySkin = () => {
        return (
        <div className="mb-4">
            <video autoPlay playsinline loop controls src={primarySkin.video} className="detail-viewer h-400">
                </video>
        </div>
        )
    }
    const viewsecondarySkin = () => {
        return (
        <div className="mb-4">
            <video autoPlay playsinline  loop controls src={secondarySkin.video} className="detail-viewer h-400">
                </video>
        </div>
        )
    }

    const ThreeDViewPrimary= () => {
        return (
            <div className="mb-4">
                <model-viewer className="detail-viewer" environment-image="neutral" shadow-intensity="1" shadow-softness="1"
                src={primarySkin.threeDSrc}
                alt={commonInfo.threeDAlt} style={{backgroundColor: "rgb(230, 230, 230)", height: "420px", width: "auto"}} exposure="0.7" ar-status="not-presenting" loading="eager" camera-controls>
            </model-viewer>
        </div>
        )
    }
    const ThreeDViewSecondary= () => {
        return (
            <div className="mb-4">
                <model-viewer className="detail-viewer" environment-image="neutral" shadow-intensity="1" shadow-softness="1"
                src={secondarySkin.threeDSrc}
                alt={commonInfo.threeDAlt} style={{backgroundColor: "rgb(230, 230, 230)", height: "420px", width: "auto"}} exposure="0.7" ar-status="not-presenting" loading="eager" camera-controls>
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
        <button className="w-1/4  p-2"  onClick ={ () => { changeViewMode(viewSkin); changemetatoonSkin(metatoonSkin)} }>
            <img src={videoThumbnail} alt="a clickable thumbnail" className="rounded shadow cursor-pointer" />
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
                    <img src={buttonThumbnail} alt="a clickable thumbnail" className="rounded shadow cursor-pointer opacity-50" />
                    </div>
            </button>
        )
    }




    return (
        <div>
            <HeadInfo title="Heroic"/>
            <Breadcrumbs title={commonInfo.metatoon}/>
            <main className="flex flex-col justify-evenly sm:max-w-md  md:max-w-4xl md:flex-row mx-auto mt-14">

                <div className="lg:w-1/2 px-4">
                    {viewMode}
                    <div className="flex flex-wrap  max-w-sm mx-auto">
                        <VideoBtn  videoThumbnail={primarySkin.image} viewSkin={viewprimarySkin} metatoonSkin={primarySkin}/>
                        <VideoBtn  videoThumbnail={secondarySkin.image} viewSkin={viewsecondarySkin} metatoonSkin={secondarySkin}/>
                        <ThreeDBtn viewSkin={ThreeDViewPrimary} buttonThumbnail={primarySkin.image} metatoonSkin={primarySkin}/>
                        <ThreeDBtn viewSkin={ThreeDViewSecondary} buttonThumbnail={secondarySkin.image} metatoonSkin={secondarySkin}/>

                    </div>
                </div>
                <DetailDescription metatoon={commonInfo} metatoonSkin={metatoonSkin}/>

            </main>
        </div>
    )
}

export default TheHeroic
