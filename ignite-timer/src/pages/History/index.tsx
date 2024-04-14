import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>25 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green">Finalizado</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>25 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green">Finalizado</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>25 minutos</td>
              <td>Há 1 semana</td>
              <td>
                <Status statusColor="green">Finalizado</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>25 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>25 minutos</td>
              <td>Há 2 dias</td>
              <td>
                <Status statusColor="red">Pendente</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
