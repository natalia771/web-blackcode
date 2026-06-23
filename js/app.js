// ==========================================================================
// 1. BANCOS DE DATOS (PRODUCTOS)
// ==========================================================================
const productosSeco = [
    { nombre: "Canbo Balance Pollo Adultos 3kg.", precio: "50.15", precioViejo: "59.00", descuento: "-15%", img: "../img/1-1-1.png" },
    { nombre: "ProPlan Adult Complete Medium Breed 12 Kg", precio: "225.18", precioViejo: "250.20", descuento: "-10%", img: "../img/1-1-2.png" },
    { nombre: "Canbo Monoprotein Trocitos en Salsa de Pavo Adulto 100 gr.", precio: "5.85", precioViejo: "6.50", descuento: "-10%", img: "../img/1-1-1.png" }
];

const productosHumedo = [
    { nombre: "Proplan Adulto Salmon y Arroz x 368.5 g", precio: "14.08", precioViejo: "18.28", descuento: "-23%", img: "../img/1-2-1.png" },
    { nombre: "Akimento Humedo para Perro Pedigree Cachorro Sachet 85g.", precio: "5.10", precioViejo: "6.00", descuento: "-15%", img: "../img/1-2-2.png" },
    { nombre: "Equilibrio Veterinary Perro Intestinal x 7.5 kg", precio: "149.45", precioViejo: "245.00", descuento: "-39%", img: "../img/1-2-3.png" }
];

const productosDietas = [
    { nombre: "Equilibrio Veterinary Perro Intestinal x 7.5 kg", precio: "32.21", precioViejo: "35.90", descuento: "-10.00%", img: "../img/1-3-1.png" },
    { nombre: "Hills Pd Canine Metabolic Alimento Seco Perro 3.49kg.", precio: "84.15", precioViejo: "99.00", descuento: "-15%", img: "../img/1-3-2.png" },
    { nombre: "Canbo Balance Pollo Control de Peso Todas Las Razas 3 Kg", precio: "192.95", precioViejo: "227.00", descuento: "-15%", img: "../img/1-3-3.png" }
];
const productosSnack = [
    { nombre: "Barker Bites Snacks Deshidratados de Pollo 100 gr", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "../img/1-4-1.png" },
    { nombre: "Canbo Galletas - Biscuits Sabor Cordero Todas las Razas 200 Gr", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "../img/1-4-2.png" },
    { nombre: "ESnout Hueso Deshidratado Maxibone Ahumado De Res", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "../img/1-4-3.png" }
];

const productosNatural = [
    { nombre: "Biofresh Perro Adulto Rz. Mediana Mix de Carnes 3 Kg", precio: "84.15", precioViejo: "99.00", descuento: "-15%", img: "../img/1-5-1.png" },
    { nombre: "Brit Premium by Nature Adult Medium 15 Kg - Perro Adulto Raza Mediana", precio: "192.95", precioViejo: "227", descuento: "-15%", img: "../img/1-5-2.png" },
    { nombre: "Origens Trocitos de Cordero con Quinua y Vegetales en Salsa 369 Gr - Adulto Piel Sensible", precio: "16.20", precioViejo: "18.00", descuento: "-10%", img: "../img/1-5-3.png" }
];

