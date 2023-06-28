import './Styles/App.css';
import { useEffect } from 'react';
import bubbleSort from './Sorting/Bubble';
import selectionSort from './Sorting/Selection';
import quickSort from './Sorting/Quick';
import insertionSort from './Sorting/Insertion';
import mergeSort from './Sorting/Merge';
import sleep from './Sorting/Sleep';

function App() {

  let minRange = 1;
  let heightFactor = 17;
  let maxRange = 48;
  let numOfBars = 60;
  let unsortedArray = new Array(numOfBars);
  let active = false;
  let speed = 20;

  //Initially creates an random array and renders the bars
  useEffect(() => {
      CreateRandomArray();
      renderBars(unsortedArray);
  }, [])

  //sets a random number lower than the max range
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //creates a random array
  const CreateRandomArray = async() => {
    let barsContainer = document.getElementById('bars_container');
    barsContainer.innerHTML = '';
    for(let i = 0; i < numOfBars; i++) {
      unsortedArray[i] = randomNum(minRange, maxRange)
    }
  }

  //renders the bars based off of the array
  const renderBars = async (array) => {
    let barsContainer = document.getElementById('bars_container');
    for(let i = 0; i < array.length; i++) {
      let bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = array[i] * heightFactor + 'px';
      barsContainer.appendChild(bar);
    }
    console.log(unsortedArray)
  }

  //created a new random array and renders the bars

  const randomizeArray = async () => {
    if(active === true) {
      document.location.reload();
    }
    let barsContainer = document.getElementById('bars_container');
    barsContainer.innerHTML = '';
    CreateRandomArray();
    renderBars(unsortedArray);
  }

  const changeNumOfBars = async (e) => {
    numOfBars = e.target.value;
    await CreateRandomArray();
    await renderBars(unsortedArray);
  }

  const changeSpeed = (e) => {
    speed = e.target.value;
  }

  //handles clicks on sorting buttons
  const Sort = async (e) =>  {
    if(active === true) {
      alert('Sort already in progress')
    }
    else {
      if(e.target.id === 'bubble_sort_button') {
        active = true;
        await bubbleSort(unsortedArray, speed);
        active = false
      }
      else if(e.target.id === 'selection_sort_button') {
        active = true;
        await selectionSort(unsortedArray);
        active = false;
      }
      else if(e.target.id === 'merge_sort_button') {
        active = true;
        let bars = document.getElementsByClassName('bar')
        await mergeSort(unsortedArray);
        for(let i = 0; i < unsortedArray.length; i++) {
          bars[i].style.backgroundColor = 'lightgreen';
          await sleep(20)
        }
        active = false
      }
      else if(e.target.id === 'quick_sort_button') {
        active = true;
        let bars = document.getElementsByClassName('bar')
        await quickSort(unsortedArray, 0, unsortedArray.length - 1)
        for(let i = 0; i < unsortedArray.length; i++) {
          bars[i].style.backgroundColor = 'lightgreen';
          await sleep(20)
        }
        active = false;
      }
      else if(e.target.id === 'insertion_sort_button') {
        active = true;
        await insertionSort(unsortedArray)
        active = false;
      }
    }
  }

  return (
    <div>
      <body>
        <div className='app_container'>
          <div className='bars_container' id='bars_container'></div>
          <div className='buttons_container'>
            <button id='randomize_array_btn' onClick={randomizeArray}>Randomize Array</button>
            <button id='bubble_sort_button' onClick={Sort}>Bubble Sort</button>
            <button id='selection_sort_button' onClick={Sort}>Selection Sort</button>
            {/* <button id='merge_sort_button' onClick={Sort}>Merge Sort</button> */}
            <button id='quick_sort_button' onClick={Sort}>Quick Sort</button>
            <button id='insertion_sort_button' onClick={Sort}>Insertion Sort</button>
            {/* <input type='range' min='1' max='100' defaultValue='20' class='slider' id='myRange' onChange={changeSpeed}/> */}
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
