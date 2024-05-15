import { MobileSideBar } from './sideBar';
import clsx from 'clsx';
import { appName } from "@/app/lib/sharedInfo";

export default function MobileHeader({ isSticky }) {
  return (
    <header
      className={clsx(
        'h-20 w-full px-5 bg-black flex items-center justify-between',
        {
          'sticky top-0 left-0 z-50 shadow-lg': isSticky, 
        }
      )}
    >
      <h1 className="text-3xl font-bold text-white">{appName}</h1>
      <MobileSideBar userMenu={false}/>
    </header>
  );
}
