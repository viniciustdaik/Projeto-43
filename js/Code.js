const accessCode1 = "VARIÁVEL";
const accessCode2 = "FUNÇÃO";
const accessCode3 = "BANCO DE DADOS";

function clues() {
  fill("cyan");//white
  stroke("darkblue");
  textSize(15);
  fill("lightblue");
  text("Dica: Sempre Mudando, Não Constante!", width / 2 - 400, height / 2 - 180);//100, 70
  push();
  stroke("white");
  text("R E V A I L V A", width / 2 - 400, height / 2 - 200);//, 50
  text("Ç U N F O Ã", width / 2 + 200, height / 2 - 100);//, 150
  text("B N D A O C A S D O E D", width / 2 - 400, height / 2);//, 250
  pop();

  // Adicione código para exibir as outras duas perguntas.
  text("Dica: Performa Uma Tarefa Em Particular!", width / 2 + 200, height / 2 - 80);//700, 170

  text("Dica: Armazena Todas As Informações!", width / 2 - 400, height / 2 + 20);//100, 270

}

function fixPosCode(){
  clear();
  clues();
  console.log("Positions Code Fixed.");
}
