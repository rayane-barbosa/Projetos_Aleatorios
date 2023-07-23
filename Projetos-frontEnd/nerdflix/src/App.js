import './App.css';
import Head from './components/Head/head.jsx';
import CardFilme from './components/CardFilms/cardFilmes.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Head
        name='Nerdflix'/>
        
      </header>

      <CardFilme/>

    </div>
  );
}

export default App;
