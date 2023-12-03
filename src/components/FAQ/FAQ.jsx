import { Button } from '@mui/material'
import {
  Question,
  Answer,
  IconMinus,
  IconAdd,
  Item,
  List,
  Title,
  HR,
  NotAnswer,
  IconEllipse,
} from './FAQ.styled'

const FAQ = () => {
  return (
    <>
      <Title>Frequently Asked Questions</Title>
      <List>
        <Item>
          <IconMinus />
          <IconAdd />
          <Question>
            How do wind turbines and solar panels work together in a renewable
            energy system?
          </Question>
          <Answer>
            Wind turbines and solar panels generate electricity through
            different mechanisms. Wind turbines harness the kinetic energy of
            the wind to turn blades, which then drive a generator. Solar panels
            convert sunlight into electricity through the photovoltaic effect.
            When integrated into a renewable energy system, these technologies
            complement each other by providing a continuous and reliable power
            supply. Wind power is often more abundant during certain times,
            while solar power is consistent during daylight hours, resulting in
            a more stable overall energy output.
          </Answer>
          <HR />
        </Item>
        <Item>
          <IconMinus />
          <IconAdd />
          <Question>
            What sets EcoSolution's renewable energy solutions apart from others
            on the market?
          </Question>
          <Answer>
            {' '}
            Wind turbines and solar panels generate electricity through
            different mechanisms. Wind turbines harness the kinetic energy of
            the wind to turn blades, which then drive a generator. Solar panels
            convert sunlight into electricity through the photovoltaic effect.
            When integrated into a renewable energy system, these technologies
            complement each other by providing a continuous and reliable power
            supply. Wind power is often more abundant during certain times,
            while solar power is consistent during daylight hours, resulting in
            a more stable overall energy output.
          </Answer>
          <HR />
        </Item>
        <Item>
          <IconMinus />
          <IconAdd />
          <Question>
            How can businesses and communities benefit from integrating
            renewable energy solutions from EcoSolution?
          </Question>
          <Answer>
            {' '}
            Wind turbines and solar panels generate electricity through
            different mechanisms. Wind turbines harness the kinetic energy of
            the wind to turn blades, which then drive a generator. Solar panels
            convert sunlight into electricity through the photovoltaic effect.
            When integrated into a renewable energy system, these technologies
            complement each other by providing a continuous and reliable power
            supply. Wind power is often more abundant during certain times,
            while solar power is consistent during daylight hours, resulting in
            a more stable overall energy output.
          </Answer>
          <HR />
        </Item>
        <Item>
          <IconMinus />
          <IconAdd />
          <Question>
            What measures does EcoSolution take to ensure the environmental
            sustainability of its products?
          </Question>
          <Answer>
            {' '}
            Wind turbines and solar panels generate electricity through
            different mechanisms. Wind turbines harness the kinetic energy of
            the wind to turn blades, which then drive a generator. Solar panels
            convert sunlight into electricity through the photovoltaic effect.
            When integrated into a renewable energy system, these technologies
            complement each other by providing a continuous and reliable power
            supply. Wind power is often more abundant during certain times,
            while solar power is consistent during daylight hours, resulting in
            a more stable overall energy output.
          </Answer>
          <HR />
        </Item>
        <Item>
          <IconMinus />
          <IconAdd />
          <Question>
            How does EcoSolution engage with local communities and support a
            just transition to renewable energy?
          </Question>
          <Answer>
            {' '}
            Wind turbines and solar panels generate electricity through
            different mechanisms. Wind turbines harness the kinetic energy of
            the wind to turn blades, which then drive a generator. Solar panels
            convert sunlight into electricity through the photovoltaic effect.
            When integrated into a renewable energy system, these technologies
            complement each other by providing a continuous and reliable power
            supply. Wind power is often more abundant during certain times,
            while solar power is consistent during daylight hours, resulting in
            a more stable overall energy output.
          </Answer>
          <HR />
        </Item>
        <NotAnswer>Didn't find the answer to your question? </NotAnswer>
      </List>
      <Button variant="contained">
        Contact Us
        <IconEllipse />
      </Button>
    </>
  )
}

export default FAQ