const accesorioCamas = [
    { nombre: "Paté Premium de Pollo en Lata 400g", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const accesorioCollares = [
    { nombre: "Paté Premium de Pollo en Lata 400g", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const accesorioPlatos = [
    { nombre: "Paté Premium de Pollo en Lata 400g", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const accesorioTransportes = [
    { nombre: "Paté Premium de Pollo en Lata 400g", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const accesorioRopa = [
    { nombre: "Paté Premium de Pollo en Lata 400g", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const accesorioAdiestra = [
    { nombre: "Paté Premium de Pollo en Lata 400g", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const accesorioHogar = [
    { nombre: "Paté Premium de Pollo en Lata 400g", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const juguetesPeluches = [
    { nombre: "Paté Premium de Pollo en Lata 400g", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const juguetesMordedores = [
    { nombre: "Paté Premium de Pollo en Lata 400g", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const juguetesLanzadores = [
    { nombre: "Paté Premium de Pollo en Lata 400g", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const juguetesCuerdas = [
    { nombre: "Paté Premium de Pollo en Lata 400g", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const farmaAnti = [
    { nombre: "Paté Premium de Pollo en Lata 400g", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const juguetesInter = [
    { nombre: "Paté e H", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const farmaFarma = [
    { nombre: "Paté Premium de Pollo en Lata 400g", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const farmaPelu = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const farmaPañales = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const farmaCuidado = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const farmaPostG = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const farmaAntiReG = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const productosSecoG = [
    { nombre: "Canbo Balance Pollo Adultos 3kg.", precio: "50.15", precioViejo: "59.00", descuento: "-15%", img: "../img/2-1-1.png" },
    { nombre: "ProPlan Adult Complete Medium Breed 12 Kg", precio: "225.18", precioViejo: "250.20", descuento: "-10%", img: "../img/2-1-2.png" },
    { nombre: "Canbo Monoprotein Trocitos en Salsa de Pavo Adulto 100 gr.", precio: "5.85", precioViejo: "6.50", descuento: "-10%", img: "../img/2-1-1.png" }
];

const productosHumedoG = [
    { nombre: "Proplan Adulto Salmon y Arroz x 368.5 g", precio: "14.08", precioViejo: "18.28", descuento: "-23%", img: "../img/2-2-1.png" },
    { nombre: "Akimento Humedo para Perro Pedigree Cachorro Sachet 85g.", precio: "5.10", precioViejo: "6.00", descuento: "-15%", img: "../img/2-2-2.png" },
    { nombre: "Equilibrio Veterinary Perro Intestinal x 7.5 kg", precio: "149.45", precioViejo: "245.00", descuento: "-39%", img: "../img/2-2-3.png" }
];

const productosDietasG = [
    { nombre: "Equilibrio Veterinary Perro Intestinal x 7.5 kg", precio: "32.21", precioViejo: "35.90", descuento: "-10.00%", img: "../img/2-3-1.png" },
    { nombre: "Hills Pd Canine Metabolic Alimento Seco Perro 3.49kg.", precio: "84.15", precioViejo: "99.00", descuento: "-15%", img: "../img/2-3-2.png" },
    { nombre: "Canbo Balance Pollo Control de Peso Todas Las Razas 3 Kg", precio: "192.95", precioViejo: "227.00", descuento: "-15%", img: "../img/2-3-3.png" }
];
const productosSnackG = [
    { nombre: "Barker Bites Snacks Deshidratados de Pollo 100 gr", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "../img/2-4-1.png" },
    { nombre: "Canbo Galletas - Biscuits Sabor Cordero Todas las Razas 200 Gr", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "../img/2-4-2.png" },
    { nombre: "ESnout Hueso Deshidratado Maxibone Ahumado De Res", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "../img/2-4-3.png" }
];

const productosNaturalG = [
    { nombre: "Biofresh Perro Adulto Rz. Mediana Mix de Carnes 3 Kg", precio: "84.15", precioViejo: "99.00", descuento: "-15%", img: "../img/2-5-1.png" },
    { nombre: "Brit Premium by Nature Adult Medium 15 Kg - Perro Adulto Raza Mediana", precio: "192.95", precioViejo: "227", descuento: "-15%", img: "../img/2-5-2.png" },
    { nombre: "Origens Trocitos de Cordero con Quinua y Vegetales en Salsa 369 Gr - Adulto Piel Sensible", precio: "16.20", precioViejo: "18.00", descuento: "-10%", img: "../img/2-5-3.png" }
];

const arenaArena = [
    { nombre: "Biofresh Perro Adulto Rz. Mediana Mix de Carnes 3 Kg", precio: "84.15", precioViejo: "99.00", descuento: "-15%", img: "../img/3-2-1.png" },
    { nombre: "Brit Premium by Nature Adult Medium 15 Kg - Perro Adulto Raza Mediana", precio: "192.95", precioViejo: "227", descuento: "-15%", img: "../img/3-2-2.png" },
    { nombre: "Origens Trocitos de Cordero con Quinua y Vegetales en Salsa 369 Gr - Adulto Piel Sensible", precio: "16.20", precioViejo: "18.00", descuento: "-10%", img: "../img/3-2-3.png" }
];

const arenaArenero = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "../img/3-3-1.png" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "../img/3-3-2.png" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "../img/3-3-3.png" }
];

const arenaAcceso = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "../img/3-4-1.png" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "../img/3-4-2.png" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "../img/3-4-3.png" }
];

const acceJuguetes = [
    { nombre: "Biofresh Perro Adulto Rz. Mediana Mix de Carnes 3 Kg", precio: "84.15", precioViejo: "99.00", descuento: "-15%", img: "../img/1-5-1.png" },
    { nombre: "Brit Premium by Nature Adult Medium 15 Kg - Perro Adulto Raza Mediana", precio: "192.95", precioViejo: "227", descuento: "-15%", img: "../img/1-5-2.png" },
    { nombre: "Origens Trocitos de Cordero con Quinua y Vegetales en Salsa 369 Gr - Adulto Piel Sensible", precio: "16.20", precioViejo: "18.00", descuento: "-10%", img: "../img/1-5-3.png" }
];

const acceCama = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const acceRascadores = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const acceDispensadores = [
    { nombre: "Biofresh Perro Adulto Rz. Mediana Mix de Carnes 3 Kg", precio: "84.15", precioViejo: "99.00", descuento: "-15%", img: "../img/1-5-1.png" },
    { nombre: "Brit Premium by Nature Adult Medium 15 Kg - Perro Adulto Raza Mediana", precio: "192.95", precioViejo: "227", descuento: "-15%", img: "../img/1-5-2.png" },
    { nombre: "Origens Trocitos de Cordero con Quinua y Vegetales en Salsa 369 Gr - Adulto Piel Sensible", precio: "16.20", precioViejo: "18.00", descuento: "-10%", img: "../img/1-5-3.png" }
];

const acceCollares = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const acceTransportes = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const farmaAntig = [
    { nombre: "Biofresh Perro Adulto Rz. Mediana Mix de Carnes 3 Kg", precio: "84.15", precioViejo: "99.00", descuento: "-15%", img: "../img/1-5-1.png" },
    { nombre: "Brit Premium by Nature Adult Medium 15 Kg - Perro Adulto Raza Mediana", precio: "192.95", precioViejo: "227", descuento: "-15%", img: "../img/1-5-2.png" },
    { nombre: "Origens Trocitos de Cordero con Quinua y Vegetales en Salsa 369 Gr - Adulto Piel Sensible", precio: "16.20", precioViejo: "18.00", descuento: "-10%", img: "../img/1-5-3.png" }
];

const farmaFarmag = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const farmaPelug = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const farmaRelag = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const farmaAdiesg = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];


const alimentMixturas = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const alimentSemillas = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const alimentComidac= [
    { nombre: "Biofresh Perro Adulto Rz. Mediana Mix de Carnes 3 Kg", precio: "84.15", precioViejo: "99.00", descuento: "-15%", img: "../img/1-5-1.png" },
    { nombre: "Brit Premium by Nature Adult Medium 15 Kg - Perro Adulto Raza Mediana", precio: "192.95", precioViejo: "227", descuento: "-15%", img: "../img/1-5-2.png" },
    { nombre: "Origens Trocitos de Cordero con Quinua y Vegetales en Salsa 369 Gr - Adulto Piel Sensible", precio: "16.20", precioViejo: "18.00", descuento: "-10%", img: "../img/1-5-3.png" }
];

const alimentComidal = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const alimentPasta = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const alimentPapilla= [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];

const alimentPienso = [
    { nombre: "Paté", precio: "12.50", precioViejo: "18.00", descuento: "-30%", img: "img/royal-canin.webp" },
    { nombre: "Estofado de Carne y Vegetales Gourmet", precio: "14.90", precioViejo: "19.90", descuento: "-25%", img: "img/royal-canin.webp" },
    { nombre: "Filetes de Salmón en Salsa sobre", precio: "6.50", precioViejo: "8.50", descuento: "-23%", img: "img/royal-canin.webp" }
];



// ==========================================================================
// 2. SELECCIÓN DE ELEMENTOS DEL DOM
// ==========================================================================

// Pantallas / Vistas de la aplicación (SPA)
const vistaInicio = document.getElementById('vista-inicio');
const vistaCategoria = document.getElementById('vista-categoria-productos');
const vistaHistoria = document.getElementById('vista-historia');
const vistaAyuda = document.getElementById('vista-ayuda');

// Botones y Enlaces desencadenantes
const btnLogo = document.getElementById('btn-logo');
const btnInicioNav = document.getElementById('btn-inicio-nav');
const heroActionBtn = document.getElementById('hero-action-btn');
const btnAlimentoSeco = document.getElementById('btn-alimento-seco');
const btnAlimentoHumedo = document.getElementById('btn-alimento-humedo');
const btnAlimentoDieta = document.getElementById('btn-alimento-dieta');
const btnAlimentoSnack = document.getElementById('btn-alimento-snack');
const btnAlimentoNatural = document.getElementById('btn-alimento-natural');
const btnAccesorioCamas = document.getElementById('btn-accesorio-camas');
const btnAccesorioCollares = document.getElementById('btn-accesorio-collares');
const btnAccesorioPlatos = document.getElementById('btn-accesorio-platos');
const btnAccesorioTransportes = document.getElementById('btn-accesorio-transportes');
const btnAccesorioRopa = document.getElementById('btn-accesorio-ropa');
const btnAccesorioAdiestra = document.getElementById('btn-accesorio-adiestra');
const btnAccesorioHogar = document.getElementById('btn-accesorio-hogar');
const btnJuguetesPeluches = document.getElementById('btn-juguetes-peluches');
const btnJuguetesMordedores = document.getElementById('btn-juguetes-mordedores');
const btnJuguetesLanzadores = document.getElementById('btn-juguetes-lanzadores');
const btnJuguetesCuerdas = document.getElementById('btn-juguetes-cuerdas');
const btnFarmaAnti = document.getElementById('btn-farmacia-anti');
const btnJuguetesInter = document.getElementById('btn-juguetes-inter');
const btnFarmaFarma = document.getElementById('btn-farmacia-farma');
const btnFarmaPelu = document.getElementById('btn-farmacia-pelu');
const btnFarmaPañales = document.getElementById('btn-farmacia-pañales');
const btnFarmaCuidado = document.getElementById('btn-farmacia-cuidado');
const btnFarmaPost = document.getElementById('btn-farmacia-post');
const btnFarmaAntiRe = document.getElementById('btn-farmacia-antire');
//Gatos
const btnAlimentoSecoG = document.getElementById('btn-alimento-seco-g');
const btnAlimentoHumedoG = document.getElementById('btn-alimento-humedo-g');
const btnAlimentoDietaG = document.getElementById('btn-alimento-dieta-g');
const btnAlimentoSnackG = document.getElementById('btn-alimento-snack-g');
const btnAlimentoNaturalG = document.getElementById('btn-alimento-natural-g');
const btnArenaArena = document.getElementById('btn-arena-arena');
const btnArenaArenero = document.getElementById('btn-arena-arenero');
const btnArenaAcceso = document.getElementById('btn-arena-acce');
const btnAcceJuguetes = document.getElementById('btn-acce-juguetes');
const btnAcceCamas = document.getElementById('btn-acce-cama');
const btnAcceRascadores = document.getElementById('btn-acce-rasca');
const btnAcceDsipensadores = document.getElementById('btn-acce-disp');
const btnAcceCollares = document.getElementById('btn-acce-collares');
const btnAcceTransportadores = document.getElementById('btn-acce-trans');
const btnFarmaAntig = document.getElementById('btn-farma-antig');
const btnFarmaFarmag = document.getElementById('btn-farma-farmag');
const btnFarmaPelug = document.getElementById('btn-farma-pelug');
const btnFarmaRelag = document.getElementById('btn-farma-relag');
const btnFarmaAdiesg = document.getElementById('btn-farma-adiesg');
//Aves
const btnAlimentMixturas = document.getElementById('btn-aliment-mixturas');
const btnAlimentSemillas = document.getElementById('btn-aliment-semillas');
const btnAlimentComidac = document.getElementById('btn-aliment-comidac');
const btnAlimentComidal = document.getElementById('btn-aliment-comidal');
const btnAlimentPasta = document.getElementById('btn-aliment-pastadecria');
const btnAlimentPapilla = document.getElementById('btn-aliment-papilla');
const btnAlimentPienso = document.getElementById('btn-aliment-Pienso');


const btnAyudaNav = document.getElementById('btn-ayuda-nav');
const btnHistoriaFooter = document.getElementById('btn-historia-footer');
const btnAyudaFooter = document.getElementById('btn-ayuda-footer');

// Componentes internos de la sección de categorías
const contenedorProductos = document.getElementById('contenedor-dinamico-productos');
const txtTitulo = document.getElementById('titulo-categoria');
const txtDescripcion = document.getElementById('descripcion-categoria');


// ==========================================================================
// 3. FUNCIONES CONTROLADORAS (SPA Y RENDER)
// ==========================================================================

// Función Central Intercambiadora de Pantallas

function cambiarPantallaSPA(pantallaObjetivo) {
        // Validamos que la pantalla exista para evitar que el código se rompa
        if (!pantallaObjetivo) return;

        vistaInicio.classList.add('contenedor-oculto');
        vistaCategoria.classList.add('contenedor-oculto');
        if (vistaHistoria) vistaHistoria.classList.add('contenedor-oculto');
        if (vistaAyuda) vistaAyuda.classList.add('contenedor-oculto');

        pantallaObjetivo.classList.remove('contenedor-oculto');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Función Render: Dibuja las tarjetas de forma ultra-eficiente
    function mostrarProductosEnPantalla(titulo, descripcion, listaDeProductos, etiquetaCategoria) {
        txtTitulo.textContent = titulo;
        txtDescripcion.textContent = descripcion;

        // 🚀 MEJORA DE RENDIMIENTO: Acumulamos el HTML en una variable de texto primero.
        // Esto evita que el navegador redibuje la página múltiples veces y previene el fallo de imágenes.
        let htmlAcumulado = "";

        listaDeProductos.slice(0, 3).forEach(producto => {
            htmlAcumulado += `
                <div class="product-card">
                    <span class="badge-discount">${producto.descuento}</span>
                    <div class="product-image"><img src="${producto.img}" alt="${producto.nombre}"></div>
                    <div class="product-info">
                        <h3>${producto.nombre}</h3>
                        <p class="pet-category">${etiquetaCategoria}</p>
                        <div class="product-price">
                            <span class="current-price">S/. ${producto.precio}</span>
                            <span class="old-price">S/. ${producto.precioViejo}</span>
                        </div>
                    </div>
                    <button class="buy-btn">Comprar</button>
                </div>
            `;
        });

        // Inyectamos todo el bloque de golpe una sola vez
        contenedorProductos.innerHTML = htmlAcumulado;

        // Cambiamos de pantalla de manera segura
        cambiarPantallaSPA(vistaCategoria);
    }

// ==========================================================================
// 4. MAPEO DE EVENTOS ESCUCHADORES (LISTENERS)
// ==========================================================================

// --- Navegación Directa (Vistas estáticas) ---
if (btnLogo)btnLogo.addEventListener('click', (e) => {e.preventDefault();cambiarPantallaSPA(vistaInicio);});
if(btnInicioNav)btnInicioNav.addEventListener('click', (e) => {e.preventDefault();cambiarPantallaSPA(vistaInicio);});
if(btnHistoriaFooter)btnHistoriaFooter.addEventListener('click', (e) => {e.preventDefault();cambiarPantallaSPA(vistaHistoria);});
if(btnAyudaNav)btnAyudaNav.addEventListener('click', (e) => {e.preventDefault();cambiarPantallaSPA(vistaAyuda);});
if(btnAyudaFooter)btnAyudaFooter.addEventListener('click', (e) => {e.preventDefault();cambiarPantacleanSPA(vistaAyuda);});

// --- Navegación Con Carga de Productos Dinámicos ---

// Alimento Seco (Desde el Menú)
if(btnAlimentoSeco){
btnAlimentoSeco.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimento Seco para Perros 🐶", 
        "Nutrición de alta calidad para su día a día.", 
        productosSeco,
        "🐶 Perros"
    );
});}

// Alimento Húmedo (Desde el Menú)
if(btnAlimentoHumedo){
btnAlimentoHumedo.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimento Húmedo para Perros 🥩", 
        "Texturas suaves y deliciosas para consentirlos.", 
        productosHumedo,
        "🐶 Perros"
    );
});}

// Alimento Dietas Veterinarias (Desde el Menú)
if(btnAlimentoDieta){
btnAlimentoDieta.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimento Dietas Veterinarias 🥩", 
        "Nutricion Saludable para tu Perro.", 
        productosDietas,
        "🐶 Perros"
    );
});}

// Alimento Snack y Premios (Desde el Menú)
if(btnAlimentoSnack){
btnAlimentoSnack.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimento Snack y Premios 🥩", 
        "Snacks y Premios para tu Perro.", 
        productosSnack,
        "🐶 Perros"
    );
});}

// Alimento Natural (Desde el Menú)
if(btnAlimentoNatural){
btnAlimentoNatural.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimento Alimento Natural 🥩", 
        "Snacks y Premios para tu Perro.", 
        productosNatural,
        "🐶 Perros"
    );
});}

// Accesorio Camas (Desde el Menú)
if(btnAccesorioCamas){
btnAccesorioCamas.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Accesorios Camas y Mantas", 
        "Confort para tu Perro.", 
        accesorioCamas,
        "🐶 Perros"
    );
});}

// Accesorio Collares (Desde el Menú)
if(btnAccesorioCollares){
btnAccesorioCollares.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Accesorios Collares, Arneses y Correas", 
        "Comodidad para tu Perro", 
        accesorioCollares,
        "🐶 Perros"
    );
});}

// Accesorio Platos (Desde el Menú)
if(btnAccesorioPlatos){
btnAccesorioPlatos.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Accesorios Platos y Bebederos", 
        "Engrie a tu Perro", 
        accesorioPlatos,
        "🐶 Perros"
    );
});}

