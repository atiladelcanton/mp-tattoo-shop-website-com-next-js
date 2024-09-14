import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import tattooImage from '@/app/_assets/tattoo.png';
export default function Servicos() {
  return (
    <main className='flex gap-1 justify-between'>
      <section className=''>
        <h1 className='text-3xl font-black  mt-12'>
          Entre em <span className='text-yellow-400'>Contrato</span>
        </h1>
        <p className='mt-10 font-light text-zinc-400'>
          Clique no botão abaixo e envie uma mensagem. Vamos conversar!
        </p>
        <Link
          target='_blank'
          href='https://wa.me//5511997111111?text=Ol%C3%A1%20Sandro%21%20Entrei%20pelo%20seu%20site%20e%20tenho%20interesse%20em%20uma%20tattoo'
        >
          <button className='bg-zinc-700 p-4 border-b-4 border-zinc-800 rounded flex items-center gap-4 mt-10 transition-transform duration-300 hover:bg-[#25D366] hover:-translate-y-1'>
            <FaWhatsapp className='w-8 h-8' />
            <div>
              <p>Enviar Whatsapp</p>
              <p className='text-zinc-500 text-xs'>(+55 11) 99711 1111</p>
            </div>
          </button>
        </Link>
      </section>
      <Image width='600' src={tattooImage} alt='Sandro Tattoo' />
    </main>
  );
}
