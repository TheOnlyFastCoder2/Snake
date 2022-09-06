import Snake from 'src/game/main'
import Frame from 'game/resource/scene';

import Grid from 'game/addition/Grid';
import Berry from 'game/addition/Berry';
import Collision from './addition/Collision';


export default class BunderSnake{
  public Grid!:Grid;
  public Berry!:Berry;
  public Collision!:Collision;
  public frame!:Frame;

  setBuild<T extends Snake>(cntx: T) {
    this.Grid = new Grid();

    this.frame = this.Grid.initFrame();

    this.Berry = new Berry(cntx);
    this.Collision = new Collision(cntx);
  }
}