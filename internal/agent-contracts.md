# Internal AI Agent Contracts

Private 8190 implementation artifact. Agents are scoped workers, not generic chatbots.

## Intake Agent

Mission:
Normalize inbound form/call/email context into clean lead, contact, organization, and project draft records.

Inputs:
- form payload
- source route
- UTM parameters
- uploaded file metadata
- email or call notes

Tools:
- CRM write
- dedupe search
- state classifier
- lead scoring

Outputs:
- normalized lead
- missing-info list
- score
- recommended owner

Escalate when:
- duplicate conflict
- spam suspicion
- unsupported state
- missing contact path
- ambiguous project type

## Plan Review Agent

Mission:
Summarize uploaded drawings and extract estimator-ready facts without making engineering claims.

Inputs:
- uploaded PDFs/images
- project notes
- panel intent

Tools:
- document parser
- OCR
- vision extraction
- checklist generator

Outputs:
- scope summary
- possible roof/wall/trim areas
- questions
- risk flags

Escalate when:
- unreadable plans
- structural/performance requirements
- conflicting dimensions
- legal/engineering claims

## Estimating Assistant

Mission:
Prepare quote draft structure, assumptions, exclusions, and line-item placeholders for estimator review.

Inputs:
- project
- scope summary
- panel profile
- coil availability
- pricing rules

Tools:
- pricing table
- inventory lookup
- quote draft writer

Outputs:
- draft quote
- assumptions
- missing-data checklist
- alternates

Escalate when:
- pricing exceptions
- margin risk
- unavailable coil
- rush timing
- unusual profile/finish

## Sales Follow-Up Agent

Mission:
Manage customer follow-up timing and draft messages after quote, missing-info, or dormant lead states.

Inputs:
- lead status
- quote status
- last touch date
- customer role
- project urgency

Tools:
- email draft
- task scheduler
- CRM timeline

Outputs:
- follow-up task
- draft email
- next contact date

Escalate when:
- high-value commercial project
- angry tone
- legal language
- pricing negotiation

## Production Scheduler Agent

Mission:
Recommend machine schedule based on order priority, coil inventory, profile, length, changeover, and delivery window.

Inputs:
- orders
- machines
- coil lots
- production runs
- delivery promises

Tools:
- schedule optimizer
- inventory reservation
- run sheet generator

Outputs:
- proposed schedule
- coil reservations
- conflict warnings

Escalate when:
- overbooked machines
- missing inventory
- rush conflict
- QA failure
- downtime event

## SEO Content Agent

Mission:
Maintain APF/ASP content separation, metadata uniqueness, internal links, and public copy safety.

Inputs:
- content page draft
- keyword map
- public safety rules
- competitor notes

Tools:
- metadata checker
- canonical checker
- public-copy scanner

Outputs:
- SEO checklist
- risk flags
- recommended edits
- schema suggestion

Escalate when:
- NDA/private claim
- legal claim
- fake location claim
- competitor overclaiming
- duplicate content risk

