import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaYoutube } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiNodedotjs, SiExpress } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href='https://www.youtube.com/channel/UC2o3VrJLpZ6fVVpTxKy51Pw'>
                       <FaYoutube /> 
                    </a>
            </span>
            <span className="bannerIcon">
              <a href='https://twitter.com/sawant_arpita_'><FaTwitter /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/arpita-sawant-ba025a22a/'>
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs/>
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media