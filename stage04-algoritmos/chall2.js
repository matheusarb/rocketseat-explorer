let listaEstudantes = [
  {
    nome: "João",
    nota1: 7,
    nota2: 8,
  },
  {
    nome: "Maria",
    nota1: 10,
    nota2: 6,
  },
  {
    nome: "José",
    nota1: 4,
    nota2: 9,
  },
];

let calcularMedia = function (estudante) {
  let msg = ""
  if (estudante == null) {
    throw new Error("Informe um estudante para calcular a média!");
  }
  media = (estudante.nota1 + estudante.nota2) / 2;
  if(media>7){
    msg = `Parabéns ${estudante.nome}! Você foi aprovado(a) no concurso!`
    } else{
    msg = `Não foi dessa vez, ${estudante.nome}! Tente novamente.`
  }

  alert(`A média do(a) aluno(a) ${estudante.nome} é: ${media}\n${msg}`);
};
try
{
    calcularMedia(listaEstudantes[2]);
} 
catch (e)
{
    alert(e)
}