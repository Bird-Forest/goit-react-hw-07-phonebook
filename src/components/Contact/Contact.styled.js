import { styled } from 'styled-components';

export const ContactWrap = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 480px;
  height: 50px;
  gap: 10px;
  /* margin-right: auto;
  margin-right: auto; */
  margin-bottom: 10px;
`;
export const ContactAvatar = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
export const ContactName = styled.p`
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;
export const ContactNumber = styled.p`
  width: 160px;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;
export const BtnDelete = styled.button`
  display: inline-block;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-color: rgb(255, 221, 51);
  border: 2px rgb(255, 187, 51) solid;
  cursor: pointer;
  padding: 4px;
  .icon {
    width: 20px;
    height: 20px;
  }
  &:hover,
  &:focus {
    background-color: rgb(255, 128, 0);
  }
`;
