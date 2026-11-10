// Curated roster. Champion ids, titles, roles and skin numbers match Riot's
// Data Dragon; mastery, win rates and rarity tiers are sample data for the UI.
export const champions = [
  {
    id: 'Ahri', name: 'Ahri', title: 'the Nine-Tailed Fox',
    roles: ['Mage', 'Assassin'], region: 'Ionia',
    mastery: { level: 7, points: 284_120 }, winRate: 54, games: 212, kda: '4.1',
    skins: [
      { num: 0, name: 'Classic Ahri', rarity: 'common' },
      { num: 3, name: 'Foxfire Ahri', rarity: 'epic' },
      { num: 4, name: 'Popstar Ahri', rarity: 'legendary' },
      { num: 1, name: 'Dynasty Ahri', rarity: 'epic' },
    ],
  },
  {
    id: 'Jinx', name: 'Jinx', title: 'the Loose Cannon',
    roles: ['Marksman'], region: 'Zaun',
    mastery: { level: 6, points: 141_880 }, winRate: 51, games: 168, kda: '2.8',
    skins: [
      { num: 0, name: 'Classic Jinx', rarity: 'common' },
      { num: 2, name: 'Firecracker Jinx', rarity: 'epic' },
      { num: 4, name: 'Star Guardian Jinx', rarity: 'legendary' },
      { num: 3, name: 'Zombie Slayer Jinx', rarity: 'epic' },
    ],
  },
  {
    id: 'Yasuo', name: 'Yasuo', title: 'the Unforgiven',
    roles: ['Fighter', 'Assassin'], region: 'Ionia',
    mastery: { level: 7, points: 402_540 }, winRate: 49, games: 331, kda: '2.3',
    skins: [
      { num: 0, name: 'Classic Yasuo', rarity: 'common' },
      { num: 2, name: 'PROJECT: Yasuo', rarity: 'legendary' },
      { num: 3, name: 'Blood Moon Yasuo', rarity: 'epic' },
      { num: 1, name: 'High Noon Yasuo', rarity: 'epic' },
    ],
  },
  {
    id: 'Lux', name: 'Lux', title: 'the Lady of Luminosity',
    roles: ['Mage', 'Support'], region: 'Demacia',
    mastery: { level: 5, points: 88_410 }, winRate: 56, games: 97, kda: '3.6',
    skins: [
      { num: 0, name: 'Classic Lux', rarity: 'common' },
      { num: 6, name: 'Star Guardian Lux', rarity: 'legendary' },
      { num: 5, name: 'Steel Legion Lux', rarity: 'epic' },
      { num: 4, name: 'Imperial Lux', rarity: 'epic' },
    ],
  },
  {
    id: 'Zed', name: 'Zed', title: 'the Master of Shadows',
    roles: ['Assassin'], region: 'Ionia',
    mastery: { level: 6, points: 176_900 }, winRate: 52, games: 204, kda: '3.0',
    skins: [
      { num: 0, name: 'Classic Zed', rarity: 'common' },
      { num: 3, name: 'PROJECT: Zed', rarity: 'legendary' },
      { num: 1, name: 'Shockblade Zed', rarity: 'epic' },
      { num: 2, name: 'SKT T1 Zed', rarity: 'epic' },
    ],
  },
  {
    id: 'Seraphine', name: 'Seraphine', title: 'the Starry-Eyed Songstress',
    roles: ['Support', 'Mage'], region: 'Piltover',
    mastery: { level: 7, points: 231_050 }, winRate: 58, games: 143, kda: '4.7',
    skins: [
      { num: 0, name: 'Classic Seraphine', rarity: 'common' },
      { num: 3, name: 'K/DA ALL OUT Seraphine', rarity: 'ultimate' },
      { num: 4, name: 'Graceful Phoenix Seraphine', rarity: 'mythic' },
      { num: 1, name: 'K/DA Seraphine Indie', rarity: 'legendary' },
    ],
  },
  {
    id: 'Ekko', name: 'Ekko', title: 'the Boy Who Shattered Time',
    roles: ['Assassin', 'Mage'], region: 'Zaun',
    mastery: { level: 5, points: 72_300 }, winRate: 53, games: 88, kda: '3.2',
    skins: [
      { num: 0, name: 'Classic Ekko', rarity: 'common' },
      { num: 3, name: 'PROJECT: Ekko', rarity: 'legendary' },
      { num: 1, name: 'Sandstorm Ekko', rarity: 'epic' },
      { num: 2, name: 'Academy Ekko', rarity: 'common' },
    ],
  },
  {
    id: 'Thresh', name: 'Thresh', title: 'the Chain Warden',
    roles: ['Support', 'Tank'], region: 'Shadow Isles',
    mastery: { level: 6, points: 159_640 }, winRate: 50, games: 190, kda: '3.4',
    skins: [
      { num: 0, name: 'Classic Thresh', rarity: 'common' },
      { num: 5, name: 'Dark Star Thresh', rarity: 'legendary' },
      { num: 3, name: 'Blood Moon Thresh', rarity: 'epic' },
      { num: 6, name: 'High Noon Thresh', rarity: 'mythic' },
    ],
  },
  {
    id: 'Leona', name: 'Leona', title: 'the Radiant Dawn',
    roles: ['Tank', 'Support'], region: 'Mount Targon',
    mastery: { level: 4, points: 41_770 }, winRate: 55, games: 61, kda: '2.9',
    skins: [
      { num: 0, name: 'Classic Leona', rarity: 'common' },
      { num: 3, name: 'Iron Solari Leona', rarity: 'epic' },
      { num: 1, name: 'Valkyrie Leona', rarity: 'common' },
      { num: 4, name: 'Pool Party Leona', rarity: 'epic' },
    ],
  },
  {
    id: 'Jhin', name: 'Jhin', title: 'the Virtuoso',
    roles: ['Marksman', 'Mage'], region: 'Ionia',
    mastery: { level: 7, points: 318_990 }, winRate: 57, games: 256, kda: '4.3',
    skins: [
      { num: 0, name: 'Classic Jhin', rarity: 'common' },
      { num: 5, name: 'Dark Cosmic Jhin', rarity: 'legendary' },
      { num: 4, name: 'PROJECT: Jhin', rarity: 'epic' },
      { num: 2, name: 'Blood Moon Jhin', rarity: 'epic' },
    ],
  },
  {
    id: 'Akali', name: 'Akali', title: 'the Rogue Assassin',
    roles: ['Assassin'], region: 'Ionia',
    mastery: { level: 6, points: 128_450 }, winRate: 48, games: 177, kda: '2.6',
    skins: [
      { num: 0, name: 'Classic Akali', rarity: 'common' },
      { num: 5, name: 'Blood Moon Akali', rarity: 'epic' },
      { num: 2, name: 'Infernal Akali', rarity: 'epic' },
      { num: 6, name: 'Silverfang Akali', rarity: 'legendary' },
    ],
  },
  {
    id: 'Viego', name: 'Viego', title: 'the Ruined King',
    roles: ['Fighter', 'Assassin'], region: 'Shadow Isles',
    mastery: { level: 5, points: 66_120 }, winRate: 52, games: 83, kda: '3.1',
    skins: [
      { num: 0, name: 'Classic Viego', rarity: 'common' },
      { num: 1, name: 'Lunar Beast Viego', rarity: 'epic' },
    ],
  },
]

export const ROLES = ['Assassin', 'Fighter', 'Mage', 'Marksman', 'Support', 'Tank']

export const getChampion = (id) => champions.find((c) => c.id === id)
