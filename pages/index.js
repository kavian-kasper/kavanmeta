import { theAcademic, theCommander, theEasyRider, theHeroic, theExplorer, theMachiavellian} from '../data/metatoonzData';
import ThumbnailList from '../components/UIcomponents/ThumbnailList';
import HeadInfo from '../components/Head';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {

  const metatoonz = [theAcademic, theCommander, theHeroic, theEasyRider, theExplorer, theMachiavellian]


  useEffect(() => {
    const windowWidth = window.screen.availWidth
    if (windowWidth < 767) {

    }
  }, [] );

  useEffect(() => {
    try {
      fetch ('/api/indexVisit')
    }
    catch (error) {
      console.log(error)
    }

    },[] );

  const Banner = () => {
    const [linkMsg, setLinkMsg] = useState("live")

    const handleLinkMsg = () => {
      setLinkMsg("live...")
    }
    return (
      <div className="relative">

            <h1 className="absolute text-3xl bottom-left md:top-left md:text-4xl
            font-nunito text-black md:text-white md:opacity-80 opacity-80 tracking-wide z-40">
              Metatoon minting is
              <span className="block">
              <Link href="/mintMetatoon">
              <a className="uppercase accent hover:text-black" onClick={handleLinkMsg}> {linkMsg} </a>
              </Link>
                on Cardano.
              </span>
            </h1>

        <picture>
        <source media="(min-width:768px)" srcSet="./metatoons-banner.jpg"/>
        <img src="./metatoons-banner-mobile.jpg"
          alt="All the Metatoons standing in a horizontal line"
          className="banner bg-contain bg-no-repeat"/>
        </picture>
        </div>
    )
  }

  return (
    <div>
      <HeadInfo title="Home"/>
        <Banner/>
          <main className="w-full px-2 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-10">

          <ThumbnailList metatoonz={metatoonz} />

          <section className="mt-20">
          <h3 className="mb-4 bg-black font-nunito text-2xl font-extrabold text-gray-50 p-4 tracking-tight sm:text-3xl">
            KavanMeta & Metatoons
          </h3>
              <dt>
                <p className="font-nunito ml-4 text-lg leading-6 font-medium text-gray-900">
                  Who is KavanMeta?</p>
              </dt>

            <dd className="ml-4 text-base text-gray-500 mb-6">
            As far as NFTs go, I&apos;m a one man team. I&apos;m an artist/designer and capable frontend developer who discovered the wild west of crypto in February 2021. After a retail investor&apos;s rite of passage (getting rekt on coins), I discovered, got addicted, and made it on NFTs.
            Buying art directly from artists, building collections, and watching the development on Twitter made the internet exciting to me.
            The thrill of being a part of an entirely new space really got to me, and I became passionate about creating my own meta personality as an NFT artist comitted to making only the finest digital assets.
            </dd>

            <dt>
                <p className="font-nunito ml-4 text-lg leading-6 font-medium text-gray-900">
                  What is Metatoons?</p>
              </dt>

            <dd className="ml-4 text-base text-gray-500 mb-6">
            While I&apos;m thrilled that virtual art has finally discovered its native market as NFT artworks, I&apos;m even more thrilled about the future of virtual art that can have a life beyond being stationary objects of admiration.
            Metatoons is a project that was initially inspired by the voxelized Meebits avatars by Larvalabs. The idea of being able to import your own avatar into a virtual world is not a fiction, but incrementally becoming a reality.
            The Metatoons are a continuous series of avatars envisioned for such a future. There currently exist six Metatoon avatars.
            </dd>

            <dt>
                <p className="font-nunito ml-4 text-lg leading-6 font-medium text-gray-900">
                  What is Six Virtues of Charles?</p>
              </dt>

            <dd className="mb-6 ml-4 text-base text-gray-500">
            Few, if any, is more prolific and vocal about their humanitarian dedication to to improving the systems of the world through crypto than Charles Hoskinson.
            The first collection of Metatoons consists of six Metatoons dedicated to six of his virtues. These six qualities served as the principal ideas for the design of each avatar.
            Also, the faces of the avatars are modelled after Charles&apos;s face. Photos of his face were simplified into a pixelated portrait, and simplified even further by turning the pixels into voxels.
            </dd>

            <div className="mb-6 max-w-sm md:max-w-md lg:max-w-lg mr-4">
            <img src="./charles-comparison.jpg" alt="3 comparison of charles face i different styles" className="ml-4 h-40 object-contain"/>
            </div>

            <dt>
                <p className="font-nunito ml-4 text-lg leading-6 font-medium text-gray-900">
                  What is the future of kavanmeta.io?</p>
              </dt>

            <dd className="mb-6 ml-4 text-base text-gray-500">
            That depends on the future of NFTs. As someone who draw and code, I feel positioned to keep up with what happens at the forefront of NFT development.
            Some to-do&apos;s are creating comissioned, bespoke Metatoons, and rigging the Metatoons if they can be used in a future virtual world.
            </dd>
          </section>

      </main>


    </div>
  )
}
