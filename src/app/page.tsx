import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-500 w-full flex flex-row p-10">
      <div className="grow flex flex-col items-center justify-center">
        <div className="text-white text-7xl">Ly Makara</div>
        <div>Software Engineer Student</div>
      </div>
      <Image src="/makara.jpg" width={500} height={500} alt="makara" />
    </div>
  );
}
