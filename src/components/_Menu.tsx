import { useContext, useEffect, useRef} from "react"
import SnakeContext from 'contexts/Snake';

export default function () {
  const refMenu = useRef(null);

  const Snake = useContext(SnakeContext);

  function showMenu () {
    const menu:HTMLDivElement = refMenu.current!;
    menu.classList.add('show');
    Snake.stopGame()
  }

  function hideMenu () {
    const menu:HTMLDivElement = refMenu.current!;
    menu.classList.remove('show');
    Snake.startGame();
  }

  useEffect(() => {
    document.body
    .addEventListener('keydown',({key}) => {
      if(key === 'Escape') {
        const menu:HTMLDivElement = refMenu.current!;
        menu.classList.contains('show')
        ? hideMenu()
        : showMenu()
      }
    })
  },[])


  function resetGame() {
    hideMenu();
    Snake.resetGame();
  }

  return (
    <div className="Menu" ref={refMenu}>
      <div className="Menu-container">
          <ul>
            <li onClick={() => hideMenu()}>Continue</li>
            <li onClick={resetGame}>New game</li>
          </ul>
      </div>
    </div>
  )
}