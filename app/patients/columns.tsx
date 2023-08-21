'use client'

import { MoreHorizontal } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'

export type Patient = {
  id: string
  status: 'ativo' | 'inativo'
  location: string
  name: string
  document: string
}

export const data: Patient[] = [
  {
    id: 'm5gr84i9',
    name: 'Luiz Henrique',
    document: '02452311020',
    location: 'Rua Coronel Massot',
    status: 'ativo',
  },
  {
    id: 'm5gr84i39',
    name: 'Camila Nascente',
    document: '02152311020',
    location: 'Rua Coronel Massot',
    status: 'inativo',
  },
]

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'document',
    header: 'Documento',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('document')}</div>
    ),
  },
  {
    accessorKey: 'location',
    header: 'Localização',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('location')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Excluir</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
