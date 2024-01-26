export const lasPlatas = (monto: string) => {
  return parseFloat(monto).toLocaleString('es-PE', {
    currency: 'PEN',
    style: 'currency',
  });
};
