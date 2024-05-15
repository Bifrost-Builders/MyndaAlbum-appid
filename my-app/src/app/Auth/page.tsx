import ImageGrid from './comp/imagesGrid';
import AuthBlock from './comp/authBlock';
import { appName } from "@/app/lib/sharedInfo";
export default function LoginPage() {
    return (
      <section className="bg-black w-full h-screen grid grid-cols-3 place-items-end max-md:flex max-md:justify-center max-md:items-center">  
  <section className="h-screen w-full bg-black relative col-span-2 flex justify-center items-center max-md:hidden">
    <div className="bg-gradient-to-br from-pink-400 via-blue-400 to-green-400 h-32 w-full blur-3xl absolute top-2"></div>
    <h1 className="text-white text-8xl font-extrabold">{appName}</h1>
  </section>

 <div className="w-[366px] h-screen relative overflow-hidden bg-black">
      <img
        src="https://ucarecdn.com/ac619333-2351-48eb-85b2-5aa5c582720a/"
        className="w-[136px] h-[163px] absolute left-[-20px] top-1.5 rounded-xl object-cover"
      /><img
        src="https://ucarecdn.com/fa8b0b43-c9be-4663-a19d-1777e6f3b31f/"
        className="w-[136px] h-[163px] absolute left-[-20px] top-[193px] rounded-xl object-cover"
      /><img
        src="https://ucarecdn.com/699fbb11-8af9-47e3-a990-c4b6aaef3255/"
        className="w-[136px] h-[163px] absolute left-[126px] top-[267px] rounded-xl object-cover "
      /><img
        src="https://ucarecdn.com/bf2fecec-9987-43cc-96de-4fb63de90581/"
        className="w-[136px] h-[163px] absolute left-[272px] top-[332px] rounded-xl object-cover "
      /><img
        src="https://ucarecdn.com/9ba8f0cf-f1ab-4324-8228-e13272eddf0a/"
        className="w-[136px] h-[163px] absolute left-[126px] -top-[90px] rounded-xl object-cover"
      /><img
        src="https://ucarecdn.com/52bd53fb-cdd1-4b56-997f-255ab1e2e8d0/"
        className="w-[136px] h-[163px] absolute left-[272px] top-[-55px] rounded-xl object-cover "
      /><img
        src="https://ucarecdn.com/ed809db1-c1c6-4d8c-9497-4c8af39561d6/"
        className="w-[136px] h-[163px] absolute left-[126px] top-[87px] rounded-xl object-cover "
      /><img
        src="https://ucarecdn.com/6b223be7-1fa3-4594-b0d5-55308ff73d7e/"
        className="w-[136px] h-[163px] absolute left-[272px] top-[133px] rounded-xl object-cover "
      /><img
        src="https://ucarecdn.com/9ba8f0cf-f1ab-4324-8228-e13272eddf0a/"
        className="w-[38px] h-[38px] absolute left-[60px] top-[476px] object-cover"
          />
      <div className='bg-black h-12 w-full absolute top-[330px] blur-xl'></div>
      <div
                  className="w-[375px] h-[442px] absolute left-[-1px] top-[369px] bg-black"
                  style={{ boxShadow: "box-shadow: 0px 5px 100px 85px #000;"}}
      ></div>
      
      <AuthBlock />

    </div>
</section>
        
    );
}