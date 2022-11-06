import styled from "styled-components";
import {BaseSyntheticEvent} from "react";

export interface DropdownOptions {
  readonly id: string;
  readonly display: string;
}

interface InputGroupProps {
  readonly label?: string;
  readonly required?: boolean;
  readonly id?: string;
  readonly type?: string;
  readonly value: string;
  readonly onInputChange?: (event: BaseSyntheticEvent) => void;
  readonly editable?: boolean;
  readonly small?: boolean;
  readonly isTextArea?: boolean;
  readonly isDropdown?: boolean;
  readonly isInputType?: boolean;
  readonly options?: DropdownOptions[];
}

const Container = styled.div<{small?: boolean}>`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 0 16px;

  ${(props) => props.small && `
    width: 48%
  `}
`;

const Caption = styled.label`
  padding: 5px 10px;
  font-size: 12px;
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 15px;
  border: solid 2px black;
  border-radius: 5px;
  width: 100%;
`;

const TextAreaField = styled.textarea`
  padding: 10px;
  font-size: 15px;
  border: solid 2px black;
  border-radius: 5px;
  width: 100%;
`;

const SelectedOption = styled.select`
  padding: 10px;
  font-size: 15px;
  border: solid 2px black;
  border-radius: 5px;
  width: 100%;
`;

const NotEditableInputField = styled.div`
  padding: 10px;
  font-size: 15px;
  border: solid 2px black;
  border-radius: 5px;
  background-color: rgba(217, 217, 217, 0.4);;
  width: 100%;
  color: #606060;
`;

export default function InputGroup(props: InputGroupProps) {
  const {
    label,
    required,
    id,
    onInputChange,
    type,
    editable,
    value,
    small,
    isTextArea,
    isDropdown,
    isInputType,
    options
  } = props;

  return (
      <Container small={small}>
      {editable ?
        <>
          <Caption htmlFor={id}>
            {label}
            {' '}
            {required ? '*' : null}
          </Caption>
          { isTextArea ?
            <TextAreaField
              rows={4}
              id={id}
              onChange={onInputChange}
              value={value}
              name={id}
              required={required}
            /> : null }
          { isInputType ?
            <InputField
              id={id}
              onChange={onInputChange}
              type={type}
              value={value}
              name={id}
              required={required}
            /> : null }
          { isDropdown ?
            <SelectedOption onChange={onInputChange} value={value}>
              {options?.map((optionList: DropdownOptions) => (
                <option value={optionList.id} key={optionList.id}>
                  { optionList.display }
                </option>
              ))}
            </SelectedOption>
            : null }
        </>
        :
        <NotEditableInputField>
          {value}
        </NotEditableInputField>
      }
    </Container>
  )
}
