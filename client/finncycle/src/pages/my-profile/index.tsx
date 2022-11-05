import styled from "styled-components";
import {BaseSyntheticEvent, useState} from "react";
import {colors} from "../../constants/global-styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlagCheckered, faTrashCan, faHandshake } from "@fortawesome/free-solid-svg-icons";


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4%;
`;

const NotInputField = styled.div`
  padding: 10px;
  font-size: 15px;
  border: solid 2px black;
  border-radius: 5px;
  background-color: rgba(217, 217, 217, 0.4);;
  width: 100%;
  color: #606060;
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 15px;
  border: solid 2px black;
  border-radius: 5px;
  width: 100%;
`;

const InputGroup = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 16px 0 0;
`;

const Caption = styled.label`
  padding: 5px 10px;
  font-size: 12px;
`;

const DoubleInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const SmallInputGroup = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  margin: 16px 0 0;
`;

const SubmitButton = styled.button`
  padding: 15px 25px;
  margin: 40px 10px;
  border: 0;
  border-radius: 5px;
  font-size: 15px;
  box-shadow: 2px 2px grey;
  text-transform: uppercase;
  background-color: ${colors.primaryColor};
  cursor: pointer;
  color: white;
  
  &:hover {
    font-weight: bold;
  }
  
  &:active {
    box-shadow: 0 0;
  }
`;

const StatsCyclesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const GroupStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.div<{color: string}>`
  font-size: 50px;
  color: ${(props) => (props.color)};
`;

const StatCaption = styled.div`
  font-size: 20px;
  font-style: italic;
`;

const onInputValueChange = (
  event: BaseSyntheticEvent,
  //information: ProfileInformation,
  //setInformation: (_: ProfileInformation) => void,
) => {
  /*Object.entries(information).forEach(([_, inputFields]) => {
    inputFields.forEach((field: InputField) => {
      if (field.id === event.target.name) {
        field.value = event.target.type === 'file' ? Array.from(event.target.files)[0] : event.target.value;
        field.error = false;
        setSections({ ...sections });
      }
    });
  }); */
  console.log(event.target.value)
};

export default function MyProfile() {
  // const [information, setInformation] = useState(profileInformation);

  return (
    <Container>
      <h1>My Profile</h1>
      <InputGroup>
        <NotInputField>
          The user email
        </NotInputField>
      </InputGroup>
      <InputGroup>
        <Caption htmlFor="name">Full Name *</Caption>
        <InputField
          id="name"
          onChange={(e) => onInputValueChange(e)}
          type="text"
          name="name"
          required
        />
      </InputGroup>
      <InputGroup>
        <Caption htmlFor="address">Address *</Caption>
        <InputField
          id="address"
          onChange={(e) => onInputValueChange(e)}
          type="text"
          name="address"
          required
        />
      </InputGroup>
      <InputGroup>
        <Caption htmlFor="zip-code">Zip Code *</Caption>
        <InputField
          id="zip-code"
          onChange={(e) => onInputValueChange(e)}
          type="number"
          min="0"
          name="zip-code"
          required
        />
      </InputGroup>
      <DoubleInputGroup>
        <SmallInputGroup>
          <Caption htmlFor="city">City *</Caption>
          <InputField
            id="city"
            onChange={(e) => onInputValueChange(e)}
            type="text"
            name="city"
            required
          />
        </SmallInputGroup>
        <SmallInputGroup>
          <Caption htmlFor="country">Country *</Caption>
          <InputField
            id="country"
            onChange={(e) => onInputValueChange(e)}
            type="text"
            name="country"
            required
          />
        </SmallInputGroup>
      </DoubleInputGroup>
      <SubmitButton type="submit" onClick={() => null}>Update information</SubmitButton>

      <StatsCyclesContainer>
        <GroupStat>
          <StatNumber color={colors.primaryColor}>30 <FontAwesomeIcon icon={faFlagCheckered} /></StatNumber>
          <StatCaption> Created cycles</StatCaption>
        </GroupStat>
        <GroupStat>
          <StatNumber color={colors.red}>20 <FontAwesomeIcon icon={faTrashCan} /></StatNumber>
          <StatCaption> Trash items recycled </StatCaption>
        </GroupStat>
        <GroupStat>
          <StatNumber color={colors.green}>10 <FontAwesomeIcon icon={faHandshake} /></StatNumber>
          <StatCaption> Claimed cycles </StatCaption>
        </GroupStat>
      </StatsCyclesContainer>
    </Container>
  )
}
