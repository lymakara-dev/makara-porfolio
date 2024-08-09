import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <div className="bg-white w-full flex md:flex-row flex-col p-4">
        <div className="grow flex flex-col gap-6 items-center justify-center pb-8">
          <h1 className="text-black md:text-6xl text-4xl font-bold">
            I&#39;m <span className="text-blue-500">Ly Makara</span>
          </h1>
          <p className="text-black font-medium md:text-3xl text-lg">
            Software Engineer Student at ITC
          </p>
        </div>
        <Image
          className="shadow-lg"
          src="/makara.jpg"
          priority={true}
          width={500}
          height={500}
          alt="makara"
        />
      </div>
    </>
  );
}
