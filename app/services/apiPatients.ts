import supabase from '@/lib/supabase'

export const getPatients = async () => {
  const { data, error } = await supabase.from('patients').select('*')

  if (error) throw new Error('Erro ao buscar pacientes')

  return data
}
