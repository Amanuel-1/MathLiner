class Expression {
    constructor(expr) {
        this.expr = expr;
    }
    evaluate(x) {
        const fn = this.parse();
        return fn(x);
    }
    differentiate() {
        const fn = this.parse();
        const dfn = (x) => {
            const h = 1e-6;
            return (fn(x + h) - fn(x - h)) / (2 * h);
        };
        return new Expression(dfn.toString());
    }
    parse() {
        const code = `
        const fn = x => ${this.expr};
        fn;
      `;
        return eval(code);
    }
}
