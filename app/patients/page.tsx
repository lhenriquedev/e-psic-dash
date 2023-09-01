import { getPatients } from '../services/apiPatients'
import { columns } from './columns'
import DataTable from '../../components/data-table'

export default async function Page() {
  const patients = await getPatients()

  console.log(patients)

  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-800">
        Pacientes cadastrados
      </h2>
      <DataTable data={patients} columns={columns} />
    </div>
  )
}
