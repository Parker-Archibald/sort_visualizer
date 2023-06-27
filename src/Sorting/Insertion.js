import '../Styles/App.css';
import sleep from './Sleep';

const insertionSort = async (array) => {
    let heightFactor = 17;
    let bars = document.getElementsByClassName('bar')

    for(let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;

        
        while(j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            bars[j + 1].style.height = array[j] * heightFactor + 'px';
            bars[j].style.height = array[j] * heightFactor + 'px';
            bars[j + 1].style.backgroundColor = 'cyan';
            bars[j].style.backgroundColor = 'lightgreen';
            bars[temp].style.backgroundColor = 'lightgreen';
            j -= 1;
            await sleep(20)
        }
        bars[temp].style.backgroundColor = 'cyan';
        array[j + 1] = temp;
        
        bars[temp].style.backgroundColor = 'cyan';
        bars[i].style.backgroundColor = 'cyan';
        bars[j + 1].style.backgroundColor = 'cyan';
        for(let x = 0; x < array.length; x++) {
            bars[x].style.height = array[x] * heightFactor + 'px';
        }
    }
    for(let x = 0; x < array.length; x++) {
        bars[x].style.height = array[x] * heightFactor + 'px';
        bars[x].style.backgroundColor = 'lightgreen'
        await sleep(20)
    }
    return array;
}

export default insertionSort;