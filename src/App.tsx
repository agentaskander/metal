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
]
const glossaryTerms = [
  ['Roll forming', 'A manufacturing process that shapes metal coil into consistent panel profiles through a series of forming stations.'],
  ['Standing seam', 'A concealed-fastener metal roofing system with raised seams and a cleaner architectural appearance.'],
  ['R-Panel', 'A practical ribbed exposed-fastener panel family used for roofing and siding on commercial, warehouse, shop, and agricultural buildings.'],
  ['PBR Panel', 'A ribbed exposed-fastener panel term often used for roof and wall packages; profile details should be confirmed by manufacturer.'],
  ['Gauge', 'A sheet metal thickness reference where lower numbers generally mean thicker metal.'],
  ['PVDF', 'A premium finish path commonly discussed for long-life architectural metal panel projects.'],
  ['SMP', 'A silicone-modified polyester finish path used across many economical and practical metal panel projects.'],
  ['Trim', 'Formed pieces used at roof edges, corners, openings, transitions, and closeout details.'],
  ['Flashing', 'Metal detailing used to direct water and protect transitions, edges, penetrations, and joints.'],
  ['Submittal package', 'Project documentation that may include product data, finish information, fastener notes, drawings, and warranty-path materials.'],
] satisfies [string, string][]

const guideEnhancements: Record<string, {
  comparison: string[][]
  diagram: string[]
  faq: string[][]
  fieldNote: string
  paragraphs: string[]
  reviewer: string
}> = {
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
      'Americas Panel Fab uses commercial roofing education to connect manufacturing authority with buyer readiness. Public APF content should help owners, contractors, and partners understand the decision process. Product-ready buyers can continue to American Super Panel, where they can request panels, siding, trim, flashing, and plan review. That separation lets the company build authority while keeping the product path clear.',
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
      ['Why does APF link to American Super Panel?', 'Americas Panel Fab provides company and manufacturing context. American Super Panel is the product-focused path for exposed-fastener roofing, siding, trim, and quote requests.'],
    ],
    fieldNote: 'Commercial metal roofing buyers usually need both education and action. APF should answer the research question; American Super Panel should handle product-ready quote intent.',
    reviewer: 'Reviewed for commercial buyer education. Contract, code, warranty, fire, wind, and engineering requirements should be reviewed through project-specific documentation and qualified advisors.',
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
      <section className="section bg-slate-50">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {guidePages
          .filter((guide) => guide.slug !== currentSlug)
          .slice(0, 3)
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

function GlossaryPage() {
  return (
    <>
      <PageHero
        title="Metal Panel Glossary"
        copy="Plain-English definitions for roll forming, metal roofing panels, finishes, trim, flashing, submittals, and manufacturing conversations."
      />
      <section className="section bg-slate-50">
        <div className="grid gap-5 md:grid-cols-2">
          {glossaryTerms.map(([term, definition]) => (
            <article key={term} className="card">
              <p className="eyebrow text-[#f97316]">Defined Term</p>
              <h2 className="mt-3 text-2xl font-black text-[#0b1f33]">{term}</h2>
              <p className="mt-3 text-lg leading-8 text-slate-600">{definition}</p>
            </article>
          ))}
        </div>
      </section>
      <GuidesRelated currentSlug="" />
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
