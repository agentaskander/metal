-- America’s Panel Fab / American Super Panel internal schema draft
-- Scope: private 8190 implementation ontology. Not public copy.
-- Target databases: Cloudflare D1 / SQLite first, portable to Postgres later.

PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS organizations (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('contractor','dealer','supplier','manufacturer','owner','architect','public_agency','investor','partner')),
  website TEXT,
  billing_email TEXT,
  phone TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','inactive','prospect','blocked')),
  owner_user_id TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contacts (
  id TEXT PRIMARY KEY,
  organization_id TEXT REFERENCES organizations(id),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  role TEXT CHECK (role IN ('owner','contractor','estimator','architect','procurement','dealer','supplier','partner','other')),
  preferred_channel TEXT CHECK (preferred_channel IN ('phone','email','sms','portal')),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','inactive','do_not_contact')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  source_domain TEXT NOT NULL CHECK (source_domain IN ('apf','asp','phone','email','referral','dealer','manual','import')),
  source_route TEXT NOT NULL,
  utm_source TEXT,
  utm_campaign TEXT,
  utm_medium TEXT,
  contact_id TEXT REFERENCES contacts(id),
  organization_id TEXT REFERENCES organizations(id),
  project_state TEXT CHECK (project_state IN ('california','arizona','texas','florida','other','unknown')),
  project_type TEXT CHECK (project_type IN ('commercial','industrial','agricultural','residential','warehouse','multifamily','municipal','education','unknown')),
  panel_intent TEXT CHECK (panel_intent IN ('pbr_panel','r_panel','ag_panel','tuff_rib','industrial_rib','standing_seam','wall_panel','trim_only','unknown')),
  estimated_sq_ft INTEGER,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','needs_info','qualified','disqualified','converted_to_project','dormant')),
  score INTEGER NOT NULL DEFAULT 0,
  assigned_user_id TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  lead_id TEXT REFERENCES leads(id),
  organization_id TEXT REFERENCES organizations(id),
  project_name TEXT NOT NULL,
  project_address TEXT,
  project_city TEXT,
  project_state TEXT,
  market TEXT NOT NULL CHECK (market IN ('commercial','industrial','agricultural','residential','warehouse','multifamily','municipal','education')),
  building_use TEXT,
  roof_scope TEXT,
  wall_scope TEXT,
  trim_scope TEXT,
  target_date TEXT,
  status TEXT NOT NULL DEFAULT 'intake' CHECK (status IN ('intake','review','estimating','quoted','approved','ordered','scheduled','in_production','delivered','closed','lost')),
  assigned_estimator_id TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS uploaded_files (
  id TEXT PRIMARY KEY,
  lead_id TEXT REFERENCES leads(id),
  project_id TEXT REFERENCES projects(id),
  file_name TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  size_bytes INTEGER NOT NULL CHECK (size_bytes <= 104857600),
  storage_key TEXT NOT NULL,
  review_status TEXT NOT NULL DEFAULT 'not_started' CHECK (review_status IN ('not_started','reviewing','reviewed','needs_better_file','rejected')),
  extracted_summary TEXT,
  uploaded_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  reviewed_at TEXT,
  CHECK (lead_id IS NOT NULL OR project_id IS NOT NULL)
);

CREATE TABLE IF NOT EXISTS quotes (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL REFERENCES projects(id),
  version INTEGER NOT NULL DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','needs_info','estimating','internal_review','sent','accepted','rejected','expired','converted_to_order')),
  subtotal REAL,
  tax REAL,
  freight REAL,
  total REAL,
  valid_until TEXT,
  assumptions TEXT,
  exclusions TEXT,
  alternates TEXT,
  sent_at TEXT,
  accepted_at TEXT,
  expired_at TEXT,
  created_by_user_id TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS quote_line_items (
  id TEXT PRIMARY KEY,
  quote_id TEXT NOT NULL REFERENCES quotes(id) ON DELETE CASCADE,
  line_type TEXT NOT NULL CHECK (line_type IN ('panel','trim','accessory','freight','labor','option','discount')),
  profile TEXT CHECK (profile IN ('pbr_panel','r_panel','ag_panel','tuff_rib','industrial_rib','standing_seam','wall_panel','trim_only','unknown')),
  gauge TEXT,
  substrate TEXT,
  finish TEXT,
  color TEXT,
  length_inches REAL,
  quantity REAL,
  unit_price REAL,
  description TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  quote_id TEXT NOT NULL UNIQUE REFERENCES quotes(id),
  purchase_order TEXT,
  payment_status TEXT NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('not_required','pending','deposit_paid','paid','overdue','credit_hold')),
  production_status TEXT NOT NULL DEFAULT 'approved' CHECK (production_status IN ('approved','payment_pending','scheduled','in_production','qa_review','ready_for_pickup','shipped','delivered','closed')),
  delivery_status TEXT NOT NULL DEFAULT 'not_scheduled' CHECK (delivery_status IN ('not_scheduled','scheduled','ready_for_pickup','in_transit','delivered','closed')),
  scheduled_date TEXT,
  promised_date TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  closed_at TEXT
);

CREATE TABLE IF NOT EXISTS coil_lots (
  id TEXT PRIMARY KEY,
  supplier_id TEXT REFERENCES organizations(id),
  substrate TEXT NOT NULL CHECK (substrate IN ('g90_galvanized','galvalume','aluminum','unknown')),
  gauge TEXT NOT NULL CHECK (gauge IN ('twenty_two','twenty_four','twenty_six','twenty_nine','unknown')),
  finish TEXT NOT NULL CHECK (finish IN ('smp','pvdf','matte','cool_roof','primer_ready','galvanized','galvalume','custom')),
  color TEXT NOT NULL,
  width_inches REAL NOT NULL,
  received_weight_lbs REAL NOT NULL,
  remaining_weight_lbs REAL NOT NULL,
  cost_per_lb REAL,
  status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available','reserved','depleted','quarantine')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS machines (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  machine_type TEXT NOT NULL CHECK (machine_type IN ('fixed_roll_former','mobile_roll_former','standing_seam','folder','brake','shear','slitter','decoiler','forklift','other')),
  supported_profiles TEXT,
  status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available','scheduled','running','down','maintenance','offline')),
  location TEXT,
  maintenance_due_at TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS production_runs (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES orders(id),
  machine_id TEXT NOT NULL REFERENCES machines(id),
  coil_lot_id TEXT REFERENCES coil_lots(id),
  profile TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','scheduled','setup','running','paused','completed','canceled')),
  scheduled_start TEXT,
  completed_at TEXT,
  operator_user_id TEXT,
  qa_status TEXT NOT NULL DEFAULT 'not_started' CHECK (qa_status IN ('not_started','passed','failed','rework_required','waived_by_manager')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS events (
  id TEXT PRIMARY KEY,
  event_name TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  actor_type TEXT,
  actor_id TEXT,
  payload TEXT NOT NULL,
  occurred_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tasks (
  id TEXT PRIMARY KEY,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  task_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open','in_progress','blocked','complete','canceled')),
  title TEXT NOT NULL,
  description TEXT,
  assigned_user_id TEXT,
  due_at TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  completed_at TEXT
);

CREATE TABLE IF NOT EXISTS agent_runs (
  id TEXT PRIMARY KEY,
  agent_name TEXT NOT NULL,
  trigger_event_id TEXT REFERENCES events(id),
  input_payload TEXT NOT NULL,
  output_payload TEXT,
  status TEXT NOT NULL DEFAULT 'queued' CHECK (status IN ('queued','running','completed','failed','escalated','canceled')),
  confidence_score REAL,
  escalation_reason TEXT,
  started_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  completed_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_phone ON contacts(phone);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source_domain, source_route);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_quotes_project ON quotes(project_id);
CREATE INDEX IF NOT EXISTS idx_quote_line_items_quote ON quote_line_items(quote_id);
CREATE INDEX IF NOT EXISTS idx_orders_quote ON orders(quote_id);
CREATE INDEX IF NOT EXISTS idx_production_runs_order ON production_runs(order_id);
CREATE INDEX IF NOT EXISTS idx_events_name_time ON events(event_name, occurred_at);
CREATE INDEX IF NOT EXISTS idx_tasks_entity ON tasks(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_agent_runs_agent ON agent_runs(agent_name, status);
