class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton("Submit"); 
    this.greeting = createElement("h2");
    this.question = createElement("h4");
    this.input2 = createInput("Answer")
    
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.question.hide();
    this.input2.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("My Quiz");
    title.position(130, 0);

    this.question.html("What animal is the ancestor of humans and is commonly used as a discord roast?")
    this.question.position(0, 50);
    
    this.input.position(130, 160);
    this.input2.position(130, 210);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.question.hide()
      this.input2.hide();

       player.name = this.input.value();
       player.answer = this.input2.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello" + player.name);
      this.greeting.position(130, 160)

    });

  }
}
