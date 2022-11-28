import ReactDOM from 'react-dom/client';
import React from 'react';
import './App.css';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const titulo = React.createElement(
    'h1',
    {className:'App'},
    'LA HORA ES:',
  );
  //root.render(titulo);

  const element = (
    <div className="App">
      <header className="App-header">
        {titulo}
        <h2>En México {new Date().toLocaleTimeString('es-MX')}</h2>
        <h2>En Estados Unidos {new Date().toLocaleTimeString('es-MX',{timeZone:'America/Los_Angeles'})}</h2>
      </header>
    </div>
  );
  root.render(element);
}

export default App;
