interface Texto {
  texto: string;
}

export const Test = ({ texto }: Texto) => {
  return <div>{texto}</div>;
};
