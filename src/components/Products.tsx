import { useFetch } from '../hooks/useFetch';
import { store } from '../store/carrito';
import { lasPlatas } from '../utils/currency';
import { CartContainer } from './CartContainer';

export const Products = ({ type }: { type: string }) => {
  const { productos } = useFetch(type);
  const item = store((pro) => pro.productos);
  const agregarProducto = store((pro) => pro.agregarProducto);
  return (
    <section className='max-w-screen-xl mx-auto px-4 relative'>
      <CartContainer />
      <div className='grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))]'>
        {productos.map(({ _id, titulo, img, precio, url }) => {
          const exist = item.find((pro) => pro._id === _id);
          const bgc = exist
            ? 'bg-red-900 hover:bg-red-700 '
            : 'bg-slate-900 hover:bg-gray-700 ';

          const texto = !exist ? ' Agregar al carrito' : 'Agregado';
          return (
            <div
              key={_id}
              className='rounded-3xl bg-white  pb-3 text-black flex flex-col '
            >
              <a href={url} target='_blank'>
                <img
                  src={img}
                  alt={titulo}
                  className='rounded-3xl h-[330px] filter brightness-90 cursor-pointer object-fill w-full'
                />
              </a>
              <div className='px-2'>
                <div className='flex justify-between pt-5 px-2 pb-2'>
                  <h2 className='font-bold line-clamp-2 text-lg opacity-90 w-[70%] text-balance'>
                    {titulo}
                  </h2>
                  <p className='text-red-600 font-bold text-xl'>{precio}</p>
                </div>
                <div className='flex justify-center'>
                  <button
                    onClick={() => {
                      agregarProducto({ _id, titulo, img, precio });
                    }}
                    className={`flex focus:outline-none items-center justify-center rounded-md  px-5 py-2.5 text-center text-sm font-medium ${bgc} text-white  focus:outline-none focus:ring-4 focus:ring-blue-300`}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='mr-2 h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                    {texto}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
