export class Apprenant {
    constructor(private prenom:string, private nom:string){}
    get getPrenom() : String{return this.prenom;}
    set setPrenom(prenom:string){this.prenom=prenom}
    get getNom() : String{return this.nom;}
    set setNom(nom:string){this.nom=nom;}
}
