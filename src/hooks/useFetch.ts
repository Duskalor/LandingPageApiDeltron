import { useQuery } from '@tanstack/react-query';
import { Producto } from '../interface/productos.interface';

const fetchDatos = (URL: string) => async () => {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const URL = 'https://apideltron.up.railway.app/productos/';

export const useFetch = (pro: string) => {
  const { data = [] } = useQuery<Producto[]>({
    queryKey: [pro],
    queryFn: fetchDatos(`${URL}${pro}`),
  });

  return { data };
};
