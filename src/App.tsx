import { useEffect, useState, type FormEvent } from 'react'
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ClipboardList,
  Download,
  Factory,
  FileCheck2,
  FileText,
  FileUp,
  Gauge,
  HardHat,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Ruler,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  SunMedium,
  UploadCloud,
  Wind,
} from 'lucide-react'
import { industrialRibGalleryImages, projectGalleryImages, siteImages } from './content/images'

type IconType = typeof Factory

declare global {
  interface Window {
    turnstile?: {
      reset: () => void
    }
  }
}

const navItems = [
  ['Roofing Panels', '/american-super-panel-industrial-rib'],
  ['Products', '/products'],
  ['Contractors', '/contractors'],
  ['Commercial', '/commercial'],
  ['Agricultural', '/agricultural'],
  ['Finishes', '/finishes'],
  ['Contact', '/contact'],
]

const products = [
  {
    name: 'PBR / R-Panel',
    copy: 'Ribbed metal roofing and siding panels for commercial, warehouse, shop, and agricultural buildings.',
    points: ['Roofing and siding use', 'Bulk contractor orders', 'Trim and flashing support'],
    spec: 'Commercial • Industrial • Agricultural',
    href: '/pbr-panel',
  },
  {
    name: 'AG / Tuff Rib Panel',
    copy: 'Contractor-ready ribbed panels for barns, shops, storage buildings, equipment shelters, farms, and ranches.',
    points: ['Agricultural projects', 'Roof and wall packages', 'Responsive quote support'],
    spec: 'Barns • Shops • Storage • Ranches',
    href: '/ag-panel',
  },
  {
    name: 'Trim & Flashing',
    copy: 'Matching trim and flashing packages for roof edges, walls, corners, openings, transitions, and project closeout.',
    points: ['Ridge, rake, eave, and corners', 'Wall transitions', 'Job-labeled packages'],
    spec: 'Roof trim • Wall trim • Flashing',
    href: '/trim-and-flashing',
  },
  {
    name: 'Accessories',
    copy: 'Closures, fastener coordination, sealant paths, touch-up support, and panel package accessories.',
    points: ['Closures and fasteners', 'Sealant coordination', 'Crew-ready support'],
    spec: 'Accessories • Fasteners • Closures',
  },
]

const services = [
  ['Roll Forming', Gauge, 'Factory-controlled production for repeatable commercial panel packages.'],
  ['On-Site Roll Forming', Factory, 'Jobsite-length panels that reduce lap conditions and shipping constraints.'],
  ['Custom Fabrication', HardHat, 'Architectural trims, fascias, edge metal, and nonstandard details.'],
  ['Flashing Packages', Sparkles, 'Complete labeled packages that help installers close roof and wall transitions.'],
  ['Panel Curving', ArrowRight, 'Curved panel support for radius roofs, entries, and architectural features.'],
  ['Contractor Support', ShieldCheck, 'Takeoff review, sequencing support, and production coordination.'],
  ['Design Assist', Building2, 'Early input for profiles, finishes, details, warranty path, and constructability.'],
] satisfies [string, IconType, string][]

const markets = [
  ['Commercial', 'Warehouses, retail buildings, offices, and multifamily work.'],
  ['Industrial', 'Manufacturing, logistics, and process facilities.'],
  ['Residential', 'Shops, garages, additions, accessory buildings, and rural residential projects.'],
  ['Warehouses', 'Large-format roofs, walls, and trim packages.'],
  ['Agriculture', 'Barns, equipment buildings, and production facilities.'],
  ['Contractors', 'Bulk panel orders, plan uploads, trim support, and fast communication.'],
]

const states = [
  {
    name: 'California',
    slug: 'california-metal-panels',
    copy: 'California-first quote support for metal roofing panels, siding panels, Industrial Rib, PBR / R-Panel, AG panels, trim, and flashing packages.',
    status: 'Primary launch market',
    note: 'Best current fit for contractor quotes, plan uploads, commercial projects, agricultural buildings, shops, and owner-led panel packages.',
  },
  {
    name: 'Arizona',
    slug: 'arizona-metal-panels',
    copy: 'Arizona metal panel inquiries can be reviewed by project while regional availability is confirmed.',
    status: 'Project-review availability',
    note: 'Use this page for future high-sun finish questions and project review. Do not assume local stock, delivery, or office coverage until sales confirms.',
  },
  {
    name: 'Texas',
    slug: 'texas-metal-panels',
    copy: 'Texas is the next expansion target for warehouses, shops, agricultural buildings, equipment shelters, and contractor panel packages.',
    status: 'Next expansion market',
    note: 'Texas inquiries are useful for demand validation and larger project review. Sales should confirm availability, production path, and delivery before quoting.',
  },
  {
    name: 'Florida',
    slug: 'florida-metal-panels',
    copy: 'Florida metal panel inquiries can be reviewed by project while coastal availability and requirements are confirmed.',
    status: 'Project-review availability',
    note: 'Coastal, wind, corrosion, code, and warranty questions require project-specific review before any quote or product recommendation.',
  },
]

const projectCategories = ['Commercial', 'Industrial', 'Agricultural', 'Residential']
const aspOrigin = 'https://www.americansuperpanel.com'
const contractorOutcomes = [
  ['Request a Quote', 'Send panel type, project state, square footage, and timing so sales can respond with the right next step.'],
  ['Upload Plans', 'Share drawings, roof plans, wall elevations, and notes for cleaner takeoff review.'],
  ['Custom-Length Panels', 'Request panel lengths and trim scope for commercial, agricultural, industrial, or residential work.'],
  ['Contractor Support', 'Get help organizing panel, trim, flashing, accessory, and project documentation needs.'],
  ['Fast Communication', 'Phone, email, and upload paths are visible so contractors can reach sales quickly.'],
]
const finishes = [
  ['PVDF / Kynar-style finishes', '#64748b', 'Premium long-life finish path for commercial roofs and walls.'],
  ['Silicone-modified polyester', '#94a3b8', 'Durable, economical finish option for broad project coverage.'],
  ['Matte architectural colors', '#334155', 'Low-glare palette for modern commercial and multifamily work.'],
  ['Wood grain & specialty metals', '#9a6b3f', 'Accent panels, fascia, soffit, and high-visibility details.'],
  ['Cool roof whites & grays', '#e5e7eb', 'Reflective options for heat, energy, and code-aware projects.'],
  ['Custom color match', '#f97316', 'Finish coordination for brand, campus, and architectural standards.'],
]
const resources = [
  ['Panel profiles', Ruler, 'Profile sheets for Industrial Rib, PBR / R-Panel, AG panels, trim, and accessories.', '/american-super-panel-industrial-rib'],
  ['Warranty path', ShieldCheck, 'Finish, substrate, fastening, and project documentation conversations for qualifying packages.', '/downloads/submittal-package-guide.txt'],
  ['Submittal packages', FileCheck2, 'Product data, finish selections, fastener notes, and project-specific details.', '/downloads/submittal-package-guide.txt'],
  ['Takeoff support', FileText, 'Plan review support for panel counts, flashing scope, and production sequencing.', '/downloads/plan-upload-instructions.txt'],
]
const downloadAssets = [
  {
    title: 'Quote Request Checklist',
    copy: 'Everything sales needs to review panel type, project state, square footage, plans, and trim scope.',
    href: '/downloads/quote-request-checklist.txt',
    type: 'TXT',
  },
  {
    title: 'Plan Upload Instructions',
    copy: 'File naming, accepted document types, and package tips for clean review.',
    href: '/downloads/plan-upload-instructions.txt',
    type: 'TXT',
  },
  {
    title: 'Submittal Package Guide',
    copy: 'What to expect in a panel, finish, fastener, flashing, and warranty package.',
    href: '/downloads/submittal-package-guide.txt',
    type: 'TXT',
  },
  {
    title: 'Finish Selection Guide',
    copy: 'How to choose finish paths for heat, coastal, architectural, and campus work.',
    href: '/downloads/finish-selection-guide.txt',
    type: 'TXT',
  },
  {
    title: 'Industrial Rib Product Data',
    copy: 'Profile, rib height, finish path, applications, and project-review notes for Industrial Rib packages.',
    href: '/downloads/industrial-rib-product-data.txt',
    type: 'TXT',
  },
  {
    title: 'Industrial Rib Quote Checklist',
    copy: 'The project facts estimating needs before reviewing a commercial roofing or siding quote.',
    href: '/downloads/industrial-rib-quote-checklist.txt',
    type: 'TXT',
  },
]
const industrialRibSpecs = [
  ['Product Package', 'American Super Panel™ Industrial Rib'],
  ['Panel Type', 'Exposed fastener metal roofing and siding panel'],
  ['Profile', 'Industrial Rib 7.2 profile'],
  ['Rib Distance / Pitch', '7.2 in. nominal'],
  ['Rib Height', '1.5 in. nominal'],
  ['Available Gauges', '24 ga primary commercial path; 26 ga project-dependent'],
  ['Substrate', 'G90 galvanized or Galvalume project path'],
  ['Finish Options', 'Rezibond-style primer-ready, galvanized, Galvalume, SMP, PVDF, matte, and cool-roof options'],
  ['Use', 'Roofing, siding, equipment buildings, warehouses, industrial facilities, and commercial wall panels'],
]
const industrialRibProof = [
  ['Manufactured by Americas Panel Fab', Factory, 'American Super Panel is the flagship exposed-fastener roofing and siding panel system manufactured by Americas Panel Fab.'],
  ['7.2 Industrial Profile', Ruler, 'A high-rib exposed fastener profile positioned for commercial roofing, siding, and large wall coverage.'],
  ['Package Scope', ClipboardList, 'Panels, trim, flashings, closures, fasteners, and job labels organized as one quote package.'],
  ['Bid Support', FileCheck2, 'Submittal, finish, gauge, fastening, warranty, and project documentation reviewed before release.'],
] satisfies [string, IconType, string][]
const industrialRibFinishOptions = [
  ['Rezibond-Style Primer-Ready', 'Weathered zinc / gunmetal design intent for architects and industrial interiors.'],
  ['Galvanized & Galvalume', 'Bright metallic utility finish paths for practical roof and wall packages.'],
  ['PVDF & SMP Colors', 'Commercial color systems for owner standards, campus work, and long-life exterior use.'],
  ['Matte & Cool Roof Colors', 'Low-glare and reflective finish paths for modern commercial buildings.'],
]
const industrialRibApplications = [
  'Warehouses and logistics buildings',
  'Industrial roof and wall packages',
  'Agricultural and equipment buildings',
  'Commercial re-skins and expansions',
  'Municipal storage and service facilities',
  'Large-format siding and liner panels',
]
const industrialRibDownloads = [
  {
    title: 'Industrial Rib Product Data',
    copy: 'Profile, rib pitch, rib height, gauge path, substrate, finish path, and project review notes.',
    href: '/downloads/industrial-rib-product-data.txt',
  },
  {
    title: 'Industrial Rib Flashing & Trim',
    copy: 'Ridge, rake, eave, corner, jamb, base, transition, closure, and accessory starter schedule.',
    href: '/downloads/industrial-rib-flashing-trim.txt',
  },
  {
    title: 'Industrial Rib Quote Checklist',
    copy: 'The project facts estimating needs before issuing a commercial roofing or siding quote.',
    href: '/downloads/industrial-rib-quote-checklist.txt',
  },
]
const selectorOptions = {
  assembly: ['Roof', 'Wall', 'Roof + Wall', 'Trim / Flashing'],
  environment: ['Standard Commercial', 'High Sun / Heat', 'Coastal / Wind Review', 'Public / School Review', 'Industrial Exposure'],
  projectType: ['Commercial', 'Industrial', 'Agriculture', 'Residential', 'Warehouse', 'Contractor Bulk Order', 'Multifamily'],
  state: ['California', 'Texas', 'Arizona', 'Florida'],
}
const processSteps = [
  ['Upload plans', 'PDFs, drawings, and structural documents route to sales and estimating.'],
  ['Review scope', 'Panel type, footage, details, finish, warranty path, and schedule are confirmed.'],
  ['Fabricate package', 'Panels, trim, flashing, accessories, and labels are produced as one coordinated order.'],
  ['Support install', 'Contractors get detail support, sequencing help, and follow-through through closeout.'],
]

