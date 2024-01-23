'use client';
import { useRef } from 'react';
import { bst } from './bst';

const Actions = ({ dummy, setDummy }) => {
  const valueRef = useRef('');

  const addHandler = () => {
    bst.add(+valueRef.current.value);
    setDummy(!dummy);
    valueRef.current.value = '';
  };

  const removeHandler = () => {
    bst.remove(valueRef.current.value);
    setDummy(!dummy);
    valueRef.current.value = 0;
  };

  const clearHandler = () => {
    bst.clear();
    setDummy(!dummy);
    valueRef.current.value = 0;
  };

  const findHandler = () => {
    const element = document.getElementById(valueRef.current.value);
    element.classList.add('border-2');
    element.classList.add('border-orange-500');
    setTimeout(() => {
      element.classList.remove('border-2');
      element.classList.remove('border-orange-500');
    }, 2000);
    console.log(element);
  };

  const maxHandler = () => {
    const max = bst.max();
    const element = document.getElementById(max.data);
    element.classList.add('border-2');
    element.classList.add('border-orange-500');
    setTimeout(() => {
      element.classList.remove('border-2');
      element.classList.remove('border-orange-500');
    }, 2000);
    console.log(element);
  };

  const minHandler = () => {
    const min = bst.min();
    const element = document.getElementById(min.data);
    element.classList.add('border-2');
    element.classList.add('border-orange-500');
    setTimeout(() => {
      element.classList.remove('border-2');
      element.classList.remove('border-orange-500');
    }, 2000);
    console.log(element);
  };

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-3 my-5">
      <input
        type="number"
        className="border-2 border-lime-400"
        ref={valueRef}
      />
      <button className="button" onClick={addHandler}>
        Add
      </button>
      <button className="button" onClick={removeHandler}>
        Remove
      </button>
      <button className="button" onClick={findHandler}>
        Find
      </button>
      <button className="button" onClick={maxHandler}>
        Max
      </button>
      <button className="button" onClick={minHandler}>
        Min
      </button>
      <button className="button" onClick={clearHandler}>
        Clear
      </button>
      <div></div>
    </div>
  );
};

export default Actions;
