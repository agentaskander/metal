# Internal MVP Build Plan

Private 8190 implementation artifact.

## MVP 1: Lead Intake Foundation

Build:
- `organizations`
- `contacts`
- `leads`
- `uploaded_files`
- `events`
- source route and UTM capture
- lead status workflow

Done when:
- ASP/APF forms can create leads.
- Files can be stored and linked to leads.
- Every lead emits `lead.created`.
- Lead inbox can filter by status and source.

## MVP 2: Sales Inbox

Build:
- assignment
- notes
- tasks
- follow-up dates
- missing-info checklist
- lead score

Done when:
- Sales can triage leads without searching email.
- Missing-info requests are tracked.
- Dormant leads can be resurfaced.

## MVP 3: Quote Drafting

Build:
- `projects`
- `quotes`
- `quote_line_items`
- assumptions/exclusions
- quote statuses
- quote versioning

Done when:
- Estimator can prepare a quote draft from a project.
- Quote cannot be sent until completeness gates pass.
- Accepted quote can become order.

## MVP 4: Inventory Foundation

Build:
- `coil_lots`
- substrate/gauge/finish/color vocabulary
- supplier relationship
- inventory status
- reservation rules

Done when:
- Estimator can see whether likely material exists.
- Production can reserve coil for approved orders.

## MVP 5: Production Handoff

Build:
- `orders`
- `machines`
- `production_runs`
- run sheets
- QA status
- bundle labels

Done when:
- Accepted quote can become order.
- Order can generate production runs.
- QA gates delivery readiness.

## MVP 6: Agent Layer

Build:
- `agent_runs`
- Intake Agent
- Plan Review Agent
- Estimating Assistant
- Sales Follow-Up Agent

Done when:
- Agents produce drafts and summaries.
- Human approval is required for external messages and pricing outputs.
- Escalation reasons are logged.

## MVP 7: Contractor / Dealer Portal

Build:
- saved projects
- quote history
- uploads
- approvals
- order status
- dealer territory metadata

Done when:
- Repeat buyers can manage projects without emailing every file again.
- Dealer/channel opportunity can be measured.

