import { useState, type FormEvent } from 'react'
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
  Flame,
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

type IconType = typeof Factory

declare global {
  interface Window {
    turnstile?: {
      reset: () => void
    }
  }
}

const navItems = [
  ['Products', '/products'],
  ['Services', '/services'],
  ['Finishes', '/finishes'],
  ['Selector', '/selector'],
  ['Markets', '/markets'],
  ['Super Panel', '/super-panel'],
  ['Internal', '/internal-strategy'],
  ['Contact', '/contact'],
]

const products = [
  {
    name: 'American Super Panel™ Standing Seam',
    copy: 'Concealed-fastener panel systems for commercial, industrial, municipal, and education facilities.',
    points: ['Concealed fasteners', 'Long custom panel lengths', 'Commercial warranty path'],
    spec: 'Roofing • Architectural • Low-slope capable assemblies',
  },
  {
    name: 'American Super Panel™ Exposed Fastener',
    copy: 'Durable, economical panel packages for agricultural, warehouse, and industrial buildings.',
    points: ['Fast installation', 'Ribbed strength profile', 'Cost-efficient coverage'],
    spec: 'Warehouses • Ag • Industrial service buildings',
    href: '/american-super-panel-industrial-rib',
  },
  {
    name: 'Wall Panels',
    copy: 'Coordinated wall cladding systems for commercial shells, expansions, and re-skins.',
    points: ['Horizontal or vertical layouts', 'Color-matched trims', 'Clean transitions'],
    spec: 'Architectural walls • Soffits • Rainscreen support',
  },
  {
    name: 'Trim, Flashing & Accessories',
    copy: 'Complete fabricated packages that help crews close details cleanly and keep schedules moving.',
    points: ['Custom flashing', 'Closures and fasteners', 'Job-labeled bundles'],
    spec: 'Submittal-ready details • Crew-friendly packaging',
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
  ['Commercial', 'Retail centers, offices, and mixed-use buildings.'],
  ['Industrial', 'Manufacturing, logistics, and process facilities.'],
  ['Government', 'Bid-ready supplier support for public work.'],
  ['Education', 'Campus, district, and facility modernization projects.'],
  ['Warehouses', 'Large-format roofs, walls, and trim packages.'],
  ['Agriculture', 'Barns, equipment buildings, and production facilities.'],
  ['Multifamily', 'Durable envelope systems for repeatable housing programs.'],
]

const states = [
  {
    name: 'California',
    slug: 'california-metal-panels',
    copy: 'Commercial metal roofing panels, standing seam systems, wall panels, and custom fabrication for California contractors, owners, and public agencies.',
  },
  {
    name: 'Arizona',
    slug: 'arizona-metal-panels',
    copy: 'Heat-ready roofing and architectural panel packages for Arizona commercial, industrial, warehouse, and municipal projects.',
  },
  {
    name: 'Texas',
    slug: 'texas-metal-panels',
    copy: 'Scalable standing seam, exposed fastener, wall panel, and flashing packages for Texas growth markets and contractor networks.',
  },
  {
    name: 'Florida',
    slug: 'florida-metal-panels',
    copy: 'Commercial-capable metal roofing and panel fabrication support for Florida wind, coastal, and public-sector requirements.',
  },
]

const projectCategories = ['Commercial', 'Industrial', 'Municipal', 'Agricultural']
const contractorOutcomes = [
  ['Faster Lead Times', 'Quote response target within 24 hours for complete plan sets.'],
  ['Custom Fabrication', 'Panels, trims, flashings, edge metal, and accessories coordinated together.'],
  ['Multi-State Service', 'California, Arizona, Texas, and Florida fulfillment support.'],
  ['Commercial & Government Projects', 'Bid support, submittals, invoicing, and contract-ready documentation.'],
  ['American Super Panel™ Systems', 'Flagship panel systems manufactured by America’s Panel Fab.'],
]
const proofStats = [
  ['24-hour', 'quote response target'],
  ['100MB', 'plan upload workflow'],
  ['Bid-ready', 'public work support'],
  ['4-state', 'service footprint'],
]
const superPanelSeries = [
  ['Commercial Series', 'Standing seam and wall panel systems for retail, office, education, and multifamily work.'],
  ['Coastal Series', 'Florida-ready panel package positioning for wind, corrosion awareness, and coastal detailing.'],
  ['Desert Series', 'Arizona-focused finish and heat-performance positioning for high-sun commercial buildings.'],
  ['Industrial Series', 'Texas-scale exposed fastener, wall panel, warehouse, and logistics facility packages.'],
  ['FireSafe Series', 'California-focused assembly positioning for resilient public, education, and commercial projects.'],
]
const internalStrategyBlocks = [
  {
    title: 'SEO Separation',
    points: [
      'APF owns authority content: manufacturing, comparison, education, roll forming, fabrication, guides, and glossary pages.',
      'ASP owns product-intent pages: exposed-fastener panels, PBR / R-Panel, AG / Tuff Rib, trim, flashing, quote requests, plan uploads, and contractor orders.',
      'Fab educates. Super converts. Keep that as an internal strategy rule, not public copy.',
      'Avoid duplicate content by giving each domain unique H1s, metadata, intro copy, canonical URLs, and schema.',
    ],
  },
  {
    title: 'Domain Roles',
    points: [
      'AmericasPanelFab.com is the company/manufacturer authority site for credibility, partners, government/commercial research, investors, and future expansion.',
      'AmericanSuperPanel.com is the immediate revenue site and focused product funnel for contractors, builders, dealers, agricultural jobs, commercial jobs, quote requests, and plan uploads.',
      'Do not pretend independence. Public disclosure should say American Super Panel is a product brand manufactured by Americas Panel Fab.',
      'Super should link back to Fab lightly in the footer; Fab can link strongly to Super when the reader is ready to buy panels.',
    ],
  },
  {
    title: 'Public Copy Guardrails',
    points: [
      'Do not publish APF/ASP abbreviations, funnel language, SEO separation language, platform-team language, product-ready quote demand language, or internal scoring.',
      'Do not publish NDA-derived claims: machine count, machine output, staffing, warehouse size, startup investment, margins, break-even, projections, supplier pricing, or private owner background.',
      'Public language should say manufacturer, product family, panel system, quote support, plan review, fabrication, documentation, partner resources, and commercial readiness.',
      'Internal language can discuss cannibalization risk, funnel architecture, A/B testing, domain separation, acquisition strategy, ERP workflow software, and investor narrative.',
    ],
  },
  {
    title: 'SEO Max Roadmap',
    points: [
      'APF: build 1,000-1,500 word guides for standing seam vs R-Panel, PBR vs R-Panel, metal roofing gauges, metal panel finishes, trim and flashing, roll forming, and commercial metal roofing.',
      'APF: add glossary clusters, FAQ schema, Article schema, breadcrumbs, crawlable sitemap, and internal links among guides.',
      'ASP: deepen product pages with specs, color/gauge tables, installation notes, FAQs, quote workflows, service areas, and project photos.',
      'Both: replace stock images with real machine, steel coil, trim fabrication, bundles, truck loading, warehouse, and project photos as soon as possible.',
    ],
  },
  {
    title: 'Current Quality Score',
    points: [
      'Public APF after cleanup: about 7.4 / 10.',
      'Path to 8.5+: deeper pillar content, comparison tables, diagrams, author/reviewer credibility, real photos, FAQs, project examples, and stronger proof of manufacturing capability.',
      'Do not chase beauty first. Beat competitors by looking bigger, clearer, more credible, easier to buy from, and more operationally real.',
    ],
  },
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
  ['Panel profiles', Ruler, 'Profile sheets for standing seam, exposed fastener, wall panels, trim, and accessories.'],
  ['Warranty path', ShieldCheck, 'Weather-tightness and finish warranty coordination for qualifying assemblies.'],
  ['Submittal packages', FileCheck2, 'Product data, finish selections, fastener notes, and project-specific details.'],
  ['Takeoff support', FileText, 'Plan review support for panel counts, flashing scope, and production sequencing.'],
]
const downloadAssets = [
  {
    title: 'Quote Request Checklist',
    copy: 'Everything estimating needs for a faster 24-hour quote response.',
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
]
const industrialRibSpecs = [
  ['Product Family', 'American Super Panel™ Industrial Series'],
  ['Panel Type', 'Exposed fastener roof and siding panel'],
  ['Profile', 'Industrial Rib / 7.2-style profile'],
  ['Rib Pitch', '7.2 in. nominal'],
  ['Rib Height', '1.5 in. nominal'],
  ['Gauge Path', '24 ga commercial path; 26 ga project-dependent'],
  ['Substrate Path', 'G90 galvanized or Galvalume project path'],
  ['Finish Path', 'SMP, PVDF, matte, cool-roof, and primer-ready options'],
]
const industrialRibProof = [
  ['Equipment Plan', Factory, 'Two fixed roll-forming lines planned for repeatable panel production and package consistency.'],
  ['Mobile Option', Gauge, 'Mobile fabrication remains a future path for long-run jobs and reduced shipping constraints.'],
  ['Package Scope', ClipboardList, 'Panels, trim, flashings, closures, fasteners, and job labels organized as one quote package.'],
  ['Bid Support', FileCheck2, 'Submittal, finish, gauge, fastening, warranty, and project documentation reviewed before release.'],
] satisfies [string, IconType, string][]
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
    copy: 'A starter product data sheet for profile, gauge, finish, and project review conversations.',
    href: '/downloads/industrial-rib-product-data.txt',
  },
  {
    title: 'Industrial Rib Flashing & Trim',
    copy: 'Starter trim schedule for ridge, rake, eave, corner, jamb, base, and transition details.',
    href: '/downloads/industrial-rib-flashing-trim.txt',
  },
  {
    title: 'Industrial Rib Quote Checklist',
    copy: 'The project facts estimating needs before issuing a commercial panel package quote.',
    href: '/downloads/industrial-rib-quote-checklist.txt',
  },
]
const selectorOptions = {
  assembly: ['Roof', 'Wall', 'Roof + Wall', 'Trim / Flashing'],
  environment: ['Standard Commercial', 'Coastal / Wind', 'High Heat / Sun', 'Fire / Public Safety', 'Industrial Exposure'],
  projectType: ['Commercial', 'Industrial', 'Government', 'Education', 'Warehouse', 'Agriculture', 'Multifamily'],
  state: ['California', 'Arizona', 'Texas', 'Florida'],
}
const processSteps = [
  ['Upload plans', 'PDFs, drawings, and structural documents route to sales and estimating.'],
  ['Review scope', 'Panel type, footage, details, finish, warranty path, and schedule are confirmed.'],
  ['Fabricate package', 'Panels, trim, flashing, accessories, and labels are produced as one coordinated order.'],
  ['Support install', 'Contractors get detail support, sequencing help, and follow-through through closeout.'],
]

