import Image from 'next/image';
import ContactMeButtons from './components/contactMeButtons';
import GoogleMapsLink from './components/googleMapsLink';
import MoreAboutButton from './components/moreAboutButton';

export default function Home() {
  return (
    <>
      <div className="relative h-[70vh] md:h-[75vh] lg:h-[78vh] xl:h-[80vh] bg-gradient-to-br from-base-bg via-gray-700 to-base-bg">
        <Image
          src={'/images/black_c.webp'}
          alt="spain cost"
          width={0}
          height={0}
          sizes="100vw"
          className="mix-blend-overlay h-[70vh] md:h-[75vh] lg:h-[78vh] xl:h-[80vh] w-full object-cover object-center object-no-repeat opacity-50"
        />
        <div className="absolute top-11 xl:top-16 left-0 grid gap-y-6 2xl:gap-y-7 md:w-2/3 lg:w-3/5 p-8 md:px-12 xl:px-20 xl:pt-4 2xl:pt-6  font-semibold">
          <div>
            <div>
              <p className="mb-3 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter">
                Hi, I am
              </p>
              <div className="mb-6 sm:w-[300px] md:w-[420px] 2xl:w-[540px] bg-gradient-to-r from-gray-bg  via-salad  to-[#550290] text-transparent bg-clip-text">
                <h1 className="mb-3 text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                  Pavlo Lystopad
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
                  {`< FullStackDeveloper />`}
                </p>
              </div>
              <p className="sm:w-4/5 text-sm md:text-base lg:text-lg font-semibold ">
                A Kyiv based Full-stack developer passionate about building accessible and user
                friendly websites.
              </p>
            </div>
          </div>
          <GoogleMapsLink />
          <ContactMeButtons />
        </div>
      </div>
      <div className="px-8 lg:px-12 xl:px-20 py-4 bg-second-bg bg-[url('/itb.svg')] bg-right bg-no-repeat bg-contain">
        <h2 className="text-xl">About me</h2>
        <p className="my-2 md:my-3 font-light text-sm lg:text-base sm:w-4/5 md:w-3/4 ">
          I'm a full stack developer (React.js & Node.js) with a focus on creating exceptional
          digital experiences that are accessible, visually appealing, and responsive. Although I've
          only been creating web applications for more than 1 year, I am rapidly gaining experience
          because I like to learn new technologies.
        </p>
        <MoreAboutButton />
      </div>
    </>
  );
}
