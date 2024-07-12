import { Carro } from "./Carro";
import { Garagem } from "./garagem";
let garegem = new Garagem()

let uno = new Carro(12,"Carro",4,"julia")
console.log(uno.ObterGasolina())
uno.AdicionarGasolina()
uno.GetCarro()
uno.Dirigir(18)
garegem.AdicionarCarro(uno)

let motoca = new Carro(3,"motoca",2,"tatiana")
motoca.Dirigir(4)
motoca.GetCarro()
motoca.AdicionarGasolina()
console.log(motoca.ObterGasolina())
garegem.AdicionarCarro(motoca)

let cavalo = new Carro(8,"cavalo",2,"fabio")
console.log(cavalo.ObterGasolina())
cavalo.AdicionarGasolina()
cavalo.Dirigir(9)
garegem.AdicionarCarro(cavalo)

let carros = new Carro(0,"",0,"")
carros.SetCarro()
carros.GetCarro()
console.log(carros.ObterGasolina())
carros.AdicionarGasolina()
carros.Dirigir(18)
garegem.AdicionarCarro(carros)
garegem.ListarCarros()
garegem.RemoverCarro(uno)
garegem.ListarCarros()