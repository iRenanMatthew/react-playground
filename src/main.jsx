import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Appv2 from './Appv2.jsx';
import Appv3 from './Appv3.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


  root.render(
    <>
    <App />
    <br/>
    <hr/>
    <Appv2 />
    <br/>
    <hr/>
    <Appv3 />
    </>
  )



