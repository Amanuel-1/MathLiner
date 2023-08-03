class Matrix{
    public entries: number[]

    public constructor(public rows:number ,public cols:number){       

        for(var i=0 ; i<rows; i++){
           for(var j =0; j<cols; j++ ){
            this.entries[i][j]   = 0;
           }
        }
    }
    
     print():void {
        console.table(this.entries);
    }

}