class Complex{
    public Real:number;
    public Imaginary: number;

    constructor(Real: number, Imaginary: number){
        this.Real = Real;
        this.Imaginary = Imaginary;
    }


    /** the block of code below consists of methods
     *  that are used for performing the basic operations on complex numbers. 
     */

    static deepCopy(complex: Complex): Complex{
        var result: Complex  = new Complex(complex.Real,complex.Imaginary);

        return result;
    }

    static add(comp_1:Complex, comp_2:Complex): Complex{
        var result: Complex ;
        result = new Complex(comp_1.Real + comp_2.Real , comp_1.Imaginary + comp_2.Imaginary);

        return result;
    }
    // static bulkAdd(...args:Complex[]): Complex {
    //     var result: Complex;
    //     var Real: number,Imaginary: number;

    //     for(var comp of args){
    //         Real += comp.Real;
    //         Imaginary += comp.Imaginary;
    //     }

    //     result = new Complex(Real,Imaginary);

    //     return result;
    // }

    static subtract(comp_1:Complex, comp_2:Complex): Complex{
        var result: Complex ;
        result = new Complex(comp_1.Real - comp_2.Real , comp_1.Imaginary - comp_2.Imaginary);

        return result;
    }

    scale(scale:number): Complex {
        var result: Complex;
        result  = new Complex(this.Real*scale, this.Imaginary*scale);

        return result;
    }

    static multiply(comp_1: Complex, comp_2: Complex): Complex {
        var result: Complex;
        result = Complex.add(comp_2.scale(comp_1.Real), comp_2.scale(comp_1.Imaginary));

        return result;
    }

    inverse(): Complex {
        var result: Complex;
        var Real,Imaginary;

        Real = (this.Real);
        Imaginary = -(this.Imaginary);

        result = new Complex(Real,Imaginary);

        return result;
    }

    static divide(comp_1: Complex, comp_2: Complex): Complex {
        var result: Complex;
        result  = Complex.multiply(comp_1,comp_2.inverse() );

        return result;
    }

     toString(): string {
        var result: string = `${this.Real} ${(this.Imaginary!= 0)? 
            ((this.Imaginary < 0)? `- ${- this.Imaginary}`: `+ ${this.Imaginary}` )  : ''}`;

            return result;
     }

     toPolar(): string{
        var result:string;
        var angle:number  =Math.atan(this.Imaginary / this.Real);
       

        result = `${this.modulus()} ( Cos(${angle}) ${ (Math.sin(angle)>= 0 ? '+': '-')} Sin(${angle}))`;

        return result;
     }

     conjugate(): Complex {
        return new Complex(this.Real,-this.Imaginary);
     }
     
     modulus(): number {
        return Math.sqrt(this.Real**2 +  this.Imaginary**2);
     } 

     static isComplex(string_: string): boolean {
        string_  = string_.replace(/\s+/g,'')
        const complexRegex = /^([-+]?\d+(?:\.\d+)?)(?:[+\-]([-+]?\d+(?:\.\d+)?))?i$/;
        return complexRegex.test(string_)


     }
     
     getAngle(): number {
        return Math.atan(this.Imaginary/this.Real);
     }
     
     


     


}