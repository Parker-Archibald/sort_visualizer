import '../Styles/App.css';
import sleep from './Sleep';

const quickSort = async (array, left, right) => {
    let bars = document.getElementsByClassName('bar')
    let index;
    if(array.length > 1) {
      index = await partition(array, left, right);
      if(left < index - 1) {
        await quickSort(array, left, index - 1)
      }
      if(index < right) {
        await quickSort(array, index, right)
      }
    }
    for(let i = 0; i < array.length; i++) {
      bars[i].style.backgroundColor = 'cyan';
    }
    
    return array;
  }

  const partition = async (array, left, right) => {
    let heightFactor = 17;
    let bars = document.getElementsByClassName('bar')
    let pivot = array[Math.floor((left + right) / 2)],
    i = left,
    j = right;

    while(i <= j) {
      while(array[i] < pivot) {
        i++;
        bars[i].style.backgroundColor = 'lightgreen';
        bars[i].style.height = array[i] * heightFactor + 'px';
      }
      while(array[j] > pivot) {
        j--;
        bars[j].style.backgroundColor = 'lightgreen';
        bars[j].style.height = array[j] * heightFactor + 'px';
      }
      if(i <= j) {
        bars[i].style.backgroundColor = 'lightgreen';
        bars[j].style.backgroundColor = 'lightgreen';
        await swap(array, i, j);
        bars[i].style.height = array[i] * heightFactor + 'px';
        bars[j].style.height = array[j] * heightFactor + 'px';
        bars[i].style.backgroundColor = 'cyan';
        bars[j].style.backgroundColor = 'cyan';
        i++;
        j--;
       
      }
      await sleep(20)
    }
    await sleep(20)
    return i
  }

  const swap = async (array, a, b) => {
    await sleep(20)
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }

  export default quickSort;