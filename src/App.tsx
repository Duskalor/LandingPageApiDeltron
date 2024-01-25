import { useFetch } from './hooks/useFetch';

export const App = () => {
  const { data: laptops } = useFetch('laptop');
  return (
    <div>
      <h1>TEST DE LA BASE DE DATOS </h1>

      <section>
        {laptops.map((pro) => {
          return (
            <div key={pro._id}>
              <h2>{pro.nombre}</h2>
              <img src={pro.img} alt={pro.titulo} />
              <p>{pro.precio}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};
