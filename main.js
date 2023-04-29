import Szemely from "./Szemely.js";

$(function () {
  const szuloElem = $(".tarolo");

  // példányosítás
  const szemely1 = new Szemely("Béla", 1965, szuloElem);
  const szemely2 = new Szemely("Jolán", 1975, szuloElem);

  szemely1.nev = "Kálmán";

  szemely1.masikNev = "Géza";

  //futásidőben változtathatóak az osztály példányok
  //console.log(szemely1.#szulNev) privát adattagot kívülről nem érek el
});
