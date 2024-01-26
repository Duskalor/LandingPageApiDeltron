import { store } from '../store/carrito';
import cart from '/cart.svg';
export const CartContainer = () => {
  const productos = store((state) => state.productos);
  const SetCartToggle = store((state) => state.SetCartToggle);
  return (
    <section>
      <div
        onClick={() => SetCartToggle()}
        className=' fixed right-0 bg-white rounded-full bottom-0 z-10 m-20 border-black border-2'
      >
        <p className='text-center absolute right-0 bg-red-700 w-5 h-5 flex items-center rounded-md top-[-3px] justify-center'>
          {productos.length}
        </p>
        <img src={cart} alt='cart' className='w-14 p-2 cursor-pointer' />
      </div>
    </section>
  );
};
