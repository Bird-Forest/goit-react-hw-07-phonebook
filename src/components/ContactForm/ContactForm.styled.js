import { styled } from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 200px;
`;
export const MarkField = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
`;
export const ContactName = styled.input`
  display: block;
  width: 440px;
  height: 80px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  outline: rgb(255, 217, 25);
  border: 2px rgb(255, 217, 25) solid;
  padding: 0 16px;
  margin-bottom: 5px;
`;
export const ContactNumber = styled.input`
  display: block;
  width: 440px;
  height: 80px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  outline: rgb(255, 217, 25);
  border: 2px rgb(255, 217, 25) solid;
  padding: 0 16px;
  margin-bottom: 15px;
`;
export const BtnAdd = styled.button`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  width: 480px;
  height: 80px;
  background-color: rgb(255, 221, 51);
  border: 2px rgb(255, 187, 51) solid;
  border-radius: 5px;
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  &:hover,
  &:focus {
    background-color: rgb(255, 128, 0);
  }
`;
