import React from 'react';
import { FilterInput, FilterTitle, FilterWrap } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
// import { selectFilter } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterWrap>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        onInput={event => dispatch(setFilter(event.target.value.toLowerCase()))}
      />
    </FilterWrap>
  );
}
// event.target.value.toLowerCase();
