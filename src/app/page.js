import Image from "next/image";
import { arithemania, shunya, shunyaUpdated, social } from "../../public";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen flex flex-col items-center">
        <Image
          src={shunyaUpdated}
          alt=""
          width={400}
        />
        <Image
          src={arithemania}
          alt=""
          width={600}
        />
        <Image
          src={social}
          alt=""
          width={200}
          height={200}
        />
      </main>
    </>
  );
}
