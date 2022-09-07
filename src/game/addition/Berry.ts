import * as Type from 'game/types';
import Snake from 'src/game/main'

let cntx:Snake;
export default class Berry{
  public default!:Type.Berry;
  public health!:Type.Berry;
  public incrBody!:Type.Berry;
  public decrBody!:Type.Berry;
  
  constructor (c:Snake) {
    cntx = c;    
  } 

  Default () {
    this.default = this.createСarcass('#CC3924');
    this.changePosBerry(this.default);
    
    this.default.action = () => {
      cntx.Berry.changePosBerry(this.default);

      cntx.cells.unshift(cntx.createCell('#E42222'));
      cntx.body.push({
        x: cntx.body[cntx.body.length-1].x,
        z: cntx.body[cntx.body.length-1].z
      });

      cntx.score++;
      cntx?.setterScore();
      cntx?.setterTail();
    }
  }

  changePosBerry (berry:Type.Berry) {
    berry.pos.x = Math.floor(Math.random() * cntx.Grid.divisGrid);
    berry.pos.z = Math.floor(Math.random() * cntx.Grid.divisGrid);
    berry.mesh.position.x = cntx.Grid.getCoord(berry.pos.x);
    berry.mesh.position.z = cntx.Grid.getCoord(berry.pos.z);
  }

  createСarcass (color:string):Type.Berry {
    const mesh = cntx.createCell(color);
    mesh.position.y = cntx.Grid.getPosY();
    return {
      mesh:mesh,
      pos:{x:0,z:0,y:0},
      action:() => {}
    };
  }
}