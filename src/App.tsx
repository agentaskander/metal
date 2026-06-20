import { useState, type ReactNode } from 'react'
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
  Flame,
  Gauge,
  HardHat,
  Landmark,
  MapPin,
  Ruler,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Wind,
} from 'lucide-react'

type IconType = typeof Factory

const productNavItems = [
  ['Products', '/products'],
  ['Services', '/services'],
  ['Finishes', '/finishes'],
  ['Selector', '/selector'],
  ['Markets', '/markets'],
  ['Super Panel', '/super-panel'],
]

const internalKnowledgeNavItems = [
  ['Internal', '/internal-strategy'],
  ['Ontology', '/internal-ontology'],
  ['Build Model', '/internal-implementation'],
  ['Data Model', '/internal-data-model'],
  ['Workflows', '/internal-workflows'],
  ['Agents', '/internal-agents'],
  ['Events', '/internal-events'],
]

const managementNavItems = [
  ['Control Panel', '/internal-control-panel'],
  ['Business Plan', '/internal-business-plan'],
  ['Gov / Compliance', '/internal-gov-compliance'],
  ['Risk', '/internal-risk-register'],
  ['Financials', '/internal-financial-model'],
  ['Execution', '/internal-execution-board'],
  ['Evidence', '/internal-evidence-library'],
  ['Advisors', '/internal-advisor-questions'],
  ['Manufacturing', '/internal-manufacturing-readiness'],
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
const internalOntologyDomains = [
  {
    domain: 'Brand Architecture',
    entities: [
      ['America’s Panel Fab', 'Parent company, manufacturer, contracting entity, invoice entity, commercial/government credibility layer.'],
      ['AmericasPanelFab.com', 'Authority and company domain for manufacturing, roll forming, fabrication, partners, investors, guides, glossary, and trust.'],
      ['American Super Panel', 'Flagship product family and revenue-focused operating brand for metal roofing and siding panel sales.'],
      ['AmericanSuperPanel.com', 'Product microsite and immediate lead-generation domain for contractors, owners, dealers, quote requests, and plan uploads.'],
      ['Disclosure relationship', 'Public rule: American Super Panel is a product brand manufactured by Americas Panel Fab. Never pretend independence.'],
    ],
  },
  {
    domain: 'Commercial Actors',
    entities: [
      ['Contractor', 'Primary ASP buyer; needs fast quotes, custom lengths, trim packages, plan upload, responsive sales, and job-ready documentation.'],
      ['Building owner', 'Commercial, agricultural, warehouse, or residential buyer evaluating cost, durability, appearance, timeline, and supplier credibility.'],
      ['Dealer', 'Future resale channel that needs pricing structure, territories, color/gauge program, order workflow, samples, and repeatable support.'],
      ['Architect / specifier', 'APF authority audience; needs profiles, comparisons, finish guidance, submittal path, and confidence in manufacturer credibility.'],
      ['Estimator', 'Operational user who converts drawings, square footage, panel type, trim scope, and notes into a quote package.'],
      ['Procurement officer', 'Commercial/government-adjacent buyer focused on documentation, entity credibility, supplier risk, invoicing, and bid support.'],
      ['Investor / partner', 'APF audience evaluating manufacturing opportunity, product-market fit, equipment strategy, software leverage, and expansion logic.'],
    ],
  },
  {
    domain: 'Product System',
    entities: [
      ['Industrial Rib', 'Flagship exposed-fastener product path inspired by Western Rib / Rezibond-style immediate market demand.'],
      ['PBR / R-Panel', 'High-intent ASP SEO product type for commercial, warehouse, shop, industrial, and agricultural roof/wall projects.'],
      ['AG / Tuff Rib', 'High-intent ASP SEO product type for barns, shops, storage, equipment shelters, farms, and ranches.'],
      ['Standing Seam', 'APF education and future product family; concealed-fastener commercial/architectural roof system.'],
      ['Wall Panels', 'Roof-adjacent product family for commercial shells, re-skins, warehouse walls, liner panels, soffits, and architectural use.'],
      ['Trim & Flashing', 'Critical fabricated package: ridge, rake, eave, corner, jamb, base, transitions, caps, closures, and details.'],
      ['Accessories', 'Fasteners, closures, sealants, touch-up, labels, samples, and package support that complete an order.'],
      ['Finish Program', 'Color, substrate, SMP/PVDF/matte/cool roof path, sample process, trim matching, and warranty-path coordination.'],
    ],
  },
  {
    domain: 'Manufacturing Capability',
    entities: [
      ['Roll forming', 'Core process that converts coil into consistent panel profile and length. Public APF education topic and private operational workflow.'],
      ['On-site roll forming', 'Future/mobile capability concept for long-run jobs, reduced shipping constraints, and jobsite production fit.'],
      ['Custom fabrication', 'Trim, flashing, edge metal, transitions, corners, openings, and detail-specific sheet metal work.'],
      ['Coil inventory', 'Steel coil purchasing, color/finish availability, gauge/substrate planning, reorder points, and visual proof asset.'],
      ['Panel bundles', 'Finished panel packages labeled by job, length, sequence, color, profile, and delivery/pickup requirements.'],
      ['Quality review', 'Internal checkpoint for profile, length, finish, count, trim scope, packaging, and release readiness.'],
    ],
  },
  {
    domain: 'Digital Lead Capture',
    entities: [
      ['Quote request', 'High-value conversion object with name, company, phone, email, state, square footage, project type, panel type, notes.'],
      ['Plan upload', 'High-value conversion object with files, project state, estimated square footage, project type, notes, and max 100MB workflow.'],
      ['Phone click', 'Analytics event and direct sales intent signal.'],
      ['Email click', 'Analytics event and direct sales intent signal.'],
      ['State page visit', 'Regional SEO and expansion intent signal.'],
      ['Download event', 'Resource engagement signal for checklists, product data, submittal guides, and quote packets.'],
    ],
  },
  {
    domain: 'Future Software / ERP',
    entities: [
      ['Lead inbox', 'Central queue for quote requests, plan uploads, phone/email events, and assigned sales follow-up.'],
      ['Takeoff assistant', 'Agentic workflow that extracts scope from drawings, asks clarifying questions, and prepares estimator-ready summaries.'],
      ['Panel calculator', 'Tool for square footage, coverage width, waste, panel counts, trims, fasteners, and cost ranges.'],
      ['Color visualizer', 'Buyer/dealer tool for color/finish comparison on roof, siding, trim, and project photos.'],
      ['Dealer portal', 'Channel software for quotes, orders, territories, samples, pricing, documentation, and status tracking.'],
      ['Contractor portal', 'Repeat-buyer workflow for saved projects, plan uploads, quote history, approvals, and reorder support.'],
      ['Project tracker', 'Order lifecycle: submitted, reviewed, quoted, approved, scheduled, produced, bundled, shipped, delivered, closed.'],
      ['Manufacturing scheduler', 'Internal production planning across machine, coil, profile, length, color, rush status, and delivery constraints.'],
    ],
  },
]
const internalOntologyRelations = [
  ['Americas Panel Fab', 'manufactures', 'American Super Panel'],
  ['AmericasPanelFab.com', 'educates and builds trust for', 'manufacturing, partners, guides, glossary, commercial credibility'],
  ['AmericanSuperPanel.com', 'converts', 'contractor and owner product intent into quote and plan-upload leads'],
  ['APF guide article', 'may refer buying intent to', 'ASP product page'],
  ['ASP footer', 'discloses', 'Manufactured by Americas Panel Fab'],
  ['Quote request', 'creates', 'lead record'],
  ['Plan upload', 'creates', 'document review task'],
  ['Lead record', 'routes to', 'sales inbox'],
  ['Sales inbox', 'assigns to', 'estimator or sales owner'],
  ['Estimator', 'produces', 'quote package'],
  ['Quote package', 'can become', 'order package'],
  ['Order package', 'requires', 'panel profile, lengths, finish, trim, accessories, delivery details'],
  ['Coil inventory', 'constrains', 'finish availability and production schedule'],
  ['Roll former', 'produces', 'panel bundles'],
  ['Custom fabrication', 'produces', 'trim and flashing packages'],
  ['Panel bundles', 'ship with', 'labels, counts, trim, and project documentation'],
  ['Project photos', 'improve', 'public trust and SEO conversion'],
  ['Dealer portal', 'extends', 'ASP repeat sales and regional channel reach'],
  ['Manufacturing scheduler', 'extends', 'APF operating leverage and ERP value'],
]
const internalOntologyWorkflows = [
  {
    name: 'ASP Quote-to-Order Flow',
    steps: [
      'Visitor lands on ASP product/service/state page.',
      'Visitor triggers quote intake, plan intake, sales call, or sales message intent.',
      'Lead record captures project basics, source route, UTM, state, project type, and panel intent.',
      'Sales triage checks completeness, urgency, state, file availability, and product fit.',
      'Estimator reviews drawings, square footage, lengths, trim, finish, and delivery assumptions.',
      'Quote package is prepared with exclusions, assumptions, alternates, and follow-up questions.',
      'Approved quote becomes order package and production-ready task list.',
    ],
  },
  {
    name: 'APF Authority-to-ASP Referral Flow',
    steps: [
      'Visitor lands on APF guide, glossary, manufacturing, roll forming, or comparison page.',
      'Content answers educational intent without sales pressure or internal strategy language.',
      'When product intent appears, CTA points to relevant ASP product or quote page.',
      'Referral preserves source context so ASP can measure which APF pages generate revenue intent.',
      'APF keeps broad authority while ASP handles conversion and customer buying workflow.',
    ],
  },
  {
    name: 'Plan Upload Review Flow',
    steps: [
      'Customer uploads plans, drawings, structural documents, elevations, or sketches.',
      'System stores metadata: file names, size, project state, project type, notes, submitter, timestamp.',
      'Sales confirms receipt and assigns review.',
      'Estimator extracts scope: roof/wall area, panel profile, lengths, penetrations, trim list, finish, deadlines.',
      'Missing information triggers a clarification request before quote release.',
      'Final review produces quote, submittal path, or declined/not-fit response.',
    ],
  },
  {
    name: 'Manufacturing Package Flow',
    steps: [
      'Approved order locks profile, gauge, substrate, finish, quantities, lengths, and trim scope.',
      'Coil availability and machine schedule are checked.',
      'Panel production and custom fabrication are scheduled.',
      'Bundles are labeled by project, area, sequence, length, color, and count.',
      'Quality review checks counts, length logic, finish, profile, and paperwork.',
      'Delivery or pickup is coordinated and status is recorded.',
    ],
  },
]
const internalOntologyDataObjects = [
  ['Lead', 'id, sourceDomain, sourceRoute, UTM, name, company, phone, email, state, projectType, panelType, sqFt, notes, status, owner'],
  ['UploadedFile', 'id, leadId, fileName, mimeType, sizeBytes, storageKey, uploadedAt, reviewedAt, reviewStatus'],
  ['Project', 'id, leadId, address, state, market, buildingUse, roofScope, wallScope, targetDate, status, assignedEstimator'],
  ['PanelLineItem', 'profile, gauge, substrate, finish, color, coverageWidth, length, quantity, area, notes'],
  ['TrimLineItem', 'trimType, finish, color, length, quantity, location, drawingReference, notes'],
  ['Quote', 'id, projectId, version, assumptions, exclusions, alternates, subtotal, tax, freight, validUntil, status'],
  ['Order', 'id, quoteId, purchaseOrder, paymentStatus, productionStatus, deliveryStatus, createdAt, closedAt'],
  ['CoilLot', 'id, supplier, substrate, gauge, finish, color, width, weight, receivedAt, reservedFor, remaining'],
  ['ProductionRun', 'id, machine, profile, coilLotId, projectId, lengths, quantity, scheduledAt, completedAt, operator, QAStatus'],
  ['Partner', 'id, type, region, capabilities, status, relationshipOwner, notes, publicListingAllowed'],
  ['ContentPage', 'domain, route, intent, targetKeyword, canonical, schemaType, publicSafe, owner, lastReviewedAt'],
]
const internalOntologySeoMap = [
  ['APF', 'metal panel manufacturing', 'manufacturing, guides, glossary, roll forming, custom fabrication, capabilities'],
  ['APF', 'roll forming services', 'roll-forming guide, manufacturing education, equipment/workflow content'],
  ['APF', 'architectural metal fabrication', 'custom fabrication, trim/flashing education, capability pages'],
  ['APF', 'standing seam vs R-Panel', 'comparison guide that can refer product-ready readers to ASP'],
  ['ASP', 'metal roofing panels', 'home, products, PBR/R-panel, AG/Tuff Rib, state pages'],
  ['ASP', 'PBR panel / R-panel', 'product page, FAQs, quote CTA, plan upload CTA'],
  ['ASP', 'AG panel / Tuff Rib', 'agricultural product page, barns/shops/ranches content'],
  ['ASP', 'trim and flashing', 'product page with quote CTA, upload CTA, details, photos'],
  ['ASP', 'commercial metal roofing panels', 'commercial page, warehouse/industrial applications, quote workflow'],
  ['ASP', 'state metal panels', 'California, Arizona, Texas, Florida service pages without claiming fake offices'],
]
const internalOntologyGovernance = [
  '8190 is private master/internal. It may contain APF/ASP abbreviations, strategy, scores, NDA reminders, software plans, and acquisition thinking.',
  '8192 APF beta/public authority site must not contain internal funnel language, abbreviations, NDA-derived facts, private financials, or staging notes.',
  '8193 ASP public sales site must be product-focused, contractor-first, quote-first, and free of investor/ecosystem language.',
  'No duplicate sibling app folders in /Users/askander/dev/apps. Domain worktrees live under /Users/askander/dev/apps/metal with -com folder naming.',
  'Never publish machine count, machine output, staffing, warehouse size, investment, margins, break-even, sales projections, supplier pricing, or owner background unless explicitly cleared.',
  'Every public route should have unique title, description, H1, intro copy, self-canonical, and appropriate schema.',
  'Every stock image should map to a future real-photo replacement target.',
  'Real machine, steel coil, bundle, truck loading, trim fabrication, warehouse, employee, and project photos outrank decorative design work.',
]
const internalOntologyMachineSystems = [
  {
    category: 'Primary Roll Forming Equipment',
    items: [
      ['Fixed roll former', 'Stationary panel production line for repeatable profiles, factory-controlled lengths, bundled orders, and predictable commercial fulfillment.'],
      ['Mobile roll former', 'Trailer or mobile unit that can produce long panels near the jobsite when transport length, staging, or lap reduction makes sense.'],
      ['Standing seam machine', 'Concealed-fastener roof panel production equipment for architectural and commercial systems.'],
      ['Exposed-fastener ribbed panel machine', 'Machine family for PBR, R-Panel, AG panel, Tuff Rib, Industrial Rib, and Western Rib-style demand.'],
      ['Wall panel roll former', 'Equipment path for wall, liner, soffit, and architectural panel profiles.'],
    ],
  },
  {
    category: 'Fabrication & Trim Equipment',
    items: [
      ['CNC folder / long folder', 'Forms trim, flashing, edge metal, custom profiles, fascia, coping, caps, corners, and transitions.'],
      ['Brake press', 'Bending equipment for shorter custom flashing, detail parts, and shop-fabricated metal components.'],
      ['Shear / slitter', 'Cuts sheets or coil-derived blanks to width before forming or fabrication.'],
      ['Decoiler / uncoiler', 'Feeds coil into roll forming or slitting workflows while controlling tension and material handling.'],
      ['Forklift / coil handling', 'Material movement capability for coils, bundles, pallets, packaging, staging, and truck loading.'],
    ],
  },
  {
    category: 'Software-Aware Machine Data',
    items: [
      ['Machine profile', 'Machine id, supported profiles, tooling, min/max length, changeover constraints, throughput assumptions, maintenance status.'],
      ['Run ticket', 'Project id, profile, coil lot, finish, color, lengths, quantities, operator, setup notes, QA checklist, completion status.'],
      ['Downtime event', 'Cause, machine, operator note, duration, affected orders, maintenance action, reschedule impact.'],
      ['Tooling library', 'Profile drawings, rib height, coverage width, overlap detail, compatible trim, fasteners, and substrate limits.'],
    ],
  },
]
const internalOntologyProductTaxonomy = [
  {
    family: 'Exposed-Fastener Roof & Wall Panels',
    products: [
      ['PBR / R-Panel', 'Commercial, industrial, warehouse, shop, agricultural, and utility buildings; high-intent immediate ASP SEO target.'],
      ['AG / Tuff Rib', 'Barns, shops, sheds, storage buildings, equipment shelters, farms, ranches, and rural residential projects.'],
      ['Industrial Rib / 7.2-style', 'Large commercial wall packages, industrial buildings, warehouses, logistics shells, and re-skins.'],
      ['Western Rib / Rezibond-style positioning', 'Competitive reference category for immediate business capability and buyer familiarity.'],
    ],
  },
  {
    family: 'Concealed-Fastener & Architectural Systems',
    products: [
      ['Standing seam', 'Commercial, architectural, education, municipal, multifamily, and owner-occupied buildings.'],
      ['Snap-lock standing seam', 'Architectural roof systems where clip/lock details and installation speed matter.'],
      ['Mechanical seam standing seam', 'Higher-performance concealed-fastener path requiring more specialized installation and review.'],
      ['Board-and-batten / accent panels', 'Future architectural and residential-adjacent design product path.'],
    ],
  },
  {
    family: 'Fabricated Accessories',
    products: [
      ['Ridge cap', 'Roof peak closure and trim component.'],
      ['Rake trim', 'Gable edge component.'],
      ['Eave trim', 'Lower roof edge component.'],
      ['Jamb / corner / base trim', 'Wall panel package components for openings, outside corners, inside corners, and base conditions.'],
      ['Transition flashing', 'Detail for roof-to-wall, slope changes, material changes, penetrations, and other field transitions.'],
      ['Closures / fasteners / sealants', 'Accessory set that turns panels into a complete installable package.'],
    ],
  },
]
const internalOntologyBusinessOps = [
  {
    area: 'Sales Operations',
    details: [
      'Lead scoring by source domain, route intent, uploaded files, project state, market, square footage, and project type.',
      'Response SLA targets by lead tier: emergency/rush, contractor repeat buyer, commercial project, agricultural project, exploratory inquiry.',
      'Sales stages: new, needs info, estimating, quoted, follow-up, won, lost, dormant, dealer opportunity.',
      'Call scripts should focus on project facts: profile, roof/wall scope, finish, timing, delivery state, drawings, trim, and decision maker.',
    ],
  },
  {
    area: 'Estimating Operations',
    details: [
      'Takeoff queue should separate complete plan sets from incomplete inquiry forms.',
      'Estimator checklist: building use, profile, coverage width, lengths, gauge, substrate, finish, trims, accessories, delivery, exclusions.',
      'Versioned quote assumptions are critical: square footage basis, waste factor, freight, tax, lead time caveat, finish availability, engineering exclusions.',
      'Clarification workflow should ask for missing dimensions, elevations, roof slope, penetrations, trim details, color, and desired completion date.',
    ],
  },
  {
    area: 'Production Operations',
    details: [
      'Production schedule depends on coil availability, machine profile, tooling changeover, order priority, bundle sequence, and delivery window.',
      'Run sheets should be generated from approved order data, not retyped from emails.',
      'QA should record profile, length, count, finish, bundle label, trim package match, damage check, and release signoff.',
      'Shop floor screens can show scheduled runs, coil lots, job labels, trim tasks, and pickup/loading status.',
    ],
  },
  {
    area: 'Finance / Admin',
    details: [
      'Quote-to-order conversion requires payment terms, PO, billing entity, tax/resale documentation, delivery fee, and credit status.',
      'Invoice entity should be Americas Panel Fab unless a separate operating entity is legally defined.',
      'Margin visibility requires coil cost, labor, machine time, trim fabrication, freight, packaging, rush fees, and waste tracking.',
      'Separate public marketing claims from contractual promises; contracts and invoices need controlled language.',
    ],
  },
]
const internalOntologyMarketing = [
  {
    channel: 'ASP Revenue Marketing',
    plays: [
      'Product pages for PBR/R-Panel, AG/Tuff Rib, Industrial Rib, trim and flashing, colors/gauges, and accessories.',
      'State pages for California, Arizona, Texas, Florida with no fake office claims.',
      'Contractor-first conversion paths: quote intake, plan intake, sales call, sales message, panel order, dealer inquiry.',
      'Landing pages by market: commercial, agricultural, warehouse, industrial, residential accessory buildings.',
      'Conversion proof: real roll former, steel coils, bundles, trim fabrication, truck loading, project gallery, phone number, email, quote form.',
    ],
  },
  {
    channel: 'APF Authority Marketing',
    plays: [
      'Guides and glossary: roll forming, gauges, finishes, standing seam vs R-Panel, PBR vs R-Panel, trim/flashing, commercial metal roofing.',
      'Manufacturer credibility pages: capabilities, manufacturing, custom fabrication, roll forming, company, partners.',
      'Neutral comparison content that can recommend ASP when product intent appears.',
      'Investor/partner credibility without leaking private investment, equipment output, margins, owner background, or projections.',
    ],
  },
  {
    channel: 'Local / Regional Growth',
    plays: [
      'State-level pages; later city/metro pages only when service proof and operations can support them.',
      'Google Business Profile only when a legitimate location exists.',
      'Project pages tied to state, market, building type, product type, and photo proof.',
      'Dealer recruitment pages by region once territories, pricing, samples, and support model are defined.',
    ],
  },
  {
    channel: 'Trust Assets',
    plays: [
      'Photo shot list: machine running, panels exiting, coil inventory, trim fabrication, finished bundles, truck loading, warehouse interior, employees, commercial project, agricultural project.',
      'Download center: product data, quote checklist, plan upload instructions, trim guide, finish guide, submittal packet guide.',
      'FAQ schema, Article schema, Product schema, Organization schema, breadcrumbs, sitemaps, robots, canonical URLs.',
    ],
  },
]
const internalOntologyCompetitors = [
  {
    competitor: 'Majestic Metals Fab',
    strengths: [
      'Immediately communicates real manufacturer, real products, real facility, real projects, phone number, and request quote path.',
      'Simple white industrial site feels credible even if generic.',
      'Clear services/products/portfolio structure.',
    ],
    weaknesses: [
      'Generic positioning; less differentiated product-brand memory.',
      'Limited buyer workflow emphasis around upload plans, 24-hour quote intent, dealer paths, and multi-state expansion.',
      'Less opportunity for authority content and software-enabled operational moat.',
    ],
    response: [
      'APF/ASP must look bigger, clearer, more credible, easier to buy from, and more operationally real.',
      'Use real facility/product/project proof as soon as available.',
      'Do not beat them with darkness or animation; beat them with buying confidence and manufacturing clarity.',
    ],
  },
  {
    competitor: 'Western States Metal Roofing',
    strengths: [
      'Strong product pages, specific panel profiles, color/finish resources, installation support, and SEO footprint.',
      'Clear product search intent around Western Rib, Rezibond, exposed-fastener panels, and metal siding.',
      'Deep content library and product-oriented buyer education.',
    ],
    weaknesses: [
      'Large catalog can feel less personal to local/regional contractors.',
      'Opportunity for ASP to compete with faster quote workflow, plan uploads, local/regional manufacturing support, and dealer/contractor relationships.',
    ],
    response: [
      'ASP product pages must become specific, data-rich, image-rich, and quote-ready.',
      'APF guide pages should explain comparisons without copying competitor language or overclaiming equivalence.',
      'Build product packets and resources that estimators can use before the first call.',
    ],
  },
  {
    competitor: 'Generic metal roofing suppliers',
    strengths: [
      'Existing distribution, price familiarity, stocked colors, contractor relationships.',
    ],
    weaknesses: [
      'Often weak online workflows, poor plan upload experience, thin documentation, generic service positioning.',
    ],
    response: [
      'Win on responsiveness, quoting workflow, documentation quality, product clarity, and trust signals.',
      'Use software to make quoting, ordering, scheduling, and dealer support easier than the incumbents.',
    ],
  },
]
const internalOntologyExpansion = [
  ['Phase 1: ASP revenue engine', 'Launch exposed-fastener panel sales, quote forms, upload plans, service areas, product pages, download center, and real-photo replacement.'],
  ['Phase 2: APF authority engine', 'Publish guides, glossary, comparison content, capability pages, manufacturing education, partner pages, and credible company story.'],
  ['Phase 3: Operations software', 'Lead inbox, quote pipeline, takeoff assistant, panel calculator, production scheduler, project tracker, and CRM/ERP foundation.'],
  ['Phase 4: Dealer/contractor portals', 'Saved projects, pricing rules, quote history, samples, approvals, order status, repeat ordering, dealer territory management.'],
  ['Phase 5: Manufacturing expansion', 'Standing seam division, trim/accessories division, wall panel programs, mobile roll forming, regional factory partners.'],
  ['Phase 6: Marketplace/network', 'Supplier directory, installer directory, factory profiles, equipment reviews, dealer network, lead distribution, partner acquisitions.'],
]
const internalOntologyVisionPrinciples = [
  'The website is not just a brochure; it is the first UI for the future operating system.',
  'Every form field should map to a future CRM/ERP object.',
  'Every guide should map to a keyword cluster and a buyer education need.',
  'Every product page should map to a quote workflow and a manufacturing package.',
  'Every photo should eventually become proof of real equipment, real inventory, real products, or real projects.',
  'Every competitor weakness should map to a workflow advantage: faster response, clearer docs, easier upload, better package coordination.',
  'Every internal claim must be classified: public-safe, needs verification, NDA/private, legal review, or future roadmap.',
]
const internalOntologyRealityPlan = [
  {
    area: 'Brands',
    href: '#entity-classes',
    needToKnow: [
      'Legal entity, domain ownership, trademark status, invoicing entity, and public disclosure wording.',
      'Which promises are verified today versus future roadmap.',
      'Which facts belong on APF, ASP, or 8190 only.',
    ],
    artifacts: ['Brand relationship memo', 'public-safe copy bank', 'domain and canonical map', 'claim approval checklist'],
    next: 'Lock the public relationship: Americas Panel Fab manufactures American Super Panel, while 8190 keeps private strategy and expansion logic.',
  },
  {
    area: 'Demand',
    href: '#workflow-ontology',
    needToKnow: [
      'Buyer segments by job type, urgency, state, order size, repeat likelihood, and documentation needs.',
      'What makes a lead quote-ready: drawings, dimensions, state, panel profile, finish, trim scope, timeline.',
      'Which channels create revenue: organic product pages, APF guide referrals, dealers, phone calls, plan uploads.',
    ],
    artifacts: ['lead scoring model', 'quote intake rubric', 'buyer persona matrix', 'sales call script', 'lost reason taxonomy'],
    next: 'Build a lead inbox that separates product-ready buyers from education-only visitors and routes each to the right next step.',
  },
  {
    area: 'Operations',
    href: '#business-operations',
    needToKnow: [
      'Quote stages, estimator responsibilities, production handoff, coil constraints, trim scope, delivery/pickup workflow.',
      'What data must be captured once so it is never retyped across sales, estimating, production, and invoicing.',
      'Where human approval is mandatory: pricing, lead time, substitutions, engineering/performance language, legal claims.',
    ],
    artifacts: ['SOP map', 'quote-to-order state machine', 'production run sheet', 'QA checklist', 'delivery release checklist'],
    next: 'Convert the workflow sections into task queues, status transitions, and event triggers before writing portal features.',
  },
  {
    area: 'Software',
    href: '/internal-implementation',
    needToKnow: [
      'Core tables, ownership boundaries, permission roles, event names, queue design, file storage, analytics, and audit logs.',
      'Which agent jobs are safe to automate and which require human review.',
      'What MVP proves value fastest: lead inbox, upload review, quote pipeline, project tracker, then agentic takeoff support.',
    ],
    artifacts: ['schema migrations', 'API resource map', 'event taxonomy', 'agent contracts', 'RBAC matrix', 'MVP backlog'],
    next: 'Use the implementation pages to turn ontology into database migrations, queues, dashboards, and agent run records.',
  },
  {
    area: 'Implementation',
    href: '/internal-data-model',
    needToKnow: [
      'Every UI control needs a data field, every status needs a state machine, and every automation needs an event.',
      'Public pages need metadata/canonicals/schema; internal systems need permissions/audit/escalation.',
      'Business truth must be verified before becoming customer-facing copy or contractual language.',
    ],
    artifacts: ['D1 schema', 'workflow specs', 'event payload specs', 'agent prompts/tools', 'test fixtures', 'deployment checklist'],
    next: 'Build the first internal operating loop: lead -> file upload -> estimator task -> quote -> order-ready package.',
  },
]
const internalOntologyAuthorityGaps = [
  {
    area: 'Codes, Standards & Compliance',
    gap: 'The ontology needs a verified library for code concepts, fire/wind terminology, product data boundaries, and what cannot be claimed without engineering review.',
    build: 'Create internal reference records for standards, code topics, warranty language, submittal disclaimers, and legal-review flags.',
  },
  {
    area: 'Machine Economics',
    gap: 'The model names equipment but does not yet encode throughput assumptions, changeover costs, maintenance, scrap, coil yield, labor, packaging, or margin logic.',
    build: 'Add private machine profiles, cost drivers, production constraints, quote margin inputs, and operator/maintenance workflows.',
  },
  {
    area: 'Supplier & Material Network',
    gap: 'The ontology needs supplier classes, coil specs, finish systems, purchasing workflow, inventory risk, lead times, substitutions, and approved alternatives.',
    build: 'Create supplier, coil lot, finish program, reorder point, reserve inventory, and substitution approval objects.',
  },
  {
    area: 'Installer, Dealer & Contractor Network',
    gap: 'Thought leadership needs a real channel model: dealer territories, contractor onboarding, installer qualification, referrals, repeat orders, and partner rules.',
    build: 'Define partner profiles, onboarding steps, territory logic, pricing permissions, public listing approval, and referral tracking.',
  },
  {
    area: 'Product Documentation',
    gap: 'Authority requires deep product packets: profile drawings, coverage widths, trim details, color/gauge paths, installation notes, FAQs, and quote checklists.',
    build: 'Create product data records, downloadable packets, revision history, asset ownership, and review dates for each panel family.',
  },
  {
    area: 'Market Intelligence',
    gap: 'The competitor section is useful but needs ongoing structured data: competitor product families, pricing signals, SEO pages, strengths, weaknesses, and response plays.',
    build: 'Add competitor profiles, page audits, keyword snapshots, comparison rules, and quarterly strategy reviews.',
  },
  {
    area: 'Agentic Workflow Safety',
    gap: 'Agents need stricter knowledge boundaries, approval gates, confidence thresholds, source citations, and logs before they touch customer-facing output.',
    build: 'Create agent policy records, tool permissions, escalation queues, evaluation sets, and prompt/version audit tables.',
  },
  {
    area: 'Operational Proof',
    gap: 'The public authority layer will not become truly dominant until real photos, real projects, real product packets, and repeatable fulfillment metrics replace placeholders.',
    build: 'Track proof assets by source, replacement priority, release approval, route usage, and conversion impact.',
  },
]
const implementationTables = [
  {
    table: 'organizations',
    purpose: 'Companies, contractors, dealers, suppliers, owners, partners, public agencies, and manufacturers.',
    fields: [
      ['id', 'uuid', 'required primary key'],
      ['name', 'text', 'required'],
      ['type', 'enum organization_type', 'required'],
      ['website', 'text', 'optional'],
      ['billing_email', 'text', 'optional'],
      ['phone', 'text', 'optional'],
      ['address_id', 'uuid -> addresses.id', 'optional'],
      ['status', 'enum organization_status', 'required default active'],
      ['owner_user_id', 'uuid -> users.id', 'optional'],
      ['created_at / updated_at', 'timestamp', 'required'],
    ],
  },
  {
    table: 'contacts',
    purpose: 'People associated with organizations, leads, projects, quotes, orders, and partner relationships.',
    fields: [
      ['id', 'uuid', 'required primary key'],
      ['organization_id', 'uuid -> organizations.id', 'optional'],
      ['first_name / last_name', 'text', 'required'],
      ['email', 'text', 'optional indexed'],
      ['phone', 'text', 'optional indexed'],
      ['role', 'enum contact_role', 'optional'],
      ['preferred_channel', 'enum contact_channel', 'optional'],
      ['status', 'enum contact_status', 'required'],
      ['created_at / updated_at', 'timestamp', 'required'],
    ],
  },
  {
    table: 'leads',
    purpose: 'Inbound demand from ASP, APF referrals, calls, emails, plan uploads, dealer forms, and partner inquiries.',
    fields: [
      ['id', 'uuid', 'required primary key'],
      ['source_domain', 'enum source_domain', 'required'],
      ['source_route', 'text', 'required'],
      ['utm_source / utm_campaign / utm_medium', 'text', 'optional'],
      ['contact_id', 'uuid -> contacts.id', 'optional'],
      ['organization_id', 'uuid -> organizations.id', 'optional'],
      ['project_state', 'enum service_state', 'optional'],
      ['project_type', 'enum project_type', 'optional'],
      ['panel_intent', 'enum panel_profile', 'optional'],
      ['estimated_sq_ft', 'integer', 'optional'],
      ['status', 'enum lead_status', 'required indexed'],
      ['score', 'integer', 'required default 0'],
      ['assigned_user_id', 'uuid -> users.id', 'optional'],
      ['created_at / updated_at', 'timestamp', 'required'],
    ],
  },
  {
    table: 'projects',
    purpose: 'Real jobs being quoted, reviewed, produced, delivered, or tracked.',
    fields: [
      ['id', 'uuid', 'required primary key'],
      ['lead_id', 'uuid -> leads.id', 'optional'],
      ['organization_id', 'uuid -> organizations.id', 'optional'],
      ['project_name', 'text', 'required'],
      ['project_address_id', 'uuid -> addresses.id', 'optional'],
      ['market', 'enum market_type', 'required'],
      ['building_use', 'text', 'optional'],
      ['roof_scope / wall_scope / trim_scope', 'text', 'optional'],
      ['target_date', 'date', 'optional'],
      ['status', 'enum project_status', 'required indexed'],
      ['assigned_estimator_id', 'uuid -> users.id', 'optional'],
      ['created_at / updated_at', 'timestamp', 'required'],
    ],
  },
  {
    table: 'uploaded_files',
    purpose: 'Plans, drawings, structural docs, elevations, photos, sketches, product data, and partner materials.',
    fields: [
      ['id', 'uuid', 'required primary key'],
      ['lead_id / project_id', 'uuid', 'one required'],
      ['file_name', 'text', 'required'],
      ['mime_type', 'text', 'required'],
      ['size_bytes', 'integer', 'required max 104857600'],
      ['storage_key', 'text', 'required'],
      ['review_status', 'enum file_review_status', 'required'],
      ['extracted_summary', 'text', 'optional agent output'],
      ['uploaded_at / reviewed_at', 'timestamp', 'required / optional'],
    ],
  },
  {
    table: 'quotes',
    purpose: 'Versioned commercial offer with assumptions, exclusions, line items, freight, taxes, terms, and acceptance status.',
    fields: [
      ['id', 'uuid', 'required primary key'],
      ['project_id', 'uuid -> projects.id', 'required'],
      ['version', 'integer', 'required'],
      ['status', 'enum quote_status', 'required indexed'],
      ['subtotal / tax / freight / total', 'decimal', 'optional until sent'],
      ['valid_until', 'date', 'optional'],
      ['assumptions / exclusions / alternates', 'text', 'optional'],
      ['sent_at / accepted_at / expired_at', 'timestamp', 'optional'],
      ['created_by_user_id', 'uuid -> users.id', 'required'],
    ],
  },
  {
    table: 'quote_line_items',
    purpose: 'Panel, trim, accessory, freight, labor, and option details attached to a quote.',
    fields: [
      ['id', 'uuid', 'required primary key'],
      ['quote_id', 'uuid -> quotes.id', 'required indexed'],
      ['line_type', 'enum line_item_type', 'required'],
      ['profile', 'enum panel_profile', 'optional'],
      ['gauge / substrate / finish / color', 'enum or text', 'optional'],
      ['length_inches / quantity / unit_price', 'decimal', 'optional'],
      ['description', 'text', 'required'],
      ['sort_order', 'integer', 'required'],
    ],
  },
  {
    table: 'orders',
    purpose: 'Accepted quote turned into payable, schedulable, producible work.',
    fields: [
      ['id', 'uuid', 'required primary key'],
      ['quote_id', 'uuid -> quotes.id', 'required unique'],
      ['purchase_order', 'text', 'optional'],
      ['payment_status', 'enum payment_status', 'required'],
      ['production_status', 'enum production_status', 'required'],
      ['delivery_status', 'enum delivery_status', 'required'],
      ['scheduled_date / promised_date', 'date', 'optional'],
      ['created_at / closed_at', 'timestamp', 'required / optional'],
    ],
  },
  {
    table: 'coil_lots',
    purpose: 'Inventory units for substrate, gauge, color, finish, width, weight, reservation, and cost tracking.',
    fields: [
      ['id', 'uuid', 'required primary key'],
      ['supplier_id', 'uuid -> organizations.id', 'optional'],
      ['substrate', 'enum substrate_type', 'required'],
      ['gauge', 'enum metal_gauge', 'required'],
      ['finish', 'enum finish_type', 'required'],
      ['color', 'text', 'required'],
      ['width_inches / received_weight_lbs / remaining_weight_lbs', 'decimal', 'required'],
      ['cost_per_lb', 'decimal', 'private'],
      ['status', 'enum inventory_status', 'required'],
    ],
  },
  {
    table: 'machines',
    purpose: 'Roll formers, folders, brakes, slitters, decoilers, forklifts, and production assets.',
    fields: [
      ['id', 'uuid', 'required primary key'],
      ['name', 'text', 'required'],
      ['machine_type', 'enum machine_type', 'required'],
      ['supported_profiles', 'enum[] panel_profile', 'optional'],
      ['status', 'enum machine_status', 'required'],
      ['location', 'text', 'optional'],
      ['maintenance_due_at', 'timestamp', 'optional'],
      ['notes', 'text', 'private'],
    ],
  },
  {
    table: 'production_runs',
    purpose: 'Scheduled and completed work on machines from coil to panel bundles or fabricated trim packages.',
    fields: [
      ['id', 'uuid', 'required primary key'],
      ['order_id', 'uuid -> orders.id', 'required'],
      ['machine_id', 'uuid -> machines.id', 'required'],
      ['coil_lot_id', 'uuid -> coil_lots.id', 'optional'],
      ['profile', 'enum panel_profile', 'optional'],
      ['status', 'enum production_run_status', 'required'],
      ['scheduled_start / completed_at', 'timestamp', 'optional'],
      ['operator_user_id', 'uuid -> users.id', 'optional'],
      ['qa_status', 'enum qa_status', 'required'],
    ],
  },
  {
    table: 'events',
    purpose: 'Event log for automation, analytics, agent triggers, audit history, and timeline reconstruction.',
    fields: [
      ['id', 'uuid', 'required primary key'],
      ['event_name', 'enum event_name', 'required indexed'],
      ['entity_type / entity_id', 'text / uuid', 'required'],
      ['actor_type / actor_id', 'enum / uuid', 'optional'],
      ['payload', 'json', 'required'],
      ['occurred_at', 'timestamp', 'required indexed'],
    ],
  },
  {
    table: 'agent_runs',
    purpose: 'AI agent execution records with inputs, outputs, tools, confidence, escalation, and audit trail.',
    fields: [
      ['id', 'uuid', 'required primary key'],
      ['agent_name', 'enum agent_name', 'required'],
      ['trigger_event_id', 'uuid -> events.id', 'optional'],
      ['input_payload / output_payload', 'json', 'required'],
      ['status', 'enum agent_run_status', 'required'],
      ['confidence_score', 'decimal', 'optional'],
      ['escalation_reason', 'text', 'optional'],
      ['started_at / completed_at', 'timestamp', 'required / optional'],
    ],
  },
]
const implementationEnums = [
  ['source_domain', 'apf, asp, phone, email, referral, dealer, manual, import'],
  ['organization_type', 'contractor, dealer, supplier, manufacturer, owner, architect, public_agency, investor, partner'],
  ['project_type', 'commercial, industrial, agricultural, residential, warehouse, multifamily, municipal, education'],
  ['panel_profile', 'pbr_panel, r_panel, ag_panel, tuff_rib, industrial_rib, standing_seam, wall_panel, trim_only, unknown'],
  ['finish_type', 'smp, pvdf, matte, cool_roof, primer_ready, galvanized, galvalume, custom'],
  ['metal_gauge', 'twenty_two, twenty_four, twenty_six, twenty_nine, unknown'],
  ['lead_status', 'new, needs_info, qualified, disqualified, converted_to_project, dormant'],
  ['project_status', 'intake, review, estimating, quoted, approved, ordered, scheduled, in_production, delivered, closed, lost'],
  ['quote_status', 'draft, needs_info, estimating, internal_review, sent, accepted, rejected, expired, converted_to_order'],
  ['payment_status', 'not_required, pending, deposit_paid, paid, overdue, credit_hold'],
  ['machine_status', 'available, scheduled, running, down, maintenance, offline'],
  ['production_run_status', 'draft, scheduled, setup, running, paused, completed, canceled'],
  ['qa_status', 'not_started, passed, failed, rework_required, waived_by_manager'],
  ['agent_run_status', 'queued, running, completed, failed, escalated, canceled'],
]
const implementationStateMachines = [
  {
    entity: 'Lead',
    states: ['new', 'needs_info', 'qualified', 'disqualified', 'converted_to_project', 'dormant'],
    transitions: [
      'new -> needs_info when required contact/project data is missing',
      'new -> qualified when contact, state, project type, and intent are usable',
      'qualified -> converted_to_project when estimating review begins',
      'needs_info -> qualified when missing facts are supplied',
      'any open state -> disqualified for spam, unsupported scope, duplicate, or bad contact',
      'qualified -> dormant when no response after follow-up sequence',
    ],
  },
  {
    entity: 'Quote',
    states: ['draft', 'needs_info', 'estimating', 'internal_review', 'sent', 'accepted', 'rejected', 'expired', 'converted_to_order'],
    transitions: [
      'draft -> needs_info when drawings, panel type, or assumptions are incomplete',
      'draft -> estimating when scope is sufficient',
      'estimating -> internal_review when line items and assumptions are ready',
      'internal_review -> sent when approved by estimator/sales owner',
      'sent -> accepted when customer approves and payment/PO path is clear',
      'sent -> rejected when customer declines',
      'sent -> expired after valid_until date',
      'accepted -> converted_to_order when order is created',
    ],
  },
  {
    entity: 'Order',
    states: ['approved', 'payment_pending', 'scheduled', 'in_production', 'qa_review', 'ready_for_pickup', 'shipped', 'delivered', 'closed'],
    transitions: [
      'approved -> payment_pending if deposit/payment is required',
      'approved -> scheduled when production can proceed',
      'scheduled -> in_production when first run starts',
      'in_production -> qa_review when production is complete',
      'qa_review -> ready_for_pickup or shipped when QA passes',
      'ready_for_pickup -> closed when customer pickup is confirmed',
      'shipped -> delivered when delivery is confirmed',
      'delivered -> closed after final admin review',
    ],
  },
  {
    entity: 'ProductionRun',
    states: ['draft', 'scheduled', 'setup', 'running', 'paused', 'completed', 'canceled'],
    transitions: [
      'draft -> scheduled after machine, coil, profile, and order are assigned',
      'scheduled -> setup when operator begins setup/changeover',
      'setup -> running when first acceptable panel is produced',
      'running -> paused for coil issue, machine issue, rush reprioritization, or operator stop',
      'paused -> running when issue is resolved',
      'running -> completed when quantities are done and QA is ready',
      'draft or scheduled -> canceled when order changes before production',
    ],
  },
]
const implementationEvents = [
  ['lead.created', 'Created when any inquiry, quote form, plan upload, call, email, or manual lead enters the system.'],
  ['lead.qualified', 'Emitted when required facts satisfy qualification rules.'],
  ['file.uploaded', 'Emitted when a plan/drawing/document is stored.'],
  ['file.reviewed', 'Emitted when estimator or agent marks file review complete.'],
  ['project.created', 'Emitted when a qualified lead becomes a project.'],
  ['quote.needs_info', 'Emitted when quote cannot proceed without missing facts.'],
  ['quote.sent', 'Emitted when customer-facing quote is delivered.'],
  ['quote.accepted', 'Emitted when customer approves quote.'],
  ['order.created', 'Emitted when accepted quote becomes order.'],
  ['coil.reserved', 'Emitted when inventory is reserved for order/production run.'],
  ['production_run.scheduled', 'Emitted when machine schedule is created.'],
  ['production_run.completed', 'Emitted when run is finished.'],
  ['qa.failed', 'Emitted when QA requires rework or management review.'],
  ['delivery.scheduled', 'Emitted when pickup/delivery date is assigned.'],
  ['content.published', 'Emitted when APF/ASP content goes live or changes canonical metadata.'],
  ['agent.escalated', 'Emitted when an AI agent needs human review.'],
]
const implementationAutomationRules = [
  ['Lead scoring', 'If uploaded_files_count > 0, add 30 points; if project_state in target states, add 10; if phone present, add 10; if spam keywords, subtract 100.'],
  ['Lead assignment', 'Assign commercial/industrial leads to senior sales; agricultural to contractor sales; dealer inquiries to owner/partner queue.'],
  ['Plan upload validation', 'Reject or split uploads above 100MB; require at least one supported file type; create file.review task.'],
  ['Quote completeness', 'Quote cannot move to sent without project_state, panel_profile or unknown flag, estimated scope, assumptions, exclusions, and owner_user_id.'],
  ['Order creation', 'Order cannot be created unless quote_status is accepted and payment/PO rule is satisfied.'],
  ['Coil reservation', 'Reserve coil only when order is approved and coil lot has sufficient remaining weight/color/gauge/finish.'],
  ['Production scheduling', 'Production run cannot schedule unless machine supports profile and coil/material is available.'],
  ['QA gate', 'Delivery cannot be marked ready until required production runs and trim tasks pass QA or manager override.'],
  ['Public copy safety', 'Public pages fail review if they contain APF/ASP abbreviations, funnel language, NDA/private claims, fake office claims, or unverified performance claims.'],
  ['Agent escalation', 'Agents must escalate low-confidence takeoff, missing dimensions, engineering/performance claims, legal wording, pricing exceptions, and supplier-cost exposure.'],
]
const implementationAgents = [
  {
    name: 'Intake Agent',
    mission: 'Convert inbound form/call/email context into clean Lead, Contact, Organization, and Project draft records.',
    inputs: ['lead form payload', 'UTM/source route', 'uploaded file metadata', 'email/call notes'],
    tools: ['CRM write', 'dedupe search', 'state/page classifier', 'lead scoring'],
    outputs: ['normalized lead', 'missing info list', 'lead score', 'recommended owner'],
    escalation: 'Escalate duplicate conflicts, suspicious spam, missing contact path, unsupported state, or ambiguous project type.',
  },
  {
    name: 'Plan Review Agent',
    mission: 'Summarize uploaded drawings and extract estimator-ready facts without making engineering claims.',
    inputs: ['uploaded PDFs/images', 'project notes', 'panel intent'],
    tools: ['document parser', 'OCR', 'vision extraction', 'checklist generator'],
    outputs: ['scope summary', 'questions', 'possible roof/wall/trim areas', 'risk flags'],
    escalation: 'Escalate unreadable plans, structural/performance requirements, conflicting dimensions, or legal/engineering claims.',
  },
  {
    name: 'Estimating Assistant',
    mission: 'Prepare quote draft structure, assumptions, exclusions, and line-item placeholders for estimator review.',
    inputs: ['project', 'scope summary', 'panel profile', 'coil availability', 'pricing rules'],
    tools: ['pricing table', 'inventory lookup', 'quote draft writer'],
    outputs: ['draft quote', 'assumption list', 'missing data checklist', 'alternates'],
    escalation: 'Escalate pricing exceptions, margin risk, unavailable coil, rush timing, or unusual profile/finish requests.',
  },
  {
    name: 'Sales Follow-Up Agent',
    mission: 'Manage customer follow-up timing and draft messages after quote, missing-info, or dormant lead states.',
    inputs: ['lead status', 'quote status', 'last touch', 'customer role', 'project urgency'],
    tools: ['email draft', 'task scheduler', 'CRM timeline'],
    outputs: ['follow-up task', 'draft email', 'next contact date'],
    escalation: 'Escalate high-value commercial projects, angry customer tone, legal language, or pricing negotiation.',
  },
  {
    name: 'Production Scheduler Agent',
    mission: 'Recommend machine schedule based on order priority, coil inventory, profile, length, changeover, and delivery window.',
    inputs: ['orders', 'machines', 'coil lots', 'production runs', 'delivery promises'],
    tools: ['schedule optimizer', 'inventory reservation', 'run sheet generator'],
    outputs: ['proposed schedule', 'coil reservations', 'conflict warnings'],
    escalation: 'Escalate overbooked machines, missing inventory, rush conflicts, QA failures, or downtime events.',
  },
  {
    name: 'SEO Content Agent',
    mission: 'Maintain APF/ASP content separation, metadata uniqueness, internal links, and public copy safety.',
    inputs: ['content page draft', 'keyword map', 'public safety rules', 'competitor notes'],
    tools: ['metadata checker', 'canonical checker', 'public-copy scanner'],
    outputs: ['SEO checklist', 'risk flags', 'recommended edits', 'schema suggestion'],
    escalation: 'Escalate NDA/private claims, legal claims, fake location claims, competitor overclaiming, or duplicate content risk.',
  },
]
const implementationPermissions = [
  ['public_visitor', 'Can submit forms and download public resources; cannot view internal data.'],
  ['sales_user', 'Can view/edit leads, contacts, projects, quote notes, follow-up tasks, and customer timeline.'],
  ['estimator', 'Can review plans, create quote drafts, edit line items, assumptions, exclusions, and estimator tasks.'],
  ['production_user', 'Can view orders, run sheets, machine schedule, production runs, QA checklist, and bundle labels.'],
  ['admin_finance', 'Can manage invoices, payment status, costs, margins, PO data, tax/resale docs, and credit holds.'],
  ['content_manager', 'Can edit content pages, metadata, schema, public safety flags, and publish status.'],
  ['owner_admin', 'Can access all records, private strategy, pricing, margins, partners, software roadmap, and audit logs.'],
  ['ai_agent', 'Can read/write only scoped objects for its mission; all external messages and pricing outputs require human approval until trusted.'],
]
const implementationMvpBacklog = [
  ['MVP 1', 'Lead, Contact, Organization, Project, UploadedFile, Event tables; quote/upload intake; source route and UTM capture.'],
  ['MVP 2', 'Lead inbox with statuses, assignment, notes, tasks, follow-up dates, and plan review checklist.'],
  ['MVP 3', 'Quote object, quote line items, assumptions/exclusions, versioning, PDF/email draft, approval gate.'],
  ['MVP 4', 'Inventory foundation: coil lots, finishes/colors, profiles, gauges, substrate, supplier, remaining quantity.'],
  ['MVP 5', 'Order conversion, production run draft, machine table, run sheet generation, QA checklist.'],
  ['MVP 6', 'Agent layer: intake normalization, plan review summary, estimating assistant, sales follow-up drafts.'],
  ['MVP 7', 'Dealer/contractor portal with saved projects, quote history, uploads, approvals, and order status.'],
]
const implementationArtifacts = [
  ['internal/schema.sql', 'D1/SQLite database schema draft with tables, constraints, indexes, and lifecycle fields.'],
  ['internal/workflows-and-events.md', 'State machines, event names, automation rules, and escalation gates.'],
  ['internal/agent-contracts.md', 'AI agent roles, inputs, tools, outputs, and escalation contracts.'],
  ['internal/mvp-build-plan.md', 'Practical build sequence from lead intake to contractor/dealer portal.'],
]
const internalControlQueues = [
  {
    name: 'Lead Inbox',
    status: 'Model ready',
    count: '0 live',
    owner: 'Sales / Intake Agent',
    href: '/internal-workflows',
    purpose: 'Central queue for quote intent, plan upload intent, phone/email leads, APF referrals, and dealer inquiries.',
    buildNext: ['Connect form/API submissions', 'Add source route + UTM capture', 'Create assignment and lead scoring rules'],
  },
  {
    name: 'Plan Review Queue',
    status: 'Needs storage',
    count: 'R2 next',
    owner: 'Estimator / Plan Review Agent',
    href: '/internal-agents',
    purpose: 'Review uploaded drawings, extract project facts, create missing-info tasks, and prepare estimator-ready summaries.',
    buildNext: ['Wire R2 file metadata', 'Add file.review task type', 'Create document parser safety gates'],
  },
  {
    name: 'Quote Pipeline',
    status: 'Schema drafted',
    count: 'MVP 3',
    owner: 'Estimator',
    href: '/internal-data-model',
    purpose: 'Move projects from needs-info to estimating, internal review, sent, accepted, rejected, expired, or order-ready.',
    buildNext: ['Build quote table UI', 'Add assumptions/exclusions editor', 'Require human approval before send'],
  },
  {
    name: 'Production Tracker',
    status: 'Future loop',
    count: 'MVP 5',
    owner: 'Production Scheduler Agent',
    href: '/internal-workflows',
    purpose: 'Track order conversion, coil reservation, machine scheduling, run sheets, QA status, bundle readiness, pickup, and delivery.',
    buildNext: ['Add machine profile records', 'Add coil lot reserve logic', 'Draft production run board'],
  },
  {
    name: 'Content / SEO Queue',
    status: 'Manual now',
    count: 'APF + ASP',
    owner: 'SEO Content Agent',
    href: '/internal-agents',
    purpose: 'Manage public-safe content drafts, metadata, canonical checks, route ownership, internal links, and duplicate-content risk.',
    buildNext: ['Add content page records', 'Add public-copy scanner', 'Track publish/review dates'],
  },
  {
    name: 'Photo Proof Tracker',
    status: 'Needed',
    count: 'High value',
    owner: 'Marketing / Ops',
    href: '/internal-ontology#authority-gaps',
    purpose: 'Track real machine, coil, bundle, trim, delivery, employee, warehouse, and project photos that replace stock.',
    buildNext: ['Create proof asset table', 'Map photos to routes', 'Add approval and replacement priority'],
  },
]
const internalControlAgents = [
  ['Intake Agent', 'Draft', 'Normalize lead records, detect missing facts, score quality, and recommend owner.', 'No external messages without review.'],
  ['Plan Review Agent', 'Draft', 'Summarize drawings, extract scope clues, and create estimator questions.', 'No engineering, code, or performance claims.'],
  ['Estimating Assistant', 'Draft', 'Prepare quote structure, assumptions, exclusions, and line item placeholders.', 'Human estimator approves all pricing.'],
  ['Sales Follow-Up Agent', 'Draft', 'Prepare follow-up tasks and message drafts after quote or missing-info states.', 'Human approves customer-facing sends.'],
  ['Production Scheduler Agent', 'Future', 'Recommend machine schedule, coil reservations, and run conflicts.', 'Manager approves schedule changes.'],
  ['SEO Content Agent', 'Draft', 'Check public copy safety, metadata uniqueness, canonicals, and schema suggestions.', 'Escalate NDA/private or legal claims.'],
]
const internalControlApprovals = [
  ['Pricing / margin output', 'Owner or estimator approval required before any customer-facing quote is sent.'],
  ['Engineering or performance language', 'Escalate fire, wind, structural, warranty, or code statements for verified review.'],
  ['Public copy publish', 'Check for private abbreviations, strategy language, NDA facts, fake offices, and unverified claims.'],
  ['Supplier substitution', 'Require material/finish/profile review before recommending alternate suppliers or products.'],
  ['Production schedule override', 'Require manager review when rush jobs, coil conflicts, downtime, or QA failures affect commitments.'],
]
const internalControlEvents = [
  ['lead.created', 'New inquiry enters the operating system.'],
  ['file.uploaded', 'Plan/drawing/document metadata is stored and review task is created.'],
  ['quote.needs_info', 'Estimator or agent cannot proceed without missing project facts.'],
  ['quote.sent', 'Approved quote leaves the internal review gate.'],
  ['order.created', 'Accepted quote becomes order package.'],
  ['production_run.scheduled', 'Machine, coil, profile, and order are assigned.'],
  ['agent.escalated', 'Agent needs human review due confidence, claim, pricing, or ambiguity.'],
]
const internalBusinessPlanSections = [
  {
    section: 'Executive Thesis',
    v3: 'Build a metal panel manufacturing and supply business that starts with contractor-ready exposed-fastener roofing/siding panels, then expands into authority content, dealer workflows, production systems, and agent-assisted operations.',
    decisions: ['Operating brand: American Super Panel for immediate sales', 'Company/platform: Americas Panel Fab for manufacturing authority', 'Private system: 8190 for plan execution, metrics, and agent control'],
    missing: ['Final legal entity structure', 'Equity/partnership terms', 'Trademark/domain ownership confirmation', 'Insurance and risk structure'],
  },
  {
    section: 'Market Strategy',
    v3: 'Prioritize high-volume panel demand while protecting higher-margin commercial opportunities. Split product pages, state pages, contractor workflows, and authority content so sales and credibility reinforce each other without duplicate SEO.',
    decisions: ['ASP targets product-intent buyers', 'APF targets manufacturing authority and partners', 'State expansion is service-area based until real locations exist'],
    missing: ['Validated TAM/SAM/SOM by state', 'City/metro launch order', 'Competitor pricing snapshots', 'Dealer territory model'],
  },
  {
    section: 'Products & Revenue',
    v3: 'Start with exposed-fastener roof and siding panels plus trim, flashing, accessories, and bulk contractor orders. Use product packets and quote-ready forms to shorten time from inquiry to quote.',
    decisions: ['Core revenue: panel sales by area/length/order package', 'Secondary revenue: trim, accessories, delivery, bulk/repeat orders', 'Future revenue: dealer portal, contractor portal, software-enabled workflow'],
    missing: ['Final product spec sheets', 'Gauge/color/finish catalog', 'Accessory price logic', 'Warranty language review'],
  },
  {
    section: 'Operations',
    v3: 'Translate the facility, equipment, staffing, inventory, logistics, and production model into operating workflows instead of leaving it as a static plan. Every production assumption should become a field, queue, or review gate.',
    decisions: ['Coil inventory is a strategic proof and margin lever', 'Roll forming, trim fabrication, staging, and loading must be visible in the control panel', 'Run sheets should come from approved order data'],
    missing: ['Facility lease criteria', 'Equipment vendor comparison', 'SOPs by workstation', 'Safety program', 'QA checklist', 'maintenance schedule'],
  },
  {
    section: 'Financial Model',
    v3: 'Use the V2 numbers as confidential baseline assumptions, but track live performance through revenue, square footage, blended selling price, variable cost, gross margin, fixed cost, contribution margin, cash runway, and payback progress.',
    decisions: ['Keep exact V2 financials out of compiled/public code', 'Track plan vs actual monthly', 'Separate public claims from internal projections'],
    missing: ['Live bookkeeping integration', 'COGS source of truth', 'cash flow tracker', 'tax assumptions', 'financing/debt/equity structure'],
  },
  {
    section: 'Government / Commercial Readiness',
    v3: 'Treat government and institutional work as a readiness program, not a marketing claim. Build entity credibility, documentation discipline, bid process, compliance tracking, and approval gates before publishing strong claims.',
    decisions: ['Public copy stays generic until qualifications are verified', '8190 tracks registrations and bid readiness privately', 'Agents cannot generate government claims without human review'],
    missing: ['SAM.gov path if applicable', 'NAICS/PSC code review', 'bonding/insurance requirements', 'certifications, bid docs, submittal templates, compliance owner'],
  },
]
const internalBusinessPlanExecutionMetrics = [
  ['Revenue', 'Monthly sales revenue', 'Actual revenue / private V3 target', 'Connect accounting or manual monthly entry'],
  ['Volume', 'Sq ft sold or produced', 'Actual sqft / target sqft', 'Track by product family, state, market, and channel'],
  ['Blended price', 'Weighted average selling price', 'Revenue / sqft sold', 'Compare PBR/R-panel, AG/Tuff Rib, trim/accessory mix'],
  ['Variable cost', 'Material, labor, electricity, packaging, freight allocation', 'Variable cost / sqft', 'Needs source-of-truth COGS records'],
  ['Contribution margin', 'Revenue less variable costs', '(Revenue - variable cost) / sqft', 'Primary operating health metric'],
  ['Gross margin %', 'Profitability before fixed overhead', '(Revenue - COGS) / revenue', 'Track by product, market, and customer type'],
  ['Fixed cost coverage', 'Rent, labor, utilities, admin, software, insurance', 'Contribution margin / fixed cost', 'Shows break-even progress'],
  ['Cash runway', 'Available cash divided by monthly burn', 'Cash / net burn', 'Needs bank/accounting integration later'],
  ['Quote conversion', 'Won quotes divided by sent quotes', 'Won / sent', 'Connect quote pipeline to customer outcomes'],
  ['Speed to quote', 'Time from complete intake to quote sent', 'Median hours', 'Critical ASP customer-experience advantage'],
]
const internalBusinessPlanGovReadiness = [
  {
    area: 'Entity & Registration',
    needed: ['Final contracting entity', 'EIN and banking alignment', 'DUNS/UEI review', 'SAM.gov decision', 'W-9 and vendor packet'],
    risk: 'Do not imply active government contracting status until registrations and bid eligibility are verified.',
  },
  {
    area: 'Codes & Classifications',
    needed: ['NAICS codes', 'PSC/product service codes', 'state/local vendor portals', 'public works requirements', 'prevailing wage triggers'],
    risk: 'Wrong codes or public-works assumptions can waste bids or create compliance exposure.',
  },
  {
    area: 'Insurance, Bonding & Credit',
    needed: ['General liability', 'workers comp', 'auto/fleet', 'product liability review', 'bonding capacity if required', 'credit terms'],
    risk: 'Commercial and public buyers may require documentation before purchase orders or vendor approval.',
  },
  {
    area: 'Bid Documentation',
    needed: ['Product data', 'submittal template', 'finish documentation', 'warranty language', 'lead-time caveats', 'exclusions/assumptions'],
    risk: 'Unverified product or performance claims should be blocked by approval gates.',
  },
  {
    area: 'Compliance Workflow',
    needed: ['Bid/no-bid checklist', 'contract review owner', 'legal review trigger', 'document retention policy', 'change-order workflow'],
    risk: 'Government-adjacent work needs disciplined records, not casual sales emails.',
  },
]
const internalBusinessPlanGaps = [
  ['Ownership & equity', 'Separate agreement for domain/software/IP ownership, equity, decision rights, buyout, dilution, and what happens if Fab acquires/merges Super.'],
  ['Legal/IP protection', 'Trademark search, brand assignment, software ownership, data ownership, contractor/dealer terms, NDA-safe operating rules.'],
  ['Manufacturing validation', 'Vendor quotes, machine specs, maintenance assumptions, throughput proof, material yield, staffing, safety, quality system.'],
  ['Financial controls', 'Chart of accounts, COGS categories, margin dashboard, quote approvals, purchase order workflow, cash runway tracking.'],
  ['Sales validation', 'Lead source tracking, quote conversion, price sensitivity by market, contractor interviews, dealer interest, reorder rate.'],
  ['Supply chain', 'Coil suppliers, finish options, minimum orders, substitutions, reorder points, storage handling, freight/delivery economics.'],
  ['Risk register', 'Startup delay, supplier cost changes, equipment downtime, installation complaints, warranty ambiguity, public-claim exposure, partner conflict.'],
  ['Gov/commercial proof', 'Registrations, insurance, bonding, submittals, code references, bid calendar, public-sector eligibility, contract review.'],
]
const internalBusinessPlanMilestones = [
  ['Phase 1', 'Proof of demand', 'ASP pages live, quote/upload workflows working, real phone/email, first contractor conversations, product packets drafted.'],
  ['Phase 2', 'Operating readiness', 'Equipment/facility decision, supplier program, color/gauge catalog, SOP drafts, safety/QA checklist, bookkeeping setup.'],
  ['Phase 3', 'Revenue system', 'Lead inbox, quote pipeline, margin tracker, plan review queue, CRM ownership, follow-up cadence, conversion dashboard.'],
  ['Phase 4', 'Production launch', 'Coil inventory, machine setup, run sheets, labels, bundles, loading workflow, QA signoff, delivery/pickup process.'],
  ['Phase 5', 'Scale channels', 'Dealer/contractor portal, service-area expansion, project gallery, APF authority content, partner/investor materials.'],
]
const internalGovComplianceSources = [
  ['SAM.gov Entity Registration', 'Entity registration or Unique Entity ID path for federal awards and entity records.', 'https://sam.gov/entity-registration'],
  ['SAM.gov Entity Information', 'Federal entity registration, renewal, status, and APEX Accelerator assistance resources.', 'https://sam.gov/entity-information'],
  ['Census NAICS Guidance', 'Official explanation that NAICS is the federal statistical classification system for business establishments.', 'https://www.census.gov/programs-surveys/economic-census/year/2022/guidance/understanding-naics.html'],
  ['OSHA Machine Guarding', 'Official OSHA standards landing page for machine guarding hazards across industries.', 'https://www.osha.gov/machine-guarding/standards'],
  ['ICC / IBC Metal Roof Panels', 'International Building Code roofing provisions include metal roof panel requirements that must be checked by edition/jurisdiction.', 'https://codes.iccsafe.org/'],
]
const internalGovReadinessTracks = [
  {
    track: 'Federal Vendor Foundation',
    objective: 'Determine whether the business should only obtain a UEI, complete SAM.gov entity registration, or postpone federal registration until the contracting entity is final.',
    tasks: ['Confirm legal contracting entity', 'Confirm bank/tax identity', 'Gather ownership and reps/certs data', 'Decide UEI-only vs full registration', 'Document renewal owner and annual review date'],
    evidence: ['Entity name', 'EIN/W-9', 'UEI/SAM status', 'vendor packet', 'registration screenshots'],
    gate: 'No public federal contractor language until registration status and eligibility are verified.',
  },
  {
    track: 'NAICS / Product Classification',
    objective: 'Create an internal code map for manufacturing, sheet metal products, roofing/siding panels, distribution, and installation-adjacent activities.',
    tasks: ['Research candidate NAICS codes', 'Separate manufacturing from retail/distribution/service work', 'Review state and local vendor categories', 'Create PSC/product-service code shortlist', 'Confirm with accountant/advisor before bids'],
    evidence: ['NAICS shortlist', 'reasoning notes', 'advisor review', 'vendor portal mappings'],
    gate: 'Do not put NAICS codes on public pages until the entity, products, and registration strategy are reviewed.',
  },
  {
    track: 'Bid / No-Bid Process',
    objective: 'Prevent unqualified or risky public-sector bids by creating a repeatable decision workflow.',
    tasks: ['Capture opportunity source', 'Check buyer type', 'Check scope fit', 'Check bond/insurance requirements', 'Check compliance terms', 'Estimate margin and cash timing', 'Assign bid owner'],
    evidence: ['opportunity record', 'bid checklist', 'risk score', 'go/no-go decision', 'owner approval'],
    gate: 'No bid submission without owner approval, margin review, and contract-document review.',
  },
  {
    track: 'Commercial Documentation',
    objective: 'Build the documentation stack that schools, municipalities, warehouses, developers, and contractors expect before large orders.',
    tasks: ['Create product data sheets', 'Create finish/color submittals', 'Create warranty-language draft', 'Create exclusions/assumptions template', 'Create insurance/vendor packet', 'Create revision control'],
    evidence: ['product packet', 'submittal template', 'revision date', 'approved claim library'],
    gate: 'Do not issue product/performance documents without approved language and version tracking.',
  },
  {
    track: 'Contract & Legal Review',
    objective: 'Define which terms require legal or owner review before acceptance.',
    tasks: ['Flag indemnity language', 'Flag liquidated damages', 'Flag pay-if-paid terms', 'Flag warranty obligations', 'Flag schedule penalties', 'Flag public-works compliance'],
    evidence: ['contract review checklist', 'redline notes', 'approval log', 'signed contract repository'],
    gate: 'No signature on unusual terms without review by the designated owner/advisor.',
  },
]
const internalCodeComplianceDomains = [
  {
    domain: 'Building Code / Roof Assemblies',
    scope: 'Metal roof panel requirements vary by code edition, jurisdiction, slope, substrate, fastening, underlayment, corrosion resistance, wind, fire, and manufacturer instructions.',
    actions: ['Track code edition by project location', 'Capture roof slope and assembly type', 'Require approved installation instructions', 'Escalate wind/fire/structural claims', 'Store submittal package by quote/order'],
    owner: 'Estimator + code reviewer',
  },
  {
    domain: 'Fire / Wildfire / California Sensitivity',
    scope: 'California and other jurisdictions may require additional roof covering, fire rating, WUI, underlayment, assembly, or local requirements.',
    actions: ['Do not claim FireSafe performance without documentation', 'Collect jurisdiction requirements', 'Map product documentation to assembly', 'Escalate to qualified code professional'],
    owner: 'Estimator + compliance reviewer',
  },
  {
    domain: 'Wind / Coastal / Florida Sensitivity',
    scope: 'Coastal and high-wind projects can require specific fastening, uplift, product approvals, engineering, and local acceptance.',
    actions: ['Flag Florida/coastal project states', 'Capture design wind requirement if provided', 'Block unverified wind-resistance claims', 'Store product approval or engineer review when applicable'],
    owner: 'Estimator + engineer/advisor',
  },
  {
    domain: 'OSHA / Machine Safety',
    scope: 'Roll forming, coil handling, shearing, folding, loading, forklifts, and maintenance introduce machine guarding, lockout/tagout, PPE, training, and incident-record obligations.',
    actions: ['Create machine-specific safety SOPs', 'Document guarding review', 'Create LOTO checklist', 'Train operators', 'Track incidents and corrective actions'],
    owner: 'Operations manager',
  },
  {
    domain: 'Environmental / Waste / Materials',
    scope: 'Coil storage, scrap metal, oils/lubricants, coatings, packaging, stormwater, and waste handling may create local/state requirements.',
    actions: ['Identify local facility requirements', 'Track scrap metal process', 'Document hazardous materials if any', 'Assign waste vendor and records owner'],
    owner: 'Operations + facility owner',
  },
  {
    domain: 'Insurance / Risk Transfer',
    scope: 'Large commercial buyers often need certificates of insurance, additional insured language, waiver/subrogation review, auto coverage, workers comp, product liability, and possibly bonding.',
    actions: ['Create insurance packet', 'Track COI requests', 'Review additional insured requirements', 'Track bonding needs by opportunity', 'Store expiration dates'],
    owner: 'Admin / finance',
  },
]
const internalComplianceDataObjects = [
  ['ComplianceRequirement', 'id, domain, jurisdiction, source_url, source_date, requirement_summary, applies_to, status, owner, review_date'],
  ['GovRegistration', 'entity_id, UEI, SAM_status, registration_type, renewal_date, owner, evidence_file_id, notes'],
  ['CodeReview', 'project_id, code_edition, jurisdiction, roof_slope, assembly_type, flagged_topics, reviewer, outcome, evidence_files'],
  ['BidOpportunity', 'buyer, source, due_date, scope, NAICS/PSC candidates, bond_required, insurance_required, bid_status, risk_score'],
  ['DocumentPacket', 'packet_type, product_family, version, approved_by, public_safe, effective_date, replacement_date'],
  ['SafetyProgram', 'machine_id, hazard_type, guard_status, LOTO_status, training_status, inspection_date, corrective_action'],
  ['ClaimApproval', 'claim_text, claim_type, source_evidence, reviewer, allowed_routes, status, expiration_date'],
  ['ComplianceTask', 'owner, due_date, domain, task_type, status, blocker, evidence_required, linked_project_or_bid'],
]
const internalComplianceExecutionPlan = [
  ['Week 1', 'Create compliance source library', 'Add official links, jurisdiction notes, code topics, OSHA topics, and owner assignments.'],
  ['Week 2', 'Build gov readiness tracker', 'Track entity, UEI/SAM decision, NAICS shortlist, vendor packet, insurance, and bid/no-bid checklist.'],
  ['Week 3', 'Build product document control', 'Version product data, finish sheets, warranty/exclusion language, submittal templates, and claim approvals.'],
  ['Week 4', 'Build safety and production compliance', 'Machine guarding review, LOTO checklist, PPE/training records, forklift/loading SOP, incident/corrective action process.'],
  ['Week 5', 'Connect to control panel', 'Create compliance tasks, bid approvals, code-review gates, and agent escalation events.'],
  ['Week 6', 'Review with advisors', 'Run the plan by insurance, accountant, legal, code/engineering, and government-contracting support before public claims.'],
]
const internalComplianceAgentRules = [
  ['Gov Opportunity Agent', 'May summarize bid opportunities and extract deadlines, but cannot recommend submission without bid/no-bid review.'],
  ['Code Review Agent', 'May flag code topics and missing data, but cannot issue code compliance determinations.'],
  ['Submittal Agent', 'May assemble approved documents, but cannot create new performance claims.'],
  ['Safety Agent', 'May generate checklist reminders, but cannot certify OSHA compliance.'],
  ['Claim Scanner Agent', 'Must block or escalate words like certified, approved, rated, compliant, engineered, fire-safe, wind-rated, government-ready unless evidence exists.'],
]
const internalRiskRegister = [
  {
    risk: 'NDA / private plan leakage',
    category: 'Confidentiality',
    severity: 'Critical',
    owner: 'Owner admin',
    trigger: 'Private numbers, owner contacts, projections, machine output, supplier pricing, or internal strategy appear in public code or public pages.',
    controls: ['Keep _doc untracked', 'Scan public folders before push', 'Use public-safe copy rules', 'Require review before APF/ASP publish'],
    next: 'Add automated public-copy scanner to build pipeline.',
  },
  {
    risk: 'Equity, IP, and domain ambiguity',
    category: 'Partnership',
    severity: 'Critical',
    owner: 'Founder / legal',
    trigger: 'No written agreement for domains, software, data, brand assets, equity, buyout, or acquisition path.',
    controls: ['Separate equity agreement', 'IP assignment/license terms', 'domain ownership ledger', 'software ownership clause'],
    next: 'Create advisor question list and draft agreement checklist.',
  },
  {
    risk: 'Equipment delay or capability mismatch',
    category: 'Manufacturing',
    severity: 'High',
    owner: 'Operations',
    trigger: 'Machine vendor specs, lead time, maintenance, profile capability, coil handling, or facility assumptions do not match launch plan.',
    controls: ['Vendor quote comparison', 'machine acceptance checklist', 'facility readiness checklist', 'maintenance plan'],
    next: 'Build manufacturing readiness route with vendor/spec tracker.',
  },
  {
    risk: 'Margin compression',
    category: 'Finance',
    severity: 'High',
    owner: 'Finance / estimating',
    trigger: 'Raw material cost, freight, labor, scrap, underpriced quotes, rush orders, or delivery cost reduces contribution margin.',
    controls: ['Quote approval gate', 'COGS categories', 'margin dashboard', 'supplier price review'],
    next: 'Connect quote model to plan-vs-actual margin metrics.',
  },
  {
    risk: 'Government/compliance overclaim',
    category: 'Gov / compliance',
    severity: 'High',
    owner: 'Compliance owner',
    trigger: 'Public pages or sales material imply government-ready, certified, code-compliant, fire-rated, wind-rated, or engineered status without evidence.',
    controls: ['Claim approval records', 'agent escalation rules', 'advisor review', 'document version control'],
    next: 'Add claim approval workflow and evidence library.',
  },
  {
    risk: 'Cash runway pressure',
    category: 'Finance',
    severity: 'High',
    owner: 'Finance',
    trigger: 'Operating reserve, receivables timing, inventory buys, debt service, or delayed sales reduce runway below threshold.',
    controls: ['Monthly cash tracker', 'purchase approval', 'receivables aging', 'scenario model'],
    next: 'Add runway and payback tracker to financial dashboard.',
  },
  {
    risk: 'Weak proof assets',
    category: 'Marketing / sales',
    severity: 'Medium',
    owner: 'Marketing / ops',
    trigger: 'Site relies on stock photos and lacks real machine, coil, production, delivery, and project proof.',
    controls: ['Photo shot list', 'proof asset tracker', 'replacement priority', 'route mapping'],
    next: 'Add evidence library and proof tracker records.',
  },
  {
    risk: 'Operational handoff failure',
    category: 'Workflow',
    severity: 'High',
    owner: 'Sales / production',
    trigger: 'Lead data, plan review, quote assumptions, order details, coil availability, or run sheets are retyped or lost between teams.',
    controls: ['One-source data fields', 'state machines', 'event log', 'approval gates'],
    next: 'Turn execution board tasks into D1-backed task records.',
  },
]
const internalFinancialScorecards = [
  {
    group: 'Revenue Engine',
    metrics: [
      ['Monthly revenue', 'Total booked or collected sales by month', 'accounting + CRM', 'Plan vs actual'],
      ['Sq ft sold', 'Panel volume sold by product family and state', 'quotes/orders', 'Target pacing'],
      ['Blended selling price', 'Revenue divided by sold sq ft', 'quote/order line items', 'Pricing pressure'],
      ['Quote conversion', 'Won quotes divided by sent quotes', 'quote pipeline', 'Sales quality'],
      ['Speed to quote', 'Median time from complete intake to quote sent', 'lead/quote timestamps', 'Customer experience'],
    ],
  },
  {
    group: 'Margin Engine',
    metrics: [
      ['Material cost / sqft', 'Coil and material cost per sold/produced sq ft', 'inventory + purchasing', 'COGS accuracy'],
      ['Variable cost / sqft', 'Material, labor, power, packaging, freight allocation', 'COGS model', 'Contribution margin'],
      ['Contribution margin / sqft', 'Selling price less variable cost', 'financial model', 'Break-even driver'],
      ['Gross margin %', 'Gross profit divided by revenue', 'accounting', 'Profitability'],
      ['Scrap / waste rate', 'Wasted material divided by material consumed', 'production runs', 'Operational efficiency'],
    ],
  },
  {
    group: 'Cash / Scale',
    metrics: [
      ['Fixed cost coverage', 'Contribution margin divided by monthly fixed cost', 'financial model', 'Break-even health'],
      ['Cash runway', 'Cash divided by monthly net burn', 'bank/accounting', 'Survival window'],
      ['Inventory turns', 'Material consumed vs inventory held', 'coil lots', 'Cash tied in coil'],
      ['Receivables aging', 'Outstanding invoices by age', 'accounting', 'Cash collection'],
      ['Payback progress', 'Cumulative profit vs initial investment baseline', 'private model', 'Investor/owner view'],
    ],
  },
]
const internalFinancialBuildSteps = [
  ['Data entry first', 'Create manual monthly input for plan, actual, variance, owner note, and source evidence before integrating accounting.'],
  ['Protect private baselines', 'Keep exact V2 targets in private financial worksheets or protected database records, not public bundles.'],
  ['Connect quote pipeline', 'Pull sent/won/lost quote counts, value, product mix, speed to quote, and lost reasons.'],
  ['Connect production', 'Track sq ft produced, coil consumed, scrap, labor allocation, machine downtime, and QA rework.'],
  ['Connect accounting', 'Later import revenue, COGS, fixed costs, receivables, cash balance, and tax categories.'],
]
const internalExecutionBoard = [
  {
    lane: 'Protect the Deal',
    tasks: [
      ['Draft equity/IP agreement checklist', 'Founder / legal', 'Open', 'Domains, software, data, brand, equity, buyout, acquisition path'],
      ['Create NDA-safe publishing rule set', 'Owner admin', 'In progress', 'Prevent private plan language from entering APF/ASP'],
      ['Build advisor question list', 'Founder', 'Open', 'Legal, CPA, insurance, gov-contracting, equipment vendor, code/engineering'],
    ],
  },
  {
    lane: 'Validate Revenue',
    tasks: [
      ['Interview contractor buyers', 'Sales', 'Open', 'Panel type, quote speed, price sensitivity, delivery expectations, repeat orders'],
      ['Complete product packets', 'Marketing / estimating', 'Open', 'PBR/R-panel, AG/Tuff Rib, Industrial Rib, trim/flashing, finishes'],
      ['Set quote conversion targets', 'Sales / finance', 'Open', 'Track sent, won, lost, lost reason, and speed to quote'],
    ],
  },
  {
    lane: 'Operational Readiness',
    tasks: [
      ['Build facility readiness checklist', 'Operations', 'Open', 'Coil storage, production flow, staging, office, loading, safety'],
      ['Build equipment comparison tracker', 'Operations', 'Open', 'Vendor, profile support, lead time, maintenance, training, acceptance'],
      ['Draft production SOPs', 'Operations', 'Open', 'Run sheet, QA, labels, bundles, pickup/delivery, maintenance'],
    ],
  },
  {
    lane: 'Financial Control',
    tasks: [
      ['Build private financial worksheet', 'Finance', 'Open', 'Plan target, actual, variance, assumptions, source evidence'],
      ['Define COGS categories', 'Finance / estimating', 'Open', 'Coil, labor, power, packaging, freight, scrap, rush costs'],
      ['Create margin approval gate', 'Estimator / owner', 'Open', 'No unusual quote leaves without margin review'],
    ],
  },
  {
    lane: 'Gov / Compliance',
    tasks: [
      ['Decide UEI/SAM path', 'Compliance owner', 'Open', 'Registration decision after legal entity and banking are clear'],
      ['Create NAICS/PSC shortlist', 'Compliance owner', 'Open', 'Manufacturing, panels, distribution, related bid categories'],
      ['Build claim approval library', 'Compliance owner', 'Open', 'Performance, code, fire, wind, warranty, government language'],
    ],
  },
]
const internalEvidenceLibrary = [
  {
    category: 'Business / Legal',
    owner: 'Founder / legal',
    purpose: 'Prove entity, ownership, IP, domain, partnership, and NDA boundaries before decisions or public claims.',
    evidence: ['entity docs', 'domain ownership records', 'IP/equity drafts', 'NDA records', 'advisor notes', 'signed agreements'],
    linked: ['/internal-risk-register', '/internal-business-plan', '/internal-advisor-questions'],
  },
  {
    category: 'Financial Baselines',
    owner: 'Finance',
    purpose: 'Keep private targets, source assumptions, actuals, variances, COGS inputs, and runway evidence out of public bundles.',
    evidence: ['private worksheets', 'bank/accounting exports', 'vendor cost quotes', 'margin approvals', 'monthly plan-vs-actual notes'],
    linked: ['/internal-financial-model', '/internal-business-plan', '/internal-risk-register'],
  },
  {
    category: 'Equipment / Manufacturing',
    owner: 'Operations',
    purpose: 'Validate machine capability, facility readiness, coil handling, production flow, safety, maintenance, and QA assumptions.',
    evidence: ['vendor quotes', 'machine spec sheets', 'layout drawings', 'maintenance docs', 'training docs', 'acceptance checklist'],
    linked: ['/internal-manufacturing-readiness', '/internal-gov-compliance', '/internal-execution-board'],
  },
  {
    category: 'Compliance / Government',
    owner: 'Compliance owner',
    purpose: 'Support public-sector readiness, vendor registration, NAICS/PSC mapping, code review, bid/no-bid, and claim approvals.',
    evidence: ['SAM/UEI notes', 'NAICS research', 'insurance certificates', 'bid packets', 'code references', 'claim approval records'],
    linked: ['/internal-gov-compliance', '/internal-risk-register', '/internal-advisor-questions'],
  },
  {
    category: 'Product Documentation',
    owner: 'Estimating / marketing',
    purpose: 'Control product packets, profile drawings, trim schedules, finish sheets, warranty language, and installation notes.',
    evidence: ['product data sheets', 'profile drawings', 'finish/color sheets', 'trim guides', 'submittal templates', 'revision logs'],
    linked: ['/internal-gov-compliance', '/internal-business-plan', '/internal-execution-board'],
  },
  {
    category: 'Market / Competitor Proof',
    owner: 'Marketing / sales',
    purpose: 'Ground sales strategy, pricing, positioning, and SEO in observed market evidence instead of assumptions.',
    evidence: ['competitor screenshots', 'pricing notes', 'contractor interview notes', 'dealer conversations', 'search result snapshots'],
    linked: ['/internal-ontology', '/internal-financial-model', '/internal-execution-board'],
  },
  {
    category: 'Real Photo / Operational Proof',
    owner: 'Marketing / ops',
    purpose: 'Replace stock photography with real machine, coil, production, loading, delivery, employee, warehouse, and project evidence.',
    evidence: ['machine photos', 'coil photos', 'bundle photos', 'truck loading photos', 'project photos', 'photo release approvals'],
    linked: ['/internal-risk-register', '/internal-business-plan', '/internal-control-panel'],
  },
]
const internalEvidenceWorkflow = [
  ['Capture', 'Add the source file, link, screenshot, note, or photo with owner and date.'],
  ['Classify', 'Mark as public-safe, private, NDA, needs legal review, needs code review, or expired.'],
  ['Link', 'Tie evidence to a claim, risk, task, quote, product packet, compliance topic, or financial metric.'],
  ['Review', 'Assign reviewer and next review date for legal, code, insurance, finance, or owner approval.'],
  ['Publish / Block', 'Allow public use only if evidence supports the claim and the route is approved.'],
]
const internalAdvisorQuestionGroups = [
  {
    advisor: 'Business / Partnership Lawyer',
    objective: 'Protect domain, software, brand, equity, buyout, acquisition, data, and decision rights before the business scales.',
    questions: [
      'Who owns the domains, codebase, business plan system, agent workflows, data model, and future software?',
      'How should equity, vesting, dilution, buyout, and acquisition rights be documented?',
      'Can the software be licensed to the operating company while remaining separately owned?',
      'What public claims, warranties, disclaimers, and terms need review before launch?',
    ],
  },
  {
    advisor: 'CPA / Finance Advisor',
    objective: 'Convert V2 financial assumptions into a real accounting, margin, cash runway, and tax model.',
    questions: [
      'What chart of accounts best separates panel sales, trim, delivery, materials, labor, freight, scrap, and fixed costs?',
      'How should inventory and coil purchases be accounted for?',
      'What margin and tax assumptions should the monthly dashboard track?',
      'What financing, reserve, or capitalization structure should be modeled?',
    ],
  },
  {
    advisor: 'Insurance Broker',
    objective: 'Make sure commercial, manufacturing, delivery, employee, product, and public-sector risks are covered.',
    questions: [
      'What insurance is needed before manufacturing begins?',
      'What limits do schools, municipalities, warehouses, and commercial contractors commonly require?',
      'Do product liability, completed operations, auto/fleet, workers comp, umbrella, or bonding needs apply?',
      'How should certificates, additional insured requests, and renewal dates be tracked?',
    ],
  },
  {
    advisor: 'Equipment Vendors',
    objective: 'Validate machine capability, output assumptions, maintenance, training, tooling, and facility requirements.',
    questions: [
      'Which profiles, gauges, coil widths, substrates, and finishes are supported?',
      'What are realistic throughput, scrap, changeover, operator, maintenance, and downtime assumptions?',
      'What facility power, floor, forklift, coil handling, and safety requirements apply?',
      'What acceptance testing and training should be required before payment completion?',
    ],
  },
  {
    advisor: 'Code / Engineering Advisor',
    objective: 'Prevent unsupported roof, fire, wind, structural, warranty, or code-compliance claims.',
    questions: [
      'What product claims require testing, engineering, product approvals, or jurisdiction-specific review?',
      'What should be included in submittal packages for commercial, school, municipal, warehouse, and agricultural work?',
      'How should California fire/WUI and Florida/coastal wind projects be flagged?',
      'Which language should be blocked from public pages without evidence?',
    ],
  },
  {
    advisor: 'Government Contracting Advisor',
    objective: 'Understand whether and when UEI/SAM, NAICS/PSC, vendor portals, certifications, and bid workflows make sense.',
    questions: [
      'Should the entity obtain UEI only, full SAM registration, or wait until the contracting entity is finalized?',
      'Which NAICS/PSC categories fit manufacturing, panel supply, roofing products, and related distribution?',
      'Which state/local vendor portals matter for California, Texas, Arizona, and Florida?',
      'What bid/no-bid, documentation, insurance, bonding, and compliance gates should be in the system?',
    ],
  },
]
const internalManufacturingReadiness = [
  {
    area: 'Facility',
    status: 'Criteria needed',
    objective: 'Confirm the building can support coil storage, roll forming, trim fabrication, staging, office, loading, safety, and future expansion.',
    tasks: ['define square footage needs', 'map production flow', 'confirm power and floor requirements', 'check truck access', 'define storage zones', 'confirm lease restrictions'],
    evidence: ['facility checklist', 'layout sketch', 'lease notes', 'photos', 'utility confirmation'],
  },
  {
    area: 'Equipment',
    status: 'Vendor validation',
    objective: 'Compare fixed and mobile machines by profile support, gauge/substrate limits, throughput, training, maintenance, tooling, and acceptance testing.',
    tasks: ['collect vendor quotes', 'compare machine specs', 'define acceptance test', 'document maintenance schedule', 'confirm parts/support', 'document operator training'],
    evidence: ['vendor quotes', 'spec sheets', 'acceptance checklist', 'training plan', 'maintenance docs'],
  },
  {
    area: 'Coil / Inventory',
    status: 'Program design',
    objective: 'Build the material program for coil suppliers, gauges, finishes, colors, reorder points, substitutions, handling, and cost tracking.',
    tasks: ['identify suppliers', 'define starting colors/gauges', 'set reorder points', 'create coil lot fields', 'define substitution approvals', 'track material costs'],
    evidence: ['supplier docs', 'coil spec sheets', 'finish chart', 'reorder model', 'substitution approval record'],
  },
  {
    area: 'Production Workflow',
    status: 'SOP draft',
    objective: 'Convert approved orders into run sheets, labels, bundles, QA checks, and loading instructions without retyping.',
    tasks: ['draft run sheet', 'define job labels', 'define bundle sequence', 'create QA checklist', 'define rework process', 'connect to order data'],
    evidence: ['run sheet template', 'label template', 'QA checklist', 'bundle photos', 'workflow diagram'],
  },
  {
    area: 'Safety / OSHA',
    status: 'Advisor review',
    objective: 'Create operator safety, guarding, LOTO, PPE, forklift/loading, incident, and corrective action workflows before production.',
    tasks: ['machine guarding review', 'draft LOTO checklist', 'define PPE', 'document training', 'forklift/loading SOP', 'incident log'],
    evidence: ['safety SOPs', 'training records', 'inspection records', 'incident/corrective action log'],
  },
  {
    area: 'Delivery / Pickup',
    status: 'Workflow design',
    objective: 'Coordinate customer pickup, local delivery, contractor bulk orders, labels, damage checks, signatures, and delivery cost tracking.',
    tasks: ['define pickup process', 'define truck loading checklist', 'create delivery release form', 'track freight/delivery costs', 'document damage policy'],
    evidence: ['loading checklist', 'delivery photos', 'signed release', 'cost log', 'customer pickup record'],
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
    title: 'Industrial Rib Intake Requirements',
    copy: 'The project facts the operating system must capture before estimating a commercial panel package.',
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

  if (path === 'internal-ontology') {
    return <InternalOntologyPage />
  }

  if (path === 'internal-implementation') {
    return <InternalImplementationPage />
  }

  if (path === 'internal-control-panel') {
    return <InternalControlPanelPage />
  }

  if (path === 'internal-business-plan') {
    return <InternalBusinessPlanPage />
  }

  if (path === 'internal-gov-compliance') {
    return <InternalGovCompliancePage />
  }

  if (path === 'internal-risk-register') {
    return <InternalRiskRegisterPage />
  }

  if (path === 'internal-financial-model') {
    return <InternalFinancialModelPage />
  }

  if (path === 'internal-execution-board') {
    return <InternalExecutionBoardPage />
  }

  if (path === 'internal-evidence-library') {
    return <InternalEvidenceLibraryPage />
  }

  if (path === 'internal-advisor-questions') {
    return <InternalAdvisorQuestionsPage />
  }

  if (path === 'internal-manufacturing-readiness') {
    return <InternalManufacturingReadinessPage />
  }

  if (path === 'internal-data-model') {
    return <InternalDataModelPage />
  }

  if (path === 'internal-workflows') {
    return <InternalWorkflowsPage />
  }

  if (path === 'internal-agents') {
    return <InternalAgentsPage />
  }

  if (path === 'internal-events') {
    return <InternalEventsPage />
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
    return <InternalStrategyPage />
  }

  return (
    <>
      <PageHero title="America’s Panel Fab" copy="Commercial metal roofing and architectural panel fabrication." />
      <Hero />
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
      </div>
    </section>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="top-contact-bar border-b border-slate-200 bg-slate-50 px-5 py-2 text-sm font-bold text-slate-700 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-between">
          <span>Internal master site • ontology • strategy • operations</span>
          <span className="text-[#f97316]">8190 private planning cockpit</span>
        </div>
      </div>
      <div className="site-header-row mx-auto max-w-7xl px-5 py-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="brand-lockup flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-slate-200 bg-slate-50 text-[#0b1f33]">
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
          <nav className="product-nav flex flex-wrap items-center gap-2 text-sm font-black text-slate-700">
            {productNavItems.map(([label, href]) => (
              <a key={href} href={href} className="nav-pill nav-pill-product">
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-4 grid gap-2">
          <nav className="nav-row nav-row-knowledge" aria-label="Internal knowledge navigation">
            <span className="nav-row-label">Knowledge</span>
            {internalKnowledgeNavItems.map(([label, href]) => (
              <a key={href} href={href} className="nav-pill">
                {label}
              </a>
            ))}
          </nav>
          <nav className="nav-row nav-row-management" aria-label="Internal management navigation">
            <span className="nav-row-label">Management</span>
            {managementNavItems.map(([label, href]) => (
              <a key={href} href={href} className="nav-pill nav-pill-management">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

function InternalStrategyPage() {
  return (
    <>
      <section className="section border-b border-slate-200 bg-white">
        <div className="max-w-5xl">
          <p className="eyebrow text-[#f97316]">Internal Master Site • Not Public Copy</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal text-[#0b1f33] lg:text-6xl">
            APF / ASP Brand, SEO & Funnel Strategy
          </h1>
          <p className="mt-6 max-w-4xl text-xl leading-8 text-slate-600">
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
            <a className="btn-primary mt-5" href="/internal-ontology">
              Open Full Ontology <ArrowRight size={18} />
            </a>
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

function InternalOntologyPage() {
  return (
    <>
      <section className="section border-b border-slate-200 bg-white">
        <div className="max-w-6xl">
          <p className="eyebrow text-[#f97316]">Internal Master Ontology • 8190 Only</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal text-[#0b1f33] lg:text-6xl">
            Metal Panel Business Ontology
          </h1>
          <p className="mt-6 max-w-5xl text-xl leading-8 text-slate-600">
            A private knowledge model for the APF / ASP brand system, product taxonomy,
            lead capture, manufacturing workflows, SEO separation, partner network,
            and future ERP/agentic software. This is operating architecture, not public copy.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ['#entity-classes', 'Brands', 'Company, product family, domains, disclosures'],
              ['#workflow-ontology', 'Demand', 'Contractors, owners, dealers, procurement'],
              ['#business-operations', 'Operations', 'Quote, upload, takeoff, production, delivery'],
              ['/internal-implementation', 'Software', 'ERP, portals, calculators, agents, trackers'],
              ['/internal-data-model', 'Implementation', 'Schemas, events, agents, rules, permissions'],
            ].map(([href, label, copy]) => (
              <a key={label} href={href} className="group rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-orange-200 hover:bg-white hover:shadow-lg">
                <p className="text-xl font-black text-[#0b1f33]">{label}</p>
                <p className="mt-2 leading-7 text-slate-600">{copy}</p>
                <span className="mt-4 inline-flex items-center text-sm font-black text-[#0b1f33] group-hover:text-[#f97316]">
                  Open build detail <ArrowRight className="ml-2" size={16} />
                </span>
              </a>
            ))}
          </div>
          <a className="btn-primary mt-8" href="/internal-implementation">
            Open Implementation Model <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <InternalOntologySection
        id="reality-plan"
        eyebrow="Reality Plan"
        title="What must be known and built to deliver the vision."
        copy="Each ontology bucket needs facts, artifacts, and a next build action. This is the bridge from strategy language to databases, SOPs, workflows, and agents."
      >
        <div className="grid gap-5">
          {internalOntologyRealityPlan.map((plan) => (
            <article key={plan.area} className="card">
              <div className="grid gap-6 lg:grid-cols-[0.22fr_0.31fr_0.27fr_0.2fr]">
                <div>
                  <p className="eyebrow text-[#f97316]">Build Area</p>
                  <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{plan.area}</h2>
                  <a href={plan.href} className="mt-5 inline-flex items-center font-black text-[#0b1f33] hover:text-[#f97316]">
                    Open related model <ArrowRight className="ml-2" size={18} />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0b1f33]">Need to know</h3>
                  <ul className="mt-4 grid gap-3">
                    {plan.needToKnow.map((item) => (
                      <li key={item} className="flex gap-3 leading-7 text-slate-700">
                        <SearchCheck className="mt-1 shrink-0 text-[#f97316]" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0b1f33]">Artifacts to create</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {plan.artifacts.map((artifact) => (
                      <span key={artifact} className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-black text-slate-700">
                        {artifact}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0b1f33]">Next action</h3>
                  <p className="mt-4 rounded border border-orange-200 bg-orange-50 p-4 font-semibold leading-7 text-slate-800">{plan.next}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        id="authority-gaps"
        eyebrow="Authority Gap Analysis"
        title="No: this is not full industry authority yet."
        copy="It is a strong internal skeleton. To become a true industry authority and database/agent foundation, these missing knowledge domains need structured records, source review, and operating workflows."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {internalOntologyAuthorityGaps.map((gap) => (
            <article key={gap.area} className="card">
              <p className="eyebrow text-[#f97316]">Missing Depth</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{gap.area}</h2>
              <p className="mt-4 leading-7 text-slate-600">{gap.gap}</p>
              <div className="mt-5 rounded border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">Build This</p>
                <p className="mt-2 font-semibold leading-7 text-slate-800">{gap.build}</p>
              </div>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        id="entity-classes"
        eyebrow="Entity Classes"
        title="Core entities by domain."
        copy="This is the noun layer: brands, buyers, products, manufacturing capabilities, lead objects, and future software modules."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {internalOntologyDomains.map((group) => (
            <article key={group.domain} className="card">
              <p className="eyebrow text-[#f97316]">Domain</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{group.domain}</h2>
              <div className="mt-5 grid gap-3">
                {group.entities.map(([entity, definition]) => (
                  <div key={entity} className="rounded border border-slate-200 bg-slate-50 p-4">
                    <p className="font-black text-[#0b1f33]">{entity}</p>
                    <p className="mt-2 leading-7 text-slate-600">{definition}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        id="relationship-graph"
        eyebrow="Relationship Graph"
        title="Subject -> predicate -> object relationships."
        copy="These triples can later map to a real knowledge graph, CRM schema, analytics taxonomy, or operating database."
      >
        <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-lg">
          <table className="product-proof-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Predicate</th>
                <th>Object</th>
              </tr>
            </thead>
            <tbody>
              {internalOntologyRelations.map(([subject, predicate, object]) => (
                <tr key={`${subject}-${predicate}-${object}`}>
                  <th>{subject}</th>
                  <td>{predicate}</td>
                  <td>{object}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        id="workflow-ontology"
        eyebrow="Workflows"
        title="Process ontology from visitor to fulfilled order."
        copy="The verb layer: actions, transitions, and handoffs that become software workflows."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {internalOntologyWorkflows.map((workflow) => (
            <article key={workflow.name} className="card">
              <p className="eyebrow text-[#f97316]">Workflow</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{workflow.name}</h2>
              <ol className="mt-5 grid gap-3">
                {workflow.steps.map((step, index) => (
                  <li key={step} className="flex gap-3 leading-7 text-slate-700">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-orange-200 bg-orange-50 text-sm font-black text-[#c2410c]">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        id="machine-ontology"
        eyebrow="Machine Ontology"
        title="Machines, tooling, and machine-aware data."
        copy="A fuller industry view needs equipment, tooling, production constraints, and machine data that can later feed scheduling software."
      >
        <OntologyGroupedCards groups={internalOntologyMachineSystems} titleKey="category" itemKey="items" />
      </InternalOntologySection>

      <InternalOntologySection
        id="product-ontology"
        eyebrow="Product Ontology"
        title="Products, panel families, and fabricated package taxonomy."
        copy="This maps immediate revenue products and future expansion categories across roofing, siding, trim, accessories, and architectural systems."
      >
        <OntologyGroupedCards groups={internalOntologyProductTaxonomy} titleKey="family" itemKey="products" />
      </InternalOntologySection>

      <InternalOntologySection
        id="data-objects"
        eyebrow="Data Objects"
        title="ERP and agentic software object model."
        copy="These records can become tables, API resources, agent memory objects, CRM fields, or event payloads."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {internalOntologyDataObjects.map(([object, fields]) => (
            <article key={object} className="rounded border border-slate-200 bg-white p-5 shadow-lg">
              <h2 className="text-xl font-black text-[#0b1f33]">{object}</h2>
              <p className="mt-3 font-mono text-sm leading-7 text-slate-600">{fields}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        id="business-operations"
        eyebrow="Business Operations"
        title="Sales, estimating, production, finance, and admin ontology."
        copy="The vision becomes investable when the business workflows are explicit enough to become software, SOPs, dashboards, and accountability."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {internalOntologyBusinessOps.map((group) => (
            <article key={group.area} className="card">
              <p className="eyebrow text-[#f97316]">Business Ops</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{group.area}</h2>
              <ul className="mt-5 grid gap-3">
                {group.details.map((detail) => (
                  <li key={detail} className="flex gap-3 leading-7 text-slate-700">
                    <CheckCircle2 className="mt-1 shrink-0 text-[#f97316]" size={19} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Marketing Ontology"
        title="Revenue marketing, authority marketing, regional growth, and trust assets."
        copy="This separates ASP conversion marketing from APF authority marketing while still letting both brands reinforce the same business."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {internalOntologyMarketing.map((group) => (
            <article key={group.channel} className="card">
              <p className="eyebrow text-[#f97316]">Marketing Channel</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{group.channel}</h2>
              <ul className="mt-5 grid gap-3">
                {group.plays.map((play) => (
                  <li key={play} className="flex gap-3 leading-7 text-slate-700">
                    <SearchCheck className="mt-1 shrink-0 text-[#f97316]" size={19} />
                    <span>{play}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Competitive Analysis"
        title="Competitors, strengths, weaknesses, and response strategy."
        copy="The goal is not to imitate competitors visually. The goal is to outperform their credibility, clarity, workflow, documentation, and buying experience."
      >
        <div className="grid gap-5">
          {internalOntologyCompetitors.map((competitor) => (
            <article key={competitor.competitor} className="card">
              <p className="eyebrow text-[#f97316]">Competitor</p>
              <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{competitor.competitor}</h2>
              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                {[
                  ['Strengths', competitor.strengths],
                  ['Weaknesses', competitor.weaknesses],
                  ['Response', competitor.response],
                ].map(([label, items]) => (
                  <div key={label as string} className="rounded border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-black text-[#0b1f33]">{label as string}</h3>
                    <ul className="mt-4 grid gap-3">
                      {(items as string[]).map((item) => (
                        <li key={item} className="leading-7 text-slate-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Expansion Roadmap"
        title="How the whole industry vision expands over time."
        copy="A staged model from immediate panel sales to manufacturer authority, operations software, portals, regional partners, and industry network."
      >
        <div className="grid gap-4">
          {internalOntologyExpansion.map(([phase, detail]) => (
            <article key={phase} className="grid gap-3 rounded border border-slate-200 bg-white p-5 shadow-lg md:grid-cols-[0.28fr_0.72fr] md:items-center">
              <h2 className="text-xl font-black text-[#0b1f33]">{phase}</h2>
              <p className="leading-7 text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="SEO Ownership"
        title="Keyword and route ownership map."
        copy="This keeps APF authority content from competing with ASP product-conversion pages."
      >
        <div className="grid gap-4">
          {internalOntologySeoMap.map(([domain, keyword, route]) => (
            <article key={`${domain}-${keyword}`} className="grid gap-3 rounded border border-slate-200 bg-white p-5 shadow-lg md:grid-cols-[0.2fr_0.32fr_0.48fr] md:items-center">
              <p className="font-black text-[#f97316]">{domain}</p>
              <p className="text-xl font-black text-[#0b1f33]">{keyword}</p>
              <p className="leading-7 text-slate-600">{route}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Governance"
        title="Publishing, repo, and NDA boundaries."
        copy="The guardrail layer. This is what prevents private strategy from leaking back into public sites."
      >
        <div className="grid gap-3">
          {internalOntologyGovernance.map((rule) => (
            <p key={rule} className="flex gap-3 rounded border border-slate-200 bg-white p-4 font-semibold leading-7 text-slate-700 shadow">
              <ShieldCheck className="mt-1 shrink-0 text-[#f97316]" size={20} />
              {rule}
            </p>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Vision Principles"
        title="The whole thesis in operating rules."
        copy="These principles keep the vision coherent as it moves from website to sales system to manufacturing operating software."
      >
        <div className="grid gap-3">
          {internalOntologyVisionPrinciples.map((principle) => (
            <p key={principle} className="flex gap-3 rounded border border-slate-200 bg-white p-4 font-semibold leading-7 text-slate-700 shadow">
              <Award className="mt-1 shrink-0 text-[#f97316]" size={20} />
              {principle}
            </p>
          ))}
        </div>
      </InternalOntologySection>
    </>
  )
}

function InternalImplementationPage() {
  return (
    <>
      <section className="section border-b border-slate-200 bg-white">
        <div className="max-w-6xl">
          <p className="eyebrow text-[#f97316]">Internal Implementation Ontology • 8190 Only</p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal text-[#0b1f33] lg:text-6xl">
            Database, Workflow & Agent Build Model
          </h1>
          <p className="mt-6 max-w-5xl text-xl leading-8 text-slate-600">
            This turns the industry ontology into buildable system architecture:
            tables, fields, enums, state machines, events, automation rules, agent contracts,
            permissions, and MVP delivery order.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ['/internal-data-model', 'Database', `${implementationTables.length} core tables`],
              ['/internal-data-model', 'Enums', `${implementationEnums.length} controlled vocabularies`],
              ['/internal-events', 'Events', `${implementationEvents.length} automation triggers`],
              ['/internal-agents', 'Agents', `${implementationAgents.length} AI role contracts`],
            ].map(([href, label, copy]) => (
              <a key={label} href={href} className="group rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-orange-200 hover:bg-white hover:shadow-lg">
                <p className="text-xl font-black text-[#0b1f33]">{label}</p>
                <p className="mt-2 leading-7 text-slate-600">{copy}</p>
                <span className="mt-4 inline-flex items-center text-sm font-black text-[#0b1f33] group-hover:text-[#f97316]">
                  Open build page <ArrowRight className="ml-2" size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <InternalOntologySection
        eyebrow="Implementation Deep Dives"
        title="Split build model by implementation concern."
        copy="Use the focused pages below when building schemas, workflow engines, event queues, and AI agents."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['/internal-data-model', 'Data Model', 'Tables, fields, enums, permissions, and schema artifact.'],
            ['/internal-workflows', 'Workflows', 'State machines, transitions, automation rules, and MVP order.'],
            ['/internal-agents', 'Agents', 'Agent contracts, inputs, tools, outputs, escalation rules, and permissions.'],
            ['/internal-events', 'Events', 'Event taxonomy, triggers, payload guidance, and automation handoff.'],
          ].map(([href, title, copy]) => (
            <a key={href} href={href} className="card group block">
              <p className="eyebrow text-[#f97316]">Build Page</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              <span className="mt-5 inline-flex items-center font-black text-[#0b1f33] group-hover:text-[#f97316]">
                Open <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Build Artifacts"
        title="Generated internal files for implementation."
        copy="These repo files are the next handoff point for database migrations, workflow tickets, and agent implementation."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {implementationArtifacts.map(([path, description]) => (
            <article key={path} className="rounded border border-slate-200 bg-white p-5 shadow-lg">
              <h2 className="font-mono text-lg font-black text-[#0b1f33]">{path}</h2>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Database Schema"
        title="Tables, purposes, fields, and relationship hints."
        copy="This is enough to start a D1/Postgres/Supabase schema draft, but it still needs final field naming, migrations, constraints, and indexes."
      >
        <div className="grid gap-5">
          {implementationTables.map((table) => (
            <article key={table.table} className="card">
              <p className="eyebrow text-[#f97316]">Table</p>
              <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{table.table}</h2>
              <p className="mt-3 text-lg leading-8 text-slate-600">{table.purpose}</p>
              <div className="mt-6 overflow-hidden rounded border border-slate-200">
                <table className="product-proof-table">
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Type</th>
                      <th>Rule</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.fields.map(([field, type, rule]) => (
                      <tr key={`${table.table}-${field}`}>
                        <th>{field}</th>
                        <td>{type}</td>
                        <td>{rule}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Controlled Vocabulary"
        title="Enums that keep humans, forms, automations, and agents aligned."
        copy="Enums prevent the same concept from becoming five spellings across forms, databases, dashboards, and agent prompts."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {implementationEnums.map(([name, values]) => (
            <article key={name} className="rounded border border-slate-200 bg-white p-5 shadow-lg">
              <h2 className="text-xl font-black text-[#0b1f33]">{name}</h2>
              <p className="mt-3 font-mono text-sm leading-7 text-slate-600">{values}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="State Machines"
        title="Allowed lifecycle states and transitions."
        copy="Automation becomes safer when each object has known states and explicit transitions."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {implementationStateMachines.map((machine) => (
            <article key={machine.entity} className="card">
              <p className="eyebrow text-[#f97316]">State Machine</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{machine.entity}</h2>
              <p className="mt-4 font-mono text-sm leading-7 text-slate-600">{machine.states.join(' -> ')}</p>
              <ul className="mt-5 grid gap-3">
                {machine.transitions.map((transition) => (
                  <li key={transition} className="flex gap-3 leading-7 text-slate-700">
                    <ArrowRight className="mt-1 shrink-0 text-[#f97316]" size={18} />
                    <span>{transition}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Event Taxonomy"
        title="Events that drive automations, timelines, and AI agents."
        copy="Events are the nervous system of the future ERP. They trigger tasks, notifications, agent runs, status changes, and audit logs."
      >
        <div className="grid gap-3">
          {implementationEvents.map(([event, meaning]) => (
            <article key={event} className="grid gap-3 rounded border border-slate-200 bg-white p-5 shadow-lg md:grid-cols-[0.28fr_0.72fr] md:items-center">
              <p className="font-mono text-sm font-black text-[#f97316]">{event}</p>
              <p className="leading-7 text-slate-600">{meaning}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Automation Rules"
        title="Business rules that can become code, queues, validations, and alerts."
        copy="These are intentionally specific enough to become tickets or tests."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {implementationAutomationRules.map(([rule, detail]) => (
            <article key={rule} className="card">
              <p className="eyebrow text-[#f97316]">Rule</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{rule}</h2>
              <p className="mt-3 leading-7 text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="AI Agents"
        title="Agent roles, inputs, tools, outputs, and escalation rules."
        copy="Each agent is scoped like a worker with permissions, not a vague chatbot."
      >
        <div className="grid gap-5">
          {implementationAgents.map((agent) => (
            <article key={agent.name} className="card">
              <p className="eyebrow text-[#f97316]">Agent Contract</p>
              <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{agent.name}</h2>
              <p className="mt-3 text-lg leading-8 text-slate-600">{agent.mission}</p>
              <div className="mt-6 grid gap-4 lg:grid-cols-4">
                {[
                  ['Inputs', agent.inputs],
                  ['Tools', agent.tools],
                  ['Outputs', agent.outputs],
                  ['Escalation', [agent.escalation]],
                ].map(([label, items]) => (
                  <div key={label as string} className="rounded border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-lg font-black text-[#0b1f33]">{label as string}</h3>
                    <ul className="mt-3 grid gap-2">
                      {(items as string[]).map((item) => (
                        <li key={item} className="leading-7 text-slate-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Permissions"
        title="Roles and access boundaries."
        copy="Permissions matter early because private pricing, margins, NDA facts, and agent actions must not leak."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {implementationPermissions.map(([role, access]) => (
            <article key={role} className="rounded border border-slate-200 bg-white p-5 shadow-lg">
              <h2 className="font-mono text-lg font-black text-[#0b1f33]">{role}</h2>
              <p className="mt-3 leading-7 text-slate-600">{access}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="MVP Build Order"
        title="Practical build sequence from lead capture to ERP."
        copy="This prevents trying to build the whole operating system before the first reliable database and workflow loops exist."
      >
        <div className="grid gap-4">
          {implementationMvpBacklog.map(([phase, detail]) => (
            <article key={phase} className="grid gap-3 rounded border border-slate-200 bg-white p-5 shadow-lg md:grid-cols-[0.18fr_0.82fr] md:items-center">
              <h2 className="text-xl font-black text-[#0b1f33]">{phase}</h2>
              <p className="leading-7 text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>
    </>
  )
}

function InternalControlPanelPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Internal Control Panel • 8190 Only"
        title="Operations Dashboard & Agent Management"
        copy="The private command center for future lead intake, plan review, quoting, production, approvals, event logs, content operations, and AI agent control."
        stats={[
          [`${internalControlQueues.length}`, 'operating queues'],
          [`${internalControlAgents.length}`, 'agent roles'],
          [`${internalControlApprovals.length}`, 'approval gates'],
          ['0', 'live records connected'],
        ]}
      />

      <InternalOntologySection
        eyebrow="Control Panel Role"
        title="This is where the business gets operated."
        copy="Ontology explains the business, the build model explains the system, and the control panel becomes the daily operating surface once real data is connected."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Today', 'Static scaffold for what the dashboard must become. Use it to keep queues, agents, approvals, and events visible while the data layer is built.'],
            ['Next', 'Connect D1 tables, R2 uploads, Cloudflare Pages Functions, event records, task queues, and agent run records.'],
            ['Later', 'Turn this into the ERP/CRM/agent-control interface for sales, estimating, production, content, and management.'],
          ].map(([phase, copy]) => (
            <article key={phase} className="card">
              <p className="eyebrow text-[#f97316]">Mode</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{phase}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-primary" href="/internal-execution-board">
            Open Execution Board <ArrowRight size={18} />
          </a>
          <a className="btn-secondary" href="/internal-risk-register">
            <ShieldCheck size={18} /> Risk Register
          </a>
          <a className="btn-secondary" href="/internal-financial-model">
            <FileText size={18} /> Financial Model
          </a>
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Operating Queues"
        title="The first dashboard modules."
        copy="Each queue maps to tables, workflows, events, tasks, and future agent behavior."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {internalControlQueues.map((queue) => (
            <article key={queue.name} className="card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-[#f97316]">Queue</p>
                  <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{queue.name}</h2>
                </div>
                <div className="text-right">
                  <p className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-black text-slate-700">{queue.status}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{queue.count}</p>
                </div>
              </div>
              <p className="mt-4 leading-7 text-slate-600">{queue.purpose}</p>
              <p className="mt-4 font-black text-[#0b1f33]">Owner: {queue.owner}</p>
              <div className="mt-5 grid gap-3">
                {queue.buildNext.map((item) => (
                  <p key={item} className="flex gap-3 rounded border border-slate-200 bg-slate-50 p-3 font-semibold leading-7 text-slate-700">
                    <CheckCircle2 className="mt-1 shrink-0 text-[#f97316]" size={18} />
                    {item}
                  </p>
                ))}
              </div>
              <a href={queue.href} className="mt-5 inline-flex items-center font-black text-[#0b1f33] hover:text-[#f97316]">
                Open source model <ArrowRight className="ml-2" size={18} />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-primary" href="/internal-execution-board">
            Open Execution Board <ArrowRight size={18} />
          </a>
          <a className="btn-secondary" href="/internal-financial-model">
            <FileText size={18} /> Open Financial Model
          </a>
          <a className="btn-secondary" href="/internal-risk-register">
            <ShieldCheck size={18} /> Open Risk Register
          </a>
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Agent Console"
        title="Agent roles, current status, and safety boundary."
        copy="Agents should be managed like scoped workers: named mission, visible status, clear outputs, and mandatory escalation rules."
      >
        <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-lg">
          <table className="product-proof-table">
            <thead>
              <tr>
                <th>Agent</th>
                <th>Status</th>
                <th>Job</th>
                <th>Guardrail</th>
              </tr>
            </thead>
            <tbody>
              {internalControlAgents.map(([agent, status, job, guardrail]) => (
                <tr key={agent}>
                  <th>{agent}</th>
                  <td>{status}</td>
                  <td>{job}</td>
                  <td>{guardrail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-primary" href="/internal-agents">
            Open Agent Contracts <ArrowRight size={18} />
          </a>
          <a className="btn-secondary" href="/internal-events">
            <FileText size={18} /> Open Event Model
          </a>
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Approval Queue"
        title="Human review gates before automation can touch the outside world."
        copy="The control panel must make approvals obvious. This is how the system protects pricing, private facts, legal claims, and customer commitments."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {internalControlApprovals.map(([approval, rule]) => (
            <article key={approval} className="rounded border border-slate-200 bg-white p-5 shadow-lg">
              <ShieldCheck className="text-[#f97316]" />
              <h2 className="mt-4 text-2xl font-black text-[#0b1f33]">{approval}</h2>
              <p className="mt-3 leading-7 text-slate-600">{rule}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Event Stream"
        title="What the live activity log should show first."
        copy="Start with a readable event stream, then connect it to the events table, tasks, agent_runs, and notifications."
      >
        <div className="grid gap-3">
          {internalControlEvents.map(([event, meaning]) => (
            <article key={event} className="grid gap-3 rounded border border-slate-200 bg-white p-5 shadow-lg md:grid-cols-[0.28fr_0.72fr] md:items-center">
              <p className="font-mono text-sm font-black text-[#f97316]">{event}</p>
              <p className="leading-7 text-slate-600">{meaning}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Build Sequence"
        title="How the static control panel becomes real software."
        copy="This is the shortest practical path from dashboard scaffold to functioning internal operating system."
      >
        <div className="grid gap-4">
          {[
            ['1', 'Connect D1 schema', 'Use internal/schema.sql as the migration draft, then create real tables for leads, files, projects, tasks, events, quotes, and agent runs.'],
            ['2', 'Wire intake and uploads', 'Point quote/upload APIs at D1 and R2, preserving source route, UTM data, file metadata, and task creation.'],
            ['3', 'Render live queues', 'Replace static queue counts with database queries for lead inbox, file review, quote pipeline, approvals, and events.'],
            ['4', 'Add agent run records', 'Store each agent run with input payload, output payload, confidence, escalation reason, and linked trigger event.'],
            ['5', 'Create approval actions', 'Add approve, reject, request changes, assign owner, and mark reviewed workflows before external sends.'],
            ['6', 'Add role permissions', 'Limit pricing, margins, private strategy, supplier cost, and agent controls to the right internal roles.'],
          ].map(([step, title, detail]) => (
            <article key={step} className="grid gap-4 rounded border border-slate-200 bg-white p-5 shadow-lg md:grid-cols-[0.1fr_0.25fr_0.65fr] md:items-center">
              <p className="text-3xl font-black text-[#f97316]">{step}</p>
              <h2 className="text-xl font-black text-[#0b1f33]">{title}</h2>
              <p className="leading-7 text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>
    </>
  )
}

function InternalBusinessPlanPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Internal Business Plan V3 • Strictly Confidential • 8190 Only"
        title="Business Plan, Execution Scorecard & Readiness Gaps"
        copy="A private V3 planning surface based on the confidential V2 PDF. Exact financial assumptions, machine output, private contacts, and NDA details stay in _doc and must never be copied to beta or public sites."
        stats={[
          [`${internalBusinessPlanSections.length}`, 'plan pillars'],
          [`${internalBusinessPlanExecutionMetrics.length}`, 'execution metrics'],
          [`${internalBusinessPlanGovReadiness.length}`, 'gov readiness tracks'],
          ['Private', 'no public deployment'],
        ]}
      />

      <InternalOntologySection
        eyebrow="Confidentiality Boundary"
        title="Do not let the business plan leak into APF beta or ASP public."
        copy="The 8190 plan can discuss targets, margin logic, government readiness, ownership risk, and operating controls. Public sites should only contain verified customer-safe claims."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Keep private', 'Startup investment, machine output, staffing cost, margins, break-even, projections, owner/private contacts, supplier pricing, and partnership terms.'],
            ['Public safe after review', 'Product categories, quote workflow, plan upload workflow, contractor support, manufacturing capability, service areas, and real proof assets.'],
            ['Needs legal/business review', 'Government contracting claims, performance claims, warranty language, made-in-USA wording, certifications, and equity/IP ownership.'],
          ].map(([title, copy]) => (
            <article key={title} className="card">
              <ShieldCheck className="text-[#f97316]" />
              <h2 className="mt-4 text-2xl font-black text-[#0b1f33]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Business Plan V3"
        title="Plan pillars translated into execution requirements."
        copy="V2 is a financial and operating concept. V3 turns it into decisions, missing details, dashboards, and control-panel workflows."
      >
        <div className="grid gap-5">
          {internalBusinessPlanSections.map((section) => (
            <article key={section.section} className="card">
              <div className="grid gap-6 lg:grid-cols-[0.24fr_0.34fr_0.2fr_0.22fr]">
                <div>
                  <p className="eyebrow text-[#f97316]">Plan Pillar</p>
                  <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{section.section}</h2>
                </div>
                <p className="text-lg leading-8 text-slate-600">{section.v3}</p>
                <div>
                  <h3 className="text-lg font-black text-[#0b1f33]">Decisions</h3>
                  <ul className="mt-3 grid gap-2">
                    {section.decisions.map((decision) => (
                      <li key={decision} className="leading-7 text-slate-700">{decision}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#0b1f33]">Still Needed</h3>
                  <ul className="mt-3 grid gap-2">
                    {section.missing.map((item) => (
                      <li key={item} className="flex gap-2 leading-7 text-slate-700">
                        <ArrowRight className="mt-1 shrink-0 text-[#f97316]" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Execution Scorecard"
        title="Track plan vs actual every month."
        copy="This is the first version of the operating scorecard. Later it should connect to accounting, CRM, quoting, production, and inventory data."
      >
        <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-lg">
          <table className="product-proof-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>What It Tracks</th>
                <th>Formula</th>
                <th>Build Requirement</th>
              </tr>
            </thead>
            <tbody>
              {internalBusinessPlanExecutionMetrics.map(([metric, tracks, formula, build]) => (
                <tr key={metric}>
                  <th>{metric}</th>
                  <td>{tracks}</td>
                  <td>{formula}</td>
                  <td>{build}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ['Month', 'YYYY-MM'],
            ['Plan', 'private target'],
            ['Actual', 'entered or imported'],
            ['Variance', 'actual - plan'],
          ].map(([label, value]) => (
            <article key={label} className="rounded border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-black text-[#0b1f33]">{value}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Government / Commercial Readiness"
        title="What must be built before serious public-sector positioning."
        copy="This is not public marketing copy. It is the private checklist for becoming credible enough to pursue institutional, municipal, school, and government-adjacent work."
      >
        <div className="grid gap-5">
          {internalBusinessPlanGovReadiness.map((track) => (
            <article key={track.area} className="card">
              <div className="grid gap-5 lg:grid-cols-[0.25fr_0.45fr_0.3fr]">
                <div>
                  <p className="eyebrow text-[#f97316]">Readiness Track</p>
                  <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{track.area}</h2>
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#0b1f33]">Needed</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {track.needed.map((item) => (
                      <span key={item} className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-black text-slate-700">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded border border-orange-200 bg-orange-50 p-4">
                  <h3 className="text-lg font-black text-[#0b1f33]">Risk</h3>
                  <p className="mt-2 leading-7 text-slate-700">{track.risk}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a className="btn-primary mt-8" href="/internal-gov-compliance">
          Open Gov / Compliance Ontology <ArrowRight size={18} />
        </a>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Plan Gaps"
        title="Additional details needed to make V3 investable and executable."
        copy="These are the missing pieces that should become owner tasks, advisor questions, legal questions, or dashboard modules."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {internalBusinessPlanGaps.map(([gap, detail]) => (
            <article key={gap} className="card">
              <p className="eyebrow text-[#f97316]">Gap</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{gap}</h2>
              <p className="mt-3 leading-7 text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Milestones"
        title="Turn the plan into an execution tracker."
        copy="The Business Plan page should eventually store owner, due date, status, evidence, risk, and next action for each milestone."
      >
        <div className="grid gap-4">
          {internalBusinessPlanMilestones.map(([phase, title, detail]) => (
            <article key={phase} className="grid gap-4 rounded border border-slate-200 bg-white p-5 shadow-lg md:grid-cols-[0.12fr_0.25fr_0.63fr] md:items-center">
              <p className="text-2xl font-black text-[#f97316]">{phase}</p>
              <h2 className="text-xl font-black text-[#0b1f33]">{title}</h2>
              <p className="leading-7 text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>
    </>
  )
}

function InternalGovCompliancePage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Gov / Codes / Compliance • 8190 Only"
        title="Government Readiness, Code Controls & Compliance Ontology"
        copy="A private operating model for the upside lane: public-sector readiness, commercial documentation, building-code guardrails, OSHA/safety programs, claim approvals, and compliance execution tracking."
        stats={[
          [`${internalGovReadinessTracks.length}`, 'gov readiness tracks'],
          [`${internalCodeComplianceDomains.length}`, 'compliance domains'],
          [`${internalComplianceDataObjects.length}`, 'data objects'],
          ['Verify', 'before public claims'],
        ]}
      />

      <InternalOntologySection
        eyebrow="Important Boundary"
        title="This is an internal readiness system, not legal or code advice."
        copy="Use this page to organize questions, evidence, owners, and review gates. Final determinations should come from qualified legal, insurance, accounting, code, engineering, safety, or government-contracting advisors."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['/internal-business-plan', 'Business Plan', 'Connect readiness to revenue, margins, public-sector upside, and execution milestones.'],
            ['/internal-control-panel', 'Control Panel', 'Turn readiness tasks into queues, approvals, events, and owner follow-up.'],
            ['/internal-data-model', 'Data Model', 'Add compliance records, bid opportunities, document packets, and claim approvals.'],
            ['/internal-agents', 'Agents', 'Scope agents so they flag and escalate instead of making unsupported claims.'],
          ].map(([href, title, copy]) => (
            <a key={href} href={href} className="card group block">
              <p className="eyebrow text-[#f97316]">Related Model</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              <span className="mt-5 inline-flex items-center font-black text-[#0b1f33] group-hover:text-[#f97316]">
                Open <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Source Library"
        title="Official sources to track before making claims."
        copy="These are starting anchors, not a complete legal library. Each requirement should be reviewed by jurisdiction, code edition, project scope, and advisor."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {internalGovComplianceSources.map(([name, detail, href]) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" className="card group block">
              <p className="eyebrow text-[#f97316]">Official / Reference Source</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{name}</h2>
              <p className="mt-3 leading-7 text-slate-600">{detail}</p>
              <span className="mt-5 inline-flex items-center font-black text-[#0b1f33] group-hover:text-[#f97316]">
                Review source <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Government Readiness"
        title="Public-sector capability should be earned, tracked, and verified."
        copy="The upside is real, but the system needs entity readiness, registration decisions, document control, risk scoring, and contract review before strong claims."
      >
        <div className="grid gap-5">
          {internalGovReadinessTracks.map((track) => (
            <article key={track.track} className="card">
              <div className="grid gap-6 lg:grid-cols-[0.22fr_0.28fr_0.32fr_0.18fr]">
                <div>
                  <p className="eyebrow text-[#f97316]">Track</p>
                  <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{track.track}</h2>
                </div>
                <p className="text-lg leading-8 text-slate-600">{track.objective}</p>
                <div>
                  <h3 className="text-lg font-black text-[#0b1f33]">Tasks</h3>
                  <ul className="mt-3 grid gap-2">
                    {track.tasks.map((task) => (
                      <li key={task} className="flex gap-2 leading-7 text-slate-700">
                        <CheckCircle2 className="mt-1 shrink-0 text-[#f97316]" size={16} />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#0b1f33]">Evidence</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {track.evidence.map((item) => (
                      <span key={item} className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-black text-slate-700">{item}</span>
                    ))}
                  </div>
                  <p className="mt-4 rounded border border-orange-200 bg-orange-50 p-3 text-sm font-bold leading-6 text-slate-800">{track.gate}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Codes & Compliance Domains"
        title="What the system must flag before quoting or publishing claims."
        copy="The goal is not to make the website the code expert. The goal is to prevent unsupported claims and route risky projects to review."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {internalCodeComplianceDomains.map((domain) => (
            <article key={domain.domain} className="card">
              <p className="eyebrow text-[#f97316]">Domain</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{domain.domain}</h2>
              <p className="mt-3 leading-7 text-slate-600">{domain.scope}</p>
              <p className="mt-4 font-black text-[#0b1f33]">Owner: {domain.owner}</p>
              <ul className="mt-5 grid gap-3">
                {domain.actions.map((action) => (
                  <li key={action} className="flex gap-3 leading-7 text-slate-700">
                    <ShieldCheck className="mt-1 shrink-0 text-[#f97316]" size={18} />
                    {action}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Data Model Additions"
        title="Records needed for a real compliance operating system."
        copy="These objects should eventually become tables, forms, dashboards, events, permissions, and agent inputs."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {internalComplianceDataObjects.map(([object, fields]) => (
            <article key={object} className="rounded border border-slate-200 bg-white p-5 shadow-lg">
              <h2 className="font-mono text-lg font-black text-[#0b1f33]">{object}</h2>
              <p className="mt-3 font-mono text-sm leading-7 text-slate-600">{fields}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Action Plan"
        title="Six-week buildout for the compliance control layer."
        copy="This turns the opportunity into execution: source library, trackers, document control, safety, control-panel queues, and advisor review."
      >
        <div className="grid gap-4">
          {internalComplianceExecutionPlan.map(([phase, title, detail]) => (
            <article key={phase} className="grid gap-4 rounded border border-slate-200 bg-white p-5 shadow-lg md:grid-cols-[0.12fr_0.25fr_0.63fr] md:items-center">
              <p className="text-2xl font-black text-[#f97316]">{phase}</p>
              <h2 className="text-xl font-black text-[#0b1f33]">{title}</h2>
              <p className="leading-7 text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>

      <InternalOntologySection
        eyebrow="Agent Rules"
        title="Agents should help manage compliance, not certify it."
        copy="This is the core safety rule: agents can summarize, flag, draft, organize, and escalate. They cannot approve legal, code, safety, or performance claims."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {internalComplianceAgentRules.map(([agent, rule]) => (
            <article key={agent} className="card">
              <p className="eyebrow text-[#f97316]">Agent Boundary</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{agent}</h2>
              <p className="mt-3 leading-7 text-slate-600">{rule}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>
    </>
  )
}

function InternalRiskRegisterPage() {
  const severityCounts = ['Critical', 'High', 'Medium'].map((severity) => [
    severity,
    String(internalRiskRegister.filter((risk) => risk.severity === severity).length),
  ])

  return (
    <>
      <InternalPageHero
        eyebrow="Internal Risk Register • 8190 Only"
        title="Risk Register & Mitigation Control"
        copy="A private register for the issues that can hurt the business: NDA leakage, partnership ambiguity, equipment delays, margin pressure, compliance overclaims, cash runway, weak proof, and operational handoff failures."
        stats={[
          [`${internalRiskRegister.length}`, 'tracked risks'],
          [severityCounts[0][1], 'critical'],
          [severityCounts[1][1], 'high'],
          ['Review', 'weekly'],
        ]}
      />
      <InternalOntologySection
        eyebrow="Risk Operating Rule"
        title="Every risk needs an owner, trigger, control, and next action."
        copy="The goal is not anxiety. The goal is early detection and crisp mitigation before a risk becomes a business problem."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['/internal-business-plan', 'Business Plan', 'Tie risks to plan gaps and milestones.'],
            ['/internal-financial-model', 'Financials', 'Quantify cash, margin, and runway exposure.'],
            ['/internal-execution-board', 'Execution', 'Turn mitigation into tasks with owners.'],
          ].map(([href, title, copy]) => (
            <a key={href} href={href} className="card group block">
              <p className="eyebrow text-[#f97316]">Related Control</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              <span className="mt-5 inline-flex items-center font-black text-[#0b1f33] group-hover:text-[#f97316]">
                Open <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          ))}
        </div>
      </InternalOntologySection>
      <InternalOntologySection
        eyebrow="Register"
        title="Current major risks."
        copy="These are starter records. Later each should become a database object with probability, impact, due date, evidence, status, and review history."
      >
        <div className="grid gap-5">
          {internalRiskRegister.map((risk) => (
            <article key={risk.risk} className="card">
              <div className="grid gap-6 lg:grid-cols-[0.2fr_0.18fr_0.27fr_0.22fr_0.13fr]">
                <div>
                  <p className="eyebrow text-[#f97316]">{risk.category}</p>
                  <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{risk.risk}</h2>
                  <p className="mt-3 font-black text-slate-600">Owner: {risk.owner}</p>
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">Severity</p>
                  <p className="mt-2 rounded border border-orange-200 bg-orange-50 px-3 py-2 text-xl font-black text-[#0b1f33]">{risk.severity}</p>
                </div>
                <p className="leading-7 text-slate-600">{risk.trigger}</p>
                <div>
                  <h3 className="text-lg font-black text-[#0b1f33]">Controls</h3>
                  <ul className="mt-3 grid gap-2">
                    {risk.controls.map((control) => (
                      <li key={control} className="flex gap-2 leading-7 text-slate-700">
                        <ShieldCheck className="mt-1 shrink-0 text-[#f97316]" size={16} />
                        {control}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#0b1f33]">Next</h3>
                  <p className="mt-3 leading-7 text-slate-600">{risk.next}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </InternalOntologySection>
    </>
  )
}

function InternalFinancialModelPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Internal Financial Model • 8190 Only"
        title="Plan-vs-Actual Financial Scoreboard"
        copy="A private execution layer for revenue, volume, blended pricing, COGS, contribution margin, gross margin, fixed-cost coverage, cash runway, payback progress, and quote conversion."
        stats={[
          [`${internalFinancialScorecards.length}`, 'metric groups'],
          [`${internalFinancialScorecards.flatMap((group) => group.metrics).length}`, 'metrics'],
          ['Private', 'baseline targets'],
          ['Monthly', 'review cadence'],
        ]}
      />
      <InternalOntologySection
        eyebrow="Confidential Finance Boundary"
        title="Targets belong in protected records, not public bundles."
        copy="The exact V2 financial baseline should live in a private worksheet or protected database later. The UI can describe metrics and formulas without exposing confidential plan numbers."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['Plan', 'Private target by month'],
            ['Actual', 'Accounting or manual entry'],
            ['Variance', 'Actual minus plan'],
            ['Evidence', 'Source file, bank, quote, order, or ledger'],
          ].map(([label, copy]) => (
            <article key={label} className="rounded border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-black text-[#0b1f33]">{copy}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>
      <InternalOntologySection
        eyebrow="Scorecards"
        title="Metrics that make the plan executable."
        copy="These metrics should become monthly rows with owner notes, evidence, variance explanation, and next action."
      >
        <div className="grid gap-5">
          {internalFinancialScorecards.map((group) => (
            <article key={group.group} className="card">
              <p className="eyebrow text-[#f97316]">Metric Group</p>
              <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{group.group}</h2>
              <div className="mt-6 overflow-hidden rounded border border-slate-200">
                <table className="product-proof-table">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Definition</th>
                      <th>Source</th>
                      <th>Decision</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.metrics.map(([metric, definition, source, decision]) => (
                      <tr key={metric}>
                        <th>{metric}</th>
                        <td>{definition}</td>
                        <td>{source}</td>
                        <td>{decision}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </InternalOntologySection>
      <InternalOntologySection
        eyebrow="Build Plan"
        title="How to make the financial dashboard real."
        copy="Start manual, then wire CRM, production, inventory, and accounting once the field model is stable."
      >
        <div className="grid gap-4">
          {internalFinancialBuildSteps.map(([title, detail], index) => (
            <article key={title} className="grid gap-4 rounded border border-slate-200 bg-white p-5 shadow-lg md:grid-cols-[0.12fr_0.28fr_0.6fr] md:items-center">
              <p className="text-2xl font-black text-[#f97316]">{index + 1}</p>
              <h2 className="text-xl font-black text-[#0b1f33]">{title}</h2>
              <p className="leading-7 text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>
    </>
  )
}

function InternalExecutionBoardPage() {
  const taskCount = internalExecutionBoard.reduce((sum, lane) => sum + lane.tasks.length, 0)

  return (
    <>
      <InternalPageHero
        eyebrow="Internal Execution Board • 8190 Only"
        title="Plan Gaps Turned Into Owner Tasks"
        copy="A private execution board for the work that makes the plan real: protect the deal, validate revenue, prepare operations, control finances, and build gov/compliance readiness."
        stats={[
          [`${internalExecutionBoard.length}`, 'lanes'],
          [`${taskCount}`, 'starter tasks'],
          ['Owner', 'required'],
          ['Evidence', 'required later'],
        ]}
      />
      <InternalOntologySection
        eyebrow="Execution Rule"
        title="If it is important, it needs an owner and evidence."
        copy="This board should eventually become a live task system with due dates, blockers, status history, linked evidence, and plan impact."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['/internal-risk-register', 'Risk Register', 'Mitigation tasks start here.'],
            ['/internal-financial-model', 'Financials', 'Revenue and margin tasks start here.'],
            ['/internal-gov-compliance', 'Gov / Compliance', 'Readiness tasks start here.'],
            ['/internal-control-panel', 'Control Panel', 'Live queues will land here.'],
          ].map(([href, title, copy]) => (
            <a key={href} href={href} className="card group block">
              <p className="eyebrow text-[#f97316]">Related Board</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              <span className="mt-5 inline-flex items-center font-black text-[#0b1f33] group-hover:text-[#f97316]">
                Open <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          ))}
        </div>
      </InternalOntologySection>
      <InternalOntologySection
        eyebrow="Task Lanes"
        title="Current execution board scaffold."
        copy="The first real implementation should add owner, due date, status, priority, risk link, evidence link, and last review date to each task."
      >
        <div className="grid gap-5">
          {internalExecutionBoard.map((lane) => (
            <article key={lane.lane} className="card">
              <p className="eyebrow text-[#f97316]">Lane</p>
              <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{lane.lane}</h2>
              <div className="mt-6 grid gap-4">
                {lane.tasks.map(([task, owner, status, evidence]) => (
                  <div key={task} className="grid gap-3 rounded border border-slate-200 bg-slate-50 p-4 lg:grid-cols-[0.32fr_0.18fr_0.14fr_0.36fr] lg:items-center">
                    <h3 className="text-lg font-black text-[#0b1f33]">{task}</h3>
                    <p className="font-semibold text-slate-700">{owner}</p>
                    <p className="rounded border border-slate-200 bg-white px-3 py-2 text-sm font-black text-slate-700">{status}</p>
                    <p className="leading-7 text-slate-600">{evidence}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </InternalOntologySection>
    </>
  )
}

function InternalEvidenceLibraryPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Internal Evidence Library • 8190 Only"
        title="Proof Vault for Claims, Decisions & Execution"
        copy="The private source-of-truth library for vendor quotes, machine specs, advisor notes, compliance sources, product packets, financial assumptions, competitor proof, and real photo evidence."
        stats={[
          [`${internalEvidenceLibrary.length}`, 'evidence categories'],
          [`${internalEvidenceWorkflow.length}`, 'workflow steps'],
          ['Private', 'default classification'],
          ['Review', 'before public use'],
        ]}
      />
      <InternalOntologySection
        eyebrow="Evidence Rule"
        title="No claim, quote assumption, or public proof without evidence."
        copy="The Evidence Library is what makes the whole 8190 system serious: risks, financials, gov readiness, manufacturing readiness, and public copy all need source material."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['/internal-risk-register', 'Risk', 'Evidence supports controls and mitigation.'],
            ['/internal-gov-compliance', 'Compliance', 'Evidence supports registration, code, insurance, and claims.'],
            ['/internal-financial-model', 'Financials', 'Evidence supports plan-vs-actual and margin assumptions.'],
            ['/internal-manufacturing-readiness', 'Manufacturing', 'Evidence supports facility, equipment, safety, and QA readiness.'],
          ].map(([href, title, copy]) => (
            <a key={href} href={href} className="card group block">
              <p className="eyebrow text-[#f97316]">Connected Control</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              <span className="mt-5 inline-flex items-center font-black text-[#0b1f33] group-hover:text-[#f97316]">
                Open <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          ))}
        </div>
      </InternalOntologySection>
      <InternalOntologySection
        eyebrow="Evidence Categories"
        title="What the vault should track."
        copy="Each category should later become records with source, owner, date, classification, linked claim/task/risk, review status, and expiration."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {internalEvidenceLibrary.map((category) => (
            <article key={category.category} className="card">
              <p className="eyebrow text-[#f97316]">Evidence Category</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{category.category}</h2>
              <p className="mt-3 leading-7 text-slate-600">{category.purpose}</p>
              <p className="mt-4 font-black text-[#0b1f33]">Owner: {category.owner}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.evidence.map((item) => (
                  <span key={item} className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-black text-slate-700">{item}</span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.linked.map((href) => (
                  <a key={href} href={href} className="text-sm font-black text-[#0b1f33] hover:text-[#f97316]">{href.replace('/internal-', '')}</a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </InternalOntologySection>
      <InternalOntologySection
        eyebrow="Workflow"
        title="How evidence moves from source to approved use."
        copy="This should become a record lifecycle before any automated claim scanner or public-copy approval system is trusted."
      >
        <div className="grid gap-4">
          {internalEvidenceWorkflow.map(([step, detail], index) => (
            <article key={step} className="grid gap-4 rounded border border-slate-200 bg-white p-5 shadow-lg md:grid-cols-[0.12fr_0.22fr_0.66fr] md:items-center">
              <p className="text-2xl font-black text-[#f97316]">{index + 1}</p>
              <h2 className="text-xl font-black text-[#0b1f33]">{step}</h2>
              <p className="leading-7 text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>
    </>
  )
}

function InternalAdvisorQuestionsPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Internal Advisor Questions • 8190 Only"
        title="Questions for Advisors Before Scaling"
        copy="A private question bank for the people who can reduce risk: lawyer, CPA, insurance broker, equipment vendors, code/engineering advisor, and government-contracting advisor."
        stats={[
          [`${internalAdvisorQuestionGroups.length}`, 'advisor groups'],
          [`${internalAdvisorQuestionGroups.reduce((sum, group) => sum + group.questions.length, 0)}`, 'starter questions'],
          ['Evidence', 'required'],
          ['Owner', 'required later'],
        ]}
      />
      <InternalOntologySection
        eyebrow="Advisor Rule"
        title="Turn uncertainty into written questions and evidence."
        copy="Every major ambiguity should become an advisor question, and every answer should become evidence linked to a decision, task, claim, or risk."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['/internal-evidence-library', 'Evidence Library', 'Store advisor answers and source documents.'],
            ['/internal-risk-register', 'Risk Register', 'Tie answers to risk controls.'],
            ['/internal-execution-board', 'Execution Board', 'Turn answers into next tasks.'],
          ].map(([href, title, copy]) => (
            <a key={href} href={href} className="card group block">
              <p className="eyebrow text-[#f97316]">Connected Control</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              <span className="mt-5 inline-flex items-center font-black text-[#0b1f33] group-hover:text-[#f97316]">
                Open <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          ))}
        </div>
      </InternalOntologySection>
      <InternalOntologySection
        eyebrow="Question Bank"
        title="Advisor questions by domain."
        copy="This is not a substitute for advice. It is the meeting prep that makes advisor time useful and preserves the answer trail."
      >
        <div className="grid gap-5">
          {internalAdvisorQuestionGroups.map((group) => (
            <article key={group.advisor} className="card">
              <p className="eyebrow text-[#f97316]">Advisor</p>
              <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{group.advisor}</h2>
              <p className="mt-3 text-lg leading-8 text-slate-600">{group.objective}</p>
              <ol className="mt-6 grid gap-3">
                {group.questions.map((question, index) => (
                  <li key={question} className="flex gap-3 rounded border border-slate-200 bg-slate-50 p-4 leading-7 text-slate-700">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-orange-200 bg-orange-50 text-sm font-black text-[#c2410c]">{index + 1}</span>
                    {question}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </InternalOntologySection>
    </>
  )
}

function InternalManufacturingReadinessPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Internal Manufacturing Readiness • 8190 Only"
        title="Facility, Equipment, Inventory, SOP & Safety Readiness"
        copy="A private buildout plan for turning the business plan into physical operations: facility, equipment, coil inventory, production workflow, safety, QA, delivery, and evidence."
        stats={[
          [`${internalManufacturingReadiness.length}`, 'readiness tracks'],
          ['SOP', 'needed'],
          ['Evidence', 'required'],
          ['Ops', 'owner-driven'],
        ]}
      />
      <InternalOntologySection
        eyebrow="Manufacturing Rule"
        title="Do not buy or promise what the operation cannot support."
        copy="The manufacturing readiness page protects the business from equipment mismatch, unsafe setup, weak QA, bad material assumptions, and operational handoff failures."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['/internal-evidence-library', 'Evidence', 'Store vendor specs, photos, SOPs, and approvals.'],
            ['/internal-risk-register', 'Risk', 'Track equipment, safety, cash, and handoff risks.'],
            ['/internal-financial-model', 'Financials', 'Connect cost, output, scrap, and margin assumptions.'],
            ['/internal-gov-compliance', 'Compliance', 'Connect OSHA, insurance, product docs, and claim review.'],
          ].map(([href, title, copy]) => (
            <a key={href} href={href} className="card group block">
              <p className="eyebrow text-[#f97316]">Connected Control</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              <span className="mt-5 inline-flex items-center font-black text-[#0b1f33] group-hover:text-[#f97316]">
                Open <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          ))}
        </div>
      </InternalOntologySection>
      <InternalOntologySection
        eyebrow="Readiness Tracks"
        title="What needs to be real before launch."
        copy="Each track should later become tasks, checklists, evidence records, owner assignments, and review dates."
      >
        <div className="grid gap-5">
          {internalManufacturingReadiness.map((track) => (
            <article key={track.area} className="card">
              <div className="grid gap-6 lg:grid-cols-[0.2fr_0.28fr_0.32fr_0.2fr]">
                <div>
                  <p className="eyebrow text-[#f97316]">Readiness Track</p>
                  <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{track.area}</h2>
                  <p className="mt-3 rounded border border-orange-200 bg-orange-50 px-3 py-2 font-black text-slate-800">{track.status}</p>
                </div>
                <p className="text-lg leading-8 text-slate-600">{track.objective}</p>
                <div>
                  <h3 className="text-lg font-black text-[#0b1f33]">Tasks</h3>
                  <ul className="mt-3 grid gap-2">
                    {track.tasks.map((task) => (
                      <li key={task} className="flex gap-2 leading-7 text-slate-700">
                        <CheckCircle2 className="mt-1 shrink-0 text-[#f97316]" size={16} />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#0b1f33]">Evidence</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {track.evidence.map((item) => (
                      <span key={item} className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-black text-slate-700">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </InternalOntologySection>
    </>
  )
}

function InternalDataModelPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Internal Data Model • 8190 Only"
        title="Database Schema & Controlled Vocabulary"
        copy="The buildable data layer for CRM, quote pipeline, plan uploads, inventory, production, events, and agent run history."
        stats={[
          [`${implementationTables.length}`, 'core tables'],
          [`${implementationEnums.length}`, 'enum vocabularies'],
          ['SQLite', 'validated schema draft'],
          ['Private', 'cost and NDA fields guarded'],
        ]}
      />

      <InternalOntologySection
        eyebrow="Schema Artifact"
        title="Database file."
        copy="The SQL artifact is stored in the repo so it can become a migration source."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card">
            <p className="eyebrow text-[#f97316]">Artifact</p>
            <h2 className="mt-3 font-mono text-2xl font-black text-[#0b1f33]">internal/schema.sql</h2>
            <p className="mt-3 leading-7 text-slate-600">
              D1/SQLite schema draft with tables, constraints, indexes, state fields, and core relationship references.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow text-[#f97316]">Next Build Step</p>
            <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">Turn schema draft into migrations.</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Add migration numbering, seed data, stricter foreign keys, updated_at triggers, and test fixtures for lead-to-order flow.
            </p>
          </article>
        </div>
      </InternalOntologySection>

      <DatabaseTablesSection />
      <EnumsSection />
      <PermissionsSection />
    </>
  )
}

function InternalWorkflowsPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Internal Workflows • 8190 Only"
        title="State Machines, Automation Rules & MVP Build Order"
        copy="The process layer: how leads, quotes, orders, production runs, tasks, and handoffs move through the operating system."
        stats={[
          [`${implementationStateMachines.length}`, 'state machines'],
          [`${implementationAutomationRules.length}`, 'automation rules'],
          [`${implementationMvpBacklog.length}`, 'MVP phases'],
          ['Human gates', 'pricing and claims guarded'],
        ]}
      />
      <StateMachinesSection />
      <AutomationRulesSection />
      <MvpBuildOrderSection />
    </>
  )
}

function InternalAgentsPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Internal Agents • 8190 Only"
        title="AI Agent Contracts & Access Boundaries"
        copy="The agent layer: scoped workers with missions, inputs, tools, outputs, escalation rules, permissions, and audit requirements."
        stats={[
          [`${implementationAgents.length}`, 'agent contracts'],
          [`${implementationPermissions.length}`, 'permission roles'],
          ['Approval', 'required for external/pricing outputs'],
          ['Audit', 'agent_runs + events'],
        ]}
      />
      <AgentsSection />
      <PermissionsSection />
      <InternalOntologySection
        eyebrow="Agent Run Storage"
        title="Every agent action should leave a trace."
        copy="Use agent_runs plus events to reconstruct what the agent saw, did, recommended, and escalated."
      >
        <div className="grid gap-3">
          {[
            'Store input_payload and output_payload as JSON.',
            'Capture trigger_event_id when an event starts the run.',
            'Capture confidence_score when the model produces extraction, classification, or recommendation output.',
            'Require escalation_reason for failed or escalated runs.',
            'Do not allow agents to send external pricing or legal claims without human approval.',
          ].map((rule) => (
            <p key={rule} className="flex gap-3 rounded border border-slate-200 bg-white p-4 font-semibold leading-7 text-slate-700 shadow">
              <ShieldCheck className="mt-1 shrink-0 text-[#f97316]" size={20} />
              {rule}
            </p>
          ))}
        </div>
      </InternalOntologySection>
    </>
  )
}

function InternalEventsPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Internal Events • 8190 Only"
        title="Event Taxonomy & Automation Triggers"
        copy="The event layer: names, meanings, triggers, payloads, and consumers for timelines, queues, automations, and AI agents."
        stats={[
          [`${implementationEvents.length}`, 'event names'],
          ['events', 'central audit table'],
          ['tasks', 'human work queue'],
          ['agent_runs', 'AI execution log'],
        ]}
      />
      <EventsSection />
      <InternalOntologySection
        eyebrow="Event Payload Guidance"
        title="Minimum payloads by event family."
        copy="Events should be small, stable, and enough to let workers load the full entity when needed."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ['lead.*', 'lead_id, source_domain, source_route, status, assigned_user_id, score, project_state, panel_intent'],
            ['file.*', 'uploaded_file_id, lead_id, project_id, file_name, mime_type, size_bytes, review_status'],
            ['quote.*', 'quote_id, project_id, version, status, total, valid_until, created_by_user_id'],
            ['order.*', 'order_id, quote_id, payment_status, production_status, delivery_status, promised_date'],
            ['production_run.*', 'production_run_id, order_id, machine_id, coil_lot_id, status, qa_status'],
            ['agent.*', 'agent_run_id, agent_name, trigger_event_id, status, confidence_score, escalation_reason'],
          ].map(([family, payload]) => (
            <article key={family} className="rounded border border-slate-200 bg-white p-5 shadow-lg">
              <h2 className="font-mono text-xl font-black text-[#0b1f33]">{family}</h2>
              <p className="mt-3 font-mono text-sm leading-7 text-slate-600">{payload}</p>
            </article>
          ))}
        </div>
      </InternalOntologySection>
      <AutomationRulesSection />
    </>
  )
}

function InternalPageHero({
  copy,
  eyebrow,
  stats,
  title,
}: {
  copy: string
  eyebrow: string
  stats: string[][]
  title: string
}) {
  return (
    <section className="section border-b border-slate-200 bg-white">
      <div className="max-w-6xl">
        <p className="eyebrow text-[#f97316]">{eyebrow}</p>
        <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal text-[#0b1f33] lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-5xl text-xl leading-8 text-slate-600">{copy}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={`${value}-${label}`} className="rounded border border-slate-200 bg-slate-50 p-5">
              <p className="text-3xl font-black text-[#0b1f33]">{value}</p>
              <p className="mt-2 font-semibold leading-7 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DatabaseTablesSection() {
  return (
    <InternalOntologySection
      eyebrow="Database Schema"
      title="Tables, purposes, fields, and relationship hints."
      copy="This is enough to start a D1/Postgres/Supabase schema draft, but it still needs final field naming, migrations, constraints, and indexes."
    >
      <div className="grid gap-5">
        {implementationTables.map((table) => (
          <article key={table.table} className="card">
            <p className="eyebrow text-[#f97316]">Table</p>
            <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{table.table}</h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">{table.purpose}</p>
            <div className="mt-6 overflow-hidden rounded border border-slate-200">
              <table className="product-proof-table">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Rule</th>
                  </tr>
                </thead>
                <tbody>
                  {table.fields.map(([field, type, rule]) => (
                    <tr key={`${table.table}-${field}`}>
                      <th>{field}</th>
                      <td>{type}</td>
                      <td>{rule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ))}
      </div>
    </InternalOntologySection>
  )
}

function EnumsSection() {
  return (
    <InternalOntologySection
      eyebrow="Controlled Vocabulary"
      title="Enums that keep humans, forms, automations, and agents aligned."
      copy="Enums prevent the same concept from becoming five spellings across forms, databases, dashboards, and agent prompts."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {implementationEnums.map(([name, values]) => (
          <article key={name} className="rounded border border-slate-200 bg-white p-5 shadow-lg">
            <h2 className="text-xl font-black text-[#0b1f33]">{name}</h2>
            <p className="mt-3 font-mono text-sm leading-7 text-slate-600">{values}</p>
          </article>
        ))}
      </div>
    </InternalOntologySection>
  )
}

function StateMachinesSection() {
  return (
    <InternalOntologySection
      eyebrow="State Machines"
      title="Allowed lifecycle states and transitions."
      copy="Automation becomes safer when each object has known states and explicit transitions."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {implementationStateMachines.map((machine) => (
          <article key={machine.entity} className="card">
            <p className="eyebrow text-[#f97316]">State Machine</p>
            <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{machine.entity}</h2>
            <p className="mt-4 font-mono text-sm leading-7 text-slate-600">{machine.states.join(' -> ')}</p>
            <ul className="mt-5 grid gap-3">
              {machine.transitions.map((transition) => (
                <li key={transition} className="flex gap-3 leading-7 text-slate-700">
                  <ArrowRight className="mt-1 shrink-0 text-[#f97316]" size={18} />
                  <span>{transition}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </InternalOntologySection>
  )
}

function EventsSection() {
  return (
    <InternalOntologySection
      eyebrow="Event Taxonomy"
      title="Events that drive automations, timelines, and AI agents."
      copy="Events are the nervous system of the future ERP. They trigger tasks, notifications, agent runs, status changes, and audit logs."
    >
      <div className="grid gap-3">
        {implementationEvents.map(([event, meaning]) => (
          <article key={event} className="grid gap-3 rounded border border-slate-200 bg-white p-5 shadow-lg md:grid-cols-[0.28fr_0.72fr] md:items-center">
            <p className="font-mono text-sm font-black text-[#f97316]">{event}</p>
            <p className="leading-7 text-slate-600">{meaning}</p>
          </article>
        ))}
      </div>
    </InternalOntologySection>
  )
}

function AutomationRulesSection() {
  return (
    <InternalOntologySection
      eyebrow="Automation Rules"
      title="Business rules that can become code, queues, validations, and alerts."
      copy="These are intentionally specific enough to become tickets or tests."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {implementationAutomationRules.map(([rule, detail]) => (
          <article key={rule} className="card">
            <p className="eyebrow text-[#f97316]">Rule</p>
            <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{rule}</h2>
            <p className="mt-3 leading-7 text-slate-600">{detail}</p>
          </article>
        ))}
      </div>
    </InternalOntologySection>
  )
}

function AgentsSection() {
  return (
    <InternalOntologySection
      eyebrow="AI Agents"
      title="Agent roles, inputs, tools, outputs, and escalation rules."
      copy="Each agent is scoped like a worker with permissions, not a vague chatbot."
    >
      <div className="grid gap-5">
        {implementationAgents.map((agent) => (
          <article key={agent.name} className="card">
            <p className="eyebrow text-[#f97316]">Agent Contract</p>
            <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{agent.name}</h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">{agent.mission}</p>
            <div className="mt-6 grid gap-4 lg:grid-cols-4">
              {[
                ['Inputs', agent.inputs],
                ['Tools', agent.tools],
                ['Outputs', agent.outputs],
                ['Escalation', [agent.escalation]],
              ].map(([label, items]) => (
                <div key={label as string} className="rounded border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-black text-[#0b1f33]">{label as string}</h3>
                  <ul className="mt-3 grid gap-2">
                    {(items as string[]).map((item) => (
                      <li key={item} className="leading-7 text-slate-700">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </InternalOntologySection>
  )
}

function PermissionsSection() {
  return (
    <InternalOntologySection
      eyebrow="Permissions"
      title="Roles and access boundaries."
      copy="Permissions matter early because private pricing, margins, NDA facts, and agent actions must not leak."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {implementationPermissions.map(([role, access]) => (
          <article key={role} className="rounded border border-slate-200 bg-white p-5 shadow-lg">
            <h2 className="font-mono text-lg font-black text-[#0b1f33]">{role}</h2>
            <p className="mt-3 leading-7 text-slate-600">{access}</p>
          </article>
        ))}
      </div>
    </InternalOntologySection>
  )
}

function MvpBuildOrderSection() {
  return (
    <InternalOntologySection
      eyebrow="MVP Build Order"
      title="Practical build sequence from lead capture to ERP."
      copy="This prevents trying to build the whole operating system before the first reliable database and workflow loops exist."
    >
      <div className="grid gap-4">
        {implementationMvpBacklog.map(([phase, detail]) => (
          <article key={phase} className="grid gap-3 rounded border border-slate-200 bg-white p-5 shadow-lg md:grid-cols-[0.18fr_0.82fr] md:items-center">
            <h2 className="text-xl font-black text-[#0b1f33]">{phase}</h2>
            <p className="leading-7 text-slate-600">{detail}</p>
          </article>
        ))}
      </div>
    </InternalOntologySection>
  )
}

function OntologyGroupedCards({
  groups,
  itemKey,
  titleKey,
}: {
  groups: Array<Record<string, string | string[][]>>
  itemKey: string
  titleKey: string
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {groups.map((group) => {
        const title = group[titleKey] as string
        const items = group[itemKey] as string[][]

        return (
          <article key={title} className="card">
            <p className="eyebrow text-[#f97316]">Ontology Group</p>
            <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{title}</h2>
            <div className="mt-5 grid gap-3">
              {items.map(([name, definition]) => (
                <div key={name} className="rounded border border-slate-200 bg-slate-50 p-4">
                  <p className="font-black text-[#0b1f33]">{name}</p>
                  <p className="mt-2 leading-7 text-slate-600">{definition}</p>
                </div>
              ))}
            </div>
          </article>
        )
      })}
    </div>
  )
}

function InternalOntologySection({
  children,
  copy,
  eyebrow,
  id,
  title,
}: {
  children: ReactNode
  copy: string
  eyebrow: string
  id?: string
  title: string
}) {
  return (
    <section id={id} className="section bg-slate-50 even:bg-white">
      <SectionIntro eyebrow={eyebrow} title={title} copy={copy} />
      <div className="mt-10">{children}</div>
    </section>
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
            <a className="btn-primary text-base" href="/internal-ontology">
              Open Ontology <ArrowRight size={18} />
            </a>
            <a className="btn-secondary text-base" href="/internal-strategy">
              <FileText size={18} /> Strategy
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
              <a className="btn-primary" href="/internal-ontology">
                View Product Ontology <ArrowRight size={18} />
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
              <a className="btn-primary" href="/internal-ontology">
                View Product Ontology <ArrowRight size={18} />
              </a>
              <a className="btn-secondary" href="/internal-strategy">
                <FileText size={18} /> Strategy Notes
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
          <a className="btn-secondary mt-8" href="/internal-data-model">
            Model Finish Data
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
            copy="Use the selector as internal product-logic scaffolding: project type, region, exposure, and assembly scope should become fields, rules, recommendations, and estimator review tasks."
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
            <a className="btn-primary" href="/internal-workflows">
              Define Intake Workflow <ArrowRight size={18} />
            </a>
            <a className="btn-secondary" href="/internal-data-model">
              <FileText size={18} /> Map Selector Fields
            </a>
            <a className="btn-secondary" href="/internal-events">
              <SearchCheck size={18} /> Trigger Events
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
        copy="For 8190, this section is an internal resource model: define which product documents, intake checklists, submittal packets, and finish files the operating system must manage."
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
          <a className="btn-secondary mt-8" href="/internal-workflows">
            Map Fabrication Workflow
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
  return null
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
    <footer className="border-t border-slate-200 bg-white px-5 py-10 text-slate-700 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <strong className="text-xl font-black text-[#0b1f33]">America’s Panel Fab Internal Master</strong>
          <p className="mt-2 text-slate-500">Private ontology, operations, strategy, and product architecture workspace.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
          <a className="hover:text-[#f97316]" href="/internal-strategy">Strategy</a>
          <a className="hover:text-[#f97316]" href="/internal-ontology">Ontology</a>
          <a className="hover:text-[#f97316]" href="/resources">Resources</a>
        </div>
      </div>
    </footer>
  )
}

export default App