const heroImage =
  'https://images.unsplash.com/photo-1776653244534-69d59028af6c?auto=format&fit=crop&w=1800&q=88'
const facilityImage =
  'https://images.unsplash.com/photo-1764835994645-3faa2c40f708?auto=format&fit=crop&w=1400&q=88'
const panelImage =
  'https://images.unsplash.com/photo-1770910452211-2e8fd91bc347?auto=format&fit=crop&w=1400&q=88'
const fabricationImage =
  'https://images.unsplash.com/photo-1764114235891-66ff86abaf87?auto=format&fit=crop&w=1400&q=88'
const weldingImage =
  'https://images.unsplash.com/photo-1738162837408-5fbf53f0b97a?auto=format&fit=crop&w=1400&q=88'
const machineImage =
  'https://images.unsplash.com/photo-1738162837330-9257f938463c?auto=format&fit=crop&w=1400&q=88'
const warehouseImage =
  'https://images.unsplash.com/photo-1669003750747-3f139e115bfb?auto=format&fit=crop&w=1400&q=88'
const projectImages = [panelImage, warehouseImage, facilityImage, weldingImage]
const maxUploadBytes = 100 * 1024 * 1024
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA'

type SubmitState = {
  kind: 'idle' | 'submitting' | 'success' | 'error'
  message: string
}

