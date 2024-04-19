import Button from "./components/Buttons/seconderyButton";
import Image from "next/image";

//Not responsive -> mobile(iphone 13 T)
export default function Home() {
  return (
    <>
      <section className="min-h-screen h-full w-full bg-black text-white px-10 relative">

      <section className="h-fit w-full flex flex-col items-center">

            <Image
            src={'/img/Group3.png'}
            alt="LandingImg"
            width={300}
            height={300}
            className="h-96 w-full md:max-w-[500px] md:max-h-fit md:mb-2 rotate-[120deg]"
            ></Image>

        <div>

          <h1 className="text-3xl text-white text-center font-bold">Post and connect <br></br> to your group</h1>

          <button className="h-12 w-60 bg-white text-black rounded font-bold text-2xl my-4">Get started</button>

        </div>

      </section>

      <section className="min-h-screen h-full mt-4">

        <h1 className="font-bold text-xl">Discover by the people</h1>

        <section className="min-h-96 h-full w-full grid grid-cols-2 gap-2 my-1 mt-3">

            <Image
              src={'/img/mynd10.jpg'}
              alt="mynd10"
              height={300}
              width={300}
              className="h-full w-full bg-red-500 row-span-2 rounded-[13px]"
            ></Image>

            <Image
              src={'/img/mynd9.jpg'}
              alt="mynd4"
              height={300}
              width={300}
              className="h-full w-full bg-blue-500 rounded-[13px]"
            ></Image>

            <Image
              src={'/img/mynd8.jpg'}
              alt="mynd8"
              height={300}
              width={300}
              className="h-full w-full bg-yellow-500 rounded-[13px]"
            ></Image>

            <Image
              src={'/img/mynd4.jpg'}
              alt="Rose Image"
              width={300}
              height={300}
              className="h-44 w-full bg-orange-500 col-span-2 rounded-[13px]"
            ></Image>

        </section>

        <div className="w-full flex justify-center">
          <button className="h-10 w-32 bg-white text-black rounded font-bold text-lg my-4">Get started</button>
        </div>

      </section>

      <div className="absolute bottom-5 left-0 bg-black">
        <h1 className="text-9xl font-bold">Valko</h1>
      </div>

      </section>
    
    </>
  );
}
