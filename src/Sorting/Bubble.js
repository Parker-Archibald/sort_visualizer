import '../Styles/App.css';
import sleep from './Sleep';
 
 //sort using the bubble sort
 const bubbleSort = async (array, speed) => {

    let heightFactor = 17;

    let bars = document.getElementsByClassName('bar')
    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j+1]) {
          for(let k = 0; k < bars.length; k++) {
            if(k !== j && k !== j + 1) {
              bars[k].style.backgroundColor = 'cyan';
            }
          }
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          bars[j].style.height = array[j] * heightFactor + 'px';
          bars[j].style.backgroundColor = 'lightgreen';
          bars[j + 1].style.height = array[j + 1] * heightFactor + 'px';
          bars[j + 1].style.backgroundColor = 'lightgreen';
          await sleep(speed)
        }
      }
      await sleep(speed)
    }
    for(let x = 0; x < array.length; x++) {
      bars[x].style.height = array[x] * heightFactor + 'px';
      bars[x].style.backgroundColor = 'lightgreen'
      await sleep(speed)
  }
    return array;
  }

  export default bubbleSort;