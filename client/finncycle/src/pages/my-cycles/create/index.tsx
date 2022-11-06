import Head from "next/head";
import {H1, StyledButton} from "../../../components/generic-components/general-styled-components";
import InputGroup from "../../../components/generic-components/InputGroup";
import {colors} from "../../../constants/global-styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandshake, faLightbulb, faTree} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {BaseSyntheticEvent} from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4%;
`;

const CreateProductButton = styled(StyledButton)`
  margin: 10px 10px 50px;
  width: 80%;

  @media(max-width: 768px) {
    margin: 10px 10px 30px;
  }
`;

const onInputValueChange = (event: BaseSyntheticEvent) => {
  console.log(event.target.value)
};

export default function CrateCycle() {
  return (
    <>
      <Container>
        <H1>New Product</H1>
        <InputGroup
          editable
          label="Product name"
          required
          id="name"
          type="text"
          onInputChange={onInputValueChange}
          value=""
          isInputType
        />
        <InputGroup
          editable
          isTextArea
          label="Product description"
          required
          id="description"
          onInputChange={onInputValueChange}
          value=""
        />
        <InputGroup
          editable
          label="Type"
          required
          id="type"
          onInputChange={onInputValueChange}
          options={[{id: 'reused', display: 'reused'}, {id: 'recycled', display: 'recycled'}]}
          value=""
          isDropdown
        />

        <CreateProductButton type="submit" onClick={() => null} solid>Create product</CreateProductButton>

      </Container>
    </>
  )
}
