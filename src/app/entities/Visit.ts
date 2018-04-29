import { Vitals } from "@app/entities/Vitals";

export class Visit{
    date :Date;
    vitals: Vitals;

    constructor(vitals: Vitals){
      this.vitals = vitals;
      this.date = new Date();
    }
}
