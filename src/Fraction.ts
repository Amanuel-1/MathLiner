  class Fraction {

     public Nominator: number;
     public Denominator: number;

    
   /**
    * o achieve a constructor overloading we first need to define the constructors and then write the implementation 
  for each separately. but note that multiple implementations are not allowed.
   Reference: https://stackoverflow.com/questions/12702548/constructor-overload-in-typescript
    */

    constructor(Nominator : number,  Denominator : number){
        this.Nominator = Nominator;
        this.Denominator = Denominator;

        /**this constructor should handle exceptions like when the Denominator parameter is 
         * assinged a zero value.
         */

    }


    public static deepCopy(frac: Fraction): Fraction {
        var result: Fraction = new Fraction(frac.Nominator,frac.Denominator);

        return result;
    
    }

    public stringify(): string {
        var result: string  =""
        if(this.Denominator  == 1){
            result  = `${this.Nominator}`;
        }
         else {
            result  = `${this.Nominator} / ${this.Denominator}`;
         }

        return result;

    }

    /**
     * below are functions that are used to reduce the fraction into the most simplified form.
     * to do this, first we need to have a gcf and lcm functions , gcf especially.
     */

    private static gcf(Nominator: number , Denominator: number): number{
        
            if (Denominator === 0) {
              return Nominator;
            } else {
              return Fraction.gcf(Denominator, Nominator % Denominator);
            }
          
    }

    private static lcm(Nominator: number, Denominator: number): number {
        var result: number  = (Nominator * Denominator) / this.gcf(Nominator,Denominator);

        return result;
    }



    
    private static simplify(frac: Fraction): Fraction{
        var Nominator  = frac.Nominator / (Fraction.gcf(frac.Nominator,frac.Denominator));
        var Denominator  =  frac.Denominator / (Fraction.gcf(frac.Nominator,frac.Denominator));

        var result: Fraction  = new Fraction(Nominator,Denominator);

        return result;

    }
    private simplify(): Fraction{
        var Nominator  = this.Nominator / (Fraction.gcf(this.Nominator,this.Denominator));
        var Denominator  =  this.Denominator / (Fraction.gcf(this.Nominator,this.Denominator));

        var result: Fraction  = new Fraction(Nominator,Denominator);

        return result;

    }

     // below are methods to evaluate arithmetic operations on fractional numbers

     public static bulkAdd(fractions: Fraction[]): Fraction {
        var result: Fraction  = Fraction.deepCopy(fractions[0]);
        var Nominator: number ,Denominator:number ;
        for(var i =1 ;i < fractions.length ; i++){
            Denominator  =  this.lcm(result.Denominator,fractions[i].Denominator);
            Nominator = (result.Denominator/Denominator * result.Nominator) + (fractions[i].Denominator / Denominator * fractions[i].Nominator); 
            result   = new Fraction(Nominator,Denominator);
        }

        return result;
     }

     public static add(frac_1: Fraction, frac_2: Fraction): Fraction {
        var Denominator:number  =  this.lcm(frac_1.Denominator,frac_2.Denominator);
        var Nominator: number = (frac_1.Denominator/Denominator * frac_1.Nominator) + (frac_2.Denominator / Denominator * frac_2.Nominator); 
        var result: Fraction = new Fraction(Nominator,Denominator);

        return result.simplify();
     }

     public static subtract(frac_1: Fraction, frac_2: Fraction): Fraction {
        var Denominator:number  =  this.lcm(frac_1.Denominator,frac_2.Denominator);
        var Nominator: number = (frac_1.Denominator/Denominator * frac_1.Nominator) - (frac_2.Denominator / Denominator * frac_2.Nominator); 
        var result: Fraction = new Fraction(Nominator,Denominator);

        return result.simplify();
     }

     public static multiply(frac_1: Fraction,frac_2: Fraction): Fraction {
        var Nominator: number  = frac_1.Nominator * frac_2.Nominator;
        var Denominator: number = frac_1.Denominator * frac_2.Denominator;

        var result: Fraction  = (new Fraction(Nominator, Denominator)).simplify();

        return result;
     }

     public static devide(frac_1: Fraction,frac_2: Fraction): Fraction {
        var Nominator: number  = frac_1.Nominator * frac_2.Denominator;
        var Denominator: number = frac_1.Denominator * frac_2.Nominator;

        var result: Fraction  =  (new Fraction(Nominator, Denominator).simplify());

        return result;
     }

     public parseDouble(): number {
        var result: number  = this.Nominator / this.Denominator;
        return result;
     }

     public static parseFraction(value: number): Fraction {
        var string_  = value.toString();
        var decimalPoint = string_.length;

        for(let i of string_){
            decimalPoint -= 1; 
            if(i =='.'){
                break;
            }

        }

        var Nominator  = value * (10**decimalPoint);
        var Denominator  = 10**decimalPoint;
        var result: Fraction = new Fraction(Nominator,Denominator);

        return result.simplify();
     }

     equals(frac: Fraction): boolean {
        return this.parseDouble() == frac.parseDouble()
     }

     isSimplified(): boolean {
        var simplified = this.simplify();
        return (simplified.Nominator == this.Nominator)  && (simplified.Denominator == this.Denominator)
     }

    
     

}

 