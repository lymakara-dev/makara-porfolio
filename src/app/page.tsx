import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white w-full flex flex-row p-10">
      <div className="grow flex flex-col gap-10 items-center justify-center">
        <div className="text-black text-7xl font-bold">I'm Ly Makara</div>
        <div className="text-black font-medium text-3xl">
          Software Engineer Student at ITC
        </div>
      </div>
      <Image
        className="rounded-full"
        src="/makara.jpg"
        width={500}
        height={500}
        alt="makara"
      />
    </div>
  );
}
