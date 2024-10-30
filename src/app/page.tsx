import Image from 'next/image';
import ContactMeButtons from './components/contactMeButtons';
import GoogleMapsLink from './components/googleMapsLink';
import MoreAboutButton from './components/moreAboutButton';

export default function Home() {
  return (
    <>
      <div className="relative h-[70vh] md:h-[75vh] bg-gradient-to-br from-base-bg via-gray-700 to-base-bg">
        <Image
          src={'/images/black_c.webp'}
          alt="spain cost"
          width={0}
          height={0}
          sizes="100vw"
          className="mix-blend-overlay h-[70vh] md:h-[75vh]  w-full object-cover object-center object-no-repeat opacity-50"
        />
        <div className="absolute top-[50%] -translate-y-[50%] grid gap-y-7 md:w-2/3 lg:w-3/5 p-8 md:px-12 xl:px-20 xl:pt-20  font-semibold">
          <div>
            <p className="mb-3 mt-5 md:mt-10 lg:mt-5 text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tighter">
              Hi, I am
            </p>
            <div className="bg-gradient-to-r from-gray-bg  via-salad  to-[#550290] text-transparent bg-clip-text">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Pavlo Lystopad</h1>
              <p className="mt-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                {`< FullStackDeveloper />`}
              </p>
            </div>
          </div>
          <p className="sm:w-4/5 text-sm md:text-base lg:text-lg font-semibold ">
            A Kyiv based Full-stack developer passionate about building accessible and user friendly
            websites.
          </p>
          <GoogleMapsLink />
          <ContactMeButtons />
        </div>
      </div>
      <div className="px-8 lg:px-12 xl:px-20 py-4 bg-second-bg bg-[url('/itb.svg')] bg-right bg-no-repeat bg-contain">
        <h2 className="text-xl">About me</h2>
        <p className="my-2 md:my-3 font-light text-sm lg:text-base sm:w-4/5 md:w-3/4 ">
          I am a full stack developer (React.js & Node.js) with a focus on creating exceptional
          digital experiences that are accessible, visually appealing, and responsive. Even though I
          have been creating web applications for only more than 1 year, I am rapidly gaining
          experience because I really like to learn new technologies.
        </p>
        <MoreAboutButton />
      </div>
    </>
  );
}
