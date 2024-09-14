import Image from 'next/image';
import { londrinaSolid } from './_lib/fonts';
import portrait from '@/app/_assets/Portrait.png';

export default function Home() {
  return (
    <main className='relative flex-1 py-10'>
      <h1
        className={`absolute -z-10 text-[400px] text-zinc-800 -left-20 -top-0 leading-tight ${londrinaSolid.className} md:block hidden`}
      >
        Tattoo
      </h1>
      <div className='font-black text-zinc-600 md:text-8xl text-4xl md:pt-56 pt-16 uppercase'>
        <h2>Inspire-se</h2>
        <h2>Expresse-se</h2>
        <h2 className='text-yellow-400'>Tatue-se</h2>
      </div>

      <Image
        width='350'
        className='absolute hidden md:block -right-16 -bottom-20  grayscale -z-10'
        src={portrait}
        alt='Retrato de Sandro Luz'
      />
    </main>
  );
}
