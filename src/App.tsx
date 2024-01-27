import { Header } from './components/Header';
import { Products } from './components/Products';
import { SideBarCart } from './components/SideBarCart';
import { store } from './store/carrito';

export const App = () => {
  const cartToggle = store((state) => state.cartToggle);
  return (
    <div className='relative'>
      <h1 className='text-center text-4xl p-10 font-bold'>
        TEST DE LA BASE DE DATOS
      </h1>
      <section className='py-5'>
        {/* <Products type={'laptop'} /> */}
        <Header />
        <Products type={'laptop'} />
        {cartToggle && <SideBarCart />}
      </section>
    </div>
  );
};
