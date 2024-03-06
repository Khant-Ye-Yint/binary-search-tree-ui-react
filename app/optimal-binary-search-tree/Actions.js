'use client';
import { useRef } from 'react';
import { optimalBST } from './obst';

const Actions = ({
  keys,
  setKeys,
  frequencies,
  setFrequencies,
  dummy,
  setDummy,
  setTree,
  setCost,
}) => {
  const keyRef = useRef();
  const frequenciesRef = useRef();

  const pushIntoArrayAndUpdate = (arr, ref, updateFunction) => {
    const dummyArr = arr;
    dummyArr.push(+ref.current.value);
    ref.current.value = '';
    updateFunction(dummyArr);
    setDummy(!dummy);
  };

  const resetHandler = () => {
    setKeys([]);
    setFrequencies([]);
    setTree({});
    setCost(null);
    setDummy(!dummy);
  };

  const generateTree = () => {
    const { root, cost } = optimalBST(keys, frequencies);
    setCost(cost);
    setTree(root);
    setDummy(!dummy);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 py-10">
      <div className="flex flex-row justify-center w-full gap-5">
        <div>
          <div className="flex flex-row flex-wrap gap-1">
            <input className="border-2 border-lime-400" ref={keyRef} />
            <button
              className="button"
              onClick={() => pushIntoArrayAndUpdate(keys, keyRef, setKeys)}
            >
              Add Key
            </button>
          </div>
        </div>

        <input className="border-2 border-lime-400" ref={frequenciesRef} />
        <button
          className="button"
          onClick={() =>
            pushIntoArrayAndUpdate(frequencies, frequenciesRef, setFrequencies)
          }
        >
          Add Frequencies
        </button>
        <button className="button" onClick={resetHandler}>
          Reset
        </button>
        <button className="button" onClick={generateTree}>
          Generate
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <h1 className="text-lg font-semibold ">
          Keys: [{keys.map((key) => `${key},`)}]
        </h1>
        <h1 className="text-lg font-semibold ">
          Frequencies: [{frequencies.map((frequency) => `${frequency},`)}]
        </h1>
      </div>
    </div>
  );
};

export default Actions;
