class Szemely {
  #szulNev;
  constructor(nev, szulDatum, szuloElem) {
    //beállítja az adattagokat
    //a konkrét osztálypéldányra mutat a this
    //osztáylpéldány=objketum
    this.nev = nev; //publikus adattag
    this.szulDatum = szulDatum;
    this.setSzulNev(nev);
    /**HTML oldalon akarjuk megjeleníteni */
    szuloElem.append(`<div class="szemely">
                            <h3>${this.nev}</h3>
                            <p>${this.kor()} éves</p>
                        </div>`)

    //rákattintok a személyekre, akkor írja ki a konzolra az adott személyt
    //készítek egy adattagot a html elemhez
    this.szemelyElem=$(".szemely:last-child")//csak az utolsó html DOM elem lesz
   // console.log(this.szemelyElem)
   console.log(this)
   //function esetén a this -> azt az elemet jelenti, amelyik kiváltotta az eseményt
   //nyíl függvény esetén -> az aktuális objektumot jelenti. 
   //Azt a hatókört jeletni, amiben van. 
    this.szemelyElem.on("click",()=>{
        console.log(this)
    })


  }

  /**privát adattagok elérése */
  /**itt a tagfüggvények elúőtt nem kell function! */
  getSzulNev() {
    return this.#szulNev;
  }
  setSzulNev(ertek) {
    /**ellenőrzés: nagybetűvel kezdődik, nem üres, legalább 3 betű, nincs benne szám, stb */
    this.#szulNev = ertek;
  }
  // get szulNev(){return this.#szulNev}
  // kor kiszámítás
  kor() {
    const d = new Date(); //aktuális dátum
    let year = d.getFullYear(); //aktuális év
    let kor = year - this.szulDatum;
    return kor;
  }
}

export default Szemely;
