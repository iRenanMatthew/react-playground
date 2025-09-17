import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Appv2 from './Appv2.jsx';
import './index.css';

let counter = 1;

const root = ReactDOM.createRoot(document.getElementById('root'));

const refresh = () => {
  root.render(
    <>
    <App />
    <Appv2 counter={counter} />
    </>
  )
}

setInterval(()=>{
  counter += 1;
  refresh()
}, 1000)

