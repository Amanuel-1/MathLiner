class Fraction {
    /**
     * o achieve a constructor overloading we first need to define the constructors and then write the implementation
   for each separately. but note that multiple implementations are not allowed.
    Reference: https://stackoverflow.com/questions/12702548/constructor-overload-in-typescript
     */
    constructor(Nominator, Denominator) {
        this.Nominator = Nominator;
        this.Denominator = Denominator;
        /**this constructor should handle exceptions like when the Denominator parameter is
         * assinged a zero value.
         */
    }
    static deepCopy(frac) {
        var result = new Fraction(frac.Nominator, frac.Denominator);
        return result;
    }
    stringify() {
        var result = "";
        if (this.Denominator == 1) {
            result = `${this.Nominator}`;
        }
        else {
            result = `${this.Nominator} / ${this.Denominator}`;
        }
        return result;
    }
    /**
     * below are functions that are used to reduce the fraction into the most simplified form.
     * to do this, first we need to have a gcf and lcm functions , gcf especially.
     */
    static gcf(Nominator, Denominator) {
        if (Denominator === 0) {
            return Nominator;
        }
        else {
            return Fraction.gcf(Denominator, Nominator % Denominator);
        }
    }
    static lcm(Nominator, Denominator) {
        var result = (Nominator * Denominator) / this.gcf(Nominator, Denominator);
        return result;
    }
    static simplify(frac) {
        var Nominator = frac.Nominator / (Fraction.gcf(frac.Nominator, frac.Denominator));
        var Denominator = frac.Denominator / (Fraction.gcf(frac.Nominator, frac.Denominator));
        var result = new Fraction(Nominator, Denominator);
        return result;
    }
    simplify() {
        var Nominator = this.Nominator / (Fraction.gcf(this.Nominator, this.Denominator));
        var Denominator = this.Denominator / (Fraction.gcf(this.Nominator, this.Denominator));
        var result = new Fraction(Nominator, Denominator);
        return result;
    }
    // below are methods to evaluate arithmetic operations on fractional numbers
    static bulkAdd(fractions) {
        var result = Fraction.deepCopy(fractions[0]);
        var Nominator, Denominator;
        for (var i = 1; i < fractions.length; i++) {
            Denominator = this.lcm(result.Denominator, fractions[i].Denominator);
            Nominator = (result.Denominator / Denominator * result.Nominator) + (fractions[i].Denominator / Denominator * fractions[i].Nominator);
            result = new Fraction(Nominator, Denominator);
        }
        return result;
    }
    static add(frac_1, frac_2) {
        var Denominator = this.lcm(frac_1.Denominator, frac_2.Denominator);
        var Nominator = (frac_1.Denominator / Denominator * frac_1.Nominator) + (frac_2.Denominator / Denominator * frac_2.Nominator);
        var result = new Fraction(Nominator, Denominator);
        return result.simplify();
    }
    static subtract(frac_1, frac_2) {
        var Denominator = this.lcm(frac_1.Denominator, frac_2.Denominator);
        var Nominator = (frac_1.Denominator / Denominator * frac_1.Nominator) - (frac_2.Denominator / Denominator * frac_2.Nominator);
        var result = new Fraction(Nominator, Denominator);
        return result.simplify();
    }
    static multiply(frac_1, frac_2) {
        var Nominator = frac_1.Nominator * frac_2.Nominator;
        var Denominator = frac_1.Denominator * frac_2.Denominator;
        var result = (new Fraction(Nominator, Denominator)).simplify();
        return result;
    }
    static devide(frac_1, frac_2) {
        var Nominator = frac_1.Nominator * frac_2.Denominator;
        var Denominator = frac_1.Denominator * frac_2.Nominator;
        var result = (new Fraction(Nominator, Denominator).simplify());
        return result;
    }
    parseDouble() {
        var result = this.Nominator / this.Denominator;
        return result;
    }
    static parseFraction(value) {
        var string_ = value.toString();
        var decimalPoint = string_.length;
        for (let i of string_) {
            decimalPoint -= 1;
            if (i == '.') {
                break;
            }
        }
        var Nominator = value * (10 ** decimalPoint);
        var Denominator = 10 ** decimalPoint;
        var result = new Fraction(Nominator, Denominator);
        return result.simplify();
    }
    equals(frac) {
        return this.parseDouble() == frac.parseDouble();
    }
    isSimplified() {
        var simplified = this.simplify();
        return (simplified.Nominator == this.Nominator) && (simplified.Denominator == this.Denominator);
    }
}
