import { BoxGeometry, Mesh, MeshBasicMaterial} from "three";

 
export type Coords ={x:number,z:number, y?:number};
export type Cells = Array<Mesh<BoxGeometry, MeshBasicMaterial>>;
export type SnakeBody = Array<Coords>;

export type Berry = {
  mesh:Mesh<BoxGeometry, MeshBasicMaterial>
  pos:Coords,
  action:Function
}

export const Berries = [
  'default',
  'health',
  'incrBody',
  'decrBody'
]

export type externalMethods  = {
  setScore:Function;
  setTailLen:Function;
}

