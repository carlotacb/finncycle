import styled from "styled-components";
import {BaseSyntheticEvent} from "react";
import {colors} from "../../constants/global-styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faTree, faHandshake } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import {H1, StyledButton} from "../../components/generic-components/general-styled-components";
import InputGroup from "../../components/generic-components/InputGroup";


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4%;
`;

const DoubleInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const UpdateButton = styled(StyledButton)`
  margin: 10px 10px 50px;
  width: 80%;

  @media(max-width: 768px) {
    margin: 10px 10px 30px;
  }
`;

const LogoutButton = styled(StyledButton)`
  margin: 50px 10px 10px;
  width: 80%;

  @media(max-width: 768px) {
    margin: 30px 10px 10px;
  }
`;

const StatsCyclesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

const GroupStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 768px) {
    margin: 15px;
  }
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
    <>
      <Head>
        <title>Finncycle - My profile</title>
      </Head>
      <Container>
        <H1>My Profile</H1>
        <InputGroup
          value="carkbra@gmail.com"
        />
        <InputGroup
          editable
          label="Full name"
          required
          id="name"
          type="text"
          onInputChange={onInputValueChange}
          value=""
        />
        <InputGroup
          editable
          label="Address"
          required
          id="address"
          type="text"
          onInputChange={onInputValueChange}
          value=""
        />
        <InputGroup
          editable
          label="Zip Code"
          required
          id="zip-code"
          type="number"
          onInputChange={onInputValueChange}
          value=""
        />
        <DoubleInputGroup>
          <InputGroup
            editable
            label="City"
            required
            id="city"
            type="text"
            onInputChange={onInputValueChange}
            value=""
            small
          />
          <InputGroup
            editable
            label="Country"
            required
            id="country"
            type="text"
            onInputChange={onInputValueChange}
            value=""
            small
          />
        </DoubleInputGroup>

        <UpdateButton type="submit" onClick={() => null} solid>Update information</UpdateButton>

        <StatsCyclesContainer>
          <GroupStat>
            <StatNumber color={colors.primaryColor}>30 <FontAwesomeIcon icon={faLightbulb} /></StatNumber>
            <StatCaption> Reused items</StatCaption>
          </GroupStat>
          <GroupStat>
            <StatNumber color={colors.red}>20 <FontAwesomeIcon icon={faTree} /></StatNumber>
            <StatCaption> Recycled items </StatCaption>
          </GroupStat>
          <GroupStat>
            <StatNumber color={colors.green}>10 <FontAwesomeIcon icon={faHandshake} /></StatNumber>
            <StatCaption> Claimed cycles </StatCaption>
          </GroupStat>
        </StatsCyclesContainer>

        <LogoutButton type="button" onClick={() => null} outline>Logout</LogoutButton>
      </Container>
    </>
  )
}