// Accesorio Viajes (Desde el Menú)
if(btnAccesorioTransportes){
btnAccesorioTransportes.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Accesorios Transportadores y Viajes", 
        "El mejor viaje para tu Perro", 
        accesorioTransportes,
        "🐶 Perros"
    );
});}

// Accesorio Ropa (Desde el Menú)
if(btnAccesorioRopa){
btnAccesorioRopa.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Accesorios Ropa y Accesorio", 
        "Lo mejor de la moda para tu Perro", 
        accesorioRopa,
        "🐶 Perros"
    );
});}

// Accesorio Adiestramiento (Desde el Menú)
if(btnAccesorioAdiestra){
btnAccesorioAdiestra.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Accesorios Adiestramiento", 
        "Adiestramiento para tu Perro", 
        accesorioAdiestra,
        "🐶 Perros"
    );
});}

// Accesorio  Hogar(Desde el Menú)
if(btnAccesorioHogar){
btnAccesorioHogar.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Accesorios Hogar", 
        "Protege el descanso de tu Perro", 
        accesorioHogar,
        "🐶 Perros"
    );
});}

// Juguetes Peluches (Desde el Menú)
if(btnJuguetesPeluches){
btnJuguetesPeluches.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Juguetes Peluches", 
        "El mejor Entretenimiento para tu Perro", 
        juguetesPeluches,
        "🐶 Perros"
    );
});}

