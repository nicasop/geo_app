export class Position{
    public lat:number;
    public log:number;
    public create: Date;
    public icon: string;

    constructor(lat:number, log:number){
        this.lat=lat,
        this.log=log,
        this.create = new Date(),
        this.icon = 'locate-outline'
    }
}