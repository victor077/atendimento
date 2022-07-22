import React from 'react'

import { Play } from 'phosphor-react';
import { CountDowContainer, FormContainer, HomeContainer, Separator, StartCountDowButton } from './styles';

const History = () => {
  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em</label>
          <input type="text" id='task' />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id='minutesAmount' />

          <span>minutos.</span>
        </FormContainer>

        <CountDowContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDowContainer>

        <StartCountDowButton type='submit' disabled> <Play /> Começar</StartCountDowButton>
      </form>
    </HomeContainer>
  );
}

export default History
