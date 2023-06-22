import './Styles/App.css';

function App() {

  let randomizeArray = document.getElementById('randomize_array_btn');
  let sortBtn = document.getElementById('sort_btn');
  let minRange = 1;
  let maxRange = 20;
  let numOfBars = 10;
  let unsortedArray = new Array(numOfBars);

  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const CreateRandomArray = () => {
    for(let i = 0; i < numOfBars; i++) {
      unsortedArray[i] = randomNum(minRange, maxRange)
    }
  }

  return (
    <div>
      <body>
        <div className='app_container'>
          <div className='bars_container'>
            <div className='bars'></div>
            <div className='bars'></div>
            <div className='bars'></div>
            <div className='bars'></div>
            <div className='bars'></div>
            <div className='bars'></div>
            <div className='bars'></div>
            <div className='bars'></div>
          </div>
          <div className='buttons_container'>
            <button id='randomize_array_btn'>Randomize Array</button>
            <button id='sort_btn'>Sort</button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
