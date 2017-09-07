const PLAYER_TOKEN = 'X'
const COMPUTER_TOKEN = 'Y'


$(document).ready(function(){
  const grid = [
    [' ',' ', ' '],
    [' ',' ', ' '],
    [' ',' ', ' ']
  ];
  
  function didIWin() {
    //check hor
    for (var i =0; i <3; i++){
      if (grid[i][0] !== ' ' &&
         grid [i][0] === grid[i][1] &&
         grid[i][0] === grid[i][2]){
        return grid[i][0]
      }
    }
     //check vert
    for (var j =0; j < 3; j++){
      if(grid[0][j] !== ' ' &&
         grid[0][j] === grid[1][j] &&
         grid[0][j] === grid[2][j]){
        return grid[0][j]
      }
    }
     //check diag top left bot right
      if(grid[0][0] !== ' ' &&
         grid[0][0] === grid[1][1] &&
         grid[0][0] === grid[2][2]){
        return grid[0][0]
      }
    
      //check diag bot left top right
      if(grid[2][0] !== ' ' &&
         grid[2][0] === grid[1][1] &&
         grid[2][0] === grid[0][2]){
        return grid[2][0]
      }
      
    let empty = true;
    for(var i = 0; i < 3; i++){
      for(var j = 0; j < 3; j++){
        if (grid[i][j] === ' '){
          return false;
        }   
      } 
    }
    return null;
  }
  
  function moveAI(){
    for (var i = 0; i < 3; i++){
      for (var j = 0; j < 3; j++){
        if (grid[i][j] === ' '){
          return {
            i: i,
            j: j
          };
        }
      }
    }
    return null;
  }
  
  
  $('.col').click(function(){
    $this = $(this);
    $this.html(PLAYER_TOKEN);
    const i = $this.data('i');
    const j = $this.data('j');
    grid [i][j] = PLAYER_TOKEN;
    
    let gameState = didIWin()
      if(gameState) {
          alert('Game Over: ' + gameState);
      }else{
          const move = moveAI()
          grid[move.i][move.j] = COMPUTER_TOKEN;
      }
      
      gameState = didIWin()
      if (gameState){
          alert('Game Over: ' + gameState);
      }
    
  });
  
  
  
});