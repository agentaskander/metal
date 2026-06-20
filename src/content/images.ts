export type SiteImageKey =
  | 'heroRollFormer'
  | 'steelCoils'
  | 'warehouseRoof'
  | 'agBuilding'
  | 'contractorPlans'
  | 'panelCloseup'
  | 'truckLoading'
  | 'trimFabrication'
  | 'facilityInterior'

export type SiteImage = {
  key: SiteImageKey
  src: string
  alt: string
  currentSource: 'Stock' | 'Real company photo'
  futureSource: 'Real company photo'
}

export const siteImages: Record<SiteImageKey, SiteImage> = {
  heroRollFormer: {
    key: 'heroRollFormer',
    src: 'https://images.unsplash.com/photo-1738162837330-9257f938463c?auto=format&fit=crop&w=1800&q=88',
    alt: 'roll-forming metal roofing panels',
    currentSource: 'Stock',
    futureSource: 'Real company photo',
  },
  steelCoils: {
    key: 'steelCoils',
    src: 'https://images.unsplash.com/photo-1764835994645-3faa2c40f708?auto=format&fit=crop&w=1400&q=88',
    alt: 'steel coil inventory',
    currentSource: 'Stock',
    futureSource: 'Real company photo',
  },
  warehouseRoof: {
    key: 'warehouseRoof',
    src: 'https://images.unsplash.com/photo-1669003750747-3f139e115bfb?auto=format&fit=crop&w=1600&q=88',
    alt: 'commercial metal roof panels',
    currentSource: 'Stock',
    futureSource: 'Real company photo',
  },
  agBuilding: {
    key: 'agBuilding',
    src: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1400&q=88',
    alt: 'agricultural metal roofing panels',
    currentSource: 'Stock',
    futureSource: 'Real company photo',
  },
  contractorPlans: {
    key: 'contractorPlans',
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=88',
    alt: 'contractor reviewing plans for metal roofing quote',
    currentSource: 'Stock',
    futureSource: 'Real company photo',
  },
  panelCloseup: {
    key: 'panelCloseup',
    src: 'https://images.unsplash.com/photo-1770910452211-2e8fd91bc347?auto=format&fit=crop&w=1400&q=88',
    alt: 'ribbed metal roofing panel closeup',
    currentSource: 'Stock',
    futureSource: 'Real company photo',
  },
  truckLoading: {
    key: 'truckLoading',
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=88',
    alt: 'truck loading metal roofing panels for delivery',
    currentSource: 'Stock',
    futureSource: 'Real company photo',
  },
  trimFabrication: {
    key: 'trimFabrication',
    src: 'https://images.unsplash.com/photo-1764114235891-66ff86abaf87?auto=format&fit=crop&w=1400&q=88',
    alt: 'custom roofing panel fabrication',
    currentSource: 'Stock',
    futureSource: 'Real company photo',
  },
  facilityInterior: {
    key: 'facilityInterior',
    src: 'https://images.unsplash.com/photo-1738162837408-5fbf53f0b97a?auto=format&fit=crop&w=1400&q=88',
    alt: 'metal panel manufacturing production floor',
    currentSource: 'Stock',
    futureSource: 'Real company photo',
  },
}

export const projectGalleryImages = [
  siteImages.warehouseRoof,
  siteImages.panelCloseup,
  siteImages.agBuilding,
  siteImages.facilityInterior,
]

export const industrialRibGalleryImages = [
  { label: 'Commercial warehouse roof', image: siteImages.warehouseRoof },
  { label: 'Ribbed metal panel profile', image: siteImages.panelCloseup },
  { label: 'Trim and flashing fabrication', image: siteImages.trimFabrication },
  { label: 'Roll-forming machine', image: siteImages.heroRollFormer },
]
