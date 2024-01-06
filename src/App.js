import './App.css';
import FormAddBike from './components/form/Form';
import Header from './components/header/Header';
import MainPage from './components/home/MainPage';

import Statistics from './components/statistics/Statistics';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }} className="container">
        <MainPage />
        <FormAddBike />
      </div>
      <Statistics />
    </div>
  );
}

export default App;