const capabilityPhotoCards = [
  {
    title: 'Trim & Flashing Fabrication',
    copy: 'Panel orders become more useful when trim, flashing, closures, and accessories are planned together.',
    image: siteImages.trimFabrication,
  },
  {
    title: 'Commercial Roof Applications',
    copy: 'Ribbed metal roof and wall panels fit warehouses, shops, industrial buildings, and contractor bid packages.',
    image: siteImages.warehouseRoof,
  },
  {
    title: 'Agricultural Buildings',
    copy: 'Barns, shops, ranch buildings, and storage structures need practical panel and trim packages.',
    image: siteImages.agBuilding,
  },
  {
    title: 'Delivery Planning',
    copy: 'Panel bundles, trim, flashing, and accessories should be planned around staging and installation.',
    image: siteImages.truckLoading,
  },
]
const trustBarItems = [
  ['Commercial', '/commercial'],
  ['Industrial', '/industrial'],
  ['Agricultural', '/agricultural'],
  ['Residential', '/residential'],
  ['American Made', '#american-made'],
]
const contractorPageSections = [
  ['Custom Lengths', 'Request panel lengths, colors, trim scope, and accessory needs for the project.'],
  ['Project Support', 'Send drawings, roof plans, wall elevations, photos, and project notes for quote review.'],
  ['Commercial Orders', 'Panel and trim packages for warehouses, shops, retail buildings, and industrial projects.'],
  ['Agricultural Projects', 'Roofing and siding support for barns, equipment shelters, ranches, farms, and storage buildings.'],
  ['Upload Plans', 'Use the upload form to send PDFs, drawings, structural documents, photos, and scope notes.'],
  ['Request Quote', 'Give sales the project state, square footage, panel type, and contact details.'],
]
const commercialTargets = [
  ['Warehouses', 'warehouse-panel-packages', 'Large roof and siding scopes with panel, trim, flashing, and accessory review.'],
  ['Industrial Buildings', 'industrial-building-panels', 'Ribbed metal panels for shop, logistics, production, and service buildings.'],
  ['Retail', 'retail-metal-panels', 'Durable roof, wall, and trim packages for practical commercial shells.'],
  ['Multifamily', 'multifamily-metal-panels', 'Repeatable panel and trim packages for garages, amenity buildings, and exterior scopes.'],
  ['Schools', 'school-metal-roofing', 'Metal roofing and siding conversations for facility, maintenance, and expansion projects.'],
  ['Municipal', 'municipal-metal-panels', 'Panel packages for storage, service, public works, and maintenance buildings.'],
]
const agriculturalTargets = [
  ['Barns', 'barn-metal-roofing', 'Ribbed roof and siding panels for barns, outbuildings, and rural structures.'],
  ['Shops', 'shop-metal-panels', 'Practical panel, trim, and flashing packages for farm shops and work buildings.'],
  ['Storage Buildings', 'storage-building-panels', 'Roof and wall panels for hay, material, supply, and equipment storage.'],
  ['Equipment Shelters', 'equipment-shelter-panels', 'Metal panels and trim for shelters, lean-tos, and covered equipment areas.'],
  ['Ranches', 'ranch-metal-roofing', 'Durable roof and siding packages for ranch buildings and support structures.'],
  ['Farms', 'farm-metal-panels', 'Panel packages for agricultural work where cost, coverage, and service matter.'],
]
const industrialTargets = [
  ['Manufacturing Buildings', 'manufacturing-metal-panels', 'Ribbed metal roof and wall panels for manufacturing and service facilities.'],
  ['Logistics Facilities', 'logistics-metal-roofing', 'Large-format roof, siding, trim, and accessory package conversations.'],
  ['Workshops', 'workshop-metal-panels', 'Panel systems for shop roofs, wall panels, and utility buildings.'],
  ['Maintenance Buildings', 'maintenance-building-panels', 'Metal panels and flashing for maintenance, storage, and operations buildings.'],
]
const residentialTargets = [
  ['Garages', 'garage-metal-roofing', 'Ribbed metal roof and siding panels for detached garages and shop buildings.'],
  ['ADUs & Outbuildings', 'adu-outbuilding-panels', 'Panel and trim packages for accessory buildings and rural residential projects.'],
  ['Barndominiums', 'barndominium-metal-panels', 'Metal roofing and siding conversations for residential-style agricultural buildings.'],
  ['Homeowner Projects', 'homeowner-metal-roofing', 'Support for owners who need a contractor-ready panel and trim package.'],
]
const faqItems = [
  ['What panel types do you offer?', 'American Super Panel focuses on ribbed metal roofing and siding panels, including Industrial Rib, PBR / R-Panel, AG / Tuff Rib style panels, trim, flashing, and accessories.'],
  ['Can I request custom lengths?', 'Yes. Send your project information, desired panel lengths, and drawings or measurements so sales can review the request.'],
  ['Can contractors order in bulk?', 'Yes. Contractors can request panel, trim, flashing, and accessory packages for commercial, agricultural, industrial, and residential projects.'],
  ['Can I upload plans for quoting?', 'Yes. Use the upload form to send plans, drawings, structural documents, photos, and project notes for review.'],
  ['What states do you serve?', 'California is the primary launch market. Texas is the next expansion target. Arizona and Florida inquiries can be reviewed by project, but local availability must be confirmed by sales.'],
  ['Can you provide trim and flashing?', 'Yes. Trim and flashing can be reviewed with panel orders so the package is easier for crews to install.'],
]
const maxUploadBytes = 100 * 1024 * 1024
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA'

type SubmitState = {
  kind: 'idle' | 'submitting' | 'success' | 'error'
  message: string
}

const idleSubmitState: SubmitState = { kind: 'idle', message: '' }

type SeoConfig = {
  canonicalPath: string
  description: string
  schema?: Record<string, unknown> | Record<string, unknown>[]
  title: string
}

const baseBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'American Super Panel',
  url: aspOrigin,
  email: 'sales@americansuperpanel.com',
  telephone: '+1-555-019-3762',
  areaServed: ['California', 'Arizona', 'Texas', 'Florida'],
  description:
    'American Super Panel supplies contractor-ready metal roofing panels, siding panels, trim, flashing, and accessories.',
}

function productSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    brand: { '@type': 'Brand', name: 'American Super Panel' },
    manufacturer: { '@type': 'Organization', name: 'Americas Panel Fab' },
    category: 'Metal roofing panels',
    description,
    url: `${aspOrigin}${path}`,
  }
}

