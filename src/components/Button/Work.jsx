import React from 'react'
import Gallery from './Gallery'
import img from '../../assets/images/nft.png'
import img1 from '../../assets/images/yono.png'
import img2 from '../../assets/images/digi.png'

const Work = () => {
  return (
    <div>
       <Gallery name="NFT Marketplace" link="https://medium.com/@anushapatil2208/nft-marketplace-ux-case-study-c2848f645254" category="Personal" image={img} />
       <Gallery name="Redesigning YONO SBI Banking App" link="https://medium.com/@anushapatil2208/case-study-redesigning-a-mobile-banking-app-ae5cf0e8e21a" category="Personal" image={img1} />
       <Gallery name="Digiayurveda" category="Client" image={img2} />       
    </div>
  )
}

export default Work