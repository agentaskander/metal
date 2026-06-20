import { useEffect, useState, type FormEvent } from 'react'
import {
  ArrowRight,
  Award,
  BookOpen,
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
  ['Home', '/'],
  ['Manufacturing', '/manufacturing'],
  ['Capabilities', '/capabilities'],
  ['Guides', '/guides'],
  ['Glossary', '/glossary'],
  ['Products', '/products'],
  ['Super Panel', '/super-panel'],
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
const apfOrigin = 'https://www.americaspanelfab.com'
const contractorOutcomes = [
  ['Faster Lead Times', 'Quote response target within 24 hours for complete plan sets.'],
  ['Custom Fabrication', 'Panels, trims, flashings, edge metal, and accessories coordinated together.'],
  ['Multi-State Service', 'California, Arizona, Texas, and Florida fulfillment support.'],
  ['Commercial & Government Projects', 'Bid support, submittals, invoicing, and contract-ready documentation.'],
  ['American Super Panel™ Systems', 'Flagship panel systems manufactured by Americas Panel Fab.'],
]
const superPanelSeries = [
  ['Commercial Series', 'Standing seam and wall panel systems for retail, office, education, and multifamily work.'],
  ['Coastal Series', 'Florida-ready panel package positioning for wind, corrosion awareness, and coastal detailing.'],
  ['Desert Series', 'Arizona-focused finish and heat-performance positioning for high-sun commercial buildings.'],
  ['Industrial Series', 'Texas-scale exposed fastener, wall panel, warehouse, and logistics facility packages.'],
  ['FireSafe Series', 'California-focused assembly positioning for resilient public, education, and commercial projects.'],
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
    title: 'Industry Review Checklist',
    copy: 'What researchers, partners, and operators should gather before comparing panel manufacturing opportunities.',
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
  ['Mobile Option', Gauge, 'Mobile fabrication can support long-run jobs and reduced shipping constraints when project conditions fit.'],
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
const platformPillars = [
  ['Industry Education', FileText, 'Practical guides for metal panel manufacturing, roll forming, profile selection, finishes, trim, and installer coordination.'],
  ['Manufacturing Network', Factory, 'A serious resource for manufacturers, suppliers, fabricators, installers, dealers, and commercial buyers.'],
  ['Factory Workflow', Gauge, 'Clear information about estimating, material flow, panel production, fabrication details, and documentation.'],
  ['Product Brand Support', Building2, 'A company structure that supports American Super Panel and future product families under one manufacturing brand.'],
] satisfies [string, IconType, string][]
const platformStructure = [
  'American Super Panel flagship product family',
  'Standing seam, ribbed panel, wall panel, trim, and accessory education',
  'Commercial manufacturing partner resources',
  'Supplier and installer relationship paths',
  'Factory workflow and documentation standards',
  'Industry research and buyer education',
]
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
const guidePages = [
  {
    slug: 'standing-seam-vs-r-panel',
    title: 'Standing Seam vs R-Panel: How to Choose a Metal Roof System',
    description:
      'Compare standing seam and R-Panel metal roofing by fastening style, project fit, budget, appearance, and contractor workflow.',
    category: 'Comparison Guide',
    hero: 'Standing seam and R-Panel serve different jobs. The right choice depends on budget, building type, appearance, slope, exposure, and installation priorities.',
    image: warehouseImage,
    imageAlt: 'Commercial warehouse metal panel project',
    sections: [
      ['Fastening Method', 'Standing seam systems hide the fasteners under seams or clips. R-Panel and similar ribbed panels use exposed fasteners through the panel face. That difference affects appearance, labor, detailing, and long-term maintenance planning.'],
      ['Best Project Fit', 'Standing seam is often chosen for architectural, commercial, and owner-occupied buildings where a clean roof plane matters. R-Panel is common for warehouses, shops, agricultural buildings, and practical commercial roofs or walls.'],
      ['Manufacturer Relationship', 'Americas Panel Fab manufactures American Super Panel. Contractors and owners can use Americas Panel Fab for company-level manufacturing context and American Super Panel for specific exposed-fastener panel product information.'],
      ['Questions to Confirm', 'Before selecting either system, confirm slope, substrate, finish, fastening method, panel lengths, trim details, penetrations, drainage conditions, and whether the roof or wall assembly needs project-specific engineering review.'],
    ],
    takeaways: ['Standing seam is usually the cleaner architectural path.', 'R-Panel is often the practical contractor and warehouse path.', 'Trim, flashing, fasteners, finish, substrate, and project conditions still matter as much as the profile.'],
    cta: 'Compare product options',
    ctaHref: 'https://www.americansuperpanel.com/products',
  },
  {
    slug: 'pbr-panel-vs-r-panel',
    title: 'PBR Panel vs R-Panel: What Contractors Should Know',
    description:
      'Learn how PBR panel and R-Panel naming, side-lap conditions, use cases, and quote conversations differ for metal roofing and siding projects.',
    category: 'Panel Profiles',
    hero: 'PBR Panel and R-Panel are often discussed together because both refer to practical ribbed exposed-fastener panel families used on roofs and walls.',
    image: panelImage,
    imageAlt: 'Ribbed metal roofing panel closeup',
    sections: [
      ['Naming Reality', 'Panel names vary by manufacturer and region. Contractors should confirm profile drawings, rib spacing, coverage width, side-lap detail, gauge path, substrate, finish, and fastener recommendations before ordering.'],
      ['Common Uses', 'PBR and R-Panel style products fit warehouses, industrial buildings, shops, agricultural buildings, commercial re-skins, wall panels, and utility buildings.'],
      ['Quote Details', 'A strong quote request includes panel use, roof or wall scope, desired lengths, trim conditions, finish, delivery state, and any drawings available for review. If the project has unusual openings, transitions, slopes, or exposure, include those details early.'],
      ['What to Verify', 'Before ordering, verify the profile drawing, coverage width, substrate, finish, fastener type, closure needs, trim scope, and whether roof and wall panels are being quoted together.'],
    ],
    takeaways: ['Do not order from a name alone; confirm the profile.', 'Side-lap and trim details should be reviewed early.', 'Use American Super Panel product pages when the project is ready for exposed-fastener panel quoting.'],
    cta: 'View PBR / R-Panel page',
    ctaHref: 'https://www.americansuperpanel.com/pbr-panel',
  },
  {
    slug: 'metal-roofing-gauges',
    title: 'Metal Roofing Gauges: 24 Gauge vs 26 Gauge vs 29 Gauge',
    description:
      'A practical guide to metal roofing gauge language for commercial, agricultural, and contractor panel conversations.',
    category: 'Buyer Education',
    hero: 'Gauge is only one part of a metal panel decision. Profile, substrate, finish, fastening, span, building use, and local conditions also shape the right package.',
    image: facilityImage,
    imageAlt: 'Metal panel manufacturing production floor',
    sections: [
      ['What Gauge Means', 'Gauge describes sheet metal thickness, but the number works backward: lower gauge numbers are generally thicker. Buyers should avoid comparing gauge without also looking at profile and project use.'],
      ['Commercial Context', 'Commercial and industrial projects may require thicker material, stronger profiles, or more specific documentation depending on the assembly and owner requirements.'],
      ['Quote Context', 'Gauge should be reviewed with the actual drawings, roof or wall use, support spacing, trim scope, finish path, and project expectations. The same gauge can behave differently depending on panel profile and installation conditions.'],
      ['Procurement Tip', 'Ask for gauge, substrate, finish, profile, coverage width, and trim assumptions in the same conversation. This keeps bids comparable and helps avoid mismatched substitutions later.'],
    ],
    takeaways: ['Lower gauge usually means thicker metal.', 'Gauge alone does not define performance.', 'Use drawings and project conditions to guide the conversation.'],
    cta: 'Upload plans for review',
    ctaHref: 'https://www.americansuperpanel.com/upload-plans',
  },
  {
    slug: 'metal-panel-finishes',
    title: 'Metal Panel Finishes: SMP, PVDF, Matte, and Cool Roof Options',
    description:
      'Understand common metal panel finish paths for commercial roofs, wall panels, trim, flashing, heat exposure, and architectural color needs.',
    category: 'Finishes',
    hero: 'Finish selection affects color, reflectivity, weathering expectations, project appearance, and how roof, wall, trim, and flashing packages come together.',
    image: fabricationImage,
    imageAlt: 'Custom sheet metal fabrication',
    sections: [
      ['Finish Families', 'SMP and PVDF-style finish paths are common commercial conversations. The right choice depends on budget, exposure, owner standards, color needs, and project expectations.'],
      ['Color Coordination', 'Panel, trim, flashing, fascia, soffit, and accessory colors should be reviewed together so the finished package looks intentional.'],
      ['Documentation', 'Finish data, color samples, and warranty path discussions should happen before large orders or specification releases. Finish assumptions should be captured in submittals and purchase documents.'],
      ['Project Exposure', 'Sun, coastal air, agricultural use, industrial environments, and owner appearance standards can all affect finish selection. Color and finish should be chosen with the building use, not only the visual preference.'],
    ],
    takeaways: ['Do not choose finish only from a screen color.', 'Trim and panel finishes should be coordinated together.', 'Finish path belongs in the submittal conversation.'],
    cta: 'View finish resources',
    ctaHref: '/finishes',
  },
  {
    slug: 'trim-and-flashing-guide',
    title: 'Trim and Flashing Guide for Metal Roofing and Wall Panels',
    description:
      'Learn why trim, flashing, closures, fasteners, and transitions are critical to metal roofing and siding package planning.',
    category: 'Fabrication Guide',
    hero: 'Metal panels are only part of the package. Trim and flashing decide how roof edges, corners, openings, transitions, and closeout details actually work.',
    image: weldingImage,
    imageAlt: 'Trim and flashing fabrication',
    sections: [
      ['Common Trim Pieces', 'Ridge, rake, eave, corner, jamb, base, transition, and cap flashing details should be reviewed against the building conditions.'],
      ['Project Coordination', 'Crews benefit when panels, trim, flashing, closures, fasteners, and labels are coordinated as one package instead of scattered across disconnected orders.'],
      ['Manufacturing Coordination', 'Americas Panel Fab publishes fabrication guidance so buyers understand how panels, trim, flashing, closures, fasteners, and labels should be coordinated before an order is released.'],
      ['Drawing Review', 'Complex trim packages benefit from uploaded drawings, sketches, dimensions, photos, or elevations. Good detail information reduces guesswork around openings, corners, transitions, and roof-to-wall conditions.'],
    ],
    takeaways: ['Trim is not an afterthought.', 'Openings and transitions should be reviewed early.', 'Upload drawings before ordering complex packages.'],
    cta: 'View trim and flashing products',
    ctaHref: 'https://www.americansuperpanel.com/trim-and-flashing',
  },
  {
    slug: 'commercial-metal-roofing-guide',
    title: 'Commercial Metal Roofing Guide for Owners, Contractors, and Buyers',
    description:
      'A high-level commercial metal roofing guide covering panels, trim, finish, documentation, quote data, and manufacturing coordination.',
    category: 'Commercial Guide',
    hero: 'Commercial metal roofing decisions should combine product selection, documentation, project schedule, trim details, finish path, and contractor support.',
    image: warehouseImage,
    imageAlt: 'Commercial warehouse metal roof panels',
    sections: [
      ['Product Selection', 'Commercial projects may use standing seam, exposed-fastener ribbed panels, wall panels, trim, flashing, and accessories depending on appearance, budget, building type, and schedule.'],
      ['Documentation', 'Submittal packages, finish data, drawings, installation details, and warranty path conversations matter because commercial buyers need confidence before releasing an order.'],
      ['Manufacturer and Product Brand', 'Americas Panel Fab provides the company and manufacturing context. American Super Panel provides focused product information for metal roofing panels, siding panels, trim, flashing, and contractor orders.'],
      ['What Buyers Should Prepare', 'Commercial buyers should gather roof plans, wall elevations, square footage, panel profile preference, finish requirements, trim scope, desired schedule, and delivery state before requesting pricing.'],
    ],
    takeaways: ['Commercial buyers need more than a product list.', 'Clean quote inputs shorten the first sales conversation.', 'Manufacturing context and product details should support the same purchasing decision.'],
    cta: 'Request product quote',
    ctaHref: 'https://www.americansuperpanel.com/request-quote',
  },
  {
    slug: 'metal-panel-manufacturing-guide',
    title: 'Metal Panel Manufacturing Guide: From Coil to Jobsite Package',
    description:
      'A manufacturer-level guide to metal panel production, coil handling, roll forming, fabrication, documentation, packaging, and delivery coordination.',
    category: 'Manufacturing Pillar',
    hero: 'Metal panel manufacturing is more than forming steel. A serious panel package connects coil, profile, finish, trim, documents, labels, logistics, and field-ready communication.',
    image: facilityImage,
    imageAlt: 'Metal panel manufacturing facility floor',
    sections: [
      ['Manufacturing Flow', 'A panel order typically begins with project information, profile selection, gauge and finish assumptions, coil availability, length planning, trim needs, packaging, and delivery expectations. Each step affects the next one.'],
      ['Factory Discipline', 'Good manufacturing content should explain material flow, repeatable tooling, profile verification, documentation, labels, bundled panels, and how orders move from estimate to production.'],
      ['Buyer Value', 'Contractors and owners benefit when a manufacturer explains what information creates a better quote: drawings, roof or wall scope, panel profile, finish path, trim conditions, delivery state, and schedule.'],
      ['Authority Role', 'Americas Panel Fab should own the manufacturing education layer while American Super Panel remains the product path for exposed-fastener panel quotes and contractor orders.'],
    ],
    takeaways: ['Manufacturing authority requires process clarity.', 'Panel orders should connect product, trim, finish, packaging, and logistics.', 'Better quote inputs reduce avoidable project friction.'],
    cta: 'View manufacturing capabilities',
    ctaHref: '/manufacturing',
  },
  {
    slug: 'roll-forming-guide',
    title: 'Roll Forming Guide for Metal Roofing and Siding Panels',
    description:
      'Understand roll forming, coil feed, forming stations, cut-to-length production, profile consistency, mobile roll forming, and panel order planning.',
    category: 'Manufacturing Pillar',
    hero: 'Roll forming turns flat metal coil into repeatable roof and wall panel profiles. The equipment matters, but the workflow around the equipment matters just as much.',
    image: machineImage,
    imageAlt: 'Roll forming equipment for metal panels',
    sections: [
      ['What Roll Forming Does', 'Coil feeds through a sequence of forming stations that gradually shape flat material into a panel profile. Cutoff, length control, bundling, and labels turn the formed panel into an order-ready product.'],
      ['Profile Control', 'Panel identity depends on rib height, rib spacing, coverage width, side lap, and tooling setup. Buyers should confirm drawings and product data instead of relying only on generic profile names.'],
      ['Factory vs Mobile', 'Factory roll forming can support repeatable production and packaging control. Mobile roll forming may help certain long-panel or logistics-sensitive projects when site conditions and project planning support it.'],
      ['Quote Readiness', 'The best roll-forming conversations include profile, lengths, finish, gauge, roof/wall use, delivery state, trim scope, and any drawings that affect quantities or sequencing.'],
    ],
    takeaways: ['Roll forming is a manufacturing workflow, not only a machine.', 'Profile drawings and coverage widths must be confirmed.', 'Length planning and packaging affect field readiness.'],
    cta: 'View roll forming page',
    ctaHref: '/roll-forming',
  },
  {
    slug: 'architectural-metal-fabrication-guide',
    title: 'Architectural Metal Fabrication Guide for Roof and Wall Details',
    description:
      'A practical guide to architectural metal fabrication, trim, flashing, fascia, soffit, edge metal, transitions, openings, and finish coordination.',
    category: 'Fabrication Pillar',
    hero: 'Architectural metal fabrication turns drawings and building conditions into the formed pieces that make panel systems look finished and install correctly.',
    image: fabricationImage,
    imageAlt: 'Architectural sheet metal fabrication',
    sections: [
      ['Fabrication Scope', 'Fabrication may include trim, flashing, fascia, soffit, copings, corners, jambs, base trim, transitions, and custom closeout pieces. These details should be planned with the panel system.'],
      ['Drawing Translation', 'Good fabrication support turns dimensions, elevations, photos, sketches, and project notes into a package that crews can understand. Missing conditions usually create delays or field improvisation.'],
      ['Finish Coordination', 'Fabricated pieces should be coordinated with panel finish, color path, substrate assumptions, and visible building areas so the final package feels intentional.'],
      ['Commercial Buyers', 'Architects, contractors, and owners should ask how trim schedules, submittal data, finish samples, and exclusions are documented before releasing a fabrication package.'],
    ],
    takeaways: ['Fabrication details make panel systems usable.', 'Openings and transitions should be reviewed early.', 'Finish and trim schedules belong in the same project conversation.'],
    cta: 'View custom fabrication',
    ctaHref: '/custom-fabrication',
  },
  {
    slug: 'metal-panel-profiles-guide',
    title: 'Metal Panel Profiles Guide: Standing Seam, R-Panel, PBR, AG, and Wall Panels',
    description:
      'Compare common metal panel profile families, roof and wall use cases, exposed-fastener panels, standing seam systems, and quote verification points.',
    category: 'Profile Pillar',
    hero: 'Panel profile names are useful, but drawings and project conditions matter more. The right profile depends on roof or wall use, appearance, budget, fastening, and documentation needs.',
    image: panelImage,
    imageAlt: 'Ribbed metal panel profile closeup',
    sections: [
      ['Profile Families', 'Common categories include standing seam, R-Panel, PBR-style panels, AG or Tuff Rib panels, wall panels, liner panels, and specialty architectural profiles.'],
      ['Roof vs Wall Use', 'Some ribbed profiles appear in both roof and wall conversations, but fastening, orientation, trim, closures, and substrate assumptions can change by application.'],
      ['Comparison Factors', 'Buyers should compare coverage width, rib height, side lap, fastener method, gauge path, finish, trim compatibility, and available documentation.'],
      ['Product Path', 'Americas Panel Fab can publish neutral profile education while American Super Panel carries product-specific exposed-fastener panel pages and quote actions.'],
    ],
    takeaways: ['Profile names are not enough.', 'Roof and wall conditions should be confirmed separately.', 'Profile education supports better product quotes.'],
    cta: 'View product families',
    ctaHref: '/products',
  },
  {
    slug: 'exposed-fastener-metal-roofing-guide',
    title: 'Exposed Fastener Metal Roofing Guide for Commercial and Agricultural Buildings',
    description:
      'Learn where exposed-fastener metal roofing fits, how ribbed panels are quoted, and what contractors should confirm before ordering.',
    category: 'Product Education',
    hero: 'Exposed-fastener panels are practical, familiar, and widely used across warehouses, shops, agricultural buildings, industrial projects, and many commercial scopes.',
    image: warehouseImage,
    imageAlt: 'Exposed fastener commercial metal roof',
    sections: [
      ['Where It Fits', 'Ribbed exposed-fastener panels often fit warehouses, shops, agricultural buildings, equipment shelters, industrial buildings, commercial re-skins, and economical roof or wall scopes.'],
      ['What to Confirm', 'Confirm profile drawing, fastener path, roof or wall use, gauge, substrate, finish, trim, closures, penetrations, and maintenance expectations before ordering.'],
      ['Buyer Tradeoffs', 'Visible fasteners can support practical budgets and fast installation, but owners should understand maintenance, sealant, fastener, and inspection expectations.'],
      ['Quote Connection', 'American Super Panel is the focused product path for exposed-fastener roofing and siding panel quotes manufactured by Americas Panel Fab.'],
    ],
    takeaways: ['Exposed-fastener panels are practical and quote-friendly.', 'Fasteners and closures should be part of the package.', 'Use product-specific pages when ready to quote.'],
    cta: 'View American Super Panel',
    ctaHref: 'https://www.americansuperpanel.com/',
  },
  {
    slug: 'metal-wall-panels-guide',
    title: 'Metal Wall Panels Guide for Commercial, Industrial, and Agricultural Buildings',
    description:
      'A guide to metal siding and wall panels, orientation, profile selection, trim, openings, colors, and commercial quote planning.',
    category: 'Wall Panels',
    hero: 'Metal wall panels and siding packages need their own planning path because elevations, openings, corners, trim, and color breaks can drive the project.',
    image: warehouseImage,
    imageAlt: 'Commercial metal wall and roof panel building',
    sections: [
      ['Wall Scope', 'Wall panel projects may include vertical siding, horizontal panels, liner panels, accent areas, soffits, fascia, and mixed roof-wall packages.'],
      ['Openings and Corners', 'Doors, windows, framed openings, corners, base conditions, and transitions should be identified early because they drive trim and flashing needs.'],
      ['Design and Finish', 'Wall panels are more visible than many roof areas. Color, finish, rib direction, shadow lines, and trim coordination can change how the building reads.'],
      ['Quote Inputs', 'Send elevations, opening schedules, desired panel orientation, color intent, trim scope, project state, and any photos of existing conditions.'],
    ],
    takeaways: ['Wall panels need elevation-level planning.', 'Openings and corners drive trim scope.', 'Color and orientation affect the finished building.'],
    cta: 'View product families',
    ctaHref: '/products',
  },
  {
    slug: 'galvalume-vs-galvanized',
    title: 'Galvalume vs Galvanized Metal Panels: What Buyers Should Compare',
    description:
      'Compare Galvalume and galvanized substrate conversations for metal roofing panels, siding, finishes, corrosion expectations, and quote documentation.',
    category: 'Materials Comparison',
    hero: 'Substrate language matters because the metal beneath the finish influences corrosion conversations, quote comparisons, and project documentation.',
    image: facilityImage,
    imageAlt: 'Steel coil inventory for metal panel production',
    sections: [
      ['Substrate Basics', 'Galvanized steel generally refers to zinc-coated steel. Galvalume is commonly used to describe aluminum-zinc coated steel. Buyers should confirm the exact specification in writing.'],
      ['Finish Relationship', 'Substrate and paint finish work together. A quote should identify the substrate path, finish family, gauge, panel profile, and any assumptions or exclusions.'],
      ['Project Exposure', 'Coastal, agricultural, industrial, high-sun, and ordinary commercial settings can raise different questions. Project-specific requirements should be reviewed before selection.'],
      ['Procurement Tip', 'Do not compare two metal panel quotes without checking substrate, finish, gauge, profile, coverage width, trim, and delivery assumptions together.'],
    ],
    takeaways: ['Substrate is part of the specification.', 'Paint finish does not replace substrate review.', 'Quote comparisons should include substrate language.'],
    cta: 'Read finish guide',
    ctaHref: '/metal-panel-finishes',
  },
  {
    slug: 'pvdf-vs-smp-metal-panel-finishes',
    title: 'PVDF vs SMP Metal Panel Finishes: Practical Buyer Guide',
    description:
      'Compare PVDF and SMP finish paths for commercial metal roofing, siding, trim, color coordination, samples, and submittal planning.',
    category: 'Finishes Comparison',
    hero: 'PVDF and SMP are common finish conversations, but the right choice depends on owner standards, appearance goals, budget, exposure, and documentation.',
    image: fabricationImage,
    imageAlt: 'Metal panel finish and fabrication work',
    sections: [
      ['Finish Positioning', 'SMP is often discussed as a practical broad-use finish path. PVDF-style finishes are often discussed for premium architectural or long-appearance projects.'],
      ['Color and Samples', 'Screens are not final approval tools. Serious projects should use samples, finish schedules, product data, and submittal documentation.'],
      ['Trim Coordination', 'Panels, flashings, fascia, soffit, and accessories should be reviewed together so color and sheen do not surprise the owner in the field.'],
      ['Decision Process', 'Compare finish path, substrate, color availability, gauge, profile, trim scope, owner standards, and schedule before release.'],
    ],
    takeaways: ['Finish choices are project decisions, not just color picks.', 'Samples reduce surprises.', 'Panel and trim finishes should be coordinated.'],
    cta: 'Read finish guide',
    ctaHref: '/metal-panel-finishes',
  },
  {
    slug: '24-gauge-vs-26-gauge-metal-roofing',
    title: '24 Gauge vs 26 Gauge Metal Roofing: How to Compare Thickness',
    description:
      'Compare 24 gauge and 26 gauge metal roofing in the context of panel profile, substrate, finish, building use, quote assumptions, and project review.',
    category: 'Gauge Comparison',
    hero: 'Gauge comparisons should start with project use and panel system, not only thickness. The right answer depends on what the building needs.',
    image: panelImage,
    imageAlt: 'Metal roof panel profile and gauge comparison',
    sections: [
      ['Thickness Language', 'Lower gauge numbers generally mean thicker metal. That makes 24 gauge a heavier path than 26 gauge in common metal roofing conversations.'],
      ['System Context', 'Gauge should be compared with panel profile, roof or wall use, substrate, finish, support conditions, fasteners, and owner expectations.'],
      ['Commercial Use', 'Commercial, architectural, or owner-standard projects may lean toward heavier material, but practical buildings may choose another path when the full package fits.'],
      ['Quote Clarity', 'Ask every supplier to list gauge, substrate, finish, profile, coverage width, trim scope, assumptions, and exclusions so bids can be compared fairly.'],
    ],
    takeaways: ['24 gauge is commonly heavier than 26 gauge.', 'Gauge does not define the whole system.', 'Comparable quotes need more than a gauge number.'],
    cta: 'Read gauge guide',
    ctaHref: '/metal-roofing-gauges',
  },
  {
    slug: 'metal-roofing-submittal-guide',
    title: 'Metal Roofing Submittal Guide for Commercial Projects',
    description:
      'A practical guide to metal roofing submittals, product data, finish information, fastener notes, trim scope, warranty path, and approval workflow.',
    category: 'Commercial Documentation',
    hero: 'Commercial projects need documentation that makes the panel package understandable before material is ordered or installed.',
    image: facilityImage,
    imageAlt: 'Commercial metal roofing documentation and manufacturing support',
    sections: [
      ['Submittal Purpose', 'A submittal package helps owners, contractors, architects, and project teams review product assumptions before release. It should reduce ambiguity, not create more paperwork.'],
      ['Typical Contents', 'Useful packages may include profile data, finish information, substrate assumptions, gauge, fastener notes, trim scope, color samples, exclusions, and warranty path language.'],
      ['Approval Workflow', 'Submittals should capture what is being reviewed, who approves it, what remains excluded, and what changes before production release.'],
      ['Manufacturer Role', 'Americas Panel Fab can publish submittal education so commercial buyers understand what a serious panel and fabrication package should document.'],
    ],
    takeaways: ['Submittals protect clarity before production.', 'Finish, fastener, trim, and exclusions matter.', 'Approval workflow should be explicit.'],
    cta: 'View resources',
    ctaHref: '/resources',
  },
  {
    slug: 'commercial-metal-roofing-quote-checklist',
    title: 'Commercial Metal Roofing Quote Checklist',
    description:
      'A quote-readiness checklist for commercial metal roofing panels, siding panels, trim, flashing, finish, drawings, project state, and delivery planning.',
    category: 'Quote Planning',
    hero: 'A better quote starts with better inputs. The first request should give the manufacturer enough information to price the right package.',
    image: warehouseImage,
    imageAlt: 'Commercial metal roofing quote planning',
    sections: [
      ['Project Basics', 'Identify project name, address or state, building type, roof or wall scope, approximate square footage, desired dates, and contact information.'],
      ['Panel Information', 'Include panel profile preference, gauge path if known, finish or color needs, roof/wall use, desired lengths, and whether trim is included.'],
      ['Documents', 'Upload drawings, elevations, photos, sketches, structural documents, finish schedules, and any owner requirements that affect the material package.'],
      ['Quote Review', 'Ask for assumptions, exclusions, alternates, delivery notes, finish path, trim scope, and any open questions before comparing bids.'],
    ],
    takeaways: ['Complete inputs make quotes faster and cleaner.', 'Drawings beat guesswork.', 'Assumptions and exclusions should be visible.'],
    cta: 'Request product quote',
    ctaHref: 'https://www.americansuperpanel.com/request-quote',
  },
  {
    slug: 'metal-roof-trim-types',
    title: 'Metal Roof Trim Types: Ridge, Rake, Eave, Corner, Jamb, and Base Trim',
    description:
      'Understand common metal roof and wall trim types, where they are used, and what information helps manufacturers quote trim and flashing packages.',
    category: 'Trim Library',
    hero: 'Trim names are practical field language. Knowing the common pieces helps contractors request a more complete package.',
    image: weldingImage,
    imageAlt: 'Fabricated metal roof trim and flashing',
    sections: [
      ['Roof Trim', 'Ridge cap, rake trim, eave trim, drip edge, transition pieces, and roof-to-wall flashing help close roof edges and changes in plane.'],
      ['Wall Trim', 'Corner trim, jamb trim, head trim, base trim, cap trim, and opening details help wall panels finish cleanly around building geometry.'],
      ['Accessory Coordination', 'Closures, fasteners, sealants, touch-up, and labels often belong in the same conversation as trim and flashing.'],
      ['Quote Detail', 'Send dimensions, drawings, photos, profile, finish, color, and opening conditions so fabricated pieces match the actual building.'],
    ],
    takeaways: ['Trim pieces should be named and counted early.', 'Roof and wall trim have different conditions.', 'Photos and drawings improve fabrication review.'],
    cta: 'Read trim and flashing guide',
    ctaHref: '/trim-and-flashing-guide',
  },
]
const glossaryGroups = [
  {
    group: 'Manufacturing and Production',
    intro: 'Terms that explain how coil, equipment, documentation, and production coordination become a finished metal panel package.',
    terms: [
      ['Roll forming', 'A manufacturing process that shapes metal coil into consistent panel profiles through a series of forming stations.'],
      ['Coil', 'A rolled supply of flat metal used as the starting material for roofing panels, siding panels, trim, and flashing.'],
      ['Decoiler', 'Equipment that holds and feeds metal coil into a roll-forming or fabrication line.'],
      ['Forming stations', 'The sequential tooling stands that gradually shape flat coil into the final ribbed or standing seam profile.'],
      ['Cut-to-length', 'A production approach where panels are made to specified project lengths instead of pulled only from standard stock sizes.'],
      ['Production run', 'A scheduled manufacturing batch organized around profile, finish, gauge, length, order priority, and packaging needs.'],
      ['Bundle label', 'A jobsite or delivery label that helps identify panel bundles by project, length, elevation, roof area, or order segment.'],
      ['Mobile roll forming', 'A production model where roll-forming equipment can be brought closer to a project location for long panels or specialized logistics.'],
    ],
  },
  {
    group: 'Panel Profiles and Systems',
    intro: 'Common product names, profile features, and system concepts used in roofing, siding, wall panel, and commercial building conversations.',
    terms: [
      ['Standing seam', 'A concealed-fastener metal roofing system with raised seams and a cleaner architectural appearance.'],
      ['R-Panel', 'A practical ribbed exposed-fastener panel family used for roofing and siding on commercial, warehouse, shop, and agricultural buildings.'],
      ['PBR Panel', 'A ribbed exposed-fastener panel term often used for roof and wall packages; profile details should be confirmed by manufacturer.'],
      ['AG Panel / Tuff Rib', 'A ribbed exposed-fastener panel style commonly discussed for agricultural, shop, storage, and practical residential accessory buildings.'],
      ['Wall panel', 'A metal panel used as exterior or interior siding; panel profile, orientation, substrate, fastening, and trim should be confirmed for the project.'],
      ['Rib height', 'The vertical height of a panel rib, which affects appearance, stiffness, profile identity, and compatibility with details.'],
      ['Coverage width', 'The net installed width a panel covers after side laps are accounted for, used for estimating material quantities.'],
      ['Side lap', 'The overlapping edge condition where one panel joins the next panel along the panel run.'],
    ],
  },
  {
    group: 'Materials, Gauges, and Finishes',
    intro: 'Material and finish language that helps buyers compare quotes, color paths, durability expectations, and submittal information.',
    terms: [
      ['Gauge', 'A sheet metal thickness reference where lower numbers generally mean thicker metal.'],
      ['Substrate', 'The base metal and coating system beneath the paint finish, often discussed when comparing galvanized or aluminum-zinc coated steel paths.'],
      ['Galvanized steel', 'Steel with a zinc coating used to support corrosion resistance before paint or finish considerations.'],
      ['Galvalume', 'A commonly used aluminum-zinc coated steel substrate term; confirm the exact material specification with the supplier or manufacturer.'],
      ['PVDF', 'A premium finish path commonly discussed for long-life architectural metal panel projects.'],
      ['SMP', 'A silicone-modified polyester finish path used across many economical and practical metal panel projects.'],
      ['Matte finish', 'A lower-sheen paint appearance often selected when buyers want a softer architectural look.'],
      ['Cool roof color', 'A finish category discussed when reflectivity, heat gain, energy-code conversations, or owner requirements matter.'],
      ['Color sample', 'A physical or approved digital reference used to confirm finish selection before final ordering or submittal approval.'],
    ],
  },
  {
    group: 'Trim, Flashing, and Accessories',
    intro: 'The pieces around the panel that close edges, protect transitions, coordinate openings, and help a roof or wall package install cleanly.',
    terms: [
      ['Trim', 'Formed pieces used at roof edges, corners, openings, transitions, and closeout details.'],
      ['Flashing', 'Metal detailing used to direct water and protect transitions, edges, penetrations, and joints.'],
      ['Ridge cap', 'Trim used along the peak where two roof planes meet.'],
      ['Rake trim', 'Trim used along sloped gable edges of a roof.'],
      ['Eave trim', 'Trim used along the lower horizontal roof edge.'],
      ['Jamb trim', 'Trim used around door, window, and framed opening conditions.'],
      ['Closures', 'Foam or formed accessories used to close panel rib openings at ridge, eave, wall, or transition conditions.'],
      ['Fasteners', 'Screws or related attachment hardware selected by panel type, substrate, exposure, and project details.'],
      ['Sealant', 'Material used at selected joints, laps, penetrations, or trim conditions where project details require it.'],
    ],
  },
  {
    group: 'Commercial Documentation and Quoting',
    intro: 'Terms that help contractors, owners, and procurement teams prepare cleaner quote requests, compare bids, and reduce missing information.',
    terms: [
      ['Submittal package', 'Project documentation that may include product data, finish information, fastener notes, drawings, and warranty-path materials.'],
      ['Product data', 'Manufacturer or supplier information describing profile, material, finish, accessories, and product-use assumptions.'],
      ['Finish schedule', 'A project list that identifies selected colors, coating systems, surfaces, and building areas.'],
      ['Takeoff', 'The estimating process of measuring drawings or field information to identify panel quantities, lengths, trim pieces, and accessories.'],
      ['Quote assumptions', 'The scope, exclusions, delivery notes, finish path, and project facts used to prepare pricing.'],
      ['Exclusions', 'Items not included in a quote, such as installation, engineering, freight, accessories, or details outside the provided scope.'],
      ['Alternate', 'A substitute product, profile, finish, or scope option offered for price, schedule, availability, or project-fit reasons.'],
      ['Delivery state', 'The state or region where the project will receive material, used for logistics, service-area, and quote-routing conversations.'],
    ],
  },
] satisfies { group: string; intro: string; terms: [string, string][] }[]

const glossaryTerms = glossaryGroups.flatMap((group) => group.terms)

const topicalClusters = [
  {
    name: 'Manufacturing Authority',
    copy: 'Core pages that explain how Americas Panel Fab thinks about coil, roll forming, fabrication workflow, documentation, and manufacturing credibility.',
    slugs: ['metal-panel-manufacturing-guide', 'roll-forming-guide', 'architectural-metal-fabrication-guide', 'metal-roofing-submittal-guide'],
  },
  {
    name: 'Panel Profiles and Product Decisions',
    copy: 'Neutral comparison pages that help buyers understand profile names, roof and wall applications, and exposed-fastener versus concealed-fastener choices.',
    slugs: ['metal-panel-profiles-guide', 'standing-seam-vs-r-panel', 'pbr-panel-vs-r-panel', 'exposed-fastener-metal-roofing-guide', 'metal-wall-panels-guide'],
  },
  {
    name: 'Materials, Gauges, and Finishes',
    copy: 'Buyer education around gauge, substrate, paint systems, samples, finish schedules, and commercial color decisions.',
    slugs: ['metal-roofing-gauges', '24-gauge-vs-26-gauge-metal-roofing', 'galvalume-vs-galvanized', 'metal-panel-finishes', 'pvdf-vs-smp-metal-panel-finishes'],
  },
  {
    name: 'Trim, Flashing, and Quote Readiness',
    copy: 'Practical resources that turn research into complete project information for commercial roofing, siding, trim, flashing, and product quotes.',
    slugs: ['trim-and-flashing-guide', 'metal-roof-trim-types', 'commercial-metal-roofing-guide', 'commercial-metal-roofing-quote-checklist'],
  },
]

const glossaryEntries = glossaryGroups.flatMap((group) =>
  group.terms.map(([term, definition]) => ({
    category: group.group,
    definition,
    name: term,
    slug: slugifyTerm(term),
  })),
)

const guideEnhancements: Record<string, {
  checklist?: string[][]
  comparison: string[][]
  deepDive?: string[][]
  diagram: string[]
  faq: string[][]
  fieldNote: string
  paragraphs: string[]
  reviewer: string
  visuals?: { alt: string; caption: string; image: string; title: string }[]
}> = {
  'metal-panel-manufacturing-guide': {
    paragraphs: [
      'Metal panel manufacturing is often described as a machine process, but the real commercial value comes from the whole order system. A coil is not yet a roof. A roll former is not yet a project package. A panel profile is not yet a building envelope. Manufacturing authority begins when material, drawings, finish decisions, trim details, documentation, packaging, and delivery planning are managed as one connected workflow.',
      'For contractors and owners, the manufacturing process should reduce uncertainty. The buyer wants to know whether the panel profile is correct, whether the finish is available, whether the trim scope has been understood, whether drawings were reviewed, whether quantities are organized, and whether the order will arrive in a way the field can use. The manufacturer’s job is not only to form metal. It is to turn project information into a complete, traceable, practical package.',
      'A serious manufacturing workflow begins before production. The estimate should identify the building use, project state, roof or wall scope, approximate square footage, profile preference, gauge path, finish path, trim and flashing needs, openings, penetrations, delivery expectations, and any owner or submittal requirements. If those inputs are missing, the order can still be discussed, but the quote should clearly list assumptions and open questions.',
      'Coil planning matters because material availability affects schedule, finish options, substitutions, and purchasing confidence. The same panel profile may be available in different gauges, substrates, and paint systems. A commercial buyer comparing quotes should not only ask for price. They should ask what coil, finish, gauge, profile, trim, and delivery assumptions were included. Otherwise two quotes may look comparable while describing different packages.',
      'Roll forming is the central production step, but it depends on everything upstream and downstream. Tooling must match the profile. Lengths must match the takeoff. Cutoff and bundling should match the field sequence when possible. Labels should make sense to the receiving crew. Trim and flashing should be coordinated with the panel package so crews are not forced to solve missing details on site.',
      'Documentation is where manufacturing credibility becomes visible to commercial buyers. Product data, finish information, substrate notes, quote assumptions, exclusions, trim schedules, color samples, and warranty-path conversations help project teams understand what is being supplied. This is especially important for commercial, industrial, education, multifamily, and public-facing projects where decisions may involve owners, contractors, architects, procurement teams, and installers.',
      'Americas Panel Fab should use this page as the root of its authority system. Product-ready buyers can move to American Super Panel for exposed-fastener roofing and siding panels, but the Fab site should explain the wider manufacturing discipline: how materials move, how packages are organized, how buyers prepare better requests, and how factory thinking supports long-term growth across panel families, trim, accessories, partners, and future product lines.',
    ],
    diagram: ['Project information and drawings', 'Profile, gauge, substrate, and finish review', 'Panel, trim, flashing, and accessory scope', 'Production run, bundling, labels, and documentation', 'Delivery planning and field-ready handoff'],
    comparison: [
      ['Manufacturing layer', 'Weak signal', 'Authority signal'],
      ['Quote intake', 'Price requested from vague square footage', 'Drawings, scope, profile, finish, trim, and delivery state captured'],
      ['Material planning', 'Generic metal panel language', 'Gauge, substrate, finish family, color, and availability documented'],
      ['Production', 'Panels treated as isolated line items', 'Lengths, bundles, labels, trim, and accessories coordinated'],
      ['Documentation', 'Minimal product description', 'Product data, finish notes, assumptions, exclusions, and submittal path'],
      ['Field handoff', 'Installer sorts out scope gaps', 'Package arrives with clearer organization and quote history'],
    ],
    faq: [
      ['What makes metal panel manufacturing different from simple metal supply?', 'Manufacturing connects material, profile, finish, lengths, trim, documentation, packaging, and delivery into a project-ready package instead of only selling loose material.'],
      ['What should a contractor send before requesting a metal panel quote?', 'Send drawings, roof or wall scope, approximate square footage, profile preference, finish or color needs, trim conditions, project state, delivery needs, and schedule target.'],
      ['Why does Americas Panel Fab publish manufacturing education if American Super Panel sells panels?', 'Americas Panel Fab provides the company and manufacturing context. American Super Panel is the product-focused path for exposed-fastener panel quotes.'],
      ['Can manufacturing content replace project-specific engineering or code review?', 'No. Public education helps buyers prepare better questions. Project-specific code, engineering, wind, fire, and warranty requirements need qualified review and manufacturer documentation.'],
    ],
    fieldNote: 'The manufacturer that wins trust usually explains the process before the buyer has to ask. Content should make the buyer feel the company understands drawings, material, fabrication, documentation, and delivery as one system.',
    reviewer: 'Reviewed by the Americas Panel Fab Resource Desk for public manufacturing education. Project-specific engineering, code, warranty, or compliance requirements must be confirmed through qualified review.',
    visuals: [
      { title: 'Factory floor', caption: 'Show machinery, material flow, safe work zones, and the physical proof of manufacturing capability.', image: facilityImage, alt: 'Metal panel manufacturing factory floor' },
      { title: 'Coil to panel workflow', caption: 'Use coil, roll-forming equipment, forming stations, cutoff, and bundle imagery to explain the production path.', image: machineImage, alt: 'Roll forming equipment turning coil into metal panels' },
      { title: 'Jobsite package', caption: 'Use bundled panels, labels, trim, and delivery imagery to connect manufacturing to field readiness.', image: warehouseImage, alt: 'Commercial metal panel package ready for project delivery' },
    ],
    deepDive: [
      ['Why the quote stage matters', 'Most production problems begin as quote-stage ambiguity. If drawings, profile preference, finish path, trim scope, delivery state, and schedule are not captured early, the manufacturer is forced to price assumptions instead of a real package. Strong quote intake protects both sides because it makes missing information visible before the order becomes urgent.'],
      ['Why packaging is part of manufacturing', 'Panels are not useful simply because they are formed. They have to be counted, cut, protected, bundled, labeled, and delivered in a way the field can understand. A jobsite crew should not need to reverse-engineer the order from a pile of metal. Good manufacturing makes the field handoff easier.'],
      ['Why documentation creates trust', 'Commercial buyers often need more than verbal confidence. They need product data, finish records, assumptions, exclusions, color references, and a review path that can be shared with owners, contractors, architects, and purchasing teams. Documentation turns a panel supplier into a more credible manufacturing partner.'],
      ['Why the company and product brand both matter', 'Americas Panel Fab should carry the manufacturer story because it can support future product families, partners, fabrication services, and broader authority content. American Super Panel should stay memorable and product-focused for buyers who are ready to request exposed-fastener roofing and siding panels.'],
    ],
    checklist: [
      ['Drawings', 'Roof plans, wall elevations, openings, slopes, photos, sketches, and relevant project documents.'],
      ['Product path', 'Profile, gauge, substrate, finish family, color, roof/wall use, and any alternate product options.'],
      ['Fabrication scope', 'Trim, flashing, closures, fasteners, transitions, penetrations, corner details, and labels.'],
      ['Commercial record', 'Quote assumptions, exclusions, submittal needs, owner requirements, delivery state, and schedule target.'],
    ],
  },
  'roll-forming-guide': {
    paragraphs: [
      'Roll forming is the process most people picture when they think about metal panel production: flat coil feeds through a machine and exits as a shaped roofing or siding panel. That picture is accurate, but incomplete. The important commercial question is how the roll-forming workflow supports profile consistency, length control, packaging, documentation, quote accuracy, and jobsite usefulness.',
      'A roll former uses a series of forming stations to shape metal gradually. Each station bends the material a little more until the desired profile emerges. The tooling determines rib spacing, rib height, side lap, coverage width, and the overall profile identity. Because many panel names sound similar across suppliers, buyers should ask for the actual profile drawing and coverage width before assuming two panel quotes match.',
      'The coil feeding process matters because the starting material carries the gauge, substrate, finish, and color assumptions for the order. If a buyer requests a color that is not available in the expected gauge or substrate, the project may need an alternate path. If the finish is not confirmed before production, the schedule and submittal process can become messy. Roll forming does not solve those issues by itself; the front-end order process must capture them.',
      'Length planning is one of the biggest advantages of manufacturing coordination. Panels can be produced in custom lengths within equipment, handling, shipping, and project constraints. That does not mean every length is automatically practical. The manufacturer, contractor, and buyer should consider handling, jobsite storage, transportation, roof access, crew sequencing, and whether long panels create special needs.',
      'Factory roll forming and mobile roll forming solve different problems. Factory production can support repeatability, packaging control, material staging, and coordination with trim or accessories. Mobile roll forming can be valuable for selected long-run jobs or logistics-sensitive projects when site conditions support it. The buyer should not treat mobile as a universal upgrade. It is a project-fit decision.',
      'Quality conversations around roll forming should stay practical and public-safe. Buyers can ask about profile verification, bundle labels, material traceability, cutoff accuracy, finish protection, packaging, and documented assumptions. They should avoid assuming performance claims that have not been reviewed. Public education can explain the workflow while project-specific requirements remain tied to qualified review and manufacturer documentation.',
      'For Americas Panel Fab, roll-forming authority should become a pillar because it ties together equipment investment, product family development, quote readiness, contractor support, and future manufacturing growth. The page should help a buyer understand why the company is not just reselling panels. It is building a manufacturing process around panel systems.',
    ],
    diagram: ['Coil selected by gauge, substrate, and finish', 'Decoiler feeds material into forming stations', 'Tooling shapes profile and side lap', 'Cutoff creates project lengths', 'Panels are bundled, labeled, and coordinated with trim'],
    comparison: [
      ['Roll-forming question', 'Why it matters', 'What to confirm'],
      ['Profile drawing', 'Names vary by supplier', 'Rib height, rib spacing, side lap, coverage width'],
      ['Length plan', 'Affects handling, delivery, and field sequencing', 'Panel lengths, bundle plan, jobsite constraints'],
      ['Factory vs mobile', 'Different logistics and quality-control paths', 'Site access, project length, packaging, weather, schedule'],
      ['Finish path', 'Color and substrate must match order assumptions', 'Gauge, substrate, finish family, samples, availability'],
      ['Trim coordination', 'Panels alone do not close the project', 'Ridge, rake, eave, corners, jambs, closures, fasteners'],
    ],
    faq: [
      ['What does a roll former do?', 'A roll former shapes flat metal coil through forming stations until it becomes a consistent roofing or siding panel profile.'],
      ['Is mobile roll forming always better?', 'No. Mobile roll forming can help certain long-panel or logistics-sensitive jobs, but factory roll forming may be better for packaging, staging, repeatability, and coordinated orders.'],
      ['Why should buyers confirm coverage width?', 'Coverage width determines how much area each installed panel covers and directly affects material quantities and quote comparisons.'],
      ['What information improves a roll-forming quote?', 'Panel profile, lengths, finish, gauge, roof/wall use, drawings, trim scope, delivery state, and schedule target all improve the first conversation.'],
    ],
    fieldNote: 'Roll-forming content should show enough process knowledge to make the company credible without making unverified performance, capacity, certification, or compliance claims.',
    reviewer: 'Reviewed by the Americas Panel Fab Resource Desk for public roll-forming education. Equipment capability, project limitations, and code requirements should be confirmed before production decisions.',
    visuals: [
      { title: 'Machine line', caption: 'A roll-forming line should visually prove that the company understands coil feed, forming stations, and cutoff workflow.', image: machineImage, alt: 'Metal panel roll-forming line' },
      { title: 'Profile closeup', caption: 'Profile imagery helps buyers understand ribs, laps, coverage, and why drawings matter more than product nicknames.', image: panelImage, alt: 'Closeup of ribbed metal panel profile' },
      { title: 'Commercial application', caption: 'Project imagery connects the machine process to the buildings contractors and owners actually care about.', image: warehouseImage, alt: 'Commercial building with metal panel roofing and siding' },
    ],
    deepDive: [
      ['Tooling controls the product identity', 'A roll former is only as useful as the profile it is set up to make. Tooling controls the panel geometry that buyers later describe with names like R-Panel, PBR, AG panel, or standing seam. That is why profile drawings, coverage width, rib spacing, and side-lap details matter before anyone compares price.'],
      ['Custom lengths still require judgment', 'Custom-length production can reduce waste and help a project fit the building, but longer panels are not automatically better. Handling, roof access, transportation, crew safety, jobsite storage, and weather exposure all shape what length plan is practical. A manufacturer should help buyers think through those tradeoffs before release.'],
      ['Factory and mobile production serve different jobs', 'Factory roll forming can support controlled staging, packaging, labeling, and coordination with trim. Mobile roll forming may help selected long-panel projects when the site, weather, access, and order size make sense. The authority move is not to hype one model; it is to explain when each model fits.'],
      ['Roll forming connects to the rest of the order', 'The machine creates the panel, but the order still needs trim, flashing, closures, fasteners, finish documentation, bundle labels, and delivery planning. Buyers who understand that broader workflow are less likely to compare two quotes only by panel name and price.'],
      ['What to document before release', 'Before a roll-formed order moves into production, the buyer and manufacturer should agree on profile drawing, coverage width, finish, gauge, panel lengths, trim scope, closures, fasteners, bundle expectations, delivery contact, and open exclusions. That release record is what keeps a manufacturing conversation from becoming a memory contest later.'],
    ],
    checklist: [
      ['Before quoting', 'Confirm profile, use, finish, gauge, approximate footage, project state, and drawings.'],
      ['Before production', 'Confirm lengths, trim, closures, fasteners, labels, packaging, finish, and open assumptions.'],
      ['Before delivery', 'Confirm bundle handling, jobsite access, receiving contact, schedule, and delivery constraints.'],
    ],
  },
  'architectural-metal-fabrication-guide': {
    paragraphs: [
      'Architectural metal fabrication is where a panel package becomes a finished building detail. Panels cover broad areas, but fabrication handles the edges, corners, openings, transitions, fascia, soffit, cap conditions, and custom closeout pieces that decide whether the finished work looks intentional. This is why fabrication belongs at the center of the Americas Panel Fab authority story.',
      'A buyer may begin with a roof or siding panel request, but the building rarely ends at the panel. Doors, windows, parapets, corners, roof edges, slope changes, penetrations, equipment curbs, base conditions, and material transitions all need attention. Each condition can require a formed part, a trim piece, a flashing approach, a closure, a fastener path, or a detail conversation.',
      'The strongest fabrication process begins with information. Drawings, elevations, sketches, photos, dimensions, existing-condition notes, finish schedules, and color preferences help a fabricator understand what the project actually needs. Without that information, a quote can still proceed, but the assumptions should be clear and the buyer should expect follow-up questions.',
      'Fabrication is also where visible quality shows up. A perfectly acceptable roof panel can still feel like a weak project if the fascia, corners, jambs, caps, or transitions look mismatched. Finish coordination matters because panel, trim, flashing, soffit, and accessory colors may be viewed together. If the trim finish is not reviewed early, the final building can feel patched together.',
      'Commercial projects often require more documentation. Product data, trim schedules, finish samples, drawings, submittal notes, exclusions, alternates, and warranty-path conversations may all appear before material is released. Fabrication authority means explaining that process in plain language so buyers understand why detail review protects time, budget, and finished appearance.',
      'Fabrication content should avoid pretending every project detail is solved by a generic web page. Water management, code, engineering, fastening, fire, wind, and warranty issues can require project-specific review. Public content can educate buyers about the categories and questions, while final details should be confirmed through qualified professionals and manufacturer documentation.',
      'For Americas Panel Fab, architectural fabrication is a strategic bridge between product sales and company credibility. American Super Panel can sell practical exposed-fastener panels. The Fab site can explain the broader manufacturing and detail discipline that makes the company useful to contractors, owners, architects, and partners beyond a single product line.',
    ],
    diagram: ['Drawings, photos, dimensions, and field conditions', 'Edge, opening, corner, and transition review', 'Trim and flashing schedule', 'Finish, color, and accessory coordination', 'Fabricated package, labels, and field handoff'],
    comparison: [
      ['Fabrication area', 'Common detail', 'What to prepare'],
      ['Roof perimeter', 'Ridge, rake, eave, drip edge, fascia', 'Slope, overhang, gutter path, edge condition'],
      ['Wall openings', 'Jamb, head, sill, base trim', 'Opening sizes, elevations, orientation, photos'],
      ['Transitions', 'Roof-to-wall, wall-to-wall, material changes', 'Drawings, water path, overlap expectations'],
      ['Visible finishes', 'Trim, panels, soffit, fascia, accent pieces', 'Color samples, sheen, finish family, owner standards'],
      ['Commercial paperwork', 'Submittals, exclusions, alternates', 'Product data, finish schedule, approval contacts'],
    ],
    faq: [
      ['What is architectural metal fabrication?', 'It is the formed-metal work that creates trim, flashing, fascia, soffit, caps, corners, transitions, and custom details around roof and wall panels.'],
      ['What should I send for custom fabrication review?', 'Send drawings, dimensions, photos, sketches, panel profile, finish or color needs, opening conditions, and any owner or submittal requirements.'],
      ['Why does fabrication affect commercial credibility?', 'Commercial buyers need confidence that the manufacturer understands more than panel square footage. Details, documentation, finish coordination, and field readiness matter.'],
      ['Can a website provide final flashing details?', 'No. Public guidance helps buyers prepare better information. Final project details should be reviewed against drawings, manufacturer guidance, and qualified professional requirements.'],
    ],
    fieldNote: 'The biggest fabrication mistake is treating trim as an afterthought. On serious projects, trim and flashing should be scoped before the panel order is released.',
    reviewer: 'Reviewed by the Americas Panel Fab Resource Desk for public fabrication education. Final project details require project-specific review.',
    visuals: [
      { title: 'Fabrication equipment', caption: 'Show brakes, forming equipment, worktables, and fabricated parts to prove capability beyond broad panel production.', image: fabricationImage, alt: 'Architectural sheet metal fabrication equipment' },
      { title: 'Trim detail closeup', caption: 'Closeups should show edges, ribs, folds, corners, and finish quality instead of generic construction imagery.', image: weldingImage, alt: 'Custom trim and flashing fabrication detail' },
      { title: 'Finished building condition', caption: 'Use commercial roof and wall project imagery to show how details affect the finished structure.', image: warehouseImage, alt: 'Finished commercial building with metal roof and wall panels' },
    ],
    deepDive: [
      ['Fabrication starts with conditions, not part names', 'A list of trim names is helpful, but it does not replace the building conditions. Ridge, rake, eave, jamb, base, cap, and corner pieces all change depending on dimensions, wall orientation, roof slope, openings, transitions, and what other materials are touching the panel system.'],
      ['The visible edge is where trust is won', 'Owners notice corners, transitions, fascia, soffit, opening trim, and color changes because those details sit at eye level or outline the building. A project can use good panels and still feel cheap if fabricated details are mismatched, improvised, or poorly coordinated with the finish schedule.'],
      ['Documentation makes custom work repeatable', 'Custom fabrication becomes more reliable when the assumptions are captured: dimensions, finish, material, bend direction, quantity, location, revision date, and what is excluded. That record helps estimators, fabricators, installers, and buyers stay aligned when a project changes.'],
      ['The best fabrication content teaches preparation', 'A public guide should not pretend to engineer every flashing detail. It should teach buyers what to send, what to ask, what to confirm, and where professional review is required. That makes the page valuable without overstepping into unverified project-specific claims.'],
      ['Why fabrication belongs in the first quote', 'If fabrication is delayed until after panels are priced, the project can discover missing edges, corners, openings, and transitions too late. Bringing fabricated details into the first quote helps the buyer compare complete packages instead of comparing panel square footage against another supplier’s panel-plus-trim scope.'],
      ['How fabrication supports repeat customers', 'Contractors remember suppliers who make details easier. When fabricated parts arrive with clear dimensions, finish coordination, labels, and documented assumptions, crews spend less time asking what each piece is for. That repeatability becomes a relationship advantage because the manufacturer is helping the contractor protect schedule and field confidence.'],
      ['What to photograph for fabrication review', 'Photos should capture corners, openings, roof edges, transitions, wall bases, gutters, existing material changes, and any unusual field conditions. Good photos do not replace drawings, but they help the fabrication conversation start with the real building instead of assumptions.'],
    ],
    checklist: [
      ['Detail inputs', 'Drawings, elevations, dimensions, sketches, photos, opening schedules, and field notes.'],
      ['Material inputs', 'Panel profile, finish family, color, gauge path, substrate, and visible trim areas.'],
      ['Scope inputs', 'Ridge, rake, eave, corner, jamb, base, fascia, soffit, transitions, closures, and fasteners.'],
      ['Approval inputs', 'Submittal contacts, owner standards, exclusions, alternates, and revision process.'],
    ],
  },
  'metal-panel-profiles-guide': {
    paragraphs: [
      'Metal panel profile language can be deceptively simple. Names like standing seam, R-Panel, PBR Panel, AG Panel, Tuff Rib, wall panel, and liner panel sound clear until two suppliers use similar names for profiles with different coverage widths, rib spacing, side-lap details, or fastening assumptions. A serious buyer should treat the profile name as the starting point, not the final specification.',
      'The profile affects appearance, coverage, fastening, trim compatibility, installer familiarity, documentation, and sometimes owner expectations. A clean architectural roof may point toward standing seam. A warehouse, agricultural building, shop, or industrial re-skin may point toward a ribbed exposed-fastener panel. A wall panel package may need a different orientation, trim logic, and opening review than the roof package on the same building.',
      'Coverage width is one of the most important quote variables because it affects material quantities. If two panels have similar names but different installed coverage widths, the same square footage can require different counts, laps, and cost assumptions. Rib height and rib spacing also matter because they affect visual rhythm, profile identity, handling, stiffness conversation, and trim compatibility.',
      'Fastening style changes the project conversation. Standing seam systems generally hide fasteners and carry a more architectural appearance path. Exposed-fastener profiles put fasteners through the panel face and are often chosen for practical budgets, speed, agricultural buildings, warehouses, and industrial scopes. Neither category is universally better. The right choice depends on drawings, budget, owner expectations, installer path, and documentation needs.',
      'Roof and wall use should not be blended casually. A ribbed panel might be discussed for both roof and wall conditions, but roof slope, drainage, penetrations, closures, side laps, wall openings, base trim, corners, and orientation create different detail questions. Buyers should identify whether the requested material is roof-only, wall-only, or a combined roof-and-wall package.',
      'Americas Panel Fab should use profile education to own the neutral research layer. Buyers who are still comparing systems need a manufacturer-level explanation of profile families and decision factors. Buyers who know they want exposed-fastener roofing or siding can move to American Super Panel for the product-focused quote path.',
      'The authority opportunity is to make each profile page answer the hidden questions behind the keyword. A search for R-Panel may really mean: What is the coverage width? Can it be used for siding? What trim is needed? What gauge should I ask for? What finish path makes sense? How do I compare quotes? The site should answer those questions without overclaiming project-specific performance.',
    ],
    diagram: ['Building use and roof/wall scope', 'Profile family and fastening style', 'Coverage width, rib height, and side lap review', 'Gauge, substrate, finish, trim, and closures', 'Quote-ready product path'],
    comparison: [
      ['Profile family', 'Common reason buyers consider it', 'What to confirm'],
      ['Standing seam', 'Concealed-fastener architectural roof appearance', 'Seam type, slope, clips, panel length, details'],
      ['R-Panel / PBR', 'Practical roof and wall coverage for commercial, industrial, and agricultural buildings', 'Profile drawing, coverage width, side lap, fasteners, trim'],
      ['AG / Tuff Rib', 'Shops, barns, storage, accessory buildings, practical siding', 'Gauge, finish, substrate, roof/wall use, closures'],
      ['Wall panels', 'Commercial siding, re-skins, liners, accents', 'Orientation, openings, corners, base trim, color breaks'],
      ['Trim profiles', 'Closeout and transition details', 'Dimensions, finish, angles, drawings, field conditions'],
    ],
    faq: [
      ['Are R-Panel and PBR Panel always the same profile?', 'No. They may be used similarly in the market, but buyers should confirm the actual profile drawing, coverage width, rib spacing, and side-lap detail.'],
      ['Can the same panel be used for roofing and siding?', 'Many exposed-fastener panels are discussed for both, but roof and wall use can change fastening, trim, closures, orientation, and project assumptions.'],
      ['What is the most important profile detail for estimating?', 'Coverage width is critical because it affects panel quantities. Rib height, side lap, gauge, finish, and trim scope also matter.'],
      ['Where should American Super Panel fit into profile research?', 'American Super Panel should receive product-ready exposed-fastener panel interest, while Americas Panel Fab explains the broader profile and manufacturing context.'],
    ],
    fieldNote: 'A profile name without a drawing is not enough. Use profile drawings, coverage width, and quote assumptions to avoid false comparisons.',
    reviewer: 'Reviewed by the Americas Panel Fab Resource Desk for public profile education. Specific profile dimensions and requirements should be confirmed with product documentation.',
    visuals: [
      { title: 'Profile closeup', caption: 'Show rib spacing, side lap, and panel geometry clearly so buyers understand why drawings matter.', image: panelImage, alt: 'Ribbed metal panel profile detail' },
      { title: 'Roof application', caption: 'Commercial roof imagery connects profile choices to budget, appearance, slope, and installation expectations.', image: warehouseImage, alt: 'Commercial roof panel profile application' },
      { title: 'Factory context', caption: 'Manufacturing imagery reinforces that profiles come from tooling, coil, forming stations, and production workflow.', image: facilityImage, alt: 'Metal panel profile manufacturing context' },
    ],
    deepDive: [
      ['Profile names are market language', 'Buyers search for names like R-Panel, PBR Panel, AG Panel, Tuff Rib, and standing seam because those names are familiar. The manufacturer still has to translate market language into actual drawings, coverage widths, side laps, fastening details, and quote assumptions.'],
      ['Roof and wall profiles have different questions', 'A profile that appears on both roofs and walls may still need different trim, fasteners, closures, orientation, and review. Roof questions often involve slope, drainage, penetrations, and weather exposure. Wall questions often involve openings, corners, base trim, color breaks, and architectural appearance.'],
      ['Coverage width affects every estimate', 'Installed coverage width determines how many panels a project needs. Two similar-looking profiles can create different material quantities if coverage differs. That is why profile drawings and takeoffs matter more than a short product nickname in a bid comparison.'],
      ['Profiles connect SEO to real buying intent', 'A visitor researching profiles may not be ready to quote today, but they are showing commercial intent. If the page teaches them how to compare systems and then gives a clean path to American Super Panel when ready, the authority content supports revenue without sounding like a thin sales page.'],
      ['How to avoid profile substitution confusion', 'Substitutions should be reviewed by profile drawing, coverage width, side lap, gauge, substrate, finish, fastener path, trim compatibility, and project use. A substitute may be acceptable, but it should never be accepted only because the profile name sounds close to the original request.'],
      ['Why profile pages need photos and drawings', 'Text can explain profile families, but buyers also need visual confirmation. Profile closeups, roof photos, wall photos, and simple diagrams help people understand rib shape, lap direction, visible fastening, and trim conditions before they request pricing.'],
      ['How profile choice affects trim', 'Changing profiles can change closures, trim dimensions, fastening assumptions, and side-lap conditions. That is why profile decisions should be coordinated with trim and flashing before the buyer treats the quote as final.'],
    ],
    checklist: [
      ['Profile identity', 'Name, drawing, rib height, rib spacing, coverage width, and side-lap detail.'],
      ['Project use', 'Roof, wall, roof-plus-wall, agricultural, commercial, industrial, or architectural application.'],
      ['Package scope', 'Panel lengths, gauge, substrate, finish, trim, closures, fasteners, and delivery state.'],
    ],
  },
  'standing-seam-vs-r-panel': {
    paragraphs: [
      'Standing seam and R-Panel are not interchangeable product names. They represent different roof system strategies. Standing seam is usually selected when the owner, architect, or general contractor wants a cleaner roof plane, concealed fastening, longer-term appearance control, and a more architectural project narrative. R-Panel is usually selected when the buyer wants a practical exposed-fastener panel that can cover large commercial, warehouse, shop, agricultural, or utility buildings efficiently.',
      'The best decision starts with the building use. A school, retail center, multifamily building, municipal facility, or owner-occupied commercial property may value appearance, concealed fastening, and a more refined roof line. A warehouse, equipment building, manufacturing shell, agricultural barn, or practical commercial re-skin may prioritize speed, cost control, simple trim coordination, and straightforward replacement or maintenance. Neither path is automatically better. The right path is the one that matches drawings, budget, slope, substrate, exposure, schedule, installer familiarity, and documentation needs.',
      'Americas Panel Fab treats this as a manufacturing and project coordination question, not only a product comparison. The panel profile, finish, trim, flashing, fastener path, closures, penetrations, drainage, delivery state, and submittal expectations should be reviewed together. Contractors benefit when the decision is made before a quote request becomes a production package, because late changes from standing seam to exposed fastener, or from roof-only to roof-and-wall scope, can change material lists, trim requirements, sequencing, and expectations.',
    ],
    diagram: ['Project use and owner goals', 'Roof slope, substrate, exposure, and appearance review', 'Standing seam or R-Panel system path', 'Trim, flashing, finish, and fastener package', 'Quote, submittal, and production handoff'],
    comparison: [
      ['Decision factor', 'Standing seam', 'R-Panel / exposed fastener'],
      ['Fastening', 'Concealed clips or seam details depending on system', 'Fasteners through the panel face'],
      ['Common fit', 'Architectural, commercial, education, municipal, owner-occupied', 'Warehouse, industrial, agricultural, shop, utility, commercial re-skin'],
      ['Appearance', 'Clean vertical lines and less visible fastening', 'Ribbed practical profile with visible fasteners'],
      ['Budget conversation', 'Often higher material/detail/labor path', 'Often more economical and faster to quote'],
      ['Review priority', 'Seam type, slope, clips, details, installer fit', 'Profile, fasteners, closures, trim, maintenance'],
    ],
    faq: [
      ['Is standing seam always better than R-Panel?', 'No. Standing seam may be better for appearance-driven or concealed-fastener projects, while R-Panel may be better for practical commercial, warehouse, agricultural, and budget-sensitive work.'],
      ['Can R-Panel be used on walls?', 'Many ribbed exposed-fastener profiles are used on both roofs and walls, but the actual profile, substrate, fastening, trim, and project conditions should be confirmed before ordering.'],
      ['What should a buyer prepare before comparing systems?', 'Prepare drawings, slope, roof or wall scope, desired finish, delivery state, schedule, trim needs, penetrations, and any owner or submittal requirements.'],
    ],
    fieldNote: 'Do not choose the system from a profile name alone. A serious comparison includes drawings, building use, installer path, finish expectations, trim complexity, and the documentation the buyer must submit or approve.',
    reviewer: 'Reviewed from a manufacturer-resource perspective for public-safe buyer education. Project-specific engineering, code, wind, fire, or warranty determinations require qualified review.',
  },
  'pbr-panel-vs-r-panel': {
    paragraphs: [
      'PBR Panel and R-Panel are often used in the same conversation because buyers are usually looking for a ribbed exposed-fastener panel for roofing or siding. The naming can be confusing because regional suppliers and manufacturers may use similar terms for profiles that are not exactly identical. A contractor should not assume two quotes are equivalent just because both mention PBR, R-Panel, commercial rib, or exposed-fastener panel.',
      'The practical issue is profile confirmation. Coverage width, rib spacing, rib height, side-lap detail, fastener pattern, substrate, gauge, finish, closures, trim, and use as roof or wall panel all affect the package. For a warehouse or agricultural building, a small difference in coverage or trim assumptions can change quantities, labor, delivery planning, and quote comparison. For a commercial wall package, side-lap detail and trim coordination can be just as important as the panel square footage.',
      'Americas Panel Fab positions this guide as a quote-readiness tool. The goal is to help contractors, owners, and buyers ask better questions before they send plans or approve a material package. American Super Panel can handle product-focused exposed-fastener quote traffic, while Americas Panel Fab provides the broader manufacturing context so buyers understand why drawings, trim scope, finish path, and project conditions matter.',
    ],
    diagram: ['Confirm building use', 'Confirm roof, wall, or combined scope', 'Match profile drawing and coverage width', 'Coordinate trim, closures, fasteners, and finish', 'Release quote-ready package'],
    comparison: [
      ['Item to verify', 'Why it matters', 'What to ask for'],
      ['Profile drawing', 'Names vary by supplier and region', 'Rib spacing, rib height, coverage width, side-lap'],
      ['Roof vs wall use', 'Fastening and trim assumptions may differ', 'Panel use, orientation, substrate, openings'],
      ['Gauge/substrate', 'Affects cost, handling, expectations', 'Gauge, galvanized/Galvalume path, finish'],
      ['Trim package', 'Can make or break install readiness', 'Ridge, rake, eave, corner, jamb, base, transitions'],
      ['Quote basis', 'Prevents apples-to-oranges bids', 'Lengths, quantities, freight/delivery, exclusions'],
    ],
    faq: [
      ['Are PBR Panel and R-Panel the same thing?', 'Sometimes they are used similarly, but buyers should confirm the manufacturer profile drawing instead of relying on the name alone.'],
      ['What projects commonly use PBR or R-Panel style profiles?', 'Warehouses, shops, agricultural buildings, industrial buildings, utility structures, commercial re-skins, and roof/wall packages often use ribbed exposed-fastener panels.'],
      ['What makes a PBR/R-Panel quote stronger?', 'Include drawings, roof or wall scope, desired lengths, trim conditions, finish, gauge path, delivery state, and project timing.'],
    ],
    fieldNote: 'The highest-value move is to compare profile drawings and quote assumptions before price. A lower bid can become expensive if trim, closures, finish, delivery, or side-lap details are missing.',
    reviewer: 'Reviewed for contractor-facing manufacturing education. Final product profile, fastening, and installation requirements should come from the specific manufacturer documentation and project review.',
  },
  'metal-roofing-gauges': {
    paragraphs: [
      'Gauge is one of the first terms buyers hear in metal roofing, but it is rarely enough to make a good decision by itself. The number generally moves backward: lower gauge numbers usually mean thicker metal. That does not mean every project should automatically choose the thickest option. The panel profile, support spacing, roof or wall use, building type, finish, substrate, exposure, installer practices, and owner expectations all shape the right conversation.',
      'A commercial buyer comparing 24 gauge, 26 gauge, and 29 gauge should ask what the gauge is being paired with. A thicker panel may be appropriate for certain commercial or architectural expectations, but the product system still needs the correct trim, fasteners, closures, and substrate. A budget agricultural or utility structure may use a different path than a school, warehouse, retail shell, or owner-occupied commercial building. The important thing is to make the comparison complete enough that the buyer is not choosing from a single number.',
      'Americas Panel Fab uses gauge education to improve quote quality. When contractors send drawings, square footage, roof/wall scope, finish intent, and project conditions, the gauge conversation becomes practical instead of abstract. The quote can then identify assumptions, alternates, and questions before material is ordered. That reduces confusion later and helps the buyer understand how gauge fits into the whole metal panel package.',
    ],
    diagram: ['Building use', 'Panel profile', 'Gauge/substrate/finish path', 'Fasteners, trim, closures, and support conditions', 'Quote assumptions and approval'],
    comparison: [
      ['Gauge topic', 'Buyer risk', 'Better question'],
      ['24 gauge', 'May be overspecified or costlier for simple projects', 'Is the building use or owner standard asking for a heavier path?'],
      ['26 gauge', 'Common middle-ground conversations still need profile context', 'What profile, substrate, finish, and support conditions apply?'],
      ['29 gauge', 'May fit economical projects but should be reviewed for use and expectations', 'Is this roof, wall, agricultural, accessory, or budget work?'],
      ['Gauge alone', 'Can create false confidence', 'What system, trim, fastener, and documentation assumptions are included?'],
    ],
    faq: [
      ['Is 24 gauge always better than 26 gauge?', 'Not automatically. It is thicker in common gauge language, but the correct choice depends on the system, building use, budget, and project requirements.'],
      ['Does gauge define metal roof performance?', 'No. Gauge is only one factor. Profile, substrate, finish, fastening, support conditions, and installation details also matter.'],
      ['Should gauge be listed in a quote request?', 'Yes. If known, include desired gauge, but also include drawings, panel type, finish, roof/wall scope, trim needs, and project location.'],
    ],
    fieldNote: 'Gauge should be part of a complete quote conversation, not a shortcut. Ask what the gauge is doing for the specific building and what assumptions are attached to it.',
    reviewer: 'Reviewed for public buyer education. Project-specific performance, span, wind, fire, or code requirements should be reviewed by qualified professionals and manufacturer documentation.',
  },
  'metal-panel-finishes': {
    paragraphs: [
      'Finish selection is where metal panel decisions move from pure function into long-term appearance, exposure, owner standards, and documentation. Buyers often begin with a color, but the more useful conversation includes finish family, substrate, environment, reflectivity, trim coordination, sample approval, and warranty path. A color that looks right on a screen may not solve the actual project need if the building has coastal exposure, intense sun, industrial surroundings, campus standards, or architectural review.',
      'SMP and PVDF-style finish paths are common terms in commercial metal panel conversations. A practical project may choose an economical finish path because budget and availability matter. A higher-visibility architectural project may need a premium color program or longer-term appearance expectations. Matte finishes, cool roof colors, specialty accents, and coordinated trim can all affect the final building impression. The key is to coordinate panels, flashing, trim, fascia, soffit, and accessories before the order is released.',
      'Americas Panel Fab treats finishes as a documentation issue as much as a design issue. Finish assumptions should be captured in quotes, submittals, samples, product data, and purchase records. When a contractor has roof panels in one finish path and trim in another, the finished project can look mismatched. When color availability is not checked early, the schedule can move. A better process reviews finish, gauge, substrate, profile, trim, and delivery timing together.',
    ],
    diagram: ['Color and appearance goal', 'Exposure and building use review', 'Finish family and sample path', 'Panel/trim/flashing coordination', 'Submittal and order documentation'],
    comparison: [
      ['Finish path', 'Common conversation', 'Review point'],
      ['SMP', 'Practical, economical, broad-use finish path', 'Budget, color availability, exposure expectations'],
      ['PVDF-style', 'Premium architectural finish conversation', 'Owner standards, color retention expectations, project visibility'],
      ['Matte colors', 'Modern low-glare appearance', 'Sample review, trim coordination, architectural intent'],
      ['Cool roof colors', 'Heat and reflectivity discussion', 'Project climate, code/energy conversation, documentation'],
      ['Specialty accents', 'Brand, fascia, soffit, or feature elements', 'Availability, lead time, matching, substitutions'],
    ],
    faq: [
      ['Can I choose metal panel colors from a screen?', 'Use screens for early review only. Final selection should use samples or approved finish documentation whenever possible.'],
      ['Should trim match the panel finish?', 'Often yes, but some projects intentionally use contrast. Either way, panel, trim, flashing, and accessory colors should be reviewed together.'],
      ['When should finish be confirmed?', 'Before submittal approval or production release, especially for larger commercial, campus, multifamily, or owner-standard projects.'],
    ],
    fieldNote: 'Finish decisions affect appearance, schedule, documentation, and substitutions. Treat finish as part of the manufacturing package, not a last-minute color choice.',
    reviewer: 'Reviewed for manufacturing-resource education. Warranty terms, color availability, and finish performance expectations should be confirmed through specific supplier and manufacturer documentation.',
  },
  'trim-and-flashing-guide': {
    paragraphs: [
      'Trim and flashing are where many metal panel projects become either installable packages or field problems. Panels cover the broad roof or wall area, but trim and flashing handle edges, corners, transitions, openings, penetrations, base conditions, roof-to-wall conditions, and closeout details. When those pieces are not planned early, crews can lose time, owners can see inconsistent details, and quotes can miss important scope.',
      'A good trim package starts with the building, not a generic part list. Ridge, rake, eave, corner, jamb, base, transition, cap, fascia, and opening details should be reviewed against drawings or photos. A warehouse re-skin, agricultural building, retail shell, and multifamily accent wall may all use metal panels, but the trim logic can be very different. The manufacturing question is how to organize formed pieces so the installer receives a coherent package.',
      'Americas Panel Fab publishes trim and flashing guidance because fabrication is part of the value of a serious metal panel supplier. The quote conversation should capture panel type, finish, color, dimensions, corner/opening conditions, roof/wall transitions, closures, fasteners, and labeling needs. For complex jobs, drawings and elevations help reduce guesswork. The best result is a package where panels, trim, flashing, closures, and labels are coordinated before production.',
    ],
    diagram: ['Drawings, photos, or field dimensions', 'Edge, corner, opening, and transition review', 'Trim schedule and finish coordination', 'Fabrication package and labels', 'Installer-ready closeout details'],
    comparison: [
      ['Detail type', 'Common pieces', 'What to confirm'],
      ['Roof edges', 'Ridge, rake, eave, drip/edge conditions', 'Slope, overhang, gutters, substrate, ventilation needs'],
      ['Wall edges', 'Corners, jambs, base trim, transitions', 'Opening sizes, orientation, wall panel layout'],
      ['Transitions', 'Roof-to-wall, slope changes, material changes', 'Water path, overlap, closure, field condition'],
      ['Accessories', 'Closures, fasteners, sealants, touch-up', 'Compatibility, color, quantity, location'],
    ],
    faq: [
      ['Why is trim often missing from early quotes?', 'Buyers may start with panel square footage, but trim requires edges, openings, transitions, and conditions that are not always included in the first request.'],
      ['What should be sent for a trim quote?', 'Send drawings, elevations, sketches, photos, dimensions, panel profile, finish, color, and any unusual openings or transitions.'],
      ['Can trim and panels be ordered separately?', 'Sometimes, but coordinating them together usually improves finish consistency, labeling, sequencing, and installer readiness.'],
    ],
    fieldNote: 'Trim is a manufacturing coordination problem. If the project has many openings, corners, or transitions, the trim conversation should happen before panels are released.',
    reviewer: 'Reviewed for fabrication education. Water management, code, warranty, and installation details should be confirmed through project-specific review and manufacturer guidance.',
  },
  'commercial-metal-roofing-guide': {
    paragraphs: [
      'Commercial metal roofing is a system decision that touches budget, schedule, documentation, owner expectations, contractor workflow, and long-term building use. The buyer is rarely choosing only a panel. They are choosing a package that may include standing seam or ribbed panels, trim, flashing, fasteners, closures, finish selections, submittals, delivery planning, and sometimes wall panels or accessory scopes. A stronger process starts by organizing those inputs before price is requested.',
      'The project type matters. A warehouse may prioritize large-format roof and wall coverage, schedule, and practical trim coordination. A school or municipal facility may require more documentation, review, and controlled language. A retail or multifamily project may put more weight on appearance, color coordination, and visible details. An agricultural or industrial building may need a straightforward panel package but still benefit from clear quote assumptions and delivery planning.',
      'Commercial buyers also need a clearer separation between product decision and package decision. The product decision asks whether the project needs standing seam, exposed-fastener panels, wall panels, trim, flashing, accessories, or a mix. The package decision asks how those pieces are documented, bundled, delivered, coordinated, and reviewed before production. Many weak roofing conversations fail because they jump from product name to price without checking the package.',
      'The first commercial roofing conversation should gather project use, drawings, roof scope, wall scope if included, approximate square footage, panel type preference, finish requirements, trim expectations, project state, schedule target, and any owner or submittal requirements. If a buyer cannot provide all of that yet, the quote can still start, but the missing details should become visible assumptions rather than invisible risk.',
      'Commercial metal roofing authority is built by explaining tradeoffs. Standing seam may fit architectural or owner-occupied projects where concealed fastening and appearance matter. Exposed-fastener panels may fit warehouses, agricultural buildings, storage facilities, industrial buildings, and practical commercial work. Wall panels may carry the visual identity of the building. Trim and flashing may decide whether the package is installable. Finish selection may affect appearance, heat, exposure, and documentation.',
      'A serious commercial roofing page should also help buyers compare suppliers. A strong supplier explains profile drawings, coverage width, gauge path, substrate, finish, trim scope, assumptions, exclusions, delivery state, and product documentation. A weak supplier only lists products. The buyer does not need jargon. They need enough clarity to avoid mismatched quotes and field surprises.',
      'For Americas Panel Fab, this guide should carry the company-level voice: manufacturing-aware, commercial-capable, documentation-minded, and practical. Product-ready exposed-fastener buyers can continue to American Super Panel. Buyers still researching systems, fabrication, roll forming, trim, finishes, and manufacturing credibility should stay inside the Americas Panel Fab resource library.',
      'Americas Panel Fab uses commercial roofing education to connect manufacturing authority with buyer readiness. Public company content should help owners, contractors, and partners understand the decision process. Product-ready buyers can continue to American Super Panel, where they can request panels, siding, trim, flashing, and plan review. That separation lets the company build authority while keeping the product path clear.',
    ],
    diagram: ['Project type and drawings', 'Panel, finish, trim, and documentation review', 'Quote assumptions and alternates', 'Approval, procurement, and production handoff', 'Delivery, closeout, and proof capture'],
    comparison: [
      ['Buyer concern', 'What it affects', 'What to prepare'],
      ['Panel system', 'Appearance, budget, installer path', 'Standing seam, exposed fastener, wall panel, or mixed scope'],
      ['Documentation', 'Procurement, submittals, owner confidence', 'Product data, finish info, assumptions, exclusions'],
      ['Schedule', 'Lead time, production, delivery, install sequence', 'Desired dates, phasing, delivery state, site constraints'],
      ['Trim/flashings', 'Install readiness and closeout quality', 'Edges, openings, transitions, roof-to-wall details'],
      ['Commercial risk', 'Cost, claims, expectations', 'Clear scope, review gates, change process'],
    ],
    faq: [
      ['What should a commercial buyer send first?', 'Send drawings, building use, roof/wall scope, desired panel type, finish needs, trim requirements, project state, and schedule target.'],
      ['Should commercial buyers choose panel type before quoting?', 'A preference helps, but a manufacturer or product team may still review the project for profile, finish, trim, and documentation fit.'],
      ['Why does Americas Panel Fab link to American Super Panel?', 'Americas Panel Fab provides company and manufacturing context. American Super Panel is the product-focused path for exposed-fastener roofing, siding, trim, and quote requests.'],
    ],
    fieldNote: 'Commercial metal roofing buyers usually need both education and action. Americas Panel Fab should answer the research question; American Super Panel should handle product-ready quote intent.',
    reviewer: 'Reviewed for commercial buyer education. Contract, code, warranty, fire, wind, and engineering requirements should be reviewed through project-specific documentation and qualified advisors.',
    visuals: [
      { title: 'Commercial roof project', caption: 'Use roof and wall project photos to show scale, building type, and commercial relevance.', image: warehouseImage, alt: 'Commercial warehouse metal roofing panels' },
      { title: 'Manufacturing support', caption: 'Facility and equipment imagery should connect the guide to a real manufacturing operation, not a generic roofing article.', image: facilityImage, alt: 'Metal panel manufacturing support for commercial roofing' },
      { title: 'Fabricated details', caption: 'Trim, flashing, and edge details prove that the package extends beyond simple panel square footage.', image: fabricationImage, alt: 'Commercial metal roof trim and flashing fabrication' },
    ],
    deepDive: [
      ['Commercial buyers compare risk, not only price', 'A lower panel price can lose value if trim is missing, finish assumptions are unclear, delivery is not planned, submittals are thin, or exclusions appear after approval. The strongest content helps buyers understand where hidden risk enters a commercial metal roofing package.'],
      ['Different building types need different emphasis', 'A warehouse may value speed, broad coverage, and practical trim. A retail building may need cleaner visible details. A school or public-facing facility may require more documentation and review. Agricultural and industrial buildings may prioritize durable practical coverage and straightforward ordering.'],
      ['The quote should show its assumptions', 'A commercial quote should make the basis of pricing visible: drawings used, panel profile, gauge, substrate, finish, trim, accessories, delivery state, exclusions, alternates, and open questions. That transparency helps buyers compare packages without guessing what each supplier included.'],
      ['Authority content should reduce the first-call burden', 'When a buyer reads this guide before contacting the product site, they should know what to gather and why it matters. That improves the eventual sales conversation because the buyer arrives with drawings, scope, finish needs, project state, and a more realistic view of the package.'],
      ['What separates a serious supplier', 'A serious commercial supplier can explain what is included, what is excluded, what still needs review, and what information could change price or schedule. That clarity matters because commercial roofing decisions often involve multiple people who need the same facts before approving a package.'],
    ],
    checklist: [
      ['Project data', 'Building type, project state, roof or wall scope, drawings, approximate square footage, and schedule target.'],
      ['Panel decision', 'Standing seam, exposed fastener, wall panel, mixed scope, profile drawing, coverage width, and gauge path.'],
      ['Package scope', 'Trim, flashing, closures, fasteners, penetrations, openings, color, finish family, and delivery requirements.'],
      ['Commercial review', 'Submittals, product data, finish samples, quote assumptions, exclusions, alternates, and approval path.'],
    ],
  },
}

const projectImages = [panelImage, warehouseImage, facilityImage, weldingImage]
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

const apfOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Americas Panel Fab',
  url: apfOrigin,
  email: 'sales@americaspanelfab.com',
  telephone: '+1-555-019-3762',
  description:
    'Americas Panel Fab is a metal panel manufacturing and fabrication company focused on roll forming, panel fabrication, and contractor manufacturing support.',
}

function apfServiceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    provider: { '@type': 'Organization', name: 'Americas Panel Fab' },
    areaServed: ['California', 'Arizona', 'Texas', 'Florida'],
    description,
    url: `${apfOrigin}${path}`,
  }
}

