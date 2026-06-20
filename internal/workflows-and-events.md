# Internal Workflow, Event, and Automation Spec

Private 8190 implementation artifact. This document converts the ontology into automation behavior.

## Core State Machines

### Lead
- `new`
- `needs_info`
- `qualified`
- `disqualified`
- `converted_to_project`
- `dormant`

Allowed transitions:
- `new -> needs_info` when required contact/project data is missing.
- `new -> qualified` when contact, state, project type, and intent are usable.
- `qualified -> converted_to_project` when estimating review begins.
- `needs_info -> qualified` when missing facts are supplied.
- Any open state -> `disqualified` for spam, unsupported scope, duplicate, or bad contact.
- `qualified -> dormant` when no response after follow-up sequence.

### Quote
- `draft`
- `needs_info`
- `estimating`
- `internal_review`
- `sent`
- `accepted`
- `rejected`
- `expired`
- `converted_to_order`

Allowed transitions:
- `draft -> needs_info` when drawings, panel type, or assumptions are incomplete.
- `draft -> estimating` when scope is sufficient.
- `estimating -> internal_review` when line items and assumptions are ready.
- `internal_review -> sent` when approved by estimator/sales owner.
- `sent -> accepted` when customer approves and payment/PO path is clear.
- `sent -> expired` after valid-until date.
- `accepted -> converted_to_order` when an order is created.

### Order
- `approved`
- `payment_pending`
- `scheduled`
- `in_production`
- `qa_review`
- `ready_for_pickup`
- `shipped`
- `delivered`
- `closed`

## Event Names

- `lead.created`
- `lead.qualified`
- `file.uploaded`
- `file.reviewed`
- `project.created`
- `quote.needs_info`
- `quote.sent`
- `quote.accepted`
- `order.created`
- `coil.reserved`
- `production_run.scheduled`
- `production_run.completed`
- `qa.failed`
- `delivery.scheduled`
- `content.published`
- `agent.escalated`

## Automation Rules

### Lead scoring
- Uploaded files: +30
- Target state: +10
- Phone present: +10
- Commercial/industrial project: +15
- Dealer inquiry: +20
- Spam terms or irrelevant industry: -100

### Lead assignment
- Commercial/industrial -> senior sales queue.
- Agricultural -> contractor sales queue.
- Dealer -> owner/partner queue.
- APF partner/investor inquiry -> internal strategy queue.

### Plan upload validation
- Reject single upload over 100MB.
- Require at least one supported file type.
- Create `file.review` task.
- Emit `file.uploaded`.

### Quote completeness gate
A quote cannot move to `sent` without:
- project state
- contact path
- panel profile or explicit `unknown`
- assumptions
- exclusions
- owner user
- valid-until date

### Order creation gate
An order cannot be created unless:
- quote status is `accepted`
- payment/PO rule is satisfied
- billing entity is known
- production handoff is ready

### Production scheduling gate
A production run cannot be scheduled unless:
- order exists
- machine supports profile
- coil/material is available or explicitly waived
- delivery/pickup target is known

### Agent escalation
Agents must escalate:
- low confidence extraction
- missing dimensions
- engineering/performance claims
- legal wording
- pricing exceptions
- supplier-cost exposure
- private/NDA facts

