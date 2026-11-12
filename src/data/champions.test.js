import { describe, expect, it } from 'vitest'
import { champions, getChampion, ROLES } from './champions'
import { RARITIES, RARITY_ORDER } from './rarities'

describe('champions dataset', () => {
  it('has well-formed entries', () => {
    for (const c of champions) {
      expect(c.id).toBeTruthy()
      expect(c.name).toBeTruthy()
      expect(c.roles.length).toBeGreaterThan(0)
      expect(c.mastery.level).toBeGreaterThan(0)
      expect(c.skins.length).toBeGreaterThan(0)
    }
  })

  it('uses only known roles', () => {
    for (const c of champions) {
      for (const role of c.roles) expect(ROLES).toContain(role)
    }
  })

  it('includes a default skin and valid rarities for every champion', () => {
    for (const c of champions) {
      expect(c.skins.some((s) => s.num === 0)).toBe(true)
      for (const skin of c.skins) expect(RARITIES).toHaveProperty(skin.rarity)
    }
  })

  it('has unique champion ids', () => {
    const ids = champions.map((c) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})

describe('getChampion', () => {
  it('finds an existing champion and returns undefined otherwise', () => {
    expect(getChampion('Ahri')?.name).toBe('Ahri')
    expect(getChampion('Unknown')).toBeUndefined()
  })
})

describe('rarities', () => {
  it('orders exactly the defined rarity tiers', () => {
    expect([...RARITY_ORDER].sort()).toEqual(Object.keys(RARITIES).sort())
  })
})