// Juguetes Mordedores  (Desde el Menú)
if(btnJuguetesMordedores){
btnJuguetesMordedores.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Juguetes Mordedores y Flexibles", 
        "Libera el estres y la energia de tu Perro", 
        juguetesMordedores,
        "🐶 Perros"
    );
});}

// Juguetes Lanzadores (Desde el Menú)
if(btnJuguetesLanzadores){
btnJuguetesLanzadores.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Juguetes Lanzadores de Pelotas", 
        "Entretenimiento para tu Perro", 
        juguetesLanzadores,
        "🐶 Perros"
    );
});}

// Juguetes Cuerdas (Desde el Menú)
if(btnJuguetesCuerdas){
btnJuguetesCuerdas.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Juguetes Cuerdas", 
        "Entretenimiento para tu Perro", 
        juguetesInter,
        "🐶 Perros"
    );
});}

// Juguetes Interactivos (Desde el Menú)
if(btnJuguetesInter){
btnJuguetesInter.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Juguetes Interactivos", 
        "Entretenimiento para tu Perro", 
        juguetesInter,
        "🐶 Perros"
    );
});}

// Farmacia e Higiene Antiparasitarios (Desde el Menú)
if(btnFarmaAnti){
btnFarmaAnti.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Farmacia e Higiene Antiparasitarios", 
        "Medicina para tu Perro", 
        farmaAnti,
        "🐶 Perros"
    );
});}

