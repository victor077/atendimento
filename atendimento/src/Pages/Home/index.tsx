import { Play } from "phosphor-react";
import React from "react";
import { useForm } from "react-hook-form";

import {
  CountDowContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDowButton,
  TaskInput,
} from "./styles";

const History = () => {
  const { register, handleSubmit } = useForm();
  const handleNewValues = (data: any) => {
    console.log(data);
  };
  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleNewValues)}>
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em</label>
          <TaskInput
            type="text"
            list="task-sugestion"
            id="task"
            placeholder="Dê um nome para o seu projeto.."
            {...register("task")}
          />

          <datalist id="task-sugestion">
            <option value="projeto 1" />
            <option value="projeto 2" />
            <option value="projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDowContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDowContainer>

        <StartCountDowButton type="submit" disabled>
          {" "}
          <Play /> Começar
        </StartCountDowButton>
      </form>
    </HomeContainer>
  );
};

export default History;
