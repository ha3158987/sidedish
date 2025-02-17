import styled from "styled-components";
import Label from "./Label";
import { useOnFetchDetailDataContext } from "../Context";
import { addCommaToNumber } from "../../common/util.js";

const ItemCardStyle = styled.div`
  cursor: pointer;
  &:hover .title {
    text-decoration: underline;
  }
`;

const ImgContainerStyle = styled.div`
  position: relative;
  margin-bottom: 1rem;
  line-height: 0;
  border-radius: 0.3rem;
  overflow: hidden;
`;

const ImgStyle = styled.div.attrs((props) => ({
  src: props.src, 
}))`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 100%;
  height: ${(props) => props.large ? '25rem' : props.mini ? '9.625rem': '20rem'};
  &:hover + div {
    display: flex;
  }
`;

const HoverStyle = styled.div`
  font-size: ${(props) => props.mini ? '1rem': '1.5rem'};
  text-align: center;
  font-weight: 600;
  color: #fff;
  background-color: rgba(0, 0, 0, 50%);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  div {
    margin: 1rem;
    line-height: 1rem;
  }
  div:first-child {
    display: inline-block;
    padding-bottom: 1rem;
    margin-bottom: 0;
    border-bottom: 1px solid #fff;
  }
  &:hover {
    display: flex;
  }
`;

const TitleStyle = styled.div`
  margin-bottom: 0.5rem;
  font-size: ${(props) => props.mini ? '0.9375rem;': '1rem'};
  height: ${(props) => props.mini ? '2rem': 'auto'};
`;

const DescriptionStyle = styled.div`
  font-size: 0.875rem;
  color: #828282;
  margin-bottom: 1rem;
`;

const PricesStyle = styled.div`
  margin-bottom: 1rem;
`;

const NormalPriceStyle = styled.div`
  text-decoration: line-through;
  font-size: 0.875rem;
  color: #bdbdbd;
  display: inline-block;
`;

const SalePriceStyle = styled.div`
  font-size: ${(props) => props.mini ? '0.8125rem': '1.25rem'};
  font-weight: 600;
  margin-right: 0.5rem;
  display: inline-block;
`;

export default function ItemCard({
  id,
  src = "",
  title = "",
  description = "",
  salePrice,
  normalPrice,
  labels = [],
  mini = false,
  large = false,
}) {
  const onFetchDetailData = useOnFetchDetailDataContext();
  const onClick = () => {
    onFetchDetailData(id);
  };
  return (
    <ItemCardStyle onClick={onClick}>
      <ImgContainerStyle>
        <ImgStyle src={src} mini={mini} large={large}/>
        <HoverStyle mini={mini}>
          <div>새벽배송</div>
          <div>전국택배</div>
        </HoverStyle>
      </ImgContainerStyle>
      <div>
        <TitleStyle className="title" mini={mini}>{title}</TitleStyle>
        {!mini && <DescriptionStyle>{description}</DescriptionStyle>}
        <PricesStyle>
          <SalePriceStyle mini={mini}>{addCommaToNumber(salePrice)}원</SalePriceStyle>
          {!mini && <NormalPriceStyle>{addCommaToNumber(normalPrice)}원</NormalPriceStyle>}
        </PricesStyle>
        {!mini && labels.map((label, idx) => (
          <Label text={label} key={idx} />
        ))}
      </div>
    </ItemCardStyle>
  );
}
