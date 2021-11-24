import './App.css';
import { Card } from './components/Card';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';


function App() {

  const rewards1 = {
    bronze: 1,
    silver: 3,
    gold: 1
  };
  const rewards2 = {
    bronze: 8,
    silver: 0,
    gold: 4
  };
    const rewards3 = {
    bronze: 1,
    silver: 3,
    gold: 10
  };
  return (
    <>
      <div className="wrapper">
        <div className="cards">
          <Card userName="Anna" userSurname="Kowalska" awatar={img1} rewards={rewards1} />
          <Card userName="Piotr" userSurname="Nowak" awatar={img2} rewards={rewards2} />
          <Card userName="Katarzyna" userSurname="Strzała" awatar={img3} rewards={rewards3} />


        </div>

      </div>
      
      </>
  );
}

export default App;
