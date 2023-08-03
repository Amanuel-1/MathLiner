class Expression {
    private readonly expr: string;
  
    constructor(expr: string) {
      this.expr = expr;
    }
  
    evaluate(x: number): number {
      const fn = this.parse();
      return fn(x);
    }
  
    differentiate(): Expression {
      const fn = this.parse();
      const dfn = (x: number) => {
        const h = 1e-6;
        return (fn(x + h) - fn(x - h)) / (2 * h);
      };
      return new Expression(dfn.toString());
    }
  
    private parse(): (x: number) => number {
      const code = `
        const fn = x => ${this.expr};
        fn;
      `;
      return eval(code);
    }
  }