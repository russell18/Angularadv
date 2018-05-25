export class Country {
    public name: string;
    public capital: string;
    public currencies: Currency[];
    public subregion: string;
    public timezone: string[];
    public flag: string;

    constructor(data: any) {
        this.name = data.name ? data.name : null;
        this.capital = data.capital ? data.capital : null;
        this.currencies = data.currencies ? data.currencies.map(res => new Currency(res)) : [];
        this.subregion = data.subregion ? data.subregion : null;
        this.timezone = data.timezone ? data.timezone  : [];
        this.flag = data.flag ? data.flag : null;
    }
}

export class Currency {
    public code: string;
    public name: string;
    public symbol: string;
    constructor(data: any) {
        this.code = data.code ? data.code : null;
        this.name = data.name ? data.name : null;
        this.symbol = data.symbol ? data.symbol : null;
    }
}

  