function slugifyTerm(term: string) {
  return term
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\//g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function glossaryTermSchema(entry: (typeof glossaryEntries)[number]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: entry.name,
    description: entry.definition,
    inDefinedTermSet: `${apfOrigin}/glossary`,
    url: `${apfOrigin}/glossary/${entry.slug}`,
  }
}

function articleSchema(guide: (typeof guidePages)[number]) {
  const enhancement = guideEnhancements[guide.slug]
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    author: { '@type': 'Organization', name: 'Americas Panel Fab' },
    publisher: { '@type': 'Organization', name: 'Americas Panel Fab' },
    mainEntityOfPage: `${apfOrigin}/${guide.slug}`,
    url: `${apfOrigin}/${guide.slug}`,
  }

  if (!enhancement?.faq.length) {
    return article
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      article,
      {
        '@type': 'FAQPage',
        mainEntity: enhancement.faq.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      },
    ],
  }
}

function getSeoConfig(path: string, statePage?: (typeof states)[number]): SeoConfig {
  if (statePage) {
    return {
      canonicalPath: `/${statePage.slug}`,
      description: statePage.copy,
      title: `${statePage.name} Metal Panel Fabrication | Americas Panel Fab`,
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${statePage.name} Metal Panel Fabrication`,
        url: `${apfOrigin}/${statePage.slug}`,
        description: statePage.copy,
      },
    }
  }

  const guidePage = guidePages.find((guide) => guide.slug === path)

  if (guidePage) {
    return {
      canonicalPath: `/${guidePage.slug}`,
      description: guidePage.description,
      title: `${guidePage.title} | Americas Panel Fab`,
      schema: articleSchema(guidePage),
    }
  }

  const glossarySlug = path.startsWith('glossary/') ? path.replace('glossary/', '') : ''
  const glossaryEntry = glossaryEntries.find((entry) => entry.slug === glossarySlug)

  if (glossaryEntry) {
    return {
      canonicalPath: `/glossary/${glossaryEntry.slug}`,
      description: `${glossaryEntry.name}: ${glossaryEntry.definition}`,
      title: `${glossaryEntry.name} Meaning | Metal Panel Glossary`,
      schema: glossaryTermSchema(glossaryEntry),
    }
  }

  const routeSeo: Record<string, SeoConfig> = {
    '': {
      canonicalPath: '/',
      description:
        'Americas Panel Fab is building a modern metal panel manufacturing company for roll forming, panel fabrication, commercial supply, and partner growth.',
      title: 'Americas Panel Fab | Metal Panel Manufacturing Company',
      schema: apfOrganizationSchema,
    },
    manufacturing: {
      canonicalPath: '/manufacturing',
      description:
        'Metal panel manufacturing authority, factory workflow, material planning, product-brand support, and regional manufacturing coordination from Americas Panel Fab.',
      title: 'Metal Panel Manufacturing | Americas Panel Fab',
      schema: apfServiceSchema(
        'Metal Panel Manufacturing',
        'Factory workflow, material planning, panel production coordination, and manufacturing support for metal panel programs.',
        '/manufacturing',
      ),
    },
    capabilities: {
      canonicalPath: '/capabilities',
      description:
        'Americas Panel Fab capabilities include roll forming, custom fabrication, trim and flashing packages, product support, and partner-ready operations.',
      title: 'Metal Panel Fabrication Capabilities | Americas Panel Fab',
      schema: apfServiceSchema(
        'Metal Panel Fabrication Capabilities',
        'Roll forming, custom fabrication, trim, flashing, product support, and partner-ready metal panel operations.',
        '/capabilities',
      ),
    },
    guides: {
      canonicalPath: '/guides',
      description:
        'Metal panel manufacturing guides, comparison articles, buyer education, finish resources, trim guidance, and roll forming explainers from Americas Panel Fab.',
      title: 'Metal Panel Manufacturing Guides | Americas Panel Fab',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Metal Panel Manufacturing Guides',
        url: `${apfOrigin}/guides`,
        description: 'Educational guides for metal panel manufacturing, roll forming, product comparison, finishes, and commercial roofing decisions.',
      },
    },
    glossary: {
      canonicalPath: '/glossary',
      description:
        'Glossary of metal panel manufacturing, roll forming, roofing panel, finish, trim, flashing, and submittal terms.',
      title: 'Metal Panel Glossary | Americas Panel Fab',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        name: 'Metal Panel Glossary',
        url: `${apfOrigin}/glossary`,
        hasDefinedTerm: glossaryTerms.map(([name, description]) => ({
          '@type': 'DefinedTerm',
          name,
          description,
        })),
      },
    },
    'roll-forming': {
      canonicalPath: '/roll-forming',
      description:
        'Roll forming services, panel profile planning, coil-to-panel workflows, and manufacturing education from Americas Panel Fab.',
      title: 'Roll Forming Services & Education | Americas Panel Fab',
      schema: apfServiceSchema(
        'Roll Forming Services',
        'Roll forming workflow support, panel profile planning, and manufacturing education for metal panel programs.',
        '/roll-forming',
      ),
    },
    'custom-fabrication': {
      canonicalPath: '/custom-fabrication',
      description:
        'Custom sheet metal fabrication authority for trim, flashing, edge metal, project details, and contractor manufacturing partner support.',
      title: 'Custom Sheet Metal Fabrication | Americas Panel Fab',
      schema: apfServiceSchema(
        'Custom Sheet Metal Fabrication',
        'Custom trim, flashing, edge metal, and fabrication package support for metal panel projects.',
        '/custom-fabrication',
      ),
    },
    products: {
      canonicalPath: '/products',
      description:
        'Product families manufactured or supported by Americas Panel Fab, including American Super Panel, wall panels, trim, flashing, and accessories.',
      title: 'Metal Panel Product Families | Americas Panel Fab',
    },
    'super-panel': {
      canonicalPath: '/super-panel',
      description:
        'American Super Panel is the flagship exposed-fastener roofing and siding panel system manufactured by Americas Panel Fab.',
      title: 'American Super Panel Flagship Product | Americas Panel Fab',
    },
    about: {
      canonicalPath: '/about',
      description:
        'Learn about Americas Panel Fab, its manufacturing company structure, product brand relationship, and metal panel industry mission.',
      title: 'About Americas Panel Fab',
      schema: apfOrganizationSchema,
    },
    contact: {
      canonicalPath: '/contact',
      description:
        'Contact Americas Panel Fab for manufacturing partnerships, supplier discussions, industry collaboration, product brand questions, and company inquiries.',
      title: 'Contact Americas Panel Fab',
    },
  }

  return routeSeo[path] ?? {
    canonicalPath: `/${path}`,
    description:
      'Americas Panel Fab publishes authority content about metal panel manufacturing, roll forming, fabrication, and product-brand development.',
    title: 'Americas Panel Fab | Metal Panel Manufacturing',
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
          <PlatformHome />
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
    canonical.href = `${apfOrigin}${config.canonicalPath}`

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
        <PageHero title="Products" copy="American Super Panel™ systems, wall panels, trim, flashing, and accessories manufactured by Americas Panel Fab." />
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

  if (path === 'manufacturing') {
    return <AuthorityPage page={authorityPages.manufacturing} />
  }

  if (path === 'capabilities') {
    return <AuthorityPage page={authorityPages.capabilities} />
  }

  if (path === 'roll-forming') {
    return <AuthorityPage page={authorityPages.rollForming} />
  }

  if (path === 'custom-fabrication') {
    return <AuthorityPage page={authorityPages.customFabrication} />
  }

  if (path === 'guides') {
    return <GuidesPage />
  }

  if (path === 'glossary') {
    return <GlossaryPage />
  }

  const glossarySlug = path.startsWith('glossary/') ? path.replace('glossary/', '') : ''
  const glossaryEntry = glossaryEntries.find((entry) => entry.slug === glossarySlug)

  if (glossaryEntry) {
    return <GlossaryTermPage entry={glossaryEntry} />
  }

  const guidePage = guidePages.find((guide) => guide.slug === path)

  if (guidePage) {
    return <GuideArticle guide={guidePage} />
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

  if (path === 'projects') {
    return (
      <>
        <PageHero title="Projects" copy="A project gallery organized by commercial, industrial, municipal, and agricultural metal panel work." />
        <Projects />
        <Contact />
      </>
    )
  }

  if (path === 'about') {
    return (
      <>
        <PageHero title="About Americas Panel Fab" copy="A manufacturing company built for precision metal panels, roofing systems, and custom fabrication." />
        <About />
        <Contact />
      </>
    )
  }

  if (path === 'contact') {
    return (
      <>
      <PageHero title="Contact" copy="Start a manufacturing, partnership, supplier, installer, product brand, or industry education conversation with Americas Panel Fab." />
        <Contact />
      </>
    )
  }

  return (
    <>
      <PageHero title="Americas Panel Fab" copy="Modern metal panel manufacturing, roll forming, commercial supply, product brands, supplier relationships, and contractor-ready documentation." />
      <PlatformHome />
      <Contact />
    </>
  )
}

function PageHero({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="section border-b border-slate-200 bg-white">
      <div className="max-w-4xl">
        <p className="eyebrow text-[#f97316]">Americas Panel Fab</p>
        <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal text-[#0b1f33]">{title}</h1>
        <p className="mt-6 text-xl leading-8 text-slate-600">{copy}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn-primary" href="/resources">
            Explore Guides
          </a>
          <a className="btn-secondary" href="#contact">
            Partner Inquiry
          </a>
        </div>
      </div>
    </section>
  )
}

function PlatformHome() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <img
          src={machineImage}
          alt="Roll forming technology and metal panel manufacturing"
          className="absolute right-0 top-0 h-full w-full object-cover opacity-18 lg:w-[54%] lg:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/72" />
        <div className="section relative">
          <div className="max-w-4xl">
            <p className="eyebrow text-[#f97316]">Company • Factory • Manufacturing Platform</p>
            <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal text-[#0b1f33] lg:text-6xl">
              Americas Panel Fab
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-700">
              Americas Panel Fab is building a modern American metal panel manufacturing
              manufacturing company for commercial, agricultural, residential, government, and industrial
              customers.
            </p>
            <p className="mt-6 rounded border border-slate-200 bg-white p-4 text-base font-bold leading-7 text-[#0b1f33] shadow-sm">
              American Super Panel is the flagship exposed-fastener roofing and siding panel
              system manufactured by Americas Panel Fab.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href="/resources">
                Explore Industry Guides <ArrowRight size={18} />
              </a>
              <a className="btn-secondary" href="#manufacturing">
                View Platform Strategy
              </a>
              <a className="btn-secondary" href="#contact">
                Partner / Investor Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="manufacturing" className="section bg-slate-50">
        <SectionIntro
          eyebrow="Platform Role"
          title="Manufacturing capability, product support, industry education, and commercial credibility."
          copy="Americas Panel Fab is the company and manufacturer behind American Super Panel. The site also publishes practical industry content, supplier and installer resources, panel comparisons, and commercial manufacturing guidance."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {platformPillars.map(([title, Icon, copy]) => (
            <article key={title as string} className="card">
              <Icon className="text-[#f97316]" />
              <h2 className="mt-5 text-xl font-black text-[#0b1f33]">{title as string}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy as string}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Dual-Brand Architecture"
              title="Keep the company brand broad and the product brand focused."
              copy="American Super Panel focuses on contractor-ready roofing and siding panels. Americas Panel Fab carries the company, factory, commercial, partner, and manufacturing credibility behind the product brand."
            />
            <p className="mt-6 rounded border border-orange-200 bg-orange-50 p-4 text-sm font-bold leading-6 text-slate-700">
              Disclosure: Americas Panel Fab publishes educational and industry content.
              Some featured manufacturers, suppliers, and service providers may be affiliated
              partners, including American Super Panel.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['American Super Panel', 'Flagship exposed-fastener roofing and siding panel system manufactured by Americas Panel Fab.'],
              ['Americas Panel Fab', 'Manufacturing company focused on fabrication, roll forming, product brands, partner relationships, and commercial readiness.'],
              ['Partner Referrals', 'Educational pages can reference affiliated or partner providers when the fit is clear and disclosed.'],
              ['Company Growth', 'The company structure can support additional product families, regional partners, documentation standards, and manufacturing workflow tools.'],
            ].map(([title, copy]) => (
              <article key={title} className="card">
                <h2 className="text-xl font-black text-[#0b1f33]">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="government-commercial" className="section bg-slate-50">
        <SectionIntro
          eyebrow="Government / Commercial"
          title="Company credibility belongs with the manufacturer."
          copy="Americas Panel Fab supports commercial buyers, public-sector conversations, procurement research, partner reviews, and manufacturing capability reviews with clear company-level information."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {['Commercial metal panel manufacturing', 'Panel fabrication and roll forming', 'Public-sector supplier research', 'Factory and capability profiles', 'Supplier and installer resources', 'Partner opportunities'].map((item) => (
            <p key={item} className="flex gap-3 rounded border border-slate-200 bg-white p-4 font-bold text-slate-700">
              <SearchCheck className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="investors-partners" className="section bg-white">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <img
            src={facilityImage}
            alt="Metal panel manufacturing company structure"
            className="h-[420px] w-full rounded object-cover shadow-xl"
          />
          <div>
            <SectionIntro
              eyebrow="Partners"
              title="A manufacturing company that can support products, partners, and regional growth."
              copy="American Super Panel stays product-focused while Americas Panel Fab carries the company story, manufacturing standards, partner relationships, and industry resources."
            />
            <div className="mt-8 grid gap-3">
              {platformStructure.map((item) => (
                <p key={item} className="flex gap-3 font-semibold text-slate-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="top-contact-bar border-b border-slate-200 bg-[#0b1f33] px-5 py-2 text-sm font-bold text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-between">
          <span>Metal panel manufacturing • roll forming • custom fabrication</span>
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
              Americas Panel Fab
            </strong>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:block">
              Manufacturing Company
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
            Guides
          </a>
          <a className="btn-secondary header-secondary-action" href="/about">
            <Building2 size={18} />
            Platform
          </a>
          <a className="btn-primary" href="#contact">
            Partner Inquiry
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
        copy="Americas Panel Fab helps contractors move from drawings to quote-ready panel, flashing, finish, and fabrication packages with fewer delays."
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
            {['Flagship product family', 'Standing seam and exposed fastener options', 'Commercial, industrial, municipal, and education applications', 'Lead-ready packages for expansion markets'].map(
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
        title="A clear panel system manufactured by Americas Panel Fab."
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
            <p className="eyebrow text-[#f97316]">Flagship Product Family</p>
            <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal text-[#0b1f33] lg:text-6xl">
              American Super Panel™
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-700">
              American Super Panel™ is the flagship panel system manufactured by Americas Panel Fab
              for commercial roofing, wall panel, industrial, municipal, and educational facility
              applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href="#contact">
                Partner Inquiry <ArrowRight size={18} />
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
          copy="The product architecture keeps Americas Panel Fab as the manufacturer while giving contractors and owners a memorable flagship system to specify and request."
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
            <p className="eyebrow text-[#f97316]">Industrial Rib Product System</p>
            <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal text-[#0b1f33] lg:text-6xl">
              American Super Panel™ Industrial Rib
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-700">
              A 7.2-style exposed fastener roofing and siding panel path for warehouses,
              industrial buildings, agricultural facilities, and large commercial wall packages.
              Manufactured by Americas Panel Fab.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href="#contact">
                Discuss Manufacturing Fit <ArrowRight size={18} />
              </a>
              <a className="btn-secondary" href="#upload-plans">
                <FileUp size={18} /> Share Materials
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
            title="A defined panel profile for commercial comparison and project planning."
              copy="This page turns American Super Panel™ from a broad product family into a specific industrial rib system with a clear manufacturing and quoting path."
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
          eyebrow="Manufacturing Support"
          title="A panel system is more than the shape of the rib."
          copy="The differentiator is the operating discipline around the product: material planning, documentation, flashing packages, submittals, packaging, and regional fulfillment support."
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
            eyebrow="Operating Workflow"
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

const authorityPages = {
  manufacturing: {
    eyebrow: 'Manufacturing',
    title: 'Metal Panel Manufacturing Built for Scale and Trust',
    copy: 'Americas Panel Fab is the manufacturing company behind American Super Panel, with a focus on disciplined panel production, product-brand support, and partner-ready operating systems.',
    image: machineImage,
    imageAlt: 'Roll forming technology and metal panel manufacturing',
    points: [
      'Factory workflow and panel package planning',
      'Product-brand support for American Super Panel',
      'Commercial, agricultural, industrial, and residential market awareness',
      'Supplier, installer, and partner coordination',
    ],
    sections: [
      ['Manufacturing Foundation', 'Americas Panel Fab explains production thinking, material flow, documentation, quality conversations, and contractor support in clear public language.'],
      ['Product Brand Relationship', 'American Super Panel is the flagship exposed-fastener roofing and siding panel system manufactured by Americas Panel Fab. The two names work together: one company, one focused product family.'],
      ['Growth Path', 'The company can support additional product lines, factory partners, dealer programs, trim and accessories, standing seam systems, and workflow tools over time.'],
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Fabrication Capabilities for Panel Programs and Partners',
    copy: 'Capabilities content belongs with the manufacturer because buyers, partners, and suppliers need to understand the company behind the product brand.',
    image: facilityImage,
    imageAlt: 'Metal panel manufacturing production floor',
    points: [
      'Panel product family support',
      'Trim, flashing, and accessory package planning',
      'Commercial documentation and submittal mindset',
      'Partner-ready manufacturing conversations',
    ],
    sections: [
      ['Panel Programs', 'Americas Panel Fab supports product-family thinking: profile selection, finish coordination, trim scope, accessory paths, and quote-to-production handoff.'],
      ['Commercial Readiness', 'The site presents the discipline expected by contractors, procurement teams, property owners, and institutional buyers without making unsupported legal or certification claims.'],
      ['Partner Resource', 'Capabilities pages give suppliers, installers, manufacturers, and commercial partners a clear place to understand the company.'],
    ],
  },
  rollForming: {
    eyebrow: 'Roll Forming',
    title: 'Roll Forming Services, Education, and Profile Planning',
    copy: 'Roll forming content should build manufacturing authority: how coil becomes panel, how profiles are selected, and how panel programs are organized for real projects.',
    image: warehouseImage,
    imageAlt: 'Commercial warehouse metal panel project',
    points: [
      'Coil-to-panel workflow education',
      'Profile comparison and product selection guidance',
      'Factory and mobile production concepts',
      'Contractor and dealer support workflows',
    ],
    sections: [
      ['Profile Strategy', 'Americas Panel Fab publishes neutral guides comparing exposed-fastener panels, standing seam systems, wall panels, and trim packages so buyers can make better material decisions.'],
      ['Workflow Education', 'Roll forming pages explain material, profile, length, finish, packaging, and job coordination in plain commercial language.'],
      ['Growth Path', 'This page can support factory profiles, equipment reviews, dealer education, and production workflow resources as the company expands.'],
    ],
  },
  customFabrication: {
    eyebrow: 'Custom Fabrication',
    title: 'Custom Sheet Metal Fabrication for Roof and Wall Details',
    copy: 'Custom fabrication expertise belongs with the manufacturer: trim, flashing, edge metal, transitions, corners, openings, and project-specific detail support.',
    image: fabricationImage,
    imageAlt: 'Custom sheet metal fabrication',
    points: [
      'Trim and flashing package planning',
      'Roof edge, wall corner, opening, and transition detail support',
      'Finish and color coordination',
      'Project documentation and partner handoff',
    ],
    sections: [
      ['Detail Discipline', 'Strong panel projects depend on the pieces around the panel: flashings, closures, corners, transitions, and closeout details.'],
      ['Contractor Partner Mindset', 'Contractors should organize drawings, dimensions, finish needs, and detail notes before production conversations so fabrication review starts with useful information.'],
      ['Practical Detail Guidance', 'This page should help buyers and partners understand fabrication details while project-specific requirements are confirmed through drawings and review.'],
    ],
  },
}

function AuthorityPage({ page }: { page: (typeof authorityPages)[keyof typeof authorityPages] }) {
  return (
    <>
      <PageHero title={page.title} copy={page.copy} />
      <section className="section bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <img src={page.image} alt={page.imageAlt} className="h-[430px] w-full rounded object-cover shadow-xl" />
          <div>
            <SectionIntro
              eyebrow={page.eyebrow}
              title="Company-level credibility from the manufacturer."
              copy="These pages explain how Americas Panel Fab supports panel programs, fabrication details, documentation, and product brands while American Super Panel remains the focused roofing and siding panel family."
            />
            <div className="mt-8 grid gap-3">
              {page.points.map((point) => (
                <p key={point} className="flex gap-3 rounded border border-slate-200 bg-slate-50 p-4 font-bold text-[#0b1f33]">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="grid gap-5 md:grid-cols-3">
          {page.sections.map(([title, copy]) => (
            <article key={title} className="card">
              <Factory className="text-[#f97316]" />
              <h2 className="mt-5 text-2xl font-black text-[#0b1f33]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section bg-white">
        <div className="rounded border border-slate-200 bg-[#0b1f33] p-8 text-white">
          <p className="eyebrow text-orange-200">Flagship Product Relationship</p>
          <h2 className="mt-3 text-3xl font-black">American Super Panel is manufactured by Americas Panel Fab.</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">
            Contractors and dealers looking for exposed-fastener roofing and siding panels can use the American Super Panel product site. Partners, suppliers, and industry collaborators can use Americas Panel Fab for company-level conversations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href="https://www.americansuperpanel.com/">
              View American Super Panel <ArrowRight size={18} />
            </a>
            <a className="btn-secondary bg-white text-[#0b1f33]" href="#contact">
              Partner Inquiry
            </a>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}

function GuidesPage() {
  return (
    <>
      <PageHero
        title="Metal Panel Manufacturing Guides"
        copy="Educational guides for panel profiles, roll forming, finishes, trim, flashing, and commercial roofing decisions from the manufacturer behind American Super Panel."
      />
      <section className="section bg-white">
        <SectionIntro
          eyebrow="Topical Authority Map"
          title="A growing metal panel knowledge base organized by buyer decision."
          copy="Fab authority needs clusters, not random articles. These groups connect manufacturing education, product comparisons, materials, finishes, trim, submittals, and quote readiness."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {topicalClusters.map((cluster) => (
            <article key={cluster.name} className="rounded border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-2xl font-black text-[#0b1f33]">{cluster.name}</h2>
              <p className="mt-3 leading-7 text-slate-600">{cluster.copy}</p>
              <div className="mt-5 grid gap-3">
                {cluster.slugs.map((slug) => {
                  const guide = guidePages.find((item) => item.slug === slug)
                  return guide ? (
                    <a key={slug} href={`/${guide.slug}`} className="flex items-center justify-between gap-4 rounded border border-slate-200 bg-white p-4 font-black text-[#0b1f33] hover:border-[#f97316] hover:text-[#f97316]">
                      <span>{guide.title}</span>
                      <ArrowRight className="shrink-0" size={18} />
                    </a>
                  ) : null
                })}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section bg-slate-50">
        <SectionIntro
          eyebrow="Guide Library"
          title={`${guidePages.length} public guides and growing.`}
          copy="Each guide answers a real buyer, contractor, supplier, or project-planning question and connects back into the broader Americas Panel Fab resource library."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guidePages.map((guide) => (
            <a key={guide.slug} href={`/${guide.slug}`} className="card group block">
              <p className="eyebrow text-[#f97316]">{guide.category}</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{guide.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{guide.description}</p>
              <span className="mt-6 inline-flex items-center font-black text-[#0b1f33] group-hover:text-[#f97316]">
                Read guide <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="section bg-white">
        <div className="rounded border border-slate-200 bg-[#0b1f33] p-8 text-white">
          <p className="eyebrow text-orange-200">Manufacturer Resource Center</p>
          <h2 className="mt-3 text-3xl font-black">Better project decisions start with better panel information.</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">
            Americas Panel Fab publishes manufacturing guidance so contractors, owners, suppliers, and partners can understand panel systems before selecting products, requesting quotes, or preparing drawings.
          </p>
        </div>
      </section>
    </>
  )
}

function GuideArticle({ guide }: { guide: (typeof guidePages)[number] }) {
  const enhancement = guideEnhancements[guide.slug]

  return (
    <>
      <PageHero title={guide.title} copy={guide.hero} />
      <section className="section bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <img src={guide.image} alt={guide.imageAlt} className="h-[420px] w-full rounded object-cover shadow-xl" />
            <div className="mt-6 rounded border border-slate-200 bg-slate-50 p-6">
              <p className="eyebrow text-[#f97316]">Key Takeaways</p>
              <ul className="mt-4 grid gap-3">
                {guide.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 font-bold text-[#0b1f33]">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#f97316]" size={20} />
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>
            {enhancement ? (
              <div className="mt-6 rounded border border-slate-200 bg-white p-6 shadow-lg">
                <p className="eyebrow text-[#f97316]">Author / Review</p>
                <h2 className="mt-3 text-xl font-black text-[#0b1f33]">Americas Panel Fab Resource Desk</h2>
                <p className="mt-3 leading-7 text-slate-600">{enhancement.reviewer}</p>
              </div>
            ) : null}
          </div>
          <article className="grid gap-5">
            {enhancement ? (
              <section className="rounded border border-slate-200 bg-white p-6 shadow-lg">
                <p className="eyebrow text-[#f97316]">Pillar Overview</p>
                <div className="mt-4 grid gap-4">
                  {enhancement.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 42)} className="text-lg leading-8 text-slate-600">{paragraph}</p>
                  ))}
                </div>
                <div className="mt-6 rounded border border-orange-200 bg-orange-50 p-5">
                  <p className="font-black text-[#0b1f33]">Field note</p>
                  <p className="mt-2 leading-7 text-slate-700">{enhancement.fieldNote}</p>
                </div>
              </section>
            ) : null}
            {enhancement?.visuals?.length ? (
              <section className="rounded border border-slate-200 bg-white p-6 shadow-lg">
                <p className="eyebrow text-[#f97316]">Visual Proof Points</p>
                <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">What this page should show, not just say.</h2>
                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  {enhancement.visuals.map((visual) => (
                    <figure key={visual.title} className="overflow-hidden rounded border border-slate-200 bg-slate-50">
                      <img src={visual.image} alt={visual.alt} className="h-44 w-full object-cover" />
                      <figcaption className="p-4">
                        <h3 className="text-lg font-black text-[#0b1f33]">{visual.title}</h3>
                        <p className="mt-2 leading-7 text-slate-600">{visual.caption}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}
            {enhancement?.deepDive?.length ? (
              <section className="rounded border border-slate-200 bg-white p-6 shadow-lg">
                <p className="eyebrow text-[#f97316]">Deep Dive</p>
                <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">How serious buyers should think about this topic.</h2>
                <div className="mt-5 grid gap-5">
                  {enhancement.deepDive.map(([title, copy]) => (
                    <div key={title} className="rounded border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-xl font-black text-[#0b1f33]">{title}</h3>
                      <p className="mt-3 text-lg leading-8 text-slate-600">{copy}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
            {guide.sections.map(([title, copy]) => (
              <section key={title} className="rounded border border-slate-200 bg-white p-6 shadow-lg">
                <h2 className="text-2xl font-black text-[#0b1f33]">{title}</h2>
                <p className="mt-3 text-lg leading-8 text-slate-600">{copy}</p>
              </section>
            ))}
            {enhancement ? (
              <>
                <section className="rounded border border-slate-200 bg-white p-6 shadow-lg">
                  <p className="eyebrow text-[#f97316]">Decision Flow</p>
                  <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">How this decision should move through a project.</h2>
                  <div className="mt-5 grid gap-3">
                    {enhancement.diagram.map((step, index) => (
                      <div key={step} className="grid gap-3 rounded border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[3rem_1fr] sm:items-center">
                        <span className="flex h-10 w-10 items-center justify-center rounded bg-[#0b1f33] text-sm font-black text-white">{index + 1}</span>
                        <p className="font-black leading-7 text-[#0b1f33]">{step}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded border border-slate-200 bg-white p-6 shadow-lg">
                  <p className="eyebrow text-[#f97316]">Comparison Table</p>
                  <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">What to compare before making the call.</h2>
                  <div className="mt-5 overflow-hidden rounded border border-slate-200">
                    <table className="guide-table">
                      <tbody>
                        {enhancement.comparison.map((row, rowIndex) => (
                          <tr key={row.join('-')}>
                            {row.map((cell) => rowIndex === 0 ? (
                              <th key={cell}>{cell}</th>
                            ) : (
                              <td key={cell}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {enhancement.checklist?.length ? (
                  <section className="rounded border border-slate-200 bg-white p-6 shadow-lg">
                    <p className="eyebrow text-[#f97316]">Quote Readiness Checklist</p>
                    <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">What to gather before the next conversation.</h2>
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      {enhancement.checklist.map(([title, copy]) => (
                        <div key={title} className="rounded border border-slate-200 bg-slate-50 p-5">
                          <h3 className="flex items-center gap-3 text-lg font-black text-[#0b1f33]">
                            <CheckCircle2 className="shrink-0 text-[#f97316]" size={20} />
                            {title}
                          </h3>
                          <p className="mt-3 leading-7 text-slate-600">{copy}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}

                <section className="rounded border border-slate-200 bg-white p-6 shadow-lg">
                  <p className="eyebrow text-[#f97316]">FAQ</p>
                  <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">Common questions before the first project conversation.</h2>
                  <div className="mt-5 grid gap-4">
                    {enhancement.faq.map(([question, answer]) => (
                      <div key={question} className="rounded border border-slate-200 bg-slate-50 p-5">
                        <h3 className="text-lg font-black text-[#0b1f33]">{question}</h3>
                        <p className="mt-2 leading-7 text-slate-600">{answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            ) : null}
            <div className="rounded border border-slate-200 bg-[#0b1f33] p-6 text-white">
              <p className="eyebrow text-orange-200">Next Step</p>
              <h2 className="mt-3 text-2xl font-black">Ready to compare product options?</h2>
              <p className="mt-3 leading-8 text-slate-200">
                Use Americas Panel Fab for manufacturing context and panel education. Use American Super Panel when the project is ready for roofing panels, siding panels, trim, flashing, or plan review.
              </p>
              <a className="btn-primary mt-6" href={guide.ctaHref}>
                {guide.cta} <ArrowRight size={18} />
              </a>
            </div>
          </article>
        </div>
      </section>
      <GuidesRelated currentSlug={guide.slug} />
    </>
  )
}

function GuidesRelated({ currentSlug }: { currentSlug: string }) {
  return (
    <section className="section bg-slate-50">
      <SectionIntro
        eyebrow="Related Guides"
        title="Keep researching the manufacturing context."
        copy="Related guides connect profile selection, finish decisions, trim details, and commercial roofing considerations in one manufacturer resource center."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {guidePages
          .filter((guide) => guide.slug !== currentSlug)
          .slice(0, 6)
          .map((guide) => (
            <a key={guide.slug} className="card group block" href={`/${guide.slug}`}>
              <p className="eyebrow text-[#f97316]">{guide.category}</p>
              <h3 className="mt-3 text-xl font-black text-[#0b1f33]">{guide.title}</h3>
              <span className="mt-5 inline-flex items-center font-black text-[#0b1f33] group-hover:text-[#f97316]">
                Read next <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          ))}
      </div>
    </section>
  )
}

function GlossaryTermPage({ entry }: { entry: (typeof glossaryEntries)[number] }) {
  const relatedGuides = guidePages
    .filter((guide) => {
      const haystack = `${guide.title} ${guide.description} ${guide.category}`.toLowerCase()
      return entry.name
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((part) => part.length > 2)
        .some((part) => haystack.includes(part))
    })
    .slice(0, 6)
  const guideFallback = relatedGuides.length ? relatedGuides : guidePages.slice(0, 6)

  return (
    <>
      <PageHero
        title={`${entry.name}: Meaning for Metal Panel Projects`}
        copy={`${entry.definition} This page explains how the term shows up in manufacturing, quoting, documentation, and buyer conversations.`}
      />
      <section className="section bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded border border-slate-200 bg-slate-50 p-6">
            <p className="eyebrow text-[#f97316]">Glossary Category</p>
            <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{entry.category}</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Americas Panel Fab uses glossary pages to make public metal panel language easier to understand before buyers compare products, request quotes, or review drawings.
            </p>
            <a href="/glossary" className="mt-6 inline-flex items-center font-black text-[#0b1f33] hover:text-[#f97316]">
              Back to glossary <ArrowRight className="ml-2" size={18} />
            </a>
          </aside>
          <article className="grid gap-5">
            <section className="rounded border border-slate-200 bg-white p-6 shadow-lg">
              <p className="eyebrow text-[#f97316]">Plain-English Definition</p>
              <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{entry.name}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">{entry.definition}</p>
            </section>
            <section className="rounded border border-slate-200 bg-white p-6 shadow-lg">
              <p className="eyebrow text-[#f97316]">Why It Matters</p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  ['Quoting', `${entry.name} can affect how a contractor compares price, scope, assumptions, or substitutions.`],
                  ['Manufacturing', `The term may connect to profile, finish, gauge, trim, documentation, packaging, or production workflow.`],
                  ['Documentation', `For commercial projects, the meaning should be clear in product data, submittals, drawings, or quote notes.`],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-xl font-black text-[#0b1f33]">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{copy}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded border border-orange-200 bg-orange-50 p-6">
              <p className="font-black text-[#0b1f33]">Buyer note</p>
              <p className="mt-2 leading-7 text-slate-700">
                If this term appears in a quote, drawing, product sheet, or submittal, confirm the exact manufacturer meaning before ordering. Panel names, finish paths, substrate language, and trim assumptions can vary by supplier and project.
              </p>
            </section>
          </article>
        </div>
      </section>
      <section className="section bg-slate-50">
        <SectionIntro
          eyebrow="Related Guides"
          title={`Keep researching ${entry.name.toLowerCase()} in context.`}
          copy="Short definitions are useful, but authority comes from connecting each term to profiles, materials, fabrication, submittals, and commercial buying decisions."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guideFallback.map((guide) => (
            <a key={guide.slug} className="card group block" href={`/${guide.slug}`}>
              <p className="eyebrow text-[#f97316]">{guide.category}</p>
              <h3 className="mt-3 text-xl font-black text-[#0b1f33]">{guide.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{guide.description}</p>
              <span className="mt-5 inline-flex items-center font-black text-[#0b1f33] group-hover:text-[#f97316]">
                Read guide <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

function GlossaryPage() {
  return (
    <>
      <PageHero
        title="Metal Panel Glossary"
        copy="Plain-English metal roofing, siding, roll forming, trim, flashing, finish, and quoting terms for contractors, owners, architects, and commercial buyers."
      />
      <section className="section bg-white">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Compare quotes with less guesswork', 'Use the same vocabulary across profiles, gauges, finishes, trim, accessories, and quote assumptions.'],
            ['Prepare cleaner project information', 'Know which details matter before sending drawings, elevations, square footage, color needs, and delivery information.'],
            ['Connect terms to deeper guides', 'Move from short definitions into practical guides on panels, finishes, trim packages, and commercial roofing decisions.'],
          ].map(([title, copy]) => (
            <article key={title} className="card">
              <BookOpen className="text-[#f97316]" />
              <h2 className="mt-5 text-2xl font-black text-[#0b1f33]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section bg-slate-50">
        <SectionIntro
          eyebrow="Reference Library"
          title="A practical vocabulary for metal panel projects."
          copy="These terms are grouped by how buyers actually make decisions: production, panel profiles, materials, trim details, and commercial quote documentation."
        />
        <div className="mt-10 grid gap-8">
          {glossaryGroups.map((group) => (
            <article key={group.group} className="rounded border border-slate-200 bg-white p-6 shadow-sm">
              <p className="eyebrow text-[#f97316]">Glossary Category</p>
              <h2 className="mt-3 text-3xl font-black text-[#0b1f33]">{group.group}</h2>
              <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-600">{group.intro}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.terms.map(([term, definition]) => (
                  <a key={term} href={`/glossary/${slugifyTerm(term)}`} className="group rounded border border-slate-200 bg-slate-50 p-5 hover:border-[#f97316] hover:bg-white">
                    <h3 className="text-xl font-black text-[#0b1f33]">{term}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{definition}</p>
                    <span className="mt-4 inline-flex items-center font-black text-[#0b1f33] group-hover:text-[#f97316]">
                      Open term page <ArrowRight className="ml-2" size={18} />
                    </span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section bg-white">
        <SectionIntro
          eyebrow="Related Guides"
          title="Use the glossary inside the deeper manufacturer guides."
          copy="The glossary gives the vocabulary. The guides explain how the decisions connect across profile selection, finish paths, trim packages, and commercial roof planning."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guidePages.map((guide) => (
            <a key={guide.slug} className="card group block" href={`/${guide.slug}`}>
              <p className="eyebrow text-[#f97316]">{guide.category}</p>
              <h3 className="mt-3 text-xl font-black text-[#0b1f33]">{guide.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{guide.description}</p>
              <span className="mt-5 inline-flex items-center font-black text-[#0b1f33] group-hover:text-[#f97316]">
                Read guide <ArrowRight className="ml-2" size={18} />
              </span>
            </a>
          ))}
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
        copy="Americas Panel Fab supplies roof panels, wall panels, trim, flashing, and accessories under one manufacturing roof."
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
                View Industrial Rib product page <ArrowRight className="ml-2" size={18} />
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
        copy="Commercial buyers need documentation as much as product. Americas Panel Fab is structured around quote-ready, submittal-ready, and contract-ready support."
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
            copy="Americas Panel Fab exists to give contractors, owners, and public agencies a dependable source for precision metal panels, roofing systems, and custom fabrication."
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
            title="Start a partner, supplier, or industry conversation."
            copy="Use this site for manufacturing partnerships, supplier relationships, installer networks, product brand questions, factory profiles, and educational collaboration."
          />
          <div className="mt-8 grid gap-4">
            <a className="contact-link" href="tel:+15550193762">
              <Phone size={20} /> (555) 019-3762
            </a>
            <a className="contact-link" href="mailto:sales@americaspanelfab.com">
              <Mail size={20} /> sales@americaspanelfab.com
            </a>
            <p className="contact-link">
              <MapPin size={20} /> California, Arizona, Texas, and Florida industry coverage
            </p>
          </div>
          <div className="mt-8 h-64 rounded border border-slate-200 bg-white p-4">
            <div className="flex h-full items-center justify-center rounded bg-slate-100 text-center font-bold text-slate-500">
              Americas Panel Fab Industry Map
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
    setSubmitState({ kind: 'submitting', message: 'Sending inquiry…' })

    const form = event.currentTarget
    const result = await submitLeadForm('/api/quote', new FormData(form))

    if (result.ok) {
      form.reset()
      setSubmitState({
        kind: 'success',
        message: 'Inquiry received. The Americas Panel Fab team will review the details and follow up.',
      })
      window.turnstile?.reset()
      return
    }

    setSubmitState({ kind: 'error', message: result.message })
    window.turnstile?.reset()
  }

  return (
    <form id="quote" className="form-panel" action="/api/quote" method="post" onSubmit={handleQuoteSubmit}>
      <h2 className="text-2xl font-black text-[#0b1f33]">Platform Inquiry Form</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {['Name', 'Company', 'Email', 'Phone', 'Organization Location', 'State'].map((field) => (
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
          <span>Primary Interest</span>
          <input name="primary_interest" type="text" placeholder="Investor, supplier, installer, manufacturer, software, media" />
        </label>
        <label>
          <span>Conversation Type</span>
          <select name="panel_type" defaultValue="">
            <option value="" disabled>
              Select conversation type
            </option>
            <option>Partnership</option>
            <option>Investor Interest</option>
            <option>Supplier Directory</option>
            <option>Factory Profile</option>
            <option>Industry Research</option>
          </select>
        </label>
        <label className="md:col-span-2">
          <span>Notes</span>
          <input name="desired_completion_date" type="text" placeholder="Tell us what you want to explore" />
        </label>
      </div>
      <TurnstileSlot />
      <FormStatus state={submitState} />
      <button className="btn-primary mt-5" type="submit" disabled={submitState.kind === 'submitting'}>
        {submitState.kind === 'submitting' ? 'Sending…' : 'Submit Platform Inquiry'}
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
      setSubmitState({ kind: 'error', message: 'Attach at least one overview, profile, document, or deck.' })
      return
    }

    setSubmitState({ kind: 'submitting', message: 'Uploading materials…' })
    const result = await submitLeadForm('/api/upload-plans', new FormData(form))

    if (result.ok) {
      form.reset()
      setSubmitState({
        kind: 'success',
        message: 'Materials uploaded. The Americas Panel Fab team will review and follow up.',
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
      <h2 className="text-2xl font-black text-[#0b1f33]">Share Materials</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {['Name', 'Company', 'Email', 'Phone', 'Organization Location', 'State'].map((field) => (
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
          ['Company Overview', 'plans_pdf', '.pdf'],
          ['Photos / Profiles', 'drawings', '.pdf,.png,.jpg'],
          ['Supporting Documents', 'structural_documents', '.pdf,.doc,.docx'],
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
        {submitState.kind === 'submitting' ? 'Uploading…' : 'Send Materials'}
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
            <a className="btn-primary" href="/resources">
              Explore Regional Guides
            </a>
            <a className="btn-secondary" href="#contact">
              Partner Inquiry
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
          <strong className="text-xl font-black">Americas Panel Fab</strong>
          <p className="mt-2 text-slate-300">Metal Panel Manufacturing, Roll Forming Technology & Industry Platform</p>
        </div>
        <div className="text-sm font-semibold text-slate-300">
          American Super Panel™ systems are manufactured by Americas Panel Fab.
        </div>
      </div>
    </footer>
  )
}

export default App
