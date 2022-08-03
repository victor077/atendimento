
import React from 'react'

import { HistoryContainer, HistoryList } from './styles';

const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu histoico </h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Ínicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>há 20 Minutos</td>
              <td>Há 2 Meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>há 20 Minutos</td>
              <td>Há 2 Meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>há 20 Minutos</td>
              <td>Há 2 Meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>há 20 Minutos</td>
              <td>Há 2 Meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>há 20 Minutos</td>
              <td>Há 2 Meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>há 20 Minutos</td>
              <td>Há 2 Meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>há 20 Minutos</td>
              <td>Há 2 Meses</td>
              <td>Concluido</td>
            </tr>
          </tbody>
        </table>

      </HistoryList>
    </HistoryContainer>
  );
}

export default History
