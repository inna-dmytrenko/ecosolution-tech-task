import {
  Img,
  Title,
  AboutDesc,
  List,
  Item,
  CardFoto,
  CardDesc,
  CardName,
  FeaturesSvg,
  FeaturesTitle,
  FeaturesDesc,
} from './About.styled.js'

import FeatureCpu from '../../assets/images/features/cpu-charge.svg'
import FeatureGlobal from '../../assets/images/features/global-edit.svg'
import FeatureMax from '../../assets/images/features/maximize-circle.svg'
import FeatureRanking from '../../assets/images/features/ranking.svg'

const About = () => {
  return (
    <>
      <Img />
      <Title>LET’s start with small start with ourselves</Title>
      <AboutDesc>
        ECOSOLUTION is the largest group of companies in Western Ukraine, which
        is engaged in the development and implementation of renewable
        environmentally friendly energy sources. We are the first privately
        owned company that received a loan from the European Bank for
        Reconstruction and Development (EBRD) and built the first wind farm in
        Western Ukraine. During the company's work, a number of projects in the
        field of energy were implemented. At the same time, new investment
        projects, in particular small hydropower and biofuels, are constantly
        being developed and developed with existing objects.
      </AboutDesc>
      <List>
        <Item>
          <CardFoto />
          <CardName>Andrii Duda</CardName>
          <CardDesc>CEO</CardDesc>
        </Item>
        <Item>
          <CardFoto />
          <CardName>Yurii Turchenko</CardName>
          <CardDesc>Technology officer</CardDesc>
        </Item>
        <Item>
          <CardFoto />
          <CardName>Vitalii Shevchenko</CardName>
          <CardDesc>Director</CardDesc>
        </Item>
        <Item>
          <CardFoto alt="" src="./" />
          <CardName>Victor Dunaev</CardName>
          <CardDesc>Senior engineer</CardDesc>
        </Item>
      </List>
      <Title>Main values of our company</Title>
      <AboutDesc>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </AboutDesc>
      <List>
        <Item>
          <FeaturesSvg src={FeatureCpu} alt=""></FeaturesSvg>
          <FeaturesTitle>Openness</FeaturesTitle>
          <FeaturesDesc>
            to the world, people, new ideas and projects
          </FeaturesDesc>
        </Item>
        <Item>
          <FeaturesSvg src={FeatureGlobal} alt=""></FeaturesSvg>
          <FeaturesTitle>Responsibility</FeaturesTitle>
          <FeaturesDesc>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </FeaturesDesc>
        </Item>
        <Item>
          <FeaturesSvg src={FeatureRanking} alt=""></FeaturesSvg>
          <FeaturesTitle>Innovation</FeaturesTitle>
          <FeaturesDesc>
            we use the latest technology to implement non-standard solutionsv
          </FeaturesDesc>
        </Item>
        <Item>
          <FeaturesSvg src={FeatureMax} alt=""></FeaturesSvg>
          <FeaturesTitle>Quality</FeaturesTitle>
          <FeaturesDesc>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </FeaturesDesc>
        </Item>
      </List>
    </>
  )
}

export default About
