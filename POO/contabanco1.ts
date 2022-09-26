import { Contabanco } from "./src/contabanco";
let conta1 = new Contabanco("Gabriel", "005-4","4002-52", 1000);
conta1.deposito(1000);
conta1.verSaldo();