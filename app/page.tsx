'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DollarSign, Pill, TrendingDown, TrendingUp, Users } from 'lucide-react'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Jan',
    total: 100,
  },
  {
    name: 'Fev',
    total: 200,
  },
  {
    name: 'Mar',
    total: 250,
  },
  {
    name: 'Abr',
    total: 30,
  },
  {
    name: 'Mai',
    total: 20,
  },
  {
    name: 'Jun',
    total: 10,
  },
  {
    name: 'Jul',
    total: 50,
  },
  {
    name: 'Ago',
    total: 100,
  },
  {
    name: 'Set',
    total: 70,
  },
  {
    name: 'Out',
    total: 11,
  },
  {
    name: 'Nov',
    total: 4,
  },
  {
    name: 'Dez',
    total: 32,
  },
]

export default function Page() {
  return (
    <section className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Pacientes</CardTitle>
              <DollarSign />
            </div>
            <CardDescription>Total de pacientes atendidos</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">13</p>
          </CardContent>
          <CardFooter>
            <Badge
              variant="outline"
              className="flex items-center gap-2 text-green-900 bg-green-100 hover:bg-green-700"
            >
              <TrendingUp size={16} />
              13%
            </Badge>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Consultas</CardTitle>
              <Pill />
            </div>
            <CardDescription>Total de consultas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">13</p>
          </CardContent>
          <CardFooter>
            <Badge
              variant="outline"
              className="flex items-center gap-2 text-red-900 bg-red-100 hover:bg-red-700"
            >
              <TrendingDown size={16} />
              23%
            </Badge>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Total em R$</CardTitle>
              <Users />
            </div>
            <CardDescription>Total em reais</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">1442,00</p>
          </CardContent>
          <CardFooter>
            <Badge
              variant="outline"
              className="flex items-center gap-2 text-green-900 bg-green-100 hover:bg-green-700"
            >
              <TrendingUp size={16} />
              13%
            </Badge>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Total de consultas por mês</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={335}>
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => value}
                />
                <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle>Consultas recentes</CardTitle>
            <CardDescription>Você teve 43 consultas neste mês</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <Avatar className="flex items-center justify-center space-y-0 border h-9 w-9">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>

                <p className="text-sm">João Lucas</p>
                <p className="text-sm">01/01/2022</p>
              </div>

              <div className="flex items-center justify-between">
                <Avatar className="flex items-center justify-center space-y-0 border h-9 w-9">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>HM</AvatarFallback>
                </Avatar>

                <p className="text-sm">Henrique Marques</p>
                <p className="text-sm">05/03/2023</p>
              </div>

              <div className="flex items-center justify-between">
                <Avatar className="flex items-center justify-center space-y-0 border h-9 w-9">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <p className="text-sm">Camila Nascente</p>
                <p className="text-sm">21/05/2023</p>
              </div>

              <div className="flex items-center justify-between">
                <Avatar className="flex items-center justify-center space-y-0 border h-9 w-9">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>LM</AvatarFallback>
                </Avatar>

                <p className="text-sm">Lucas Marques</p>
                <p className="text-sm">14/03/2022</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
