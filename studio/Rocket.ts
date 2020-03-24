import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket {
    name : string;
    totalCapacityKg : number;
    cargoItems : Cargo[] = [];
    astronauts : Astronaut[] = [];

    constructor(name : string, totalCapacityKg : number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items : Payload[]) : number{
        let total : number = 0;
        items.forEach((index) => {
           total += index.massKg;
        });
        return total;
    }
    currentMassKg():number{
        let astroMass : number = this.sumMass(this.astronauts);
        let cargoMass : number = this.sumMass(this.cargoItems);
        let total : number = astroMass + cargoMass;
        return total;
    }

    canAdd(item : Payload): boolean{
       if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
           return true;
        }
    }

    addCargo(cargo : Cargo):boolean{
        if(this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
            return true;
        }
        else{
            return false;
        }
    }

    addAstronaut(astronaut : Astronaut): boolean {
        if(this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        }
        else{
            return false;
        }
    }
 }