import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

export default class Scene {
  private scene;
  private camera;
  private renderer;
  private timeId:number = 0;

  constructor(canvas:HTMLCanvasElement,) 
  {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 78,canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000 )

    this.renderer = new THREE.WebGLRenderer({canvas,antialias:true});
    this.renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);    
  }

  setOrbitControls() {
    const orbit = new OrbitControls(this.camera,this.renderer.domElement);
    orbit.update();
  }

  helperGrid (a:number,b:number,c?:string,d?:string) {
    this.scene.add( new THREE.GridHelper(a,b,c,d) )
  }

  helperAxes(size:number) {
    this.scene.add(new THREE.AxesHelper(size))
  }

  light (pos:THREE.Vector3, rot:THREE.Euler) {
    const intensity = 2.8;
    const color = 0xFFFFFF;
    const light = new THREE.HemisphereLight(color,0x000000, intensity);

    light.position.copy(pos);
    light.rotation.copy(rot);
    this.scene.add(light);
  }

  delFrame() {
    cancelAnimationFrame(this.timeId)
  }
  draw(callback?:Function) {
    this.timeId = requestAnimationFrame( this.draw.bind(this, callback) );
    this.renderer.render( this.scene, this.camera );
    callback && callback();
  }

  get getScene() {return this.scene}
  get getCamera() {return this.camera}
}