// Farmacia e Higiene Farmacia e Higiene (Desde el Menú)
if(btnFarmaFarma){
btnFarmaFarma.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Farmacia e Higiene Farmacia y Salud", 
        "Medicina para tu Perro", 
        farmaFarma,
        "🐶 Perros"
    );
});}

// Farmacia e Higiene Peluqueria (Desde el Menú)
if(btnFarmaPelu){
btnFarmaPelu.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Farmacia e Higiene Peluqueria e Higiene", 
        "El mejor cuidado para tu Perro", 
        farmaPelu,
        "🐶 Perros"
    );
});}

// Farmacia e Higiene Pañales(Desde el Menú)
if(btnFarmaPañales){
btnFarmaPañales.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Farmacia e Higiene Pañales", 
        "El mejor cuidado para tu Perro", 
        farmaPañales,
        "🐶 Perros"
    );
});}

// Farmacia e Higiene Cuidado DEntal (Desde el Menú)
if(btnFarmaCuidado){
btnFarmaCuidado.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Farmacia e Higiene Cuidado Dental", 
        "El mejor Cuidado para tu Perro", 
        farmaCuidado,
        "🐶 Perros"
    );
});}

// Farmacia e Higiene Post Operatorio (Desde el Menú)
if(btnFarmaPost){
btnFarmaPost.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Farmacia e Higiene Post-Operatorio", 
        "El mejor Cuidado para tu Perro", 
        farmaPost,
        "🐶 Perros"
    );
});}

