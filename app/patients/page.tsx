import { data, columns } from './columns'
import DataTable from './data-table'

export default function Page() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-800">
        Pacientes cadastrados
      </h2>
      <DataTable data={data} columns={columns} />
    </div>
  )
}
