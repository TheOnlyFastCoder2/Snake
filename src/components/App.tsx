import {useContext, useEffect, useState } from 'react';

import Menu from 'components/_Menu';
import SnakeContext from 'contexts/Snake';

export default function () {
  const [score,setScore] = useState<number>(0);
  const [tailLen,setTailLen] = useState<number>(0);
  const [lives,setLives] = useState<number>(0);
  const Snake = useContext(SnakeContext);

  useEffect(() => {
    Snake.initScore(setScore);
    Snake.initTail(setTailLen);
    Snake.initLives(setLives);
    Snake.main();
  },[])

  return (
    <>
      <Menu/>
      <h1>SCORE:{score}</h1>
      <h1>LENGTH:{tailLen}</h1>
      <h1>Lives:{lives}</h1>
    </>
  )
}