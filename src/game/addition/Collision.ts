import * as Type from 'game/types';
import Snake from 'src/game/main'

let cntx:Snake;
export default class Collision {
  constructor(c:Snake){
    cntx = c;
  } 

  berry (head:Type.Coords) { 
    const berry = cntx.Berry.default;
    if(berry.pos.z === head.z && berry.pos.x === head.x)
    { 
      berry.action();
    }
  }

  tail (head:Type.Coords) {
    for(let i = 0; i < cntx.body.length; i++) {
      if(head.x === cntx.body[i].x && head.z === cntx.body[i].z) 
      {
        cntx.setterLives(--cntx.lives);
      }
    }
  }

  border(head:Type.Coords) {
    switch(cntx.direction) {
      case 'UP': head.x = (head.x+1) % cntx.Grid.divisGrid; break;
      case 'DOWN': head.x = (head.x-1) % cntx.Grid.divisGrid; break;
      case 'LEFT': head.z = (head.z-1) % cntx.Grid.divisGrid; break;
      case 'RIGHT': head.z = (head.z+1) % cntx.Grid.divisGrid; break;
    }
    
   
    if(head.x < 0) head.x = cntx.Grid.divisGrid-1;
    else if (head.z < 0) head.z = cntx.Grid.divisGrid-1;
  }
}