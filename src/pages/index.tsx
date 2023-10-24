import Image from 'next/image'
import { Inter } from 'next/font/google'
import Cliente from '../core/Cliente'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const cliente = [
    new Cliente('Marcia', 60 ,'1'),
    new Cliente('João', 21 ,'2'),
    new Cliente('Ana', 19 ,'3'),
    new Cliente('Vinicius', 21 ,'4'),
    new Cliente('Rafa', 21 ,'5'),
    new Cliente('Daniel', 24 ,'6'),

  ]

  return (
    <div className={`
    flex 
    justify-center items-center
    h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white 
    `}>
      <Layout titulo={'Cadastro Simples'}>
        <Tabela cliente={cliente}></Tabela>
      </Layout>
    </div>
  )
}
