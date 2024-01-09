'use client';
// import { Button } from '../ui/button';
import { setTheme } from './action';

export default function ThemeToggle({
  currentTheme,
}: {
  currentTheme: string;
}) {
  const changeTheme = () => setTheme(currentTheme);

  return currentTheme === 'light' ? (
    <>
      <button
        type='button'
        // variant='outline'
        // size='icon'
        className='border-none text-xs hover:bg-transparent'
        onClick={changeTheme}
      >
        dark
        {/* <svg */}
        {/*   className='w-2 h-2 md:w-3 md:h-3' */}
        {/*   viewBox='0 0 15 15' */}
        {/*   fill='#000' */}
        {/*   xmlns='http://www.w3.org/2000/svg' */}
        {/* > */}
        {/*   <path */}
        {/*     d='M1.66 11.362A6.5 6.5 0 007.693.502a7 7 0 11-6.031 10.86z' */}
        {/*     strokeLinejoin='round' */}
        {/*   ></path> */}
        {/* </svg> */}
      </button>
      <hr className='w-8 border-border' />
    </>
  ) : (
    <>
      <button
        type='button'
        className='border-none text-xs hover:bg-transparent'
        onClick={changeTheme}
      >
        light
        {/* <svg */}
        {/*   className='w-4 h-4 stroke-foreground-rgb' */}
        {/*   stroke='white' */}
        {/*   viewBox='0 0 15 15' */}
        {/*   xmlns='http://www.w3.org/2000/svg' */}
        {/* > */}
        {/*   <path */}
        {/*     d='M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998z' */}
        {/*     strokeLinecap='square' */}
        {/*   ></path> */}
        {/* </svg> */}
      </button>
      <hr className='w-8 border-border' />
    </>
  );
}