// Farmacia e Higiene Antiestres y Relajacion (Desde el Menú)
if(btnFarmaAntiRe){
btnFarmaAntiRe.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Farmacia e Antiestrés y Relajacion", 
        "El mejor Cuidado para tu Perro", 
        btnFarmaAntiRe,
        "🐶 Perros"
    );
});}

//Seccion Gatos
//alimento Seco para Gatos
if(btnAlimentoSecoG){
btnAlimentoSecoG.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimento Seco para Gatos 🐱", 
        "Nutrición de alta calidad para su día a día", 
        productosSecoG,
        "🐱 Gatos"
    );
});}

// Alimento Húmedo (Desde el Menú)
if(btnAlimentoHumedoG){
btnAlimentoHumedoG.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimento Húmedo Para Gatos 🐱", 
        "Texturas suaves y deliciosas para consentirlos", 
        productosHumedoG,
        "🐱 Gatos"
    );
});}

// Alimento Dietas Veterinarias (Desde el Menú)
if(btnAlimentoDieta){
btnAlimentoDieta.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimento Dietas Veterinarias", 
        "Nutricion Saludable para tu Gato", 
        productosDietasG,
        "🐱 Gatos"
    );
});}

// Alimento Snack y Premios (Desde el Menú)
if(btnAlimentoSnack){
btnAlimentoSnack.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimento Snack y Premios",
        "Snacks y Premios para tu Gato", 
        productosSnackG,
        "🐱 Gatos"
    );
});}

