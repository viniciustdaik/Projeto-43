class Security {
  constructor() {
    this.access1 = createInput("");
    this.access1.position(width / 2 - 400, height / 2 - 160);//100, 90
    this.access1.style("background", "white");

    this.button1 = createButton("Verificar");//Testar
    this.button1.position(width / 2 - 400, height / 2 - 130);//100, 120
    this.button1.style("background", "lightgrey");

    this.access2 = createInput("");
    this.access2.position(width / 2 + 200, height / 2 - 60);//700, 190
    this.access2.style("background", "white");

    this.button2 = createButton("Verificar");//Testar
    this.button2.position(width / 2 + 200, height / 2 - 30);//700, 220
    this.button2.style("background", "lightgrey");

    // Adicione código para criar e posicionar a terceira caixa de entrada e botão

    this.access3 = createInput("");
    this.access3.position(width / 2 - 400, height / 2 + 40);//100, 290
    this.access3.style("background", "white");

    this.button3 = createButton('Verificar');
    this.button3.position(width / 2 - 400, height / 2 + 70);//100, 320
    this.button3.style('background', 'lightgrey');
  }

  /*hide(){
    this.button1.hide();
    this.access1.hide();
    this.button2.hide();
    this.access2.hide();
    this.button3.hide();
    this.access3.hide();

  }*/

  fixPosSec(){
    if(this.access1.x !== width / 2 - 400 || this.access1.y !== height / 2 - 160){
      this.access1.position(width / 2 - 400, height / 2 - 160);//100, 90
    }
    if(this.access2.x !== width / 2 + 200 || this.access1.y !== height / 2 - 60){
      this.access2.position(width / 2 + 200, height / 2 - 60);//700, 190
    }
    if(this.access3.x !== width / 2 - 400 || this.access1.y !== height / 2 + 40){
      this.access3.position(width / 2 - 400, height / 2 + 40);//100, 290
    }
    if(this.button1.x !== width / 2 - 400 || this.access1.y !== height / 2 - 130){
      this.button1.position(width / 2 - 400, height / 2 - 130);//100, 120
    }
    if(this.button2.x !== width / 2 + 200 || this.access1.y !== height / 2 - 30){
      this.button2.position(width / 2 + 200, height / 2 - 30);//700, 220
    }
    if(this.button3.x !== width / 2 - 400 || this.access1.y !== height / 2 + 70){
      this.button3.position(width / 2 - 400, height / 2 + 70);//100, 320
    }
    console.log("Positions Sec Fixed.");
  }

  display() {
    this.button1.mousePressed(() => {
      if (system.authenticate(accessCode1, this.access1.value())) {
        this.button1.hide();
        this.access1.hide();
        score++;
      }
    });

    this.button2.mousePressed(() => {
      if (system.authenticate(accessCode2, this.access2.value())) {
        this.button2.hide();
        this.access2.hide();
        score++;
      }
    });

    // Adicione código para o que acontece quando o terceiro botão for pressionado

    this.button3.mousePressed(() => {
      if (system.authenticate(accessCode3, this.access3.value())) {
        this.button3.hide();
        this.access3.hide();
        score++;
      }
    });
  }
}
