import { useEffect, useState } from 'react';
import Card from './Card/Card';
import Footer from './Footer/Footer';

function App() {
  const [quote, setQuote] = useState();
  useEffect(() => setAdvice(), []);

  const setAdvice = () => fetchAdvice().then(setQuote);

  return (
    <>
      <Card quote={quote} />
      <Footer />
    </>
  );
}

const fetchAdvice = async function () {
  const response = await fetch('https://api.adviceslip.com/advice').catch((err) => console.error(err));
  const data = await response.json();
  return await data.slip.advice;
};

export default App;