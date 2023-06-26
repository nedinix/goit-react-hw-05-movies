import styled from '@emotion/styled';
import { Field } from 'formik';
import { colors } from 'helpers';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FieldStyled = styled(Field)`
  display: block;
  height: 28px;
  padding-left: 4px;
  margin-right: 4px;
  font-size: 14px;
  /* font-weight: 1.25; */
  border: 1px solid transparent;
  border-radius: 2px;
  outline: 1px solid gray;
`;

export const ButtonStyled = styled.button`
  display: block;
  height: 34px;
  font-size: 14px;
  font-weight: 1.25;
  border: 1px solid gray;
  border-radius: 2px;

  &:hover {
    background-color: ${colors.buttonHoverBackground};
    color: ${colors.buttonActiveText};
  }

  &:active {
    background-color: ${colors.buttonActiveBackground};
    color: ${colors.buttonActiveText};
  }
`;
