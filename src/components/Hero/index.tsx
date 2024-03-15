import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from 'react';
// import { useLocalization } from '../../../src/app/LocalizationContext';

import { CircleArray2, CircleArray } from "./ShapeElements";


const Hero = () => {

  // const { t } = useLocalization();

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-primary pb-[120px] pt-[40px] md:pt-[80px] lg:pt-[100px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  hero.bannertext

                  
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  hero.subtitle
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h3 className="mb-5 text-2xl font-bold leading-tight text-white sm:text-[40px] sm:leading-[1.2]">
                  hero.sectiontitle
                </h3>
                <p className="mb-10 text-base text-body-color dark:text-dark-6">
                  hero.description1
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac nisl nulla. Sed sed aliquet purus, a pellentesque justo. Maecenas non tellus condimentum, tincidunt ex quis, tempus metus. Pellentesque eget massa porta, ultrices tortor ac, porttitor lectus. Pellentesque mollis, sem consequat accumsan accumsan, ex ante porttitor urna, at varius purus felis tempus leo.
                  <br /> <br />
                  hero.description2
                </p>
              </div>
            </div>
            <div className="text-center flex w-full px-4 lg:w-1/2">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/DGIXT7ce3vQ?si=TfcFoLH254L5WdQs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
