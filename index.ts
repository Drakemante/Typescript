//tipagem !explicita//
let variavel = "text"
//tipagem string (letras palavras) explicita//
let variavel2: string = "texto"
//tipagem de variavel com numero 
let variavel3: number = 0
//tipagem de variaveis lógicas
let variavel4: boolean = true
let variabel5: boolean = false
//tipagem de vareavel objeto
let variavel6: object = {}
//tipagem de variavel array
let variavel7: [number, number] = [0,1]

let variavel8: number[] = [0,1,8,8]

let variavel9: string[] = ["texto1", "texto2"]

// função que não tem retorno chamada de void
function numberRandom(): void {
    variavel3 = Math.random()
    console.log(variavel3)
}

function numberRandomReturn(): number {
    return Math.random()
}

console.log(numberRandomReturn())
numberRandom()