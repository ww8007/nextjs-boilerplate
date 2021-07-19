import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNumber, subNumber } from '../modules/counter';
import styled from 'styled-components';
import { State, RootState } from '../modules';
export function useCounter() {
  const dispatch = useDispatch();
  const { number } = useSelector((state: State) => ({
    number: state.counter.number,
  }));
  const onClickAdd = () => {
    dispatch(addNumber());
  };
  const onClickMinus = () => {
    dispatch(subNumber());
  };

  return { number, onClickAdd, onClickMinus };
}

const Number = styled.div`
  color: green;
  font-size: 2rem;
`;

export default function Counter() {
  const { number, onClickAdd, onClickMinus } = useCounter();
  return (
    <>
      <Number>{number}</Number>
      <button onClick={onClickAdd}>+1</button>
      <button onClick={onClickMinus}>-1</button>
    </>
  );
}
