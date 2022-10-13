import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './components/hooks/useTelegram';
import { useEffect } from 'react';

function App() {

  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
