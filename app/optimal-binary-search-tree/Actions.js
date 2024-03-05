'use client';
import { useRef } from 'react';
import { optimalBST } from './obst';

const Actions = ({
  keys,
  setKeys,
  probabilities,
  setProbabilities,
  dummyKeys,
  setdummyKeys,
  dummyProbabilities,
  setdummyProbabilities,
  dummy,
  setDummy,
  setTree,
}) => {
  const keyRef = useRef();
  const probabilitiesRef = useRef();
  const dummyKeysRef = useRef();
  const dummyProbabilitiesRef = useRef();

  const pushIntoArrayAndUpdate = (arr, ref, updateFunction) => {
    const dummyArr = arr;
    dummyArr.push(+ref.current.value);
    ref.current.value = '';
    updateFunction(dummyArr);
    setDummy(!dummy);
  };

  const resetHandler = () => {
    setKeys([]);
    setProbabilities([]);
    setTree({});
    setDummy(!dummy);
  };

  const generateTree = () => {
    const root = optimalBST(keys, probabilities);
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

        <input className="border-2 border-lime-400" ref={probabilitiesRef} />
        <button
          className="button"
          onClick={() =>
            pushIntoArrayAndUpdate(
              probabilities,
              probabilitiesRef,
              setProbabilities
            )
          }
        >
          Add Probabilities
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
          Probabilities: [
          {probabilities.map((probability) => `${probability},`)}]
        </h1>
      </div>
    </div>
  );
};

export default Actions;
