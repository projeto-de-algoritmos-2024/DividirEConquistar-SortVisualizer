import React, { useState } from 'react';
import './Visualizer.css';

const Visualizer = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState('Merge Sort');

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const generateArray = () => {
    const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArray);
  };

  const mergeSort = async (arr, start = 0, end = arr.length - 1) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = await mergeSort(arr.slice(0, mid), start, start + mid - 1);
    const right = await mergeSort(arr.slice(mid), start + mid, end);

    return await merge(left, right, start, end);
  };

  const merge = async (left, right, start, end) => {
    let result = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    result = [...result, ...left.slice(i), ...right.slice(j)];

    // Atualizar o array no estado para cada etapa da fusão
    const newArray = [...array];
    for (let k = start; k <= end; k++) {
      newArray[k] = result[k - start];
    }
    setArray(newArray);

    // Pausa para visualizar o passo
    await sleep(500);

    return result;
  };

  const quickSort = async (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
      const pivotIndex = await partition(arr, low, high);
      await quickSort(arr, low, pivotIndex - 1);
      await quickSort(arr, pivotIndex + 1, high);
    }
  };

  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];

        // Atualizar o estado do array
        setArray([...arr]);
        await sleep(500);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    await sleep(500);

    return i + 1;
  };

  const handleSort = async () => {
    setSorting(true);

    if (algorithm === 'Merge Sort') {
      const sortedArray = await mergeSort(array);
      setArray(sortedArray);
    } else if (algorithm === 'Quick Sort') {
      const arrCopy = [...array];
      await quickSort(arrCopy);
      setArray(arrCopy);
    }

    setSorting(false);
  };

  return (
    <div className="visualizer">
      <div className="controls">
        <button onClick={generateArray} disabled={sorting}>
          Generate Array
        </button>
        <select
          onChange={(e) => setAlgorithm(e.target.value)}
          value={algorithm}
          disabled={sorting}
        >
          <option value="Merge Sort">Merge Sort</option>
          <option value="Quick Sort">Quick Sort</option>
        </select>
        <button onClick={handleSort} disabled={!array.length || sorting}>
          Sort Array
        </button>
      </div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value * 3}px`,
              backgroundColor: sorting ? '#f39c12' : '#61dafb',
            }}
          >
            <span className="array-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
