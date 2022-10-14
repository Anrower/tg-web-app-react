import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ProductList from './components/ProductList/ProductList';
import { useTelegram } from './hooks/useTelegram';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
