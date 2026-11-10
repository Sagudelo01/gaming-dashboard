// Image sources come from Riot's public Data Dragon CDN.
// The patch is pinned so the asset URLs stay stable across deploys.
export const PATCH = '16.22.1'

const BASE = 'https://ddragon.leagueoflegends.com/cdn'

export const championSquare = (id) => `${BASE}/${PATCH}/img/champion/${id}.png`

export const splash = (id, skin = 0) =>
  `${BASE}/img/champion/splash/${id}_${skin}.jpg`

export const loadingArt = (id, skin = 0) =>
  `${BASE}/img/champion/loading/${id}_${skin}.jpg`
