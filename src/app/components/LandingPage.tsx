import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <div className="bg-white w-full flex md:flex-row flex-col p-10">
        <div className="grow flex flex-col gap-10 items-center justify-center">
          <div className="text-black text-7xl font-bold">I&aposm Ly Makara</div>
          <div className="text-black font-medium text-3xl">
            Software Engineer Student at ITC
          </div>
        </div>
        <Image
          className="rounded-lg"
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
