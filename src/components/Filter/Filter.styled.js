import { styled } from 'styled-components';
export const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
  padding: 0;
  margin: 0;
`;
export const FilterTitle = styled.p`
  display: block;
  font-size: 24px;
  font-weight: 700;
  padding: 0;
  margin-top: 0;
  margin-bottom: 10px;
`;
export const FilterInput = styled.input`
  display: inline-block;
  width: 440px;
  height: 30px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  outline: rgb(255, 217, 25);
  border: 2px rgb(255, 217, 25) solid;
  padding: 0 16px;
  margin-bottom: 10px;
`;
