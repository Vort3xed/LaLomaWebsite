import Image from "next/image";
import { useTranslations } from 'next-intl';
import ResponsiveCarousel from "../ResponsiveCarousel/ResponsiveCarousel";


const About = () => {
  const t = useTranslations('About');
  return (
    <section
      id="about"
      className="bg-gray-7 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  {t('title')}
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  {t('description')}
                  <br /> <br />
                  {t('description2')}
                </p>

                <a
                  href="/#"
                  className="inline-flex items-center justify-center rounded-md bg-tertiary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  about.buttonText
                </a>
              </div>
            </div>

            <div className="text-center flex w-full px-4 lg:w-1/2">
              <ResponsiveCarousel />
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
