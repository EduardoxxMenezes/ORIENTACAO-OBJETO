import { deflate } from "zlib";
import { produtos } from "./TRABALHO";
import { venda } from "./vendas";
let readline = require('readline-sync')


let TV = new produtos("TV",2500,"Apple",3000,10)
let celular = new produtos("Celular",1000,"LG",1600,20)
let Notebook = new produtos("Notebook",2500,"cavalos",80000,32)
let crianca = new produtos("crianca",10,"asiatica",20,18)
let pc2 = new produtos("pc",3000,"aple",5000,14)
let pc3 = new produtos("pc2",1500,"sla",14,25)
let celular2 = new produtos("celular",1000,"smt",12000,17)

let vendaTV = new venda(TV,"22/5/2008",4,"angela", "crédito",false)
let vendaCelular = new venda(celular,"15/9/2016",3,"cristina","débito",true)
let vendanotebook = new venda(Notebook,"23/4/2003",24, "cleber","credito", true)


TV.getProduto()
TV.setProduto()
TV.getProduto()
TV.lucro()
vendaTV.getvenda()
vendaTV.setvenda()
vendaTV.getvenda()
