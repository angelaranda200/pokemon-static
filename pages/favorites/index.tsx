import { Layout } from '@/components/layouts'
import { FavoritePokemon } from '@/components/pokemon'
import { NoFavorites } from '@/components/ui'
import localFavorites from '@/utils/localFavorites'
import { useEffect, useState } from 'react'

const FavoritosPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(()=>{
    setFavoritePokemons(localFavorites.pokemons);

  },[])

  return (
    <Layout title='Favoritos'>

      {
        favoritePokemons.length === 0 
          ? (<NoFavorites/>)
          : (<FavoritePokemon pokemons={favoritePokemons}/>)
      }
    </Layout>
  )
}

export default FavoritosPage