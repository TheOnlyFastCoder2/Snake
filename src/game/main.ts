import * as Type from './types';
import BunderSnake from './SnakeInit';

export default class Snake extends BunderSnake {  
  public maxLives = 3;
  public lives = this.maxLives;

  public score:number = 0;
  public direction:string = 'UP';
  public cells:Type.Cells = [];

  public bodyLen:number = 1;
  public body:Type.SnakeBody = [];

  /// CALLBACKS //
  public setterScore!: Function;
  public setterTail!: Function;
  public setterLives!: Function;

  public animFrame;
  constructor() {
    super();
    this.setBuild(this);

    this.animFrame = this.Grid.initAnimFrame(
      0.09,0.005,
      () => {
        if(this.lives >= 1) {
          this.setUpdate();
          this.drawSnake();
        }
        else {
          this.animFrame.getStop();
        }
      }
    )
    this.controlPanel();
  }

  controlPanel() {
    document.body.addEventListener('keyup',({code}) => {
			switch(code) {
				case 'KeyW': 
          if(this.direction != 'DOWN')
            return this.direction = 'UP';    

				case 'KeyS':
          if(this.direction != 'UP')
            return this.direction = 'DOWN';  

				case 'KeyA':
          if(this.direction != 'RIGHT')
            return this.direction = 'LEFT'; 

				case 'KeyD':
          if(this.direction != 'LEFT')
            return this.direction = 'RIGHT';
			}
		})
  }
  
  createCell(color:string) {
    const cell = this.Grid.createCube(
      this.Grid.propsCell,{
      color:color,
      // wireframe: true
    })

    cell.translateY(this.Grid.getPosY());
    this.frame.getScene.add(cell);
    return cell;
  }

  createGrid() {
    for(let i=0; i < this.Grid.divisGrid; i++) {
      for(let j=0; j < this.Grid.divisGrid; j++) {
        const mesh = this.Grid.createPlane([
          this.Grid.stepCell,
          this.Grid.stepCell
        ],{color:'#13161A'});
          
        mesh.position.y = 0;
        mesh.position.x = this.Grid.getCoord(i);
        mesh.position.z = this.Grid.getCoord(j);
        
        this.frame.getScene.add(mesh);
        mesh.rotation.x = -0.5*Math.PI;
      }
    }
  }

  createSnake(lenBody:number) {
    for(let i = 0; i <= lenBody; i++) {
      if( i === lenBody) {
        this.cells.push(this.createCell('#2C22E4'));
        this.body.push({x:i,z:0});
      }
      else {
        this.cells.push(this.createCell('#E42222'));
        this.body.push({x:i,z:0});
      }
    }
  }

  setUpdate() {
    const head:Type.Coords = {...this.getHead()};

    this.Collision.berry(head);
    this.Collision.border(head);

    this.body.shift();
    this.Collision.tail(head);
    this.body.push(head);
  }

  drawSnake() {
    for(let i = 0; i < this.body.length; i++) {
      this.cells[i].position.x = this.Grid.getCoord(this.body[i].x);
      this.cells[i].position.z = this.Grid.getCoord(this.body[i].z);
    }
  }
  
  main() {
    this.createGrid();
    this.Berry.Default();
    this.createSnake(this.bodyLen);

    this.setterScore();
    this.setterTail();
    this.setterLives();

    this.frame.draw();
  }

  resetGame() {
    this.cells = [];
    this.body = []
    this.score = 0;
    this.lives = this.maxLives;
    this.direction = 'UP';
  
    this.frame.delFrame();
    this.frame.getScene.remove.apply(
      this.frame.getScene,
      this.frame.getScene.children
    );

    this.animFrame.getStart();
    this.frame = this.Grid.initFrame();
    this.main();
  }

  getHead() {
    return this.body.at(-1)!;
  }

  initTail (callback:Function) {
    this.setterTail = () => callback(this.body.length-1);
  }

  initScore (callback:Function) {
    this.setterScore = () => callback(this.score); 
  }

  initLives (callback:Function) {
    this.setterLives = () => callback(this.lives); 
  }
  
  stopGame() {
    return this.animFrame.getStop();
  }

  startGame() {
    return this.animFrame.getStart();
  }
}