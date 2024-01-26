import cart from '/cart.svg';
export const CartContainer = ({ cantidad = 0 }: { cantidad: number }) => {
  return (
    <div className=' fixed right-0 bg-white rounded-full bottom-0 z-10 m-20 border-black border-2'>
      <p className='text-center absolute right-0 bg-red-700 w-5 h-5 flex items-center rounded-md top-[-3px] justify-center'>
        {cantidad}
      </p>
      <img src={cart} alt='cart' className='w-14 p-2 cursor-pointer' />
    </div>
  );
};
