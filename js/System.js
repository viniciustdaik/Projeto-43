class System {
  constructor() {}

  authenticate(actualCode, enteredCode) {
    textSize(50);
    fill("black");
    text(code, 300, 300);

    // Adicionar código para "return true" se a resposta correta for inserida senão "return false".
    if(actualCode === enteredCode){
      return true
    }else{
      return false
    }
    
  }
}
