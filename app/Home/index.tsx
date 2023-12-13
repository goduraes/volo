import Banner from './Banner';
import Companies from './Companies';
import ServicesOffered from './ServicesOffered';

export default function Home() {
  return (
    <>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <Banner />
        <Companies />
      </div>
      <ServicesOffered />
    </>
  );
}
