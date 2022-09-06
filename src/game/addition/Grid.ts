import Frame from 'game/resource/scene';
import Resource from 'game/resource/Resource';
import RequesAnimation from 'game/resource/RequesAnimation';

import * as THREE from "three";

export default class InitGrid extends Resource {
  public sizeGrid:number = 70;
  public divisGrid:number= 20;
  private halfGrid:number = this.divisGrid / this.sizeGrid;

  private cameraPosition:THREE.Vector3 = new THREE.Vector3(12, 55, 35);
  private cameraRotation:THREE.Euler = new THREE.Euler(
    -0.5 * Math.PI, -0.085 * Math.PI, -0.50 * Math.PI
  );

  private lightPostion:THREE.Vector3 = new THREE.Vector3(25,90,-200);
  private lightRotation:THREE.Euler = new THREE.Euler(0,0,0);

  public marginCell:number = 0.2;
  public stepCell:number = this.sizeGrid / this.divisGrid + this.marginCell;
  public sizeCell:number = this.sizeGrid / this.halfGrid - this.stepCell;

  public propsCell:Array<number> = [
    this.stepCell-this.marginCell,
    this.getPosY(),
    this.stepCell-this.marginCell
  ]
  
  getPosY():number {
    return (this.stepCell-this.marginCell)/8;
  }

  getCoord(n:number):number {
    return (this.stepCell+this.marginCell)*n+this.stepCell/2
  }

  initFrame():Frame {
    const frame = new Frame(document.querySelector('canvas')!)

    frame.getCamera.position.copy(this.cameraPosition);
    frame.getCamera.rotation.copy(this.cameraRotation);

    frame.light(this.lightPostion,this.lightRotation);
    return frame;
  }

  initAnimFrame(freq:number, freqStep:number, draw:Function):RequesAnimation {
    return new RequesAnimation(freq,freqStep,draw);
  }
}