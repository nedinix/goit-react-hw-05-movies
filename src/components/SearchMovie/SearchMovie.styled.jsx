import styled from '@emotion/styled';
import { Field } from 'formik';
import { colors } from 'helpers';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 24px;
`;

export const FieldStyled = styled(Field)`
  display: block;
  height: 28px;
  padding-left: 4px;
  margin-right: 4px;
  font-size: 14px;

  border: 1px solid transparent;
  border-radius: 2px;
  outline: 1px solid gray;

  &::placeholder {
    color: #646363;
  }

  &:focus {
    outline: 1px solid #e78310;
  }
`;

export const ButtonStyled = styled.button`
  display: block;
  height: 34px;

  font-size: 14px;
  font-weight: 1.25;
  border-radius: 2px;
  color: #fff;

  background-color: #646363;
  border: 1px solid transparent;
  border-radius: 2px;

  &:hover {
    color: #646363;
    background-color: #fff;
    border-color: #646363;
  }

  &:active {
    color: #fff;
    background-color: #e78310;
    border-color: transparent;
  }
`;
