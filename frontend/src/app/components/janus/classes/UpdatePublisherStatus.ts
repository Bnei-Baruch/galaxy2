interface IPublisherStatus {
  login: string;
  countDisconnect: number;
  coefDisconnect: number;
  lastDisconnectDate: Date;
}


export class UpdatePublisherStatus {
    //minimum disconnections of user, aftre that need to disconnect user (minut/disconnect)
    private minCoefDisconnect: number;
    //if after last disconnection was more than this time - it's a new session. 3.5 hours (morning lesson)
    private timeForRestart: number = 3.5*60*60*1000;


    constructor(private login: string){
        // once in 5 minuts
        this.minCoefDisconnect: number = 5/1;
    }

    public onDisconnect():boolean{
        areHideUser:bool = false;
        status: IPublisherStatus = this.getStatus();
        prevTime: Date = status.lastDisconnectDate;
        
        status.countDisconnect++;
        status.lastDisconnectDate = new Date();

        if(status.lastDisconnectDate > this.timeForRestart){
            status = this.getDefaultStatusObj();
        } else if(status.countDisconnect > 3) {
            status.coefDisconnect = this.getDisconnectCoef(status, prevTime);
        }
        
        this.setStatus(status);
        
        return (status.coefDisconnect > this.minCoefDisconnect);
    }

    private getStatus(): IPublisherStatus{
        var statusList = JSON.parse(this.localStorage.getItem("publisherDeleteStatus"));
        status: IPublisherStatus = statusList[this.login];
        if(status === undefined) {
            status = this.getDefaultStatusObj();
            this.setStatus(status);
        }
        return status;
    }

    private setStatus(newStatus: IPublisherStatus): void {
        var statusList = JSON.parse(this.localStorage.getItem("publisherDeleteStatus"));
        statusList[this.login] = newStatus;
        localStorage.setItem("publisherDeleteStatus", JSON.stringify(statusList));
    }

    private getDefaultStatusObj():IPublisherStatus{
        return {
            login: this.login,
            countDisconnect: 0,
            coefDisconnect: 1,
            lastDisconnectDate: new Date()
        };
    }

    private getDisconnectCoef(status: IPublisherStatus, prevTime: Date): boolean {
        var deltaTime = status.lastDisconnectDate - prevTime;
        newCoef:number =  (status.coefDisconnect*status.countDisconnect + (deltaTime/60*60*1000)/1)/(status.countDisconnect + 1);
        return newCoef;
    }
}
