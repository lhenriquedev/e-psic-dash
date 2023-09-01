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
  name: string
  address: string
  age: number
  document: string
  phone: string
}

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
    accessorKey: 'address',
    header: 'Endereço',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('address')}</div>
    ),
  },
  {
    accessorKey: 'phone',
    header: 'Telefone',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('phone')}</div>
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
