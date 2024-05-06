import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form/Form';

function App() {
  const {tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [tg])
  return (
    <div className="App">
      <Routes>
        <Route index element = {<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