// Alimento Natural (Desde el Menú)
if(btnAlimentoNatural){
btnAlimentoNatural.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimento Snack y Premios", 
        "Alimento Natural para tu Gato", 
        productosNaturalG,
        "🐱 Gatos"
    );
});}

// Arena Arena para Gato (Desde el Menú)
if(btnArenaArena){
btnArenaArena.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Arena y Accesorio Arena", 
        "Comodidad para tu Gato", 
        arenaArena,
        "🐱 Gatos"
    );
});}

// Arena Arenero (Desde el Menú)
if(btnArenaArenero){
btnArenaArenero.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Arena y Accesorio Areneros",
        "Comodidad para tu Gato", 
        arenaArenero,
        "🐱 Gatos"
    );
});}

// Arena accesorio (Desde el Menú)
if(btnArenaAcceso){
btnArenaAcceso.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Arena y Accesorio Accesorio para Arena", 
        "Comodidad para tu Gato", 
        arenaAcceso,
        "🐱 Gatos"
    );
});}

// Accesorios Juguetes (Desde el Menú)
if(btnAcceJuguetes){
btnAcceJuguetes.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Accesorios Juguetes", 
        "Comodidad para tu Gato", 
        acceJuguetes,
        "🐱 Gatos"
    );
});}

// Accesorio Camas y Mantas (Desde el Menú)
if(btnAcceCamas){
btnAcceCamas.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Accesorios Camas y Mantas",
        "Comodidad para tu Gato", 
        acceCama,
        "🐱 Gatos"
    );
});}

// Accesorio Rascadores (Desde el Menú)
if(btnAcceRascadores){
btnAcceRascadores.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Accesorios Dispensadores, Fuentes y Platos", 
        "Comodidad para tu Gato", 
        acceRascadores,
        "🐱 Gatos"
    );
});}

// Accesorios Dispensadores (Desde el Menú)
if(btnAcceDsipensadores){
btnAcceDsipensadores.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Accesorios Dispensadores Despensadores y Fuentes", 
        "Comodidad para tu Gato", 
        acceDispensadores,
        "🐱 Gatos"
    );
}); }

