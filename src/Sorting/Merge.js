import '../Styles/App.css';
import sleep from './Sleep';

const mergeSort = async (array) => {
    let heightFactor = 17;
    let bars = document.getElementsByClassName('bar')
    if(array.length <= 1) return array;

    let middle = Math.floor(array.length / 2);
    let left = await mergeSort(array.slice(0, middle))
    let right = await mergeSort(array.slice(middle))

    return merge(left, right)
}

const merge = async (left, right) => {
    let heightFactor = 17;
    let bars = document.getElementsByClassName('bar')
    let i = 0;
    let j = 0;
    let results = [];

    while (i < left.length && j < right.length) {
        bars[i].style.backgroundColor = 'lightgreen';
        bars[j].style.backgroundColor = 'lightgreen';
        if(right[j] > left[i]) {
            results.push(left[i])
            bars[i].style.height = left[i] * heightFactor + 'px';
            bars[j].style.height = right[j] * heightFactor + 'px';
            i++
        }
        else {
            results.push(right[j])
            bars[i].style.height = left[i] * heightFactor + 'px';
            bars[j].style.height = right[j] * heightFactor + 'px';
            j++
        }
        bars[i].style.backgroundColor = 'cyan';
        bars[j].style.backgroundColor = 'cyan';
        await sleep(20)
    }

    while(i < left.length) {
        results.push(left[i])
        bars[i].style.backgroundColor = 'lightgreen';
        bars[i].style.height = left[i] * heightFactor + 'px';
        i++
    }
    while(j < right.length) {
        results.push(right[j])
        bars[j].style.backgroundColor = 'lightgreen';
        bars[j].style.height = right[j] * heightFactor + 'px';
        j++
    }

    for(let x = 0; x < results.length; x++) {
        bars[x].style.height = results[x] * heightFactor + 'px';
    }
    
    await sleep(20)

    return results;
}

export default mergeSort;