import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-weight: 700;
`;

export const Button = styled.button`
  display: inline-flex;
  margin-left: 8px;
  margin-right: 8px;
  padding: 5px 6px;
  font-size: 16px;
  border-radius: 4px;
  background-color: transparent;

  border: none;
  cursor: pointer;

  transition: background-color 500ms linear;

  &:hover,
  &:focus {
    background-color: lightgrey;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }
`;

export const UserName = styled.p`
  margin-left: 16px;
`;
