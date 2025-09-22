import navImg from './assets/logo.png';
import logoImg from './assets/coin.png'
import './App.css';

function App() {
  return (
    <>
      <div className="navbar  2xl:max-w-[1200px] md:max-w-[800px] mx-auto">
        <div className="flex-1 ">
          <a className=" text-xl">
            <img className="w-[60px] h-[60px]" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex">
          <span className="mr-2">6000000000</span>
          <span className="mr-1">coin</span>
          <img src={logoImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
