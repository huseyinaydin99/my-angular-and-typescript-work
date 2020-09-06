function deger<T>(deger: T):T {
    return deger;
}

let str: string = deger<string>("Merhaba");
let nmbr: number = deger<number>(10);

class GenericClass<T>{
    deger: T;
    fonksiyon(abc: T):T{
        return abc;
    }
}

let generic = new GenericClass<string>();
let str2: string = generic.fonksiyon("merhaba");