// Accesorios Collares y Correas (Desde el Menú)
if(btnAcceCollares){ 
btnAcceCollares.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Accesorios Collares y Correas",
        "Comodidad para tu Gato", 
        acceCollares,
        "🐱 Gatos"
    );
}); }

// Accesorio Transportadores y Viajes (Desde el Menú)
if(btnAcceTransportadores){
btnAcceTransportadores.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Accesorio Transportadores", 
        "Comodidad para tu Gato", 
        acceTransportes,
        "🐱 Gatos"
    );
}); }

// Farmacia e Higiene Antiparacitarios (Desde el Menú)
if(btnFarmaAntig){
btnFarmaAntig.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Farmacia e Higiene Antiparasitarios",
        "Salud para tu Gato", 
        farmaAntig,
        "🐱 Gatos"
    );
});}

// Farmacia e Higiene Farmacia e Higiene (Desde el Menú)
if(btnFarmaFarmag){
btnFarmaFarmag.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Farmacia e Higiene Farmacia y Salud", 
        "Salud para tu Gato", 
        farmaFarmag,
        "🐱 Gatos"
    );
});}

// Farmacia e Higiene Peluqueria (Desde el Menú)
if(btnFarmaPelug){
btnFarmaPelug.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Farmacia e Higiene Peluqueria e Higiene", 
        "Salud para tu Gato", 
        farmaPelu,
        "🐱 Gatos"
    );
}); }

// Farmacia e Higiene Relajacion (Desde el Menú)
if(btnFarmaRelag){ 
btnFarmaRelag.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Farmacia e Higiene Relajacion y Catnip", 
        "Salud para tu Gato", 
        farmaRelag,
        "🐱 Gatos"
    );
}); }

// Farmacia e Higiene Adiestramiento (Desde el Menú)
if(btnFarmaAdiesg){ 
btnFarmaAdiesg.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Farmacia e Higiene Adiestramiento y Educacion", 
        "Comodidad para tu Gato", 
        farmaAdiesg,
        "🐱 Gatos"
    );
}); }

//Seccion Aves

// Alimento Mixturas (Desde el Menú)
if(btnAlimentMixturas){
btnAlimentMixturas.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimentos Mixturas", 
        "Nutricion para tus Aves de casa", 
        alimentMixturas,
        "🦜 Aves"
    );
}); }

// Alimento Semillas (Desde el Menú)
if(btnAlimentSemillas){
btnAlimentSemillas.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimentos Semillas", 
        "Nutricion para tus Aves de casa", 
        alimentMixturas,
        "🦜 Aves"
    );
}); }

// Alimento Comida de Canarios (Desde el Menú)
if(btnAlimentMixturas){ 
btnAlimentMixturas.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimentos Comida de Canarios", 
        "Nutricion para tus Aves de casa", 
        alimentComidac,
        "🦜 Aves"
    );
}); }

// Alimento Comida de Loros (Desde el Menú)
if(btnAlimentComidal){
btnAlimentComidal.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimentos Comida de Loros", 
        "Nutricion para tus Aves de casa", 
        alimentComidal,
        "🦜 Aves"
    );
}); }

// Alimento Pasta de Crias (Desde el Menú)
if(btnAlimentPasta){
btnAlimentPasta.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimentos Pasta para Crias", 
        "Nutricion para tus Aves de casa", 
        alimentPasta,
        "🦜 Aves"
    );
}); }

// Alimento Papilla de crias (Desde el Menú)
if(btnAlimentPapilla){
btnAlimentPapilla.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimentos Papilla de Cria", 
        "Nutricion para tus Aves de casa", 
        alimentPapilla,
        "🦜 Aves"
    );
}); }



// Alimento Papilla de crias (Desde el Menú)
if(btnAlimentPienso){ 
btnAlimentPienso.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimentos Papilla de Cria", 
        "Nutricion para tus Aves de casa", 
        alimentPienso,
        "🦜 Aves"
    );
}); }

// Botón de Acción del Banner Principal (Por defecto lo mandamos a Alimento Seco)
if(heroActionBtn){
heroActionBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarProductosEnPantalla(
        "Alimento Seco para Perros 🐶", 
        "Nutrición de alta calidad para su día a día.", 
        productosSeco
    );
}); }