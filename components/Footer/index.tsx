import './style.css';

import Button from '../Button/Button';
import { navigation } from '../Navbar/navigation';

export default function Footer() {
    return (
      <footer className='footer flex justify-center items-center bg-footer text-neutra-200'>
        <div className='flex flex-1 justify-center items-center flex-wrap gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='flex-1 min-w-[400px]'>
            <h3 className='text-neutra-50 font-roboto font-normal text-4xl py-1'>Quer receber nossas novidades?</h3>
            <span className='text-neutra-500 font-roboto font-normal py-1'>Enviaremos um e-mail por semana, sem spam.</span>
          </div>

          <div className='flex-1'>
            <ul>
              <li className='text-neutra-50 font-roboto font-normal py-1'>Menu</li>
              {navigation.map((item) => (
                  <li key={item.name} className='text-neutra-500 font-roboto font-normal py-1'>
                    <a href={item.href}> {item.name}</a>
                  </li>
                ))}
            </ul>
          </div>

          <div className='flex-1'>
            <span className='text-neutra-50 font-roboto font-normal py-1'>Endereço</span>
            <p className='text-neutra-500 font-roboto font-normal py-1'>Rua Espirito Santo, Setor 05, Ariquemes- RO</p>
          </div>

          <div className='flex-1'>
            <Button>Solicitar orçamento</Button>
          </div>
        </div>
      </footer>
    );
  }