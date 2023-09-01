import { columns, data } from '../patients/columns'
import DataTable from '../patients/data-table'

export default function Schedules() {
  return (
    <>
      <h2>Próximos horários</h2>
      <DataTable data={data} columns={columns} />
    </>
  )
}
