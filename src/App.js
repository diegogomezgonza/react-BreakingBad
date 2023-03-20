import React, {useState, useEffect} from 'react';
import Quote from './components/Quote';
import Spinner from './components/Spinner';

// Quotes iniciales (variables para texto y autor)
const initialQuote = {
  text: 'Quote',
  author: 'Author'
}

function App() {

  //Establecer estado para el initialQuote (en este caso true)
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setloading] = useState(true);

  //Función asíncrona para poder utilizar await y utilizar el loading
  const updateQuote = async () => {
    setloading(true);

    //Consumir API
    const url = "https://api.breakingbadquotes.xyz/v1/quotes";
    const res = await fetch(url);
    const [newQuote] = await res.json();
    
    //Creamos newQuote a raiz de los valores de text y author
    const {quote: text, author} = newQuote;

    //Establecemos valores
    setQuote({
      text,
      author
    })

    //Usamos estado false para mostrar el spinner de loading
    setloading(false);
  }

  //Pasamos la función para actualizar al useEffect
  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className="app">
      
      {/* Imagen breaking bad */}
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" alt="logo"/>

      {/* Función update en el evento onClick para actualizar frase */}
      <button onClick={() => updateQuote()}>Load phrase</button>

      {/* Condición para mostrar el spinner al actualizar */}
      { loading ? <Spinner></Spinner> : <Quote quote={quote} />}
    </div>
  );
}

export default App;
