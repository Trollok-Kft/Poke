class Pokemon {
    constructor(elem, adat) {
        this.elem = elem;
        this.adat = adat;

        this.nev = this.elem.children("h2");
        this.kep = this.elem.children("img");
        this.kepesseg = this.elem.children("p");

        this.setAdatok(this.adat);
    }

    setAdatok(adat) {
        this.nev.html(adat.forms.name);
        this.kep.html(adat.forms.name);
        this.kepesseg.html(adat.abilities.name);
    }


}