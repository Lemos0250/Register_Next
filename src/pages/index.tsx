import Image from 'next/image'
import { Inter } from 'next/font/google'
import Cliente from '../core/Cliente'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useState } from "react";


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

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  function clienteSelecionado(cliente:Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente:Cliente) {
    console.log(`Excluir... ${cliente}`)
  }

  return (
    <div className={`
    flex 
    justify-center items-center
    h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white 
    `}>
      <Layout titulo={'Cadastro Simples'}>
        {visivel === 'tabela' ? (
        <>
          <div className='flex justify-end'>
            <Botao 
            onClick={() => setVisivel('form')} 
            cor="green" 
            className='mb-4'>Cadastrar Cliente</Botao>
          </div>

          <Tabela cliente={cliente}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido} />
        </>
        ) : (
        <Formulario 
        cliente={cliente[2]}
        cancelado={() => setVisivel('tabela')}
        />
        )} 
      </Layout>
    </div>
  )
}
