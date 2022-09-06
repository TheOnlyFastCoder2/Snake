import {createRoot} from 'react-dom/client';

import 'css/styles.css';
import App from './components/App';

createRoot(document.querySelector('.UI')!).render(<App/>)