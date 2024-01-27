export const lasPlatas = (monto: string) => {
  return parseInt(monto).toLocaleString('es-PE', {
    currency: 'PEN',
    style: 'currency',
  });
};
