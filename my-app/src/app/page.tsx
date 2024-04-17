import Button from "./components/Buttons/seconderyButton";

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen w-full flex-col bg-black justify-center item-center">

      <img src={'/img/Group19.png'} className="h-96 w-96 m-auto rotate-90"></img>

      <section className="bg-black text-white font-bold h-full w-full flex flex-col justify-center item-center ">

        <div className="h-5 mt-5">
          <h1 className="text-3xl text-center">Post and connect <br /> to your group</h1>
        </div>

        <Button path={"/"} text={"Get started"}></Button>
        
      </section>
    </main>
  );
}
