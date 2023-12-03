import {
  Title,
  List,
  Item,
  Img,
  Map,
  ItemDesc,
  ItemData,
  Details,
  Icon,
} from './Case.styled.js'
import LvivImg from '../../assets/images/сase/Lviv.png'
import ZhutomyrImg from '../../assets/images/сase/Zhutomyr.png'
import RivneImg from '../../assets/images/сase/Rivne.png'
import KhersonImg from '../../assets/images/сase/Kherson.png'
import ZaporizhiaImg from '../../assets/images/сase/Zaporizhia.png'
import ArrowRight from '../../assets/icons/arrow-right.svg'

const Case = () => {
  return (
    <>
      <Title>Successful cases of our company</Title>
      <List>
        <Item>
          <Img src={LvivImg} />
          <Map>
            Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
          </Map>
          <Details>
            <Icon src={ArrowRight} />
          </Details>
          <ItemDesc>Wind Power for auto field irrigation</ItemDesc>
          <ItemData>July 2023</ItemData>
        </Item>
        <Item>
          <Img src={ZhutomyrImg} />
          <Map>Zhytomyr city Private Enterprise “Bosch”</Map>
          <Details>
            <Icon src={ArrowRight} />
          </Details>
          <ItemDesc>Solar Panels for industrial use</ItemDesc>
          <ItemData>November 2023</ItemData>
        </Item>
        <Item>
          <Img src={RivneImg} />
          <Map>Rivne city Private Enterprise “Biotech”</Map>
          <Details>
            <Icon src={ArrowRight} />
          </Details>
          <ItemDesc>Thermal modules</ItemDesc>
          <ItemData>October 2023</ItemData>
        </Item>
        <Item>
          <Img src={KhersonImg} />
          <Map>Kherson city Private Enterprise “HealthyFarm”</Map>
          <Details>
            <Icon src={ArrowRight} />
          </Details>
          <ItemDesc>Wind power</ItemDesc>
          <ItemData>September 2021</ItemData>
        </Item>
        <Item>
          <Img src={ZaporizhiaImg} />
          <Map>Zaporizhia city Private Enterprise “Biotech”</Map>
          <Details>
            <Icon src={ArrowRight} />
          </Details>
          <ItemDesc>Mini nuclear stations</ItemDesc>
          <ItemData>May 2021</ItemData>
        </Item>
      </List>
    </>
  )
}

export default Case
