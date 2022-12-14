import { StyledButton } from "./general-styled-components";
import styled from "styled-components";
import { ReactElement } from "react";

const Container = styled.div`
  padding: 20px;
  border: 2px solid black;
  border-radius: 5px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProductName = styled.div``;

const GroupButtons = styled.div`
  display: flex;
  gap: 15px;

  @media(max-width: 768px) {
    margin-top: 15px;
    width: 100%;
    justify-content: flex-end;
  }
`;

const ButtonWithIcon = styled(StyledButton)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface ProductCardProps {
  readonly productName: string;
  readonly solidButton?: boolean;
  readonly solidButtonText?: string;
  readonly solidButtonIcon?: ReactElement;
  readonly solidButtonOnClick?: () => void;
  readonly outlineButton?: boolean;
  readonly outlineButtonText?: string;
  readonly outlineButtonIcon?: ReactElement;
  readonly outlineButtonOnClick?: () => void;
}

export default function ProductCard(props: ProductCardProps){
  const {
    productName,
    solidButtonText,
    solidButtonIcon,
    solidButtonOnClick,
    solidButton,
    outlineButtonIcon,
    outlineButtonText,
    outlineButtonOnClick,
    outlineButton
  } = props;

  return (
    <Container>
      <ProductName>{productName}</ProductName>
      <GroupButtons>
        {solidButton ?
          <ButtonWithIcon type="button" solid onClick={solidButtonOnClick}>
            {solidButtonText ? solidButtonText : null }
            {solidButtonIcon ? solidButtonIcon : null }
          </ButtonWithIcon> :
          null
        }
        {outlineButton ?
          <ButtonWithIcon type="button" outline onClick={outlineButtonOnClick}>
            {outlineButtonText ? outlineButtonText : null }
            {outlineButtonIcon ? outlineButtonIcon : null }
          </ButtonWithIcon> :
          null
        }
      </GroupButtons>
    </Container>
  )
}
