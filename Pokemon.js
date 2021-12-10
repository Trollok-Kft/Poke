class Pokemon {
    constructor(elem, adat) {
        this.elem = elem;
        this.adat = adat;

        this.nev = this.elem.children("h2");
        this.kep = this.elem.children("img");
        this.suly = this.elem.children("p");

        this.setAdatok(this.adat);
    }

    setAdatok(adat) {
        console.log(adat);
        this.nev.html(adat.name);
        this.kep.attr("src",adat.sprites.front_default);
        this.suly.html(adat.weight);
    }


}