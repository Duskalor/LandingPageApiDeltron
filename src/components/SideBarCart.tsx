import { store } from '../store/carrito';
import { lasPlatas } from '../utils/currency';
import backspace from '/backspace.svg';

export const SideBarCart = () => {
  const agregarProducto = store((state) => state.agregarProducto);
  const limpiarCarrito = store((state) => state.limpiarCarrito);
  const SetCartToggle = store((state) => state.SetCartToggle);
  const productos = store((state) => state.productos);

  const precioTotal = productos
    .reduce((acc, producto) => {
      const numero = parseFloat(producto.precio);
      acc += numero;
      return acc;
    }, 0)
    .toFixed(2);

  return (
    <section className='fixed z-30 max-h-screen h-full overflow-y-auto border-l-2 border-gray-400 text-black font-bold text-sm bg-white opacity-95 p-5 w-[250px] sm:w-[400px] top-0 right-0 '>
      {/* // toggle carrito */}
      <div className='text-3xl flex justify-end p-2 cursor-pointer select-none	'>
        <div onClick={() => SetCartToggle()}>✖️</div>
      </div>
      {/* //productos en el carrito */}
      {productos.length > 0 ? (
        <div className='flex  flex-col justify-center gap-7 '>
          <ul className='space-y-5'>
            {productos.map(({ _id, img, precio, titulo }) => {
              return (
                <li
                  key={_id}
                  className='flex items-center gap-3 border-gray-400 border-2 p-1 rounded-xl'
                >
                  <h2 className='w-[40%] text-balance'>{titulo}</h2>
                  <img src={img} alt={titulo} className='h-32 brightness-90' />
                  {/* <h3 className='text-red-500'>{pro.cantidad}</h3> */}
                  <span className='text-lg text-red-700'>
                    {lasPlatas(precio)}
                  </span>
                  <button
                    onClick={() => {
                      agregarProducto({ _id, titulo, img, precio });
                    }}
                  >
                    <img src={backspace} alt='backspace' />
                  </button>
                </li>
              );
            })}
          </ul>
          <h2 className='text-3xl text-center'>
            Precio total: {lasPlatas(precioTotal)}
          </h2>
          <button
            onClick={() => limpiarCarrito()}
            className={`flex bg-slate-900 hover:bg-gray-700 focus:outline-none items-center justify-center rounded-md  px-5 py-2.5 text-center text-sm font-medium   text-white   focus:ring-4 focus:ring-blue-300`}
          >
            Limpiar Carrito
          </button>
        </div>
      ) : (
        <h2 className='text-center text-xl h-full flex items-center'>
          NO HAY PRODUCTOS EN EL CARRITO
        </h2>
      )}
    </section>
  );
};
