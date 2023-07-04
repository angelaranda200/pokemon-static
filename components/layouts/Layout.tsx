import Head from "next/head"
import { title } from "process"
import { FC, ReactNode } from "react"
import { Navbar } from "../ui"

interface Props{
    children?:ReactNode,
    title?:string
}


export const Layout:FC<Props> = ({ children,title }) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Angel Aranda" />
            <meta name="description" content={`Informacion sobre el pokemon ${ title }`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
        </Head>

        <Navbar/>


        <main style={{
            padding:'0px 20px'
        }}>
            {children}

        </main>
    </>
  )
}