const idleSubmitState: SubmitState = { kind: 'idle', message: '' }

function App() {
  const path = window.location.pathname.replace(/^\/+/, '')
  const statePage = states.find((state) => state.slug === path)

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        {statePage ? (
          <StateLanding state={statePage} />
        ) : path ? (
          <RoutedPage path={path} />
        ) : (
          <>
            <Hero />
            <ContractorOutcomes />
            <ProofBand />
            <ImageProofStrip />
            <WhyMetal />
            <SuperPanel />
            <SuperPanelSeries />
            <PanelSystemSelector />
            <Products />
            <Services />
            <FinishSystem />
            <BidResources />
            <DownloadCenter />
            <Process />
            <Markets />
            <ServiceAreas />
            <Projects />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

function RoutedPage({ path }: { path: string }) {
  if (path === 'products') {
    return (
      <>
        <PageHero title="Products" copy="American Super Panel™ systems, wall panels, trim, flashing, and accessories manufactured by America’s Panel Fab." />
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
        <PageHero title="Services" copy="Roll forming, on-site roll forming, custom fabrication, flashing packages, panel curving, contractor support, and design assist." />
        <Services />
        <Process />
        <Contact />
      </>
    )
  }

  if (path === 'finishes') {
    return (
      <>
        <PageHero title="Colors & Finishes" copy="Commercial metal panel finishes, architectural color paths, cool roof options, and custom color coordination." />
        <FinishSystem />
        <Products />
        <Contact />
      </>
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
        <PageHero title="Markets Served" copy="Commercial, industrial, government, education, warehouse, agriculture, and multifamily metal panel programs." />
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

  if (path === 'internal-strategy') {
    return <InternalStrategyPage />
  }

  if (path === 'projects') {
    return (
      <>
        <PageHero title="Projects" copy="A future-ready project gallery organized by commercial, industrial, municipal, and agricultural work." />
        <Projects />
        <Contact />
      </>
    )
  }

  if (path === 'about') {
    return (
      <>
        <PageHero title="About America’s Panel Fab" copy="A manufacturing company built for precision metal panels, roofing systems, and custom fabrication." />
        <About />
        <Contact />
      </>
    )
  }

  if (path === 'contact') {
    return (
      <>
        <PageHero title="Contact" copy="Request pricing, upload plans, or start a commercial bid conversation with America’s Panel Fab." />
        <Contact />
      </>
    )
  }

  return (
    <>
      <PageHero title="America’s Panel Fab" copy="Commercial metal roofing and architectural panel fabrication." />
      <Hero />
      <Contact />
    </>
  )
}

function PageHero({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="section border-b border-slate-200 bg-white">
      <div className="max-w-4xl">
        <p className="eyebrow text-[#f97316]">America’s Panel Fab</p>
        <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal text-[#0b1f33]">{title}</h1>
        <p className="mt-6 text-xl leading-8 text-slate-600">{copy}</p>
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
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="top-contact-bar border-b border-slate-200 bg-[#0b1f33] px-5 py-2 text-sm font-bold text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-between">
          <span>Commercial metal panels • roll forming • custom fabrication</span>
          <span className="top-contact-links flex flex-wrap justify-center gap-x-5 gap-y-1">
            <a className="inline-flex items-center gap-2 hover:text-orange-200" href="tel:+15550193762">
              <Phone size={15} /> (555) 019-3762
            </a>
            <a className="inline-flex items-center gap-2 hover:text-orange-200" href="mailto:sales@americaspanelfab.com">
              <Mail size={15} /> sales@americaspanelfab.com
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
              America’s Panel Fab
            </strong>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:block">
              Precision Metal Panels
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
          <a className="btn-primary" href="#quote">
            Request Quote
          </a>
        </div>
      </div>
    </header>
  )
}

function InternalStrategyPage() {
  return (
    <>
      <section className="section border-b border-slate-200 bg-[#0b1f33] text-white">
        <div className="max-w-5xl">
          <p className="eyebrow text-orange-200">Internal Master Site • Not Public Copy</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal lg:text-6xl">
            APF / ASP Brand, SEO & Funnel Strategy
          </h1>
          <p className="mt-6 max-w-4xl text-xl leading-8 text-slate-200">
            This private page preserves the working language that should not appear on
            AmericasPanelFab.com or AmericanSuperPanel.com. Use it for planning, audits,
            domain strategy, SEO separation, and investor/product architecture decisions.
          </p>
          <div className="mt-8 rounded border border-orange-200 bg-orange-50 p-5 text-[#0b1f33]">
            <p className="font-black">Public-site rule:</p>
            <p className="mt-2 leading-7">
              Public pages should say Americas Panel Fab and American Super Panel, not APF/ASP.
              Keep funnel, SEO separation, cannibalization, acquisition, NDA, and scoring language here.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="grid gap-5 lg:grid-cols-2">
          {internalStrategyBlocks.map((block) => (
            <article key={block.title} className="card">
              <p className="eyebrow text-[#f97316]">Internal Strategy</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{block.title}</h2>
              <ul className="mt-5 grid gap-3">
                {block.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-7 text-slate-700">
                    <CheckCircle2 className="mt-1 shrink-0 text-[#f97316]" size={19} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionIntro
              eyebrow="Internal Language Bank"
              title="Terms that belong here, not on public pages."
              copy="This list is intentionally direct. It helps future edits avoid leaking internal architecture into customer-facing SEO copy."
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'APF / ASP',
              'product funnel',
              'lead funnel',
              'SEO separation',
              'Fab educates. Super converts.',
              'authority layer',
              'product-ready quote demand',
              'cannibalization risk',
              'investor narrative',
              'acquisition platform',
              'NDA safety',
              'public score out of 10',
            ].map((term) => (
              <p key={term} className="rounded border border-slate-200 bg-slate-50 p-4 font-black text-[#0b1f33]">
                {term}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <img
        src={heroImage}
        alt="Commercial building with metal roofing panels"
        className="absolute right-0 top-0 h-full w-full object-cover opacity-22 lg:w-[58%] lg:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
      <div className="relative mx-auto grid min-h-[690px] max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex rounded border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-bold uppercase tracking-[0.16em] text-[#f97316]">
            Manufacturer • Fabricator • Government/Commercial Supplier
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-normal text-[#0b1f33] sm:text-5xl lg:text-6xl">
            Commercial Metal Roofing & Architectural Panel Fabrication
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700">
            Serving California, Arizona, Texas & Florida with standing seam roofing, wall panels,
            flashing packages, roll forming, and custom fabrication.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary text-base" href="#quote">
              Request Quote <ArrowRight size={18} />
            </a>
            <a className="btn-secondary text-base" href="#upload-plans">
              <FileUp size={18} /> Upload Plans
            </a>
            <a className="btn-secondary text-base" href="/resources">
              <Download size={18} /> View Resources
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {['Get a quote in 24 hours', 'Upload plans directly', 'Commercial bid support'].map((item) => (
              <p key={item} className="flex items-center gap-3 rounded border border-slate-200 bg-white p-4 font-black text-[#0b1f33] shadow-sm">
                <CheckCircle2 className="shrink-0 text-[#f97316]" size={20} />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}

function ContractorOutcomes() {
  return (
    <section className="section bg-white">
      <SectionIntro
        eyebrow="Why Contractors Switch"
        title="Built around the buying problems metal contractors actually have."
        copy="America’s Panel Fab helps contractors move from drawings to quote-ready panel, flashing, finish, and fabrication packages with fewer delays."
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

function ImageProofStrip() {
  const images = [
    ['Real facility capacity', facilityImage],
    ['Real fabrication work', fabricationImage],
    ['Real metal roof systems', panelImage],
    ['Real machine operation', machineImage],
  ]

  return (
    <section className="bg-white px-5 pb-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {images.map(([label, src]) => (
          <figure key={label} className="overflow-hidden rounded border border-slate-200 bg-white">
            <img src={src} alt={label} className="h-56 w-full object-cover" />
            <figcaption className="p-4 text-sm font-black uppercase tracking-[0.12em] text-slate-600">
              {label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
function ProofBand() {
  return (
    <section className="bg-white px-5 py-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-4">
        {proofStats.map(([value, label]) => (
          <div key={value} className="rounded border border-slate-200 bg-slate-50 p-5">
            <strong className="block text-3xl font-black text-[#0b1f33]">{value}</strong>
            <span className="mt-1 block text-sm font-bold uppercase tracking-[0.12em] text-slate-500">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

function WhyMetal() {
  return (
    <section id="why-metal" className="section bg-slate-50">
      <SectionIntro
        eyebrow="Why Metal"
        title="A durable envelope for high-value buildings."
        copy="Metal roofing and architectural panels give commercial teams long service life, strong weather performance, efficient installation, and a refined building appearance."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          ['Long service life', ShieldCheck],
          ['Energy efficiency', SunMedium],
          ['Wind resistance', Wind],
          ['Fire resistance', Flame],
        ].map(([label, Icon]) => (
          <div key={label as string} className="feature-tile">
            <Icon className="text-[#f97316]" />
            <h3>{label as string}</h3>
          </div>
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
            {['Built Strong. Built American.', 'Standing seam and exposed fastener options', 'Commercial, industrial, municipal, and education applications', 'Quote-ready packages for expansion markets'].map(
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
          src={panelImage}
          alt="Architectural metal panel surface"
          className="h-[420px] w-full rounded object-cover shadow-2xl"
        />
      </div>
    </section>
  )
}

function SuperPanelSeries() {
  return (
    <section className="section bg-slate-50">
      <SectionIntro
        eyebrow="American Super Panel™ Systems"
        title="A clear panel system manufactured by America’s Panel Fab."
        copy="The product brand becomes easier to specify and remember by organizing panels around real regional and commercial buying needs."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {superPanelSeries.map(([title, copy]) => (
          <article key={title} className="card">
            <LayersBadge />
            <h3 className="mt-5 text-xl font-black text-[#0b1f33]">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function LayersBadge() {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded bg-[#0b1f33] text-white">
      <Factory size={22} />
    </span>
  )
}

function SuperPanelPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <img
          src={panelImage}
          alt="American Super Panel architectural metal panel surface"
          className="absolute right-0 top-0 h-full w-full object-cover opacity-18 lg:w-[50%] lg:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
        <div className="section relative">
          <div className="max-w-4xl">
            <p className="eyebrow text-[#f97316]">Built Strong. Built American.</p>
            <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal text-[#0b1f33] lg:text-6xl">
              American Super Panel™
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-700">
              American Super Panel™ is the flagship panel system manufactured by America’s Panel Fab
              for commercial roofing, wall panel, industrial, municipal, and educational facility
              applications.
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
      <SuperPanelSeries />
      <section className="section bg-slate-50">
        <SectionIntro
          eyebrow="Benefits"
          title="A flagship family for demanding commercial projects."
          copy="The product architecture keeps America’s Panel Fab as the manufacturer while giving contractors and owners a memorable flagship system to specify and request."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Wind Resistance', Wind, 'Panel options and attachment paths for demanding regional wind requirements.'],
            ['Fire Resistance', Flame, 'Metal roof and wall assemblies that support resilient building-envelope planning.'],
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
              {['Commercial facilities', 'Industrial buildings', 'Municipal and government work', 'Education and campus projects'].map(
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
            src={fabricationImage}
            alt="Manufacturing support for American Super Panel"
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
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <img
          src={warehouseImage}
          alt="Industrial metal roof and siding application"
          className="absolute right-0 top-0 h-full w-full object-cover opacity-20 lg:w-[52%] lg:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/72" />
        <div className="section relative">
          <div className="max-w-4xl">
            <p className="eyebrow text-[#f97316]">Beta Product-Manufacturer Proof Page</p>
            <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal text-[#0b1f33] lg:text-6xl">
              American Super Panel™ Industrial Rib
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-700">
              A 7.2-style exposed fastener roofing and siding panel path for warehouses,
              industrial buildings, agricultural facilities, and large commercial wall packages.
              Manufactured by America’s Panel Fab.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href="#quote">
                Request Quote <ArrowRight size={18} />
              </a>
              <a className="btn-secondary" href="#upload-plans">
                <FileUp size={18} /> Upload Plans
              </a>
              <a className="btn-secondary" href="/downloads/industrial-rib-product-data.txt" download>
                <Download size={18} /> Product Data
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Product Data"
              title="A concrete panel profile buyers can quote, specify, and compare."
              copy="This beta page turns American Super Panel™ from a broad product family into a specific industrial rib system with a clear manufacturing and quoting path."
            />
            <p className="mt-6 rounded border border-orange-200 bg-orange-50 p-4 text-sm font-bold leading-6 text-slate-700">
              Final gauge, substrate, finish, fastening, and engineering requirements must be confirmed
              during project review before public specification or release to production.
            </p>
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
      </section>

      <section className="section bg-white">
        <SectionIntro
          eyebrow="Manufacturer Proof"
          title="Show the CEO a business that looks ready to manufacture, quote, and support real jobs."
          copy="The differentiator is not only the panel shape. It is the operating model around the product: equipment plan, quote intake, flashing packages, submittals, and multi-state fulfillment."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industrialRibProof.map(([title, Icon, copy]) => (
            <article key={title as string} className="card">
              <Icon className="text-[#f97316]" />
              <h2 className="mt-5 text-xl font-black text-[#0b1f33]">{title as string}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy as string}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <img
            src={fabricationImage}
            alt="Metal fabrication and panel manufacturing capability"
            className="h-[430px] w-full rounded object-cover shadow-xl"
          />
          <div>
            <SectionIntro
              eyebrow="Applications"
              title="Industrial rib panels for roof, siding, and large-format building envelopes."
              copy="A focused product page helps contractors and procurement teams understand where this system fits before they send drawings."
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

      <section className="section bg-white">
        <SectionIntro
          eyebrow="Download Center"
          title="Give estimators a product packet before the first phone call."
          copy="These beta documents make the page feel like a real manufacturer resource center while the final engineering, machine specs, and finish program are confirmed."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {industrialRibDownloads.map((asset) => (
            <a key={asset.href} className="download-card" href={asset.href} download>
              <span className="flex h-11 w-11 items-center justify-center rounded bg-[#0b1f33] text-white">
                <FileText size={22} />
              </span>
              <span className="mt-5 block text-xs font-black uppercase tracking-[0.14em] text-[#f97316]">
                Beta TXT Download
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
            title="Upload drawings and turn the product page into a buying workflow."
            copy="Estimating can review square footage, roof or wall scope, gauge path, finish intent, trims, accessories, delivery state, and schedule from one intake."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {['Panel takeoff', 'Trim schedule', 'Submittal path'].map((item) => (
              <p key={item} className="rounded border border-white/15 bg-white/10 p-5 text-lg font-black">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}

function Products() {
  return (
    <section id="products" className="section bg-slate-50">
      <SectionIntro
        eyebrow="Products"
        title="Panel systems and complete fabricated packages."
        copy="America’s Panel Fab supplies roof panels, wall panels, trim, flashing, and accessories under one manufacturing roof."
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
              <a className="mt-6 inline-flex font-black text-[#0b1f33] hover:text-[#f97316]" href={product.href}>
                View Industrial Rib proof page <ArrowRight className="ml-2" size={18} />
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
            copy="Compete beyond a generic product list with finish paths that support architectural intent, energy goals, brand standards, and multi-building programs."
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
              src={warehouseImage}
              alt="Commercial warehouse metal panel project"
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
  if (state === 'Florida' || environment === 'Coastal / Wind') {
    return {
      package: ['Standing seam roof path', 'Coastal trim review', 'Wind-aware fastening notes'],
      reasons: ['Florida and coastal exposure fit', 'Designed for wind and corrosion conversations', 'Pairs with uploaded plans for review'],
      series: 'American Super Panel™ Coastal Series',
      summary: 'Recommended for wind-aware commercial roofing and wall panel packages where coastal detailing and fastening review matter early.',
    }
  }

  if (state === 'Arizona' || environment === 'High Heat / Sun') {
    return {
      package: ['Cool roof finish path', 'Standing seam or wall panel package', 'Heat exposure finish notes'],
      reasons: ['Arizona and high-sun conditions fit', 'Supports reflective finish decisions', 'Good for warehouses and commercial shells'],
      series: 'American Super Panel™ Desert Series',
      summary: 'Recommended for high-sun projects that need durable finishes, heat-aware color choices, and clean commercial panel packages.',
    }
  }

  if (state === 'California' || environment === 'Fire / Public Safety') {
    return {
      package: ['Fire-aware assembly review', 'Submittal package path', 'Public project documentation'],
      reasons: ['California and public-safety requirements fit', 'Strong for schools and municipal work', 'Supports bid and submittal coordination'],
      series: 'American Super Panel™ FireSafe Series',
      summary: 'Recommended for public, education, commercial, and resilience-focused projects that need careful documentation and assembly review.',
    }
  }

  if (state === 'Texas' || projectType === 'Industrial' || projectType === 'Warehouse' || environment === 'Industrial Exposure') {
    return {
      package: ['Long-run panel package', 'Exposed fastener or standing seam path', 'Flashing and accessory bundle'],
      reasons: ['Texas-scale and industrial conditions fit', 'Good for large roof and wall scopes', 'Built around production and fulfillment efficiency'],
      series: 'American Super Panel™ Industrial Series',
      summary: 'Recommended for warehouse, logistics, manufacturing, and large-format commercial packages where speed and scale matter.',
    }
  }

  if (assembly === 'Trim / Flashing') {
    return {
      package: ['Custom flashing package', 'Finish-matched trim set', 'Job-labeled bundle'],
      reasons: ['Best fit for detail-heavy scopes', 'Supports contractor closeout needs', 'Pairs with wall or roof panel orders'],
      series: 'American Super Panel™ Commercial Series',
      summary: 'Recommended for coordinated commercial trim, flashing, and accessory packages tied to roof or wall panel work.',
    }
  }

  return {
    package: ['Standing seam or wall panel path', 'Finish selection support', 'Quote-ready takeoff review'],
    reasons: ['Strong default commercial fit', 'Flexible for roof, wall, or combined scopes', 'Good for architects, contractors, and owners'],
    series: 'American Super Panel™ Commercial Series',
    summary: 'Recommended for most commercial, multifamily, education, and mixed-use projects that need a clean specification and quote path.',
  }
}

function BidResources() {
  return (
    <section id="resources" className="section bg-slate-50">
      <SectionIntro
        eyebrow="Contractor & Bid Resources"
        title="More than panels: a cleaner path to submittals, warranties, and procurement."
        copy="Commercial buyers need documentation as much as product. America’s Panel Fab is structured around quote-ready, submittal-ready, and contract-ready support."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {resources.map(([title, Icon, copy]) => (
          <article key={title as string} className="card">
            <Icon className="text-[#f97316]" />
            <h3 className="mt-5 text-xl font-black text-[#0b1f33]">{title as string}</h3>
            <p className="mt-3 leading-7 text-slate-600">{copy as string}</p>
          </article>
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
        title="Commercial strength across public and private work."
        copy="The company is structured to support contractors, owners, purchasing departments, and government procurement teams."
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
        title="Built for California, Arizona, Texas, and Florida expansion."
        copy="Regional service pages help contractors, owners, and public agencies quickly find metal roofing panels, wall panels, roll forming, and fabrication support in their state."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {states.map((state) => (
          <a key={state.slug} href={`/${state.slug}`} className="card group block">
            <MapPin className="mb-5 text-[#f97316]" />
            <h3 className="text-2xl font-black text-[#0b1f33]">{state.name}</h3>
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
        copy="Representative categories for commercial, industrial, municipal, and agricultural metal panel work."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {projectCategories.map((category, index) => (
          <article key={category} className="overflow-hidden rounded border border-slate-200 bg-white">
            <img
              src={projectImages[index]}
              alt={`${category} metal panel project`}
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
          src={facilityImage}
          alt="Metal panel manufacturing production floor"
          className="h-[440px] w-full rounded object-cover shadow-xl"
        />
        <div>
          <SectionIntro
            eyebrow="About"
            title="A manufacturing company built for serious metal panel work."
            copy="America’s Panel Fab exists to give contractors, owners, and public agencies a dependable source for precision metal panels, roofing systems, and custom fabrication."
          />
          <div className="mt-8 space-y-4 leading-8 text-slate-700">
            <p>
              The founder story centers on practical field knowledge: better packages, better details,
              responsive production, and the discipline required to serve commercial work.
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
            <a className="contact-link" href="mailto:sales@americaspanelfab.com">
              <Mail size={20} /> sales@americaspanelfab.com
            </a>
            <p className="contact-link">
              <MapPin size={20} /> Multi-state service footprint
            </p>
          </div>
          <div className="mt-8 h-64 rounded border border-slate-200 bg-white p-4">
            <div className="flex h-full items-center justify-center rounded bg-slate-100 text-center font-bold text-slate-500">
              America’s Panel Fab Service Footprint
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
        {['Name', 'Company', 'Email', 'Phone', 'Project Address', 'State'].map((field) => (
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
          <span>Panel Type</span>
          <select name="panel_type" defaultValue="">
            <option value="" disabled>
              Select panel type
            </option>
            <option>American Super Panel Standing Seam</option>
            <option>American Super Panel Exposed Fastener</option>
            <option>Wall Panels</option>
            <option>Trim & Flashing</option>
          </select>
        </label>
        <label className="md:col-span-2">
          <span>Desired Completion Date</span>
          <input name="desired_completion_date" type="date" />
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
        {['Name', 'Company', 'Email', 'Phone', 'Project Address', 'State'].map((field) => (
          <label key={field}>
            <span>{field}</span>
            <input
              name={field.toLowerCase().replaceAll(' ', '_')}
              type={field === 'Email' ? 'email' : field === 'Phone' ? 'tel' : 'text'}
              required={field !== 'Company'}
            />
          </label>
        ))}
        {[
          ['Plans PDF', 'plans_pdf', '.pdf'],
          ['Drawings', 'drawings', '.pdf,.dwg,.dxf,.png,.jpg'],
          ['Structural Documents', 'structural_documents', '.pdf,.doc,.docx'],
        ].map(([label, name, accept]) => (
          <label key={name} className="md:col-span-2">
            <span>{label}</span>
            <input name={name} type="file" accept={accept} />
          </label>
        ))}
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
      <SuperPanelSeries />
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
          <strong className="text-xl font-black">America’s Panel Fab</strong>
          <p className="mt-2 text-slate-300">Precision Metal Panels, Roofing Systems & Custom Fabrication</p>
        </div>
        <div className="text-sm font-semibold text-slate-300">
          American Super Panel™ systems are manufactured by America’s Panel Fab.
        </div>
      </div>
    </footer>
  )
}

export default App