function getSeoConfig(path: string, statePage?: (typeof states)[number]): SeoConfig {
  if (statePage) {
    return {
      canonicalPath: `/${statePage.slug}`,
      description: statePage.copy,
      title: `${statePage.name} Metal Roofing Panels | American Super Panel`,
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${statePage.name} Metal Roofing Panels`,
        url: `${aspOrigin}/${statePage.slug}`,
        description: statePage.copy,
      },
    }
  }

  const routeSeo: Record<string, SeoConfig> = {
    '': {
      canonicalPath: '/',
      description:
        'American Super Panel supplies custom-length metal roofing panels, siding panels, trim, flashing, and contractor quote support.',
      title: 'American Super Panel | Metal Roofing Panels Built for Contractors',
      schema: baseBusinessSchema,
    },
    products: {
      canonicalPath: '/products',
      description:
        'Shop American Super Panel metal roofing panels, siding panels, trim, flashing, and accessories for commercial and agricultural projects.',
      title: 'Metal Roofing Panel Products | American Super Panel',
    },
    'pbr-panel': {
      canonicalPath: '/pbr-panel',
      description:
        'PBR and R-Panel metal roofing and siding panels for commercial buildings, warehouses, shops, agricultural buildings, and contractor orders.',
      title: 'PBR / R-Panel Metal Roofing Panels | American Super Panel',
      schema: productSchema(
        'PBR / R-Panel Metal Roofing and Siding Panels',
        'Ribbed exposed-fastener metal panels for commercial, industrial, warehouse, shop, and agricultural buildings.',
        '/pbr-panel',
      ),
    },
    'ag-panel': {
      canonicalPath: '/ag-panel',
      description:
        'AG and Tuff Rib metal panels for barns, shops, storage buildings, equipment shelters, ranches, farms, and rural building projects.',
      title: 'AG / Tuff Rib Metal Panels | American Super Panel',
      schema: productSchema(
        'AG / Tuff Rib Metal Panels',
        'Contractor-ready ribbed metal roofing and siding panels for agricultural and rural building projects.',
        '/ag-panel',
      ),
    },
    'trim-and-flashing': {
      canonicalPath: '/trim-and-flashing',
      description:
        'Trim, flashing, closures, fastener coordination, and accessory support for American Super Panel metal roofing and siding packages.',
      title: 'Metal Roofing Trim & Flashing | American Super Panel',
      schema: productSchema(
        'Metal Roofing Trim and Flashing',
        'Finish-matched trim, flashing, and accessory packages for metal roofing and siding projects.',
        '/trim-and-flashing',
      ),
    },
    contractors: {
      canonicalPath: '/contractors',
      description:
        'Contractor metal panel support for custom lengths, bulk orders, plan uploads, trim packages, and fast quote communication.',
      title: 'Metal Panels Built for Contractors | American Super Panel',
    },
    commercial: {
      canonicalPath: '/commercial',
      description:
        'Commercial metal roofing and siding panels for warehouses, industrial buildings, retail, multifamily, schools, and municipal projects.',
      title: 'Commercial Metal Roofing Panels | American Super Panel',
    },
    agricultural: {
      canonicalPath: '/agricultural',
      description:
        'Agricultural metal roofing and siding panels for barns, shops, storage buildings, equipment shelters, ranches, and farms.',
      title: 'Agricultural Metal Panels | American Super Panel',
    },
    'request-quote': {
      canonicalPath: '/request-quote',
      description:
        'Request a metal panel quote for roofing panels, siding panels, trim, flashing, and contractor packages from American Super Panel.',
      title: 'Request a Metal Panel Quote | American Super Panel',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Request a Metal Panel Quote',
        url: `${aspOrigin}/request-quote`,
        description: 'Quote request page for American Super Panel metal roofing panels, siding panels, trim, and flashing.',
      },
    },
    'upload-plans': {
      canonicalPath: '/upload-plans',
      description:
        'Upload project plans, roof drawings, wall elevations, structural documents, and notes for American Super Panel quote review.',
      title: 'Upload Plans for Metal Panel Quote | American Super Panel',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Upload Plans for Metal Panel Quote',
        url: `${aspOrigin}/upload-plans`,
        description: 'Plan upload page for American Super Panel roofing, siding, trim, and flashing quote review.',
      },
    },
    'american-super-panel-industrial-rib': {
      canonicalPath: '/american-super-panel-industrial-rib',
      description:
        'Industrial Rib metal roofing and siding panels with contractor-ready quote support, custom lengths, trim, flashing, and accessories.',
      title: 'Industrial Rib Metal Roofing Panels | American Super Panel',
      schema: productSchema(
        'American Super Panel Industrial Rib',
        'Industrial Rib metal roofing and siding panels for commercial, industrial, agricultural, and residential projects.',
        '/american-super-panel-industrial-rib',
      ),
    },
  }

  return routeSeo[path] ?? {
    canonicalPath: `/${path}`,
    description:
      'American Super Panel supplies metal roofing panels, siding panels, trim, flashing, and quote support for contractors.',
    title: 'American Super Panel | Metal Roofing Panels',
  }
}

function App() {
  const path = window.location.pathname.replace(/^\/+/, '')
  const statePage = states.find((state) => state.slug === path)
  const seoConfig = getSeoConfig(path, statePage)

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <SeoManager config={seoConfig} />
      <Header />
      <main>
        {statePage ? (
          <StateLanding state={statePage} />
        ) : path ? (
          <RoutedPage path={path} />
        ) : (
          <IndustrialRibPage />
        )}
      </main>
      <Footer />
    </div>
  )
}

function SeoManager({ config }: { config: SeoConfig }) {
  useEffect(() => {
    document.title = config.title

    const description = upsertHeadElement('meta', 'name', 'description') as HTMLMetaElement
    description.content = config.description

    const canonical = upsertHeadElement('link', 'rel', 'canonical') as HTMLLinkElement
    canonical.href = `${aspOrigin}${config.canonicalPath}`

    const existingSchema = document.head.querySelector('#route-schema')
    existingSchema?.remove()

    if (config.schema) {
      const script = document.createElement('script')
      script.id = 'route-schema'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(Array.isArray(config.schema) ? { '@context': 'https://schema.org', '@graph': config.schema } : config.schema)
      document.head.appendChild(script)
    }
  }, [config])

  return null
}

function upsertHeadElement(tagName: 'meta' | 'link', attribute: string, value: string) {
  const selector = `${tagName}[${attribute}="${value}"]`
  const existing = document.head.querySelector(selector)

  if (existing) {
    return existing
  }

  const element = document.createElement(tagName)
  element.setAttribute(attribute, value)
  document.head.appendChild(element)
  return element
}

function RoutedPage({ path }: { path: string }) {
  if (path === 'products') {
    return (
      <>
        <PageHero title="Products" copy="Metal roofing panels, metal siding panels, trim, flashing, and accessories for contractor, commercial, agricultural, and residential projects." />
        <Products />
        <FinishSystem />
        <BidResources />
        <Contact />
      </>
    )
  }

  if (path === 'services') {
    return (
      <>
        <PageHero title="Services" copy="Custom-length panels, trim and flashing packages, contractor support, plan uploads, and project communication." />
        <Services />
        <Process />
        <Contact />
      </>
    )
  }

  if (path === 'finishes') {
    return (
      <>
        <PageHero eyebrow="Colors & Finishes" title="Metal Panel Colors, Finishes & Coil Options" copy="Commercial metal panel finishes, architectural color paths, cool roof options, and custom color coordination for roof, siding, trim, and flashing packages." />
        <FinishSupport />
        <FinishSystem />
        <Products />
        <Contact />
      </>
    )
  }

  if (path === 'pbr-panel') {
    return <PanelProductPage product={panelProductPages.pbr} />
  }

  if (path === 'ag-panel') {
    return <PanelProductPage product={panelProductPages.ag} />
  }

  if (path === 'trim-and-flashing') {
    return <PanelProductPage product={panelProductPages.trim} />
  }

  if (path === 'contractors') {
    return <ContractorsPage />
  }

  if (path === 'commercial') {
    return <CommercialPage />
  }

  if (path === 'industrial') {
    return (
      <MarketDetailPage
        eyebrow="Industrial Panels"
        title="Industrial Metal Roofing & Siding Panels"
        copy="Ribbed panels, trim, flashing, and accessories for manufacturing buildings, logistics facilities, workshops, and maintenance buildings."
        targets={industrialTargets}
        icon={Factory}
      />
    )
  }

  if (path === 'agricultural') {
    return <AgriculturalPage />
  }

  if (path === 'residential') {
    return (
      <MarketDetailPage
        eyebrow="Residential Project Support"
        title="Residential Metal Roofing & Siding Panels"
        copy="Panel and trim support for garages, ADUs, outbuildings, barndominiums, and owner-led projects that need contractor-ready quoting."
        targets={residentialTargets}
        icon={Building2}
      />
    )
  }

  if (path === 'resources') {
    return (
      <>
        <PageHero title="Contractor & Bid Resources" copy="Panel profiles, submittal support, warranty path coordination, takeoff support, and plan-upload workflows." />
        <PanelSystemSelector />
        <BidResources />
        <DownloadCenter />
        <Process />
        <Contact />
      </>
    )
  }

  if (path === 'selector') {
    return (
      <>
        <PageHero title="Panel System Selector" copy="Choose a project type, state, exposure, and assembly to identify the strongest American Super Panel™ system path." />
        <PanelSystemSelector />
        <DownloadCenter />
        <Contact />
      </>
    )
  }

  if (path === 'markets') {
    return (
      <>
        <PageHero title="Markets Served" copy="Commercial, industrial, agricultural, residential, warehouse, and contractor metal panel projects." />
        <Markets />
        <ServiceAreas />
        <Contact />
      </>
    )
  }

  if (path === 'super-panel') {
    return <SuperPanelPage />
  }

  if (path === 'american-super-panel-industrial-rib') {
    return <IndustrialRibPage />
  }

  if (path === 'projects') {
    return (
      <>
        <PageHero title="Projects" copy="A project gallery organized by commercial, industrial, agricultural, and residential work." />
        <Projects />
        <Contact />
      </>
    )
  }

  if (path === 'about') {
    return (
      <>
        <PageHero title="About American Super Panel" copy="A focused product and lead-generation brand for Industrial Rib roofing, siding, trim packages, dealer interest, and contractor sales." />
        <About />
        <Contact />
      </>
    )
  }

  if (path === 'contact') {
    return (
      <>
        <PageHero title="Contact" copy="Request pricing, upload plans, contact sales, order panels, or start a dealer conversation with American Super Panel." />
        <Contact />
      </>
    )
  }

  if (path === 'request-quote') {
    return <RequestQuotePage />
  }

  if (path === 'upload-plans') {
    return <UploadPlansPage />
  }

  return (
    <>
      <PageHero title="American Super Panel" copy="Industrial Rib metal roofing and siding panels." />
      <IndustrialRibPage />
      <Contact />
    </>
  )
}

function PageHero({ title, copy, eyebrow = 'American Super Panel' }: { title: string; copy: string; eyebrow?: string }) {
  return (
    <section className="border-b border-slate-200 bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow text-[#f97316]">{eyebrow}</p>
        <h1 className="mt-3 max-w-5xl text-4xl font-black leading-tight tracking-normal text-[#0b1f33] lg:text-5xl">{title}</h1>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">{copy}</p>
        <PageActionBar />
      </div>
    </section>
  )
}

function PageActionBar() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a className="btn-primary" href="#quote">
        Request Quote <ArrowRight size={18} />
      </a>
      <a className="btn-secondary" href="#upload-plans">
        <UploadCloud size={18} /> Upload Plans
      </a>
      <a className="btn-secondary" href="#contact">
        <Phone size={18} /> Call Sales
      </a>
      <a className="btn-secondary" href="/resources">
        <Download size={18} /> Resources
      </a>
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="top-contact-bar border-b border-slate-200 bg-[#0b1f33] px-5 py-2 text-sm font-bold text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-between">
          <span>Industrial Rib panels • metal roofing • metal siding • trim packages</span>
          <span className="top-contact-links flex flex-wrap justify-center gap-x-5 gap-y-1">
            <a className="inline-flex items-center gap-2 hover:text-orange-200" href="tel:+15550193762">
              <Phone size={15} /> (555) 019-3762
            </a>
            <a className="inline-flex items-center gap-2 hover:text-orange-200" href="mailto:sales@americansuperpanel.com">
              <Mail size={15} /> sales@americansuperpanel.com
            </a>
          </span>
        </div>
      </div>
      <div className="site-header-row mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
        <a href="/" className="brand-lockup flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-[#0b1f33] text-white">
            <Factory size={24} />
          </span>
          <span>
            <strong className="block whitespace-nowrap text-lg font-black tracking-normal text-[#0b1f33]">
              American Super Panel
            </strong>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:block">
              Industrial Rib Panels
            </span>
          </span>
        </a>
        <nav className="main-nav hidden items-center gap-5 text-sm font-semibold text-slate-700 md:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-[#f97316]">
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions flex shrink-0 items-center gap-2">
          <a className="btn-secondary header-secondary-action" href="/resources">
            <Download size={18} />
            Resources
          </a>
          <a className="btn-secondary header-secondary-action" href="#upload-plans">
            <UploadCloud size={18} />
            Upload Plans
          </a>
          <a className="btn-primary header-quote-action" href="#quote">
            Request Quote
          </a>
        </div>
      </div>
    </header>
  )
}

function ContractorOutcomes() {
  return (
    <section className="section bg-white">
      <SectionIntro
        eyebrow="Why Contractors Switch"
        title="Built around the buying problems metal contractors actually have."
        copy="American Super Panel helps contractors move from drawings to panel, flashing, finish, sample, dealer, and delivery decisions with fewer delays."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {contractorOutcomes.map(([title, copy]) => (
          <article key={title} className="card">
            <CheckCircle2 className="text-[#f97316]" />
            <h3 className="mt-5 text-xl font-black text-[#0b1f33]">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SuperPanel() {
  return (
    <section id="super-panel" className="section">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Flagship Product Family"
            title="American Super Panel™"
            copy="American Super Panel™ systems give commercial buyers a clear way to specify standing seam roofing, exposed fastener panels, wall panels, and coordinated flashing packages."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {['Contractor-ready product family', 'Exposed fastener roofing and siding options', 'Commercial, industrial, agricultural, and residential applications', 'Quote-ready panel and trim packages'].map(
              (item) => (
                <p key={item} className="flex gap-3 rounded border border-slate-200 p-4 font-semibold">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
                  {item}
                </p>
              ),
            )}
          </div>
          <a className="btn-primary mt-8" href="/super-panel">
            Explore Super Panel <ArrowRight size={18} />
          </a>
        </div>
        <img
          src={siteImages.panelCloseup.src}
          alt={siteImages.panelCloseup.alt}
          className="h-[420px] w-full rounded object-cover shadow-2xl"
        />
      </div>
    </section>
  )
}

function SuperPanelPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <img
          src={siteImages.panelCloseup.src}
          alt={siteImages.panelCloseup.alt}
          className="absolute right-0 top-0 h-full w-full object-cover opacity-18 lg:w-[50%] lg:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
        <div className="section relative">
          <div className="max-w-4xl">
            <p className="eyebrow text-[#f97316]">Flagship Product Family</p>
            <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal text-[#0b1f33] lg:text-6xl">
              American Super Panel™
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-700">
              American Super Panel™ is the flagship product family manufactured by Americas Panel Fab
              for commercial roofing, siding, trim, dealer, and contractor sales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href="#quote">
                Request Quote <ArrowRight size={18} />
              </a>
              <a className="btn-secondary" href="#projects">
                Project Gallery
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <SectionIntro
          eyebrow="Benefits"
          title="A flagship family for demanding commercial projects."
          copy="The product architecture gives contractors and owners a memorable panel family to specify, price, sample, order, and install."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Wind Review Path', Wind, 'Project-specific attachment, trim, and documentation questions for demanding regional conditions.'],
            ['Code Review Support', FileCheck2, 'Submittal and project-documentation support where code, owner, or assembly review is required.'],
            ['Energy Efficiency', SunMedium, 'Cool-roof color paths, reflective surfaces, and ventilation-aware details.'],
            ['Long Service Life', ShieldCheck, 'Durable steel and aluminum package options with clean trim integration.'],
          ].map(([title, Icon, copy]) => (
            <article key={title as string} className="card">
              <Icon className="text-[#f97316]" />
              <h2 className="mt-5 text-xl font-black text-[#0b1f33]">{title as string}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy as string}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Commercial Applications"
              title="Specified for buildings where performance and appearance both matter."
              copy="American Super Panel™ supports standing seam roof systems, exposed fastener packages, architectural wall panels, and coordinated flashing packages."
            />
            <div className="mt-8 grid gap-3">
              {['Commercial facilities', 'Industrial buildings', 'Warehouse projects', 'Agricultural buildings'].map(
                (item) => (
                  <p key={item} className="flex gap-3 font-semibold text-slate-700">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
                    {item}
                  </p>
                ),
              )}
            </div>
          </div>
          <img
            src={siteImages.trimFabrication.src}
            alt={siteImages.trimFabrication.alt}
            className="h-[430px] w-full rounded object-cover shadow-xl"
          />
        </div>
      </section>
      <Projects />
      <Contact />
    </>
  )
}

function IndustrialRibPage() {
  return (
    <>
      <section className="overflow-hidden border-b border-slate-200 bg-white">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <p className="eyebrow text-[#f97316]">American Super Panel™</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.08] tracking-normal text-[#0b1f33] sm:text-5xl xl:text-[4rem]">
                Metal Roofing Panels Built for Contractors
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-700">
                Custom-Length Metal Panels, Trim & Flashing for Commercial, Industrial,
                Agricultural and Residential Projects.
              </p>
              <p className="mt-5 max-w-3xl text-base font-bold leading-7 text-slate-700">
                American Super Panel is a contractor-ready metal roofing and siding panel
                system built for fast quotes, custom lengths, reliable supply, and regional
                manufacturing support. Manufactured by Americas Panel Fab.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn-primary" href="#quote">
                  Request a Quote <ArrowRight size={18} />
                </a>
                <a className="btn-secondary" href="#upload-plans">
                  <FileUp size={18} /> Upload Plans
                </a>
                <a className="btn-secondary" href="#contact">
                  <Phone size={18} /> Call Sales
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {trustBarItems.map(([label, href]) => (
                  <a key={label} href={href} className="rounded border border-slate-200 bg-white px-4 py-3 text-sm font-black text-[#0b1f33] shadow-sm transition hover:border-[#f97316] hover:text-[#c2410c]">
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded border border-slate-200 bg-slate-50 p-3 shadow-2xl">
              <img
                src={siteImages.heroRollFormer.src}
                alt={siteImages.heroRollFormer.alt}
                className="h-[420px] w-full rounded object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Product Data"
              title="Ribbed metal roofing and siding panels ready for quote review."
              copy="Contractors need clear product signals. This page puts panel type, trim package, colors, upload workflow, and manufacturer identity up front."
            />
            <div className="mt-8 grid gap-4">
              {industrialRibProof.map(([title, Icon, copy]) => (
                <article key={title as string} className="flex gap-4 rounded border border-slate-200 bg-slate-50 p-4">
                  <Icon className="mt-1 shrink-0 text-[#f97316]" />
                  <span>
                    <strong className="block text-lg font-black text-[#0b1f33]">{title as string}</strong>
                    <span className="mt-1 block leading-7 text-slate-600">{copy as string}</span>
                  </span>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {[siteImages.steelCoils, siteImages.panelCloseup].map((image) => (
                <img key={image.key} src={image.src} alt={image.alt} className="h-52 w-full rounded object-cover shadow-lg" />
              ))}
            </div>
            <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-xl">
              <table className="product-proof-table">
                <tbody>
                  {industrialRibSpecs.map(([label, value]) => (
                    <tr key={label}>
                      <th>{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CapabilityPhotoStrip />

      <section id="samples" className="section bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Colors, Finishes & Samples"
              title="Metallic, primer-ready, painted, matte, and cool-roof finish paths."
              copy="Choose finish paths for roof panels, siding panels, trim, flashing, and sample requests before larger orders are released."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href="#quote">
                Request Samples <ArrowRight size={18} />
              </a>
              <a className="btn-secondary" href="#quote">
                Order Panels
              </a>
              <a className="btn-secondary" href="#quote">
                Become Dealer
              </a>
              <a className="btn-secondary" href="/downloads/finish-selection-guide.txt" download>
                <Download size={18} /> Finish Guide
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {industrialRibFinishOptions.map(([title, copy]) => (
              <article key={title} className="card">
                <span className="mb-5 block h-10 w-full rounded border border-slate-200 bg-gradient-to-r from-slate-200 via-slate-400 to-slate-700" />
                <h2 className="text-xl font-black text-[#0b1f33]">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <SectionIntro
          eyebrow="Project Gallery"
          title="Industrial Rib belongs on real roofs, real siding packages, and real bid schedules."
          copy="Review common building applications for Industrial Rib roofing, siding, trim, and fabrication packages before sending plans for quote review."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industrialRibGalleryImages.map(({ label, image }) => (
            <article key={label} className="overflow-hidden rounded border border-slate-200 bg-white shadow-lg">
              <img src={image.src} alt={image.alt} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h2 className="text-lg font-black text-[#0b1f33]">{label}</h2>
                <p className="mt-2 text-sm font-semibold text-slate-600">Roofing, siding, trim, and fabrication package support.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <img
            src={siteImages.trimFabrication.src}
            alt={siteImages.trimFabrication.alt}
            className="h-[430px] w-full rounded object-cover shadow-xl"
          />
          <div>
            <SectionIntro
              eyebrow="Applications"
              title="Industrial rib panels for roof, siding, and large-format building envelopes."
              copy="The panel is positioned for buyers comparing exposed fastener systems for cost, coverage, finish, trim support, and fast quote turnaround."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {industrialRibApplications.map((item) => (
                <p key={item} className="flex gap-3 rounded border border-slate-200 bg-white p-4 font-semibold text-slate-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AmericanMadeSection />

      <section className="section bg-white">
        <SectionIntro
          eyebrow="Downloads & Install Support"
          title="Product data, flashing details, quote checklist, and upload workflow."
          copy="Give estimators, contractors, and purchasing teams a clear packet for panel type, finish path, trim scope, plan uploads, and quote review."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {industrialRibDownloads.map((asset) => (
            <a key={asset.href} className="download-card" href={asset.href} download>
              <span className="flex h-11 w-11 items-center justify-center rounded bg-[#0b1f33] text-white">
                <FileText size={22} />
              </span>
              <span className="mt-5 block text-xs font-black uppercase tracking-[0.14em] text-[#f97316]">
                TXT Download
              </span>
              <strong className="mt-2 block text-xl font-black text-[#0b1f33]">{asset.title}</strong>
              <span className="mt-3 block leading-7 text-slate-600">{asset.copy}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section bg-[#0b1f33] text-white">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionIntro
            dark
            eyebrow="Quote Package"
            title="Get a quote for Industrial Rib roofing, siding, trim, and accessories."
            copy="Estimating can review square footage, roof or wall scope, gauge path, finish intent, trims, accessories, delivery state, and schedule from one intake."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {['Panel takeoff', 'Trim schedule', 'Sample request'].map((item) => (
              <p key={item} className="rounded border border-white/15 bg-white/10 p-5 text-lg font-black">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <Contact />
    </>
  )
}

function AmericanMadeSection() {
  return (
    <section id="american-made" className="section scroll-mt-28 bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="American Made"
            title="Domestic production focus. Faster answers for serious panel work."
            copy="American Super Panel is built around domestic manufacturing support, regional material coordination, custom-length panel orders, and responsive contractor service for commercial, agricultural, industrial, and residential projects."
          />
          <p className="mt-5 rounded border border-orange-200 bg-orange-50 p-4 text-sm font-bold leading-6 text-slate-700">
            Material origin, coating system, substrate, finish, and availability should be confirmed
            by project. The advantage is a shorter, clearer supply path with sales, estimating, and
            fabrication support close to the work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href="#quote">
              Request a Quote <ArrowRight size={18} />
            </a>
            <a className="btn-secondary" href="#upload-plans">
              <FileUp size={18} /> Upload Plans
            </a>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'Custom-Length Panels',
            'Regional Material Coordination',
            'Less Supply-Chain Guesswork',
            'Contractor Reorder Support',
            'Trim & Flashing Packages',
            'Fast Quote Communication',
          ].map((item) => (
            <p key={item} className="flex gap-3 rounded border border-slate-200 bg-slate-50 p-4 font-black text-[#0b1f33]">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

function CapabilityPhotoStrip() {
  return (
    <section className="section bg-slate-50">
      <SectionIntro
        eyebrow="Manufacturing & Project Support"
        title="Equipment, materials, panel profiles, and trim support in one package."
        copy="Roll forming, coil inventory, ribbed profiles, and trim fabrication give contractors a clearer picture of the panel package before quote review."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {capabilityPhotoCards.map((section) => (
          <article key={section.title} className="overflow-hidden rounded border border-slate-200 bg-white shadow-lg">
            <img
              src={section.image.src}
              alt={section.image.alt}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-black text-[#0b1f33]">{section.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{section.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="section bg-slate-50">
      <SectionIntro
        eyebrow="FAQ"
        title="Common questions before sending plans."
        copy="A quick starting point for contractors, builders, owners, and agricultural customers."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {faqItems.map(([question, answer]) => (
          <article key={question} className="card">
            <h2 className="text-xl font-black text-[#0b1f33]">{question}</h2>
            <p className="mt-3 leading-7 text-slate-600">{answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContractorsPage() {
  return (
    <>
      <PageHero
        title="Built for Contractors"
        copy="Custom-length metal panels, trim, flashing, project support, and upload workflows for crews that need clear answers."
      />
      <section className="section bg-white">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {contractorPageSections.map(([title, copy]) => (
            <article key={title} className="card">
              <HardHat className="text-[#f97316]" />
              <h2 className="mt-5 text-xl font-black text-[#0b1f33]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <Products />
      <AmericanMadeSection />
      <Contact />
    </>
  )
}

function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial Panels"
        title="Commercial Metal Roofing Panels"
        copy="Metal roofing panels, siding panels, trim, and flashing for warehouses, industrial buildings, retail, multifamily, schools, and municipal projects."
      />
      <section className="section bg-white">
        <SectionIntro
          eyebrow="Commercial Project Types"
          title="Send drawings, square footage, project state, and trim scope."
          copy="American Super Panel keeps commercial language practical: panel packages, trim support, quote review, and plan uploads."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {commercialTargets.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="flex gap-3 rounded border border-slate-200 bg-slate-50 p-4 font-black text-[#0b1f33] transition hover:border-[#f97316] hover:text-[#c2410c]">
              <Building2 className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
              {label}
            </a>
          ))}
        </div>
      </section>
      <MarketApplicationDetails targets={commercialTargets} icon={Building2} />
      <Products />
      <Contact />
    </>
  )
}

function AgriculturalPage() {
  return (
    <>
      <PageHero
        eyebrow="Agricultural Panels"
        title="Agricultural Metal Roofing & Siding Panels"
        copy="Ribbed panels, trim, flashing, and accessories for barns, shops, storage buildings, equipment shelters, ranches, and farms."
      />
      <section className="section bg-white">
        <SectionIntro
          eyebrow="Agricultural Projects"
          title="Panels and trim for practical farm and ranch buildings."
          copy="Send the project state, rough square footage, panel type, and drawings or photos so sales can review the package."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {agriculturalTargets.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="flex gap-3 rounded border border-slate-200 bg-slate-50 p-4 font-black text-[#0b1f33] transition hover:border-[#f97316] hover:text-[#c2410c]">
              <Factory className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
              {label}
            </a>
          ))}
        </div>
      </section>
      <MarketApplicationDetails targets={agriculturalTargets} icon={Factory} />
      <Products />
      <Contact />
    </>
  )
}

function MarketDetailPage({
  copy,
  eyebrow,
  icon: Icon,
  targets,
  title,
}: {
  copy: string
  eyebrow: string
  icon: IconType
  targets: string[][]
  title: string
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} copy={copy} />
      <section className="section bg-white">
        <SectionIntro
          eyebrow="Project Types"
          title="Choose the project type and send the scope."
          copy="Each path points to the information sales needs: panel type, trim scope, project state, square footage, and drawings or photos."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {targets.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="flex gap-3 rounded border border-slate-200 bg-slate-50 p-4 font-black text-[#0b1f33] transition hover:border-[#f97316] hover:text-[#c2410c]">
              <Icon className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
              {label}
            </a>
          ))}
        </div>
      </section>
      <MarketApplicationDetails targets={targets} icon={Icon} />
      <Products />
      <Contact />
    </>
  )
}

function MarketApplicationDetails({ icon: Icon, targets }: { icon: IconType; targets: string[][] }) {
  return (
    <section className="section bg-slate-50">
      <div className="grid gap-5 md:grid-cols-2">
        {targets.map(([label, id, copy]) => (
          <article id={id} key={id} className="scroll-mt-28 rounded border border-slate-200 bg-white p-6 shadow-lg">
            <Icon className="text-[#f97316]" />
            <h2 className="mt-4 text-2xl font-black text-[#0b1f33]">{label}</h2>
            <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            <a className="mt-5 inline-flex font-black text-[#0b1f33] hover:text-[#c2410c]" href="#quote">
              Start quote for {label}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

const panelProductPages = {
  pbr: {
    eyebrow: 'PBR / R-Panel',
    title: 'PBR / R-Panel Metal Roofing & Siding Panels',
    copy: 'A practical exposed-fastener panel path for commercial buildings, warehouses, shops, industrial support buildings, and agricultural projects that need dependable roof and wall coverage.',
    image: siteImages.panelCloseup,
    specs: ['Roofing and siding applications', 'Commercial, industrial, agricultural, and shop buildings', 'Custom-length panel quote support', 'Matching trim, flashing, and accessories'],
    applications: ['Warehouses', 'Industrial buildings', 'Retail shells', 'Equipment shops', 'Storage buildings', 'Agricultural buildings'],
    quote: 'Send drawings, panel lengths, square footage, trim scope, and project state so sales can package the right panel, finish, and accessory path.',
  },
  ag: {
    eyebrow: 'AG / Tuff Rib',
    title: 'AG / Tuff Rib Metal Panels',
    copy: 'A contractor-ready ribbed metal panel option for barns, shops, storage buildings, equipment shelters, ranch structures, and farm projects where straightforward ordering matters.',
    image: siteImages.agBuilding,
    specs: ['Roof and wall panel packages', 'Agricultural and rural building use', 'Custom lengths reviewed by project', 'Trim and flashing support for common details'],
    applications: ['Barns', 'Shops', 'Storage buildings', 'Equipment shelters', 'Ranches', 'Farms'],
    quote: 'Send the building size, roof or wall scope, color needs, trim list, and timing so the sales team can respond with the next step.',
  },
  trim: {
    eyebrow: 'Trim & Flashing',
    title: 'Metal Roofing Trim, Flashing & Accessories',
    copy: 'Finish-matched trim and flashing support for roof edges, wall corners, openings, ridge conditions, transitions, and project closeout.',
    image: siteImages.trimFabrication,
    specs: ['Ridge, rake, eave, corner, jamb, base, and transition pieces', 'Roof and wall accessory coordination', 'Job-labeled package support', 'Color and finish coordination with panel orders'],
    applications: ['Roof edges', 'Wall corners', 'Openings', 'Transitions', 'Closures and fasteners', 'Project closeout'],
    quote: 'Upload plans, sketches, elevations, or trim notes so estimating can understand the details before the first sales call.',
  },
}

function PanelProductPage({ product }: { product: (typeof panelProductPages)[keyof typeof panelProductPages] }) {
  return (
    <>
      <PageHero eyebrow={product.eyebrow} title={product.title} copy={product.copy} />
      <section className="section bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <img src={product.image.src} alt={product.image.alt} className="h-[430px] w-full rounded object-cover shadow-xl" />
          </div>
          <div>
            <SectionIntro
              eyebrow="Product Data"
              title="Built for ordering, estimating, and field coordination."
              copy={product.quote}
            />
            <div className="mt-8 grid gap-3">
              {product.specs.map((spec) => (
                <p key={spec} className="flex gap-3 rounded border border-slate-200 bg-slate-50 p-4 font-bold text-[#0b1f33]">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
                  {spec}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <SectionIntro
          eyebrow="Applications"
          title="Common project fits."
          copy="Use the list below as a starting point for quote requests. Final panel, finish, trim, and accessory details should be reviewed against the actual project scope."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {product.applications.map((application) => (
            <a key={application} className="card group block" href="#quote">
              <Building2 className="mb-5 text-[#f97316]" />
              <h3 className="text-xl font-black text-[#0b1f33]">{application}</h3>
              <p className="mt-3 leading-7 text-slate-600">Request panel, trim, flashing, and accessory support for this project type.</p>
              <span className="mt-5 inline-flex font-black text-[#0b1f33] group-hover:text-[#f97316]">
                Start quote <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          ))}
        </div>
      </section>
      <BidResources />
      <Contact />
    </>
  )
}

function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request Quote"
        title="Request a Metal Panel Quote"
        copy="Send project basics, panel type, square footage, state, and timing so sales can review the right roof, siding, trim, flashing, and accessory path."
      />
      <section className="section bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <SectionIntro
              eyebrow="Quote Intake"
              title="Better project data makes the first response stronger."
              copy="Include panel type, roof or wall scope, trim needs, desired timing, delivery state, and any drawings you already have."
            />
            <div className="mt-8 grid gap-3">
              {['Panel type and project state', 'Estimated square footage', 'Commercial, agricultural, industrial, or residential use', 'Trim, flashing, and accessory notes'].map((item) => (
                <p key={item} className="flex gap-3 rounded border border-slate-200 bg-white p-4 font-bold text-[#0b1f33]">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  )
}

function UploadPlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Upload Plans"
        title="Upload Plans for Quote Review"
        copy="Share roof plans, wall elevations, drawings, sketches, structural documents, and project notes so sales can understand the scope before the first call."
      />
      <section className="section bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <SectionIntro
              eyebrow="Plan Upload"
              title="Send the drawings once. Keep the quote conversation cleaner."
              copy="PDFs, drawings, elevations, and notes help identify panel lengths, trim conditions, flashing needs, project state, and review priorities."
            />
            <div className="mt-8 overflow-hidden rounded border border-slate-200 bg-white shadow-xl">
              <img src={siteImages.contractorPlans.src} alt={siteImages.contractorPlans.alt} className="h-72 w-full object-cover" />
            </div>
          </div>
          <UploadForm />
        </div>
      </section>
    </>
  )
}

function Products() {
  return (
    <section id="products" className="section bg-slate-50">
      <SectionIntro
        eyebrow="Products"
        title="Panel systems and complete fabricated packages."
        copy="American Super Panel supplies roof panels, wall panels, trim, flashing, samples, and accessories for contractor and dealer sales."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {products.map((product) => (
          <article key={product.name} className="card">
            <p className="mb-4 inline-flex rounded bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-slate-600">
              {product.spec}
            </p>
            <h3 className="text-2xl font-black text-[#0b1f33]">{product.name}</h3>
            <p className="mt-3 leading-7 text-slate-600">{product.copy}</p>
            <ul className="mt-5 grid gap-2">
              {product.points.map((point) => (
                <li key={point} className="flex gap-3 font-semibold text-slate-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#f97316]" size={19} />
                  {point}
                </li>
              ))}
            </ul>
            {'href' in product ? (
              <a className="btn-primary mt-6" href={product.href}>
                View Product Page <ArrowRight size={18} />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

function FinishSystem() {
  return (
    <section id="finishes" className="section">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <SectionIntro
            eyebrow="Colors & Finishes"
            title="A finish system worthy of commercial specifications."
            copy="Coordinate panel color, trim color, substrate, sheen, and sample requests for commercial, agricultural, industrial, and residential projects."
          />
          <a className="btn-secondary mt-8" href="#quote">
            Request Color Support
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {finishes.map(([name, color, copy]) => (
            <article key={name} className="card">
              <span className="mb-5 block h-10 w-full rounded border border-slate-200" style={{ background: color }} />
              <h3 className="text-xl font-black text-[#0b1f33]">{name}</h3>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinishSupport() {
  return (
    <section className="section bg-white">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          <img src={siteImages.steelCoils.src} alt={siteImages.steelCoils.alt} className="h-64 w-full rounded object-cover shadow-xl" />
          <img src={siteImages.panelCloseup.src} alt={siteImages.panelCloseup.alt} className="h-64 w-full rounded object-cover shadow-xl" />
        </div>
        <div>
          <SectionIntro
            eyebrow="Finish Selection"
            title="Start with the building, then choose the finish path."
            copy="Color and finish decisions should match the project use, exposure, roof or wall application, trim details, and owner standards."
          />
          <div className="mt-8 grid gap-3">
            {['Steel coil and substrate review', 'Roof, siding, trim, and flashing color coordination', 'Cool-roof and low-glare finish conversations', 'Sample requests before larger orders'].map((item) => (
              <p key={item} className="flex gap-3 rounded border border-slate-200 bg-slate-50 p-4 font-bold text-[#0b1f33]">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PanelSystemSelector() {
  const [projectType, setProjectType] = useState(selectorOptions.projectType[0])
  const [state, setState] = useState(selectorOptions.state[0])
  const [environment, setEnvironment] = useState(selectorOptions.environment[0])
  const [assembly, setAssembly] = useState(selectorOptions.assembly[0])
  const recommendation = getPanelRecommendation({ assembly, environment, projectType, state })

  return (
    <section id="selector" className="section bg-white">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionIntro
            eyebrow="Panel System Selector"
            title="Turn project conditions into a recommended panel path."
            copy="Help contractors, architects, and procurement teams narrow the right American Super Panel™ series before they request a quote."
          />
          <div className="mt-8 overflow-hidden rounded border border-slate-200 bg-white">
            <img
              src={siteImages.warehouseRoof.src}
              alt={siteImages.warehouseRoof.alt}
              className="h-64 w-full object-cover"
            />
          </div>
        </div>
        <div className="selector-panel">
          <div className="grid gap-4 md:grid-cols-2">
            <SelectorField label="Project Type" value={projectType} options={selectorOptions.projectType} onChange={setProjectType} />
            <SelectorField label="Project State" value={state} options={selectorOptions.state} onChange={setState} />
            <SelectorField label="Exposure / Priority" value={environment} options={selectorOptions.environment} onChange={setEnvironment} />
            <SelectorField label="Assembly Scope" value={assembly} options={selectorOptions.assembly} onChange={setAssembly} />
          </div>
          <div className="mt-6 rounded bg-[#0b1f33] p-6 text-white">
            <p className="eyebrow text-orange-200">Recommended System</p>
            <h3 className="mt-3 text-3xl font-black">{recommendation.series}</h3>
            <p className="mt-3 text-lg leading-8 text-slate-200">{recommendation.summary}</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {recommendation.reasons.map((reason) => (
                <p key={reason} className="flex gap-3 rounded border border-white/15 bg-white/10 p-3 font-bold">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#f97316]" size={19} />
                  {reason}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {recommendation.package.map((item) => (
              <article key={item} className="rounded border border-slate-200 bg-slate-50 p-4">
                <SearchCheck className="text-[#f97316]" />
                <p className="mt-3 font-black text-[#0b1f33]">{item}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href="#quote">
              Request This System <ArrowRight size={18} />
            </a>
            <a className="btn-secondary" href="/downloads/quote-request-checklist.txt" download>
              <Download size={18} /> Quote Checklist
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function SelectorField({
  label,
  onChange,
  options,
  value,
}: {
  label: string
  onChange: (value: string) => void
  options: string[]
  value: string
}) {
  return (
    <label className="selector-field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

function DownloadCenter() {
  return (
    <section id="download-center" className="section bg-white">
      <SectionIntro
        eyebrow="Download Center"
        title="Give estimating, design, and procurement teams the files they ask for first."
        copy="These starter documents make the sales process easier before the first call and set clear expectations for quote requests, plan uploads, submittals, and finish selection."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {downloadAssets.map((asset) => (
          <a key={asset.href} className="download-card" href={asset.href} download>
            <span className="flex h-11 w-11 items-center justify-center rounded bg-[#0b1f33] text-white">
              <ClipboardList size={22} />
            </span>
            <span className="mt-5 block text-xs font-black uppercase tracking-[0.14em] text-[#f97316]">
              {asset.type} Download
            </span>
            <strong className="mt-2 block text-xl font-black text-[#0b1f33]">{asset.title}</strong>
            <span className="mt-3 block leading-7 text-slate-600">{asset.copy}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function getPanelRecommendation({
  assembly,
  environment,
  projectType,
  state,
}: {
  assembly: string
  environment: string
  projectType: string
  state: string
}) {
  if (assembly === 'Trim / Flashing') {
    return {
      package: ['Trim schedule', 'Finish-matched flashing', 'Closures and accessories'],
      reasons: ['Best fit for detail-heavy scopes', 'Supports contractor closeout needs', 'Pairs with roof or wall panel orders'],
      series: 'Trim & Flashing Package',
      summary: 'Recommended when the project needs ridge, rake, eave, corner, jamb, base, transition, cap, closure, and accessory review before ordering.',
    }
  }

  if (projectType === 'Agriculture') {
    return {
      package: ['AG / Tuff Rib panel path', 'Barn/shop trim package', 'Finish and delivery review'],
      reasons: ['Good for barns, shops, ranch buildings, and storage structures', 'Simple roof and siding package language', 'Pairs with photos, sketches, or basic drawings'],
      series: 'AG / Tuff Rib Panel Package',
      summary: 'Recommended for agricultural, ranch, shop, storage, and equipment shelter projects that need practical roof and wall coverage.',
    }
  }

  if (projectType === 'Industrial' || projectType === 'Warehouse' || environment === 'Industrial Exposure' || state === 'Texas') {
    return {
      package: ['Industrial Rib panel path', 'PBR / R-Panel alternate', 'Trim and accessory bundle'],
      reasons: ['Good for warehouses, shops, manufacturing, and logistics buildings', 'Supports larger roof and wall scopes', 'Texas inquiries can be reviewed as the next expansion market'],
      series: 'Industrial Rib / PBR Panel Package',
      summary: 'Recommended for industrial, warehouse, shop, and large-format commercial projects that need practical exposed-fastener roof or wall panels.',
    }
  }

  if (environment === 'Coastal / Wind Review' || state === 'Florida') {
    return {
      package: ['Project-specific review', 'Fastener and trim questions', 'Finish/substrate documentation'],
      reasons: ['Coastal and wind questions need project-specific review', 'Good fit for early drawings and requirements upload', 'Availability must be confirmed before quoting'],
      series: 'Coastal Project Review',
      summary: 'Recommended as a review path, not a product claim. Upload plans so sales can confirm availability, requirements, and documentation needs.',
    }
  }

  if (environment === 'Public / School Review') {
    return {
      package: ['Commercial panel path', 'Submittal package', 'Finish and documentation review'],
      reasons: ['Useful for schools, public-facing buildings, and commercial owners', 'Avoids unsupported fire or code claims', 'Keeps project-specific review in the right place'],
      series: 'Commercial Project Review',
      summary: 'Recommended when the buyer needs documentation, submittals, finish coordination, and careful project review before release.',
    }
  }

  return {
    package: ['Industrial Rib or PBR panel path', 'Finish selection support', 'Quote-ready takeoff review'],
    reasons: ['Strong default for California contractor quotes', 'Flexible for roof, wall, or combined scopes', 'Good for commercial, shop, residential accessory, and multifamily support work'],
    series: 'California Contractor Panel Package',
    summary: 'Recommended for California-first quote review when the buyer needs roof panels, siding panels, trim, flashing, colors, and plan upload support.',
  }
}

function BidResources() {
  return (
    <section id="resources" className="section bg-slate-50">
      <SectionIntro
        eyebrow="Contractor & Bid Resources"
        title="More than panels: a cleaner path to submittals, warranties, and procurement."
        copy="Get product data, finish guidance, takeoff support, and upload instructions organized for quote review, submittals, and ordering."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {resources.map(([title, Icon, copy, href]) => (
          <a key={title as string} className="card hover:border-[#f97316]" href={href as string} download={(href as string).startsWith('/downloads/') || undefined}>
            <Icon className="text-[#f97316]" />
            <h3 className="mt-5 text-xl font-black text-[#0b1f33]">{title as string}</h3>
            <p className="mt-3 leading-7 text-slate-600">{copy as string}</p>
            <span className="mt-5 inline-flex items-center font-black text-[#0b1f33]">
              Open resource <ArrowRight className="ml-2" size={18} />
            </span>
          </a>
        ))}
      </div>
      <div className="mt-8 grid gap-4 rounded bg-[#0b1f33] p-6 text-white md:grid-cols-3">
        {['Quote package', 'Submittal package', 'Production package'].map((item) => (
          <p key={item} className="flex items-center gap-3 font-black">
            <Award className="text-[#f97316]" /> {item}
          </p>
        ))}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="section">
      <SectionIntro
        eyebrow="How It Works"
        title="A faster path from drawings to fabricated packages."
        copy="The workflow is designed for contractors who need answers quickly and for owners who need confidence before releasing a commercial order."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map(([title, copy], index) => (
          <article key={title} className="card">
            <span className="flex h-11 w-11 items-center justify-center rounded bg-[#0b1f33] text-lg font-black text-white">
              {index + 1}
            </span>
            <h3 className="mt-5 text-xl font-black text-[#0b1f33]">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Services"
            title="Manufacturing support from takeoff to closeout."
            copy="Built for contractors and commercial buyers who need dependable production, clean details, and responsive project coordination."
          />
          <a className="btn-secondary mt-8" href="#quote">
            Start a Fabrication Request
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map(([service, Icon, copy]) => (
            <div key={service} className="feature-tile">
              <Icon className="text-[#f97316]" />
              <h3>{service}</h3>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Markets() {
  return (
    <section id="markets" className="section bg-white">
      <SectionIntro
        eyebrow="Markets Served"
        title="Panels for contractors, owners, builders, and commercial buyers."
        copy="American Super Panel supports practical panel, siding, trim, flashing, and accessory conversations for common building types."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {markets.map(([name, copy]) => (
          <article key={name} className="card">
            <Landmark className="mb-5 text-[#f97316]" />
            <h3 className="text-xl font-black text-[#0b1f33]">{name}</h3>
            <p className="mt-2 leading-7 text-slate-600">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ServiceAreas() {
  return (
    <section id="service-areas" className="section">
      <SectionIntro
        eyebrow="Service Areas"
        title="California first. Texas next. Other states by project review."
        copy="American Super Panel is focused on practical quote support where the service path is ready. California is the primary launch market, Texas is the next expansion target, and other states require sales confirmation."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {states.map((state) => (
          <a key={state.slug} href={`/${state.slug}`} className="card group block">
            <MapPin className="mb-5 text-[#f97316]" />
            <h3 className="text-2xl font-black text-[#0b1f33]">{state.name}</h3>
            <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-[#f97316]">{state.status}</p>
            <p className="mt-3 leading-7 text-slate-600">{state.copy}</p>
            <span className="mt-5 inline-flex font-black text-[#0b1f33] group-hover:text-[#f97316]">
              View regional page
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section bg-slate-50">
      <SectionIntro
        eyebrow="Projects"
        title="Future-ready gallery for finished work."
        copy="Representative categories for commercial, industrial, agricultural, and residential metal panel work."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {projectCategories.map((category, index) => (
          <article key={category} className="overflow-hidden rounded border border-slate-200 bg-white">
            <img
              src={projectGalleryImages[index].src}
              alt={projectGalleryImages[index].alt}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-black text-[#0b1f33]">{category}</h3>
              <p className="mt-2 text-slate-600">Roofing, wall panel, flashing, and fabrication packages.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <img
          src={siteImages.facilityInterior.src}
          alt={siteImages.facilityInterior.alt}
          className="h-[440px] w-full rounded object-cover shadow-xl"
        />
        <div>
          <SectionIntro
            eyebrow="About"
            title="A manufacturing company built for serious metal panel work."
            copy="American Super Panel exists to give contractors, owners, dealers, and public agencies a dependable source for Industrial Rib panels, metal siding, trim packages, and accessories."
          />
          <div className="mt-8 space-y-4 leading-8 text-slate-700">
            <p>
              The company is built around practical field knowledge: better packages, better details,
              responsive production, and disciplined support for commercial work.
            </p>
            <p>
              The mission is straightforward: manufacture strong American panel systems and support the
              crews who install them across a growing multi-state footprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section bg-slate-50">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionIntro
            eyebrow="Contact"
            title="Request pricing, upload plans, or start a bid conversation."
            copy="Send the project basics, drawings, and timeline so the sales team can prepare the right panel and fabrication path."
          />
          <div className="mt-8 grid gap-4">
            <a className="contact-link" href="tel:+15550193762">
              <Phone size={20} /> (555) 019-3762
            </a>
            <a className="contact-link" href="mailto:sales@americansuperpanel.com">
              <Mail size={20} /> sales@americansuperpanel.com
            </a>
            <p className="contact-link">
              <MapPin size={20} /> Multi-state service footprint
            </p>
          </div>
          <div className="mt-8 h-64 rounded border border-slate-200 bg-white p-4">
            <div className="flex h-full items-center justify-center rounded bg-slate-100 text-center font-bold text-slate-500">
              American Super Panel Service Footprint
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <QuoteForm />
          <UploadForm />
        </div>
      </div>
    </section>
  )
}

function QuoteForm() {
  const [submitState, setSubmitState] = useState<SubmitState>(idleSubmitState)

  async function handleQuoteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitState({ kind: 'submitting', message: 'Sending quote request…' })

    const form = event.currentTarget
    const result = await submitLeadForm('/api/quote', new FormData(form))

    if (result.ok) {
      form.reset()
      setSubmitState({
        kind: 'success',
        message: 'Quote request received. Sales will review the project details and follow up.',
      })
      window.turnstile?.reset()
      return
    }

    setSubmitState({ kind: 'error', message: result.message })
    window.turnstile?.reset()
  }

  return (
    <form id="quote" className="form-panel" action="/api/quote" method="post" onSubmit={handleQuoteSubmit}>
      <h2 className="text-2xl font-black text-[#0b1f33]">Quick Quote Form</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {['Name', 'Company', 'Phone', 'Email', 'Project State'].map((field) => (
          <label key={field}>
            <span>{field}</span>
            <input
              name={field.toLowerCase().replaceAll(' ', '_')}
              type={field === 'Email' ? 'email' : field === 'Phone' ? 'tel' : 'text'}
              required
            />
          </label>
        ))}
        <label>
          <span>Estimated Square Footage</span>
          <input name="estimated_square_footage" type="number" min="0" />
        </label>
        <label>
          <span>Project Type</span>
          <select name="project_type" defaultValue="">
            <option value="" disabled>
              Select project type
            </option>
            <option>Commercial</option>
            <option>Industrial</option>
            <option>Agricultural</option>
            <option>Residential</option>
            <option>Warehouse</option>
            <option>Contractor Bulk Order</option>
          </select>
        </label>
        <label>
          <span>Panel Type</span>
          <select name="panel_type" defaultValue="">
            <option value="" disabled>
              Select panel type
            </option>
            <option>PBR / R-Panel</option>
            <option>AG / Tuff Rib Panel</option>
            <option>Industrial Rib</option>
            <option>Metal Siding Panels</option>
            <option>Trim & Flashing</option>
          </select>
        </label>
        <label className="md:col-span-2">
          <span>Notes</span>
          <input name="notes" type="text" placeholder="Panel lengths, trim needs, timing, delivery state, or plan notes" />
        </label>
      </div>
      <TurnstileSlot />
      <FormStatus state={submitState} />
      <button className="btn-primary mt-5" type="submit" disabled={submitState.kind === 'submitting'}>
        {submitState.kind === 'submitting' ? 'Sending…' : 'Submit Quote Request'}
      </button>
    </form>
  )
}

function UploadForm() {
  const [submitState, setSubmitState] = useState<SubmitState>(idleSubmitState)

  async function handlePlanUpload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const files = Array.from(form.querySelectorAll('input[type="file"]'))
      .flatMap((input) => Array.from((input as HTMLInputElement).files ?? []))
    const totalBytes = files.reduce((sum, file) => sum + file.size, 0)

    if (totalBytes > maxUploadBytes) {
      setSubmitState({ kind: 'error', message: 'Plan uploads must be 100MB or less.' })
      return
    }

    if (files.length === 0) {
      setSubmitState({ kind: 'error', message: 'Upload at least one plan, drawing, or structural document.' })
      return
    }

    setSubmitState({ kind: 'submitting', message: 'Uploading plans…' })
    const result = await submitLeadForm('/api/upload-plans', new FormData(form))

    if (result.ok) {
      form.reset()
      setSubmitState({
        kind: 'success',
        message: 'Plans uploaded. Sales will review the documents and follow up.',
      })
      window.turnstile?.reset()
      return
    }

    setSubmitState({ kind: 'error', message: result.message })
    window.turnstile?.reset()
  }

  return (
    <form
      id="upload-plans"
      className="form-panel"
      action="/api/upload-plans"
      method="post"
      encType="multipart/form-data"
      onSubmit={handlePlanUpload}
    >
      <h2 className="text-2xl font-black text-[#0b1f33]">Upload Plans</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {['Name', 'Company', 'Phone', 'Email', 'Project State'].map((field) => (
          <label key={field}>
            <span>{field}</span>
            <input
              name={field.toLowerCase().replaceAll(' ', '_')}
              type={field === 'Email' ? 'email' : field === 'Phone' ? 'tel' : 'text'}
              required={field !== 'Company'}
            />
          </label>
        ))}
        <label>
          <span>Estimated Sq Ft</span>
          <input name="estimated_square_footage" type="number" min="0" />
        </label>
        <label>
          <span>Project Type</span>
          <select name="project_type" defaultValue="">
            <option value="" disabled>
              Select project type
            </option>
            <option>Commercial</option>
            <option>Industrial</option>
            <option>Agricultural</option>
            <option>Residential</option>
            <option>Warehouse</option>
            <option>Contractor Bulk Order</option>
          </select>
        </label>
        {[
          ['File Upload Placeholder', 'plans_pdf', '.pdf,.dwg,.dxf,.png,.jpg,.doc,.docx'],
        ].map(([label, name, accept]) => (
          <label key={name} className="md:col-span-2">
            <span>{label}</span>
            <input name={name} type="file" accept={accept} />
          </label>
        ))}
        <label className="md:col-span-2">
          <span>Notes</span>
          <input name="notes" type="text" placeholder="Tell sales what you are trying to build" />
        </label>
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-500">Maximum combined upload: 100MB</p>
      <TurnstileSlot />
      <FormStatus state={submitState} />
      <button className="btn-primary mt-5" type="submit" disabled={submitState.kind === 'submitting'}>
        {submitState.kind === 'submitting' ? 'Uploading…' : 'Route to Sales Inbox'}
      </button>
    </form>
  )
}

function TurnstileSlot() {
  return (
    <div
      className="cf-turnstile mt-5 min-h-16 rounded border border-dashed border-slate-300 bg-slate-50"
      data-sitekey={turnstileSiteKey}
    />
  )
}

function FormStatus({ state }: { state: SubmitState }) {
  if (state.kind === 'idle') {
    return null
  }

  return (
    <p className={`form-status form-status-${state.kind}`} role="status">
      {state.message}
    </p>
  )
}

async function submitLeadForm(url: string, formData: FormData) {
  try {
    const response = await fetch(url, {
      body: formData,
      method: 'POST',
    })
    const body = await response.json().catch(() => ({ message: '' }))

    if (!response.ok) {
      return {
        ok: false,
        message: typeof body.message === 'string' && body.message
          ? body.message
          : 'The request could not be sent. Please call or email sales directly.',
      }
    }

    return { ok: true, message: '' }
  } catch {
    return {
      ok: false,
      message: 'Lead capture is not available from this local preview. Deploy to Cloudflare Pages or use Wrangler Pages dev to test API routes.',
    }
  }
}

function StateLanding({ state }: { state: (typeof states)[number] }) {
  return (
    <>
      <section className="section border-b border-slate-200 bg-white">
        <div className="max-w-4xl">
          <p className="eyebrow text-[#f97316]">{state.name} Service Area</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal text-[#0b1f33]">
            {state.name} Metal Roofing Panels & Architectural Metal Panels
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-700">{state.copy}</p>
          <p className="mt-4 rounded border border-orange-200 bg-orange-50 p-4 font-bold leading-7 text-slate-700">
            {state.status}: {state.note}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href="#quote">
              Request Quote
            </a>
            <a className="btn-secondary" href="#upload-plans">
              Upload Plans
            </a>
          </div>
        </div>
      </section>
      <ContractorOutcomes />
      <Products />
      <Services />
      <FinishSystem />
      <BidResources />
      <DownloadCenter />
      <SuperPanel />
      <Contact />
    </>
  )
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  dark = false,
}: {
  eyebrow: string
  title: string
  copy: string
  dark?: boolean
}) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow ${dark ? 'text-orange-200' : 'text-[#f97316]'}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-4xl font-black leading-tight tracking-normal ${dark ? 'text-white' : 'text-[#0b1f33]'}`}>
        {title}
      </h2>
      <p className={`mt-4 text-lg leading-8 ${dark ? 'text-slate-200' : 'text-slate-600'}`}>{copy}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0b1f33] px-5 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <strong className="text-xl font-black">American Super Panel</strong>
          <p className="mt-2 text-slate-300">Industrial Rib Roofing, Metal Siding, Trim & Accessories</p>
        </div>
        <div className="text-sm font-semibold text-slate-300">
          American Super Panel™ is a product brand of Americas Panel Fab. Americas Panel Fab may also work with affiliated suppliers, installers, and manufacturing partners.
        </div>
      </div>
    </footer>
  )
}

export default App
