class Player {
  constructor(){
    this.index = 0;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
     
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
    console.log(playerCount);

  }

  update(){
    console.log(this.index);
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
    namme:this.name,
    distance:this.distance
    });
  }
  static getPlayerInfo(){
    var playerInfoRef = datasbase.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();

    })
  }
}
