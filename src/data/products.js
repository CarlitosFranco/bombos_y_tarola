// src/data/products.js
import pac from "../img/catalogo/2pac.jpg";
import led from "../img/catalogo/led.jpg";
import miles from "../img/catalogo/miles.jpg";
import kra from "../img/catalogo/kra.jpg";
import michael from "../img/catalogo/michael.jpg";
import art from "../img/catalogo/art.jpg";
import bob from "../img/catalogo/bob.jpg";
import cash from "../img/catalogo/cash.jpg";
import bb from "../img/catalogo/bb.jpg";
import aretha from "../img/catalogo/aretha.jpg";

export const products = [
  {
    id: "producto1",
    nombre: "Vinilo Rap - 2Pac",
    precio: 24.99,
    descripcion:
      "Vinilo de colección del álbum 'All Eyez on Me' de 2Pac, uno de los discos de rap más icónicos de los 90.",
    stock: 10,
    imagen: pac,
  },
  {
    id: "producto2",
    nombre: "Vinilo Rock Clásico - Led Zeppelin",
    precio: 32.5,
    descripcion:
      "Vinilo de colección del álbum 'Led Zeppelin IV', un clásico del rock de los 70.",
    stock: 5,
    imagen: led,
  },
  {
    id: "producto3",
    nombre: "Vinilo Jazz - Miles Davis",
    precio: 28.75,
    descripcion:
      "Vinilo de colección del álbum 'Kind of Blue' de Miles Davis, una obra maestra del jazz de los 60.",
    stock: 8,
    imagen: miles,
  },
  {
    id: "producto4",
    nombre: "Vinilo Electrónica - Kraftwerk",
    precio: 26.0,
    descripcion:
      "Vinilo de colección del álbum 'Computer World' de Kraftwerk, pioneros de la electrónica de los 80.",
    stock: 12,
    imagen: kra,
  },
  {
    id: "producto5",
    nombre: "Vinilo Pop Internacional - Michael Jackson",
    precio: 35.0,
    descripcion:
      "Vinilo de colección del álbum 'Thriller' de Michael Jackson, el más vendido de la historia.",
    stock: 15,
    imagen: michael,
  },
  {
    id: "producto6",
    nombre: "Vinilo Indie - Arctic Monkeys",
    precio: 22.5,
    descripcion:
      "Vinilo de colección del álbum 'AM' de Arctic Monkeys, aclamado por la crítica.",
    stock: 7,
    imagen: art,
  },
  {
    id: "producto7",
    nombre: "Vinilo Reggae - Bob Marley",
    precio: 27.75,
    descripcion:
      "Vinilo de colección del álbum 'Legend' de Bob Marley, el reggae más influyente de todos los tiempos.",
    stock: 9,
    imagen: bob,
  },
  {
    id: "producto8",
    nombre: "Vinilo Country - Johnny Cash",
    precio: 25.0,
    descripcion:
      "Vinilo de colección del álbum 'At Folsom Prison' de Johnny Cash, un clásico del country.",
    stock: 6,
    imagen: cash,
  },
  {
    id: "producto9",
    nombre: "Vinilo Blues - B.B. King",
    precio: 23.0,
    descripcion:
      "Vinilo de colección del álbum 'Live at the Regal' de B.B. King, una joya del blues.",
    stock: 11,
    imagen: bb,
  },
  {
    id: "producto10",
    nombre: "Vinilo Soul - Aretha Franklin",
    precio: 29.0,
    descripcion:
      "Vinilo de colección del álbum 'I Never Loved a Man the Way I Love You' de Aretha Franklin, reina del soul.",
    stock: 4,
    imagen: aretha,
  },
];
