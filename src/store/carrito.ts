import { create } from 'zustand';
import { Producto } from '../interface/productos.interface';
import { persist } from 'zustand/middleware';

type carrito = Pick<Producto, '_id' | 'titulo' | 'img' | 'precio'>;
type carritoProducto = carrito & { cantidad?: number };

interface carritoStore {
  productos: carritoProducto[];
  agregarProducto: (pro: carritoProducto) => void;
  limpiarCarrito: () => void;
  cartToggle: boolean;
  SetCartToggle: () => void;
}

export const store = create<carritoStore>()(
  persist(
    (set, get) => ({
      productos: [],
      cartToggle: false,
      SetCartToggle: () => {
        set((prev) => {
          return { cartToggle: !prev.cartToggle };
        });
      },
      agregarProducto: (newProducto) => {
        const productos = get().productos;
        const existe = productos.findIndex(
          (item) => item._id === newProducto._id
        );
        // CANTIDAD AGREGADA
        // const nuevoCarrito =
        //   existe === -1
        //     ? [...productos, { ...newProducto, cantidad: 1 }]
        //     : productos.map((pro) =>
        //         pro._id === productos[existe]._id
        //           ? { ...pro, cantidad: (pro.cantidad ?? 0) + 1 }
        //           : pro
        //       );

        // REMOVER AL HACER DE NUEVO CLICK
        const nuevoCarrito =
          existe === -1
            ? [...productos, newProducto]
            : productos.filter((item) => {
                return item._id !== newProducto._id;
              });

        set({ productos: nuevoCarrito });
      },
      limpiarCarrito: () => {
        set({ productos: [] });
      },
    }),
    { name: 'carrito' }
  )
);
