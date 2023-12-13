
import Button from '../Button';
import ButtonsSocial from '../ButtonsSocial';
import Newsletter from '../Newsletter';
import { navigation } from '../Navbar/navigation';

import './style.css';

export default function Footer() {
    return (
      <footer className='footer flex justify-center items-center bg-footer text-neutra-200'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8'>
          <div className='col-span-1 md:col-span-2'>
            <h3 className='text-neutra-50 font-roboto font-normal leading-10 text-4xl pb-4'>Quer receber nossas novidades?</h3>
            <span className='block text-neutra-500 font-roboto font-normal leading-7 pb-4'>Enviaremos um e-mail por semana, sem spam.</span>
            <Newsletter />
          </div>

          <div className='col-span-1'>
            <ul>
              <li className='text-neutra-50 font-roboto font-normal leading-7 py-1'>Menu</li>
              {navigation.map((item) => (
                  <li key={item.name} className='text-neutra-500 hover:text-semantica-1 font-roboto font-normal leading-7 py-1'>
                    <a href={item.href}> {item.name}</a>
                  </li>
                ))}
            </ul>
          </div>

          <div className='col-span-1'>
            <span className='text-neutra-50 font-roboto font-normal leading-7	 py-1'>Endereço</span>
            <p className='text-neutra-500 font-roboto font-normal leading-7	 py-1'>Rua Espirito Santo, Setor 05, Ariquemes- RO</p>
          </div>

          <div className='flex flex-col items-center md:items-center lg:items-start col-span-1 md:col-span-2 lg:col-span-1'>
            <Button className='w-full lg:w-auto mb-6'>Solicitar orçamento</Button>
            <ButtonsSocial />
          </div>
        </div>
      </footer>
    );
  }