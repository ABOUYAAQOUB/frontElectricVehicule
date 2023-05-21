import { Caracteristique } from "./Caracteristique.Model"
import { DateDim } from "./DateDim.model"
import { Localite } from "./Localite.model"
import { Marque } from "./Marque.model"

export class Consommation{

    marque!:Marque;
    localite!:Localite;
    dateDim!:DateDim;
    caracteristique!:Caracteristique;
    electricRange!:number;
    base_msrp!:number;	
    electriqueType!:string;
}