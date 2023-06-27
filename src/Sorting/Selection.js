import '../Styles/App.css';
import sleep from './Sleep';

const selectionSort = async (array) => {
    let heightFactor = 17;
    let bars = document.getElementsByClassName('bar')
    for(let i = 0; i < array.length; i++) {
      bars[i].style.backgroundColor = 'lightgreen';
      for(let j = 0; j < array.length; j++) {
        if(array[i] < array[j]) {
          
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;

          bars[j].style.height = array[j] * heightFactor + 'px';
          bars[j].style.backgroundColor = 'lightgreen';
          bars[i].style.height = array[i] * heightFactor + 'px';
          await sleep(20)
        }
        bars[i].style.backgroundColor = 'cyan';
        bars[j].style.backgroundColor = 'cyan';
      }
      await sleep(20)
    }
    for(let x = 0; x < array.length; x++) {
      bars[x].style.height = array[x] * heightFactor + 'px';
      bars[x].style.backgroundColor = 'lightgreen'
      await sleep(20)
  }
  }

  export default selectionSort;