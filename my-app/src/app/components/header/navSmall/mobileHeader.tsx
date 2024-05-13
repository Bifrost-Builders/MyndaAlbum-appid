import { MobileSideBar } from './sideBar';
import clsx from 'clsx';

export default function MobileHeader({ isSticky }) {
  return (
    <header
      className={clsx(
        'h-20 w-full px-20 bg-black flex items-center justify-between',
        {
          'sticky top-0 left-0 z-50 shadow-lg': isSticky, 
        }
      )}
    >
      <h1 className="text-3xl font-bold text-white">Kolbri</h1>
      <MobileSideBar userMenu={false}/>
    </header>
  );
}
