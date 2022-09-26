import { Roupa } from "./projeto";
import { Camisa } from "./camisa";
import { Bermuda} from "./bermuda";

let camisa1 = new Camisa("Adidas", "Preto", "GG", 50);
camisa1.dadosCamisa();

let bermuda1 = new Bermuda("Nike", "Rosa", "PP", 85);
bermuda1.verBermuda();


let estoque: string[] = []
console.log('\nEstoque:')
estoque.push('Camisa', 'Bermuda')
estoque.forEach(estoque=>console.log(estoque))









