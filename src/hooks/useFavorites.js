import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useFavorites() {
  const [ids, setIds] = useLocalStorage('xenplay:favorites', ['Ahri', 'Jhin'])

  const toggle = useCallback(
    (id) =>
      setIds((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
      ),
    [setIds],
  )

  const has = useCallback((id) => ids.includes(id), [ids])

  return { favorites: ids, toggle, has }
}
