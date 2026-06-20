# Quality Ontology Integration Brief

Goal: add QUALITY as a first-class domain inside the existing 8190 ontology, not as a separate culture/training module.

Do not duplicate existing ontology structures.
Do not remove or rename existing ontology domains.
Do not break current 8190 routes.

## Add Top-Level Ontology Domain

QUALITY

Definition:
Quality is the reliable creation of value through disciplined execution.

## Quality Ontology Tree

QUALITY
- Product Quality
  - Accuracy
  - Durability
  - Consistency
  - Safety
  - Appearance
- Process Quality
  - Repeatability
  - Throughput
  - Waste Reduction
  - Error Prevention
  - Documentation
- Service Quality
  - Responsiveness
  - Delivery Reliability
  - Communication
  - Resolution
- Relationship Quality
  - Trust
  - Transparency
  - Accountability
  - Partnership
- Information Quality
  - Accuracy
  - Traceability
  - Timeliness
  - Completeness
- Economic Quality
  - Productivity
  - Margin
  - Efficiency
  - Sustainability
- Cultural Quality
  - Craftsmanship
  - Ownership
  - Discipline
  - Learning
  - Improvement

## Audience Lenses

Add lens selector:

Internal
APF
ASP

Do not create separate ontology trees for each audience. Lenses should map the same underlying QUALITY domain to different careabouts.

### Internal Lens

Quality = Craftsmanship

Hero:
Quality is what remains after the work leaves your hands.

Careabouts:
- Pride
- Mastery
- Ownership
- Improvement
- Discipline

Primary nodes:
- Cultural Quality
- Process Quality
- Information Quality

### APF Lens

Quality = Predictability

Hero:
The best supplier is the one you never have to worry about.

Careabouts:
- Repeatability
- Capacity
- Traceability
- Process control
- Reliable execution

Primary nodes:
- Process Quality
- Information Quality
- Economic Quality
- Relationship Quality

### ASP Lens

Quality = Peace of Mind

Hero:
A roof should be the thing you never have to worry about.

Careabouts:
- Protection
- Correct fit
- Longevity
- Delivery reliability
- Responsive support

Primary nodes:
- Product Quality
- Service Quality
- Relationship Quality

## Canonical Quality Chain

Craftsmanship -> Predictability -> Peace of Mind

This chain should appear as a reusable card/component on the 8190 ontology landing page and inside the QUALITY domain page.

## Quote / Inspiration Metadata

Add quotes as ontology evidence, not decorative filler.

Quote fields:
- quote
- tradition
- theme
- ontologyNode
- audienceLens

Starter quotes:

Precision is respect for the next person in the process.
Tradition: German-inspired
Theme: precision
Ontology node: Process Quality / Information Quality

Continuous improvement is better than delayed perfection.
Tradition: Japanese-inspired
Theme: improvement
Ontology node: Cultural Quality / Process Quality

Build it right.
Tradition: American manufacturing
Theme: craftsmanship
Ontology node: Product Quality / Cultural Quality

Reliability is remembered long after price is forgotten.
Tradition: American manufacturing
Theme: trust
Ontology node: Relationship Quality / Service Quality

## Homepage Card

Add card to internal 8190 landing page:

QUALITY MODEL
Craftsmanship -> Predictability -> Peace of Mind

CTA:
Explore Quality Ontology

## Acceptance Criteria

- Existing 8190 ontology still loads.
- QUALITY appears as a first-class ontology domain.
- Lens selector changes message map without duplicating ontology.
- Internal/APF/ASP messages are distinct.
- Canonical chain renders.
- Quote metadata attaches to ontology nodes.
- Search can find quality nodes.
- Mobile layout remains readable.
- No public site changes unless existing architecture explicitly shares internal content.
