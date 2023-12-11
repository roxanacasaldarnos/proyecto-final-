export const diferenciaAnnos = anno => {
  return new Date().getFullYear() - anno;
}
export const valorDepresiacion = (base, diferencia) => {
  return (base*(diferencia*0.03));
}
export const valorExportacion = marca => {
  let incremento;
  switch (marca) {
    case 'bmw':
      incremento = 1.30;
      break;
    case 'toyota':
      incremento = 1.15;
      break;
    case 'fiat':
      incremento = 1.05;
      break;
      case 'renault':
      incremento = 1.00;
      break;
      case 'volkswagen':
      incremento = 1.05;
      break;
      case 'ford':
      incremento = 1.10;
      break;
      case 'honda':
      incremento = 1.45;
      break;
      case 'peugeot':
      incremento = 1.05;
      break;
      case 'nissan':
      incremento = 1.11;
      break;
      case 'chevrolet':
      incremento = 1.00;
      break;
      case 'citroen':
      incremento = 1.45;
      break;

    default:
      break;
  }
  return incremento;
}
export const valorTipoPlan = plan => {
  if (plan === 'basico') {
    return 10.20;
  } else {
    return 30.50;
  }
}