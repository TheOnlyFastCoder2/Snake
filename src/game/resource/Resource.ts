import * as THREE from 'three';
import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";


export default class SnakeResources {
  createPlane(size:Array<number>,meterialProps: THREE.MeshBasicMaterialParameters) {
    const geometry = new THREE.PlaneGeometry(...size);
    const material = new THREE.MeshPhongMaterial(meterialProps);
    return new THREE.Mesh( geometry, material );
  }

  createCube(size:Array<number>, meterialProps: THREE.MeshBasicMaterialParameters): Mesh<BoxGeometry, MeshBasicMaterial> {
    const geometry = new THREE.BoxGeometry(...size);
    const material = new THREE.MeshPhongMaterial(meterialProps);
    const cube = new THREE.Mesh( geometry, material );
    return cube;
  }

  createBerry(meterialProps:THREE.MeshBasicMaterialParameters) {
    const geometry = new THREE.IcosahedronGeometry(1.5,2);
    const material = new THREE.MeshPhongMaterial(meterialProps);
    const cube = new THREE.Mesh( geometry, material );
    return cube;
  }
} 