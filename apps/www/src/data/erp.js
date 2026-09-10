/* ERP module content. NOTE: capability claims need sign-off against the
   actual product before launch — see plan_erpboss_three_products.md. */

export const modules = [
  {
    slug: 'accounting',
    name: 'Accounting',
    nav: 'Accounting',
    title: 'ERP Accounting Software — Double-Entry Ledger | ERP Boss',
    tagline: 'A real ledger, not a spreadsheet with totals',
    lede:
      'Every business event posts one balanced entry. Nothing is added at read time, so the trial balance and the balance sheet agree — always, without a reconciliation ritual at month end.',
    description:
      'Double-entry accounting with a full chart of accounts, multi-currency, tax handling and financial statements that balance by construction.',
    features: [
      { t: 'Chart of accounts that mirrors your business', d: 'A group/leaf account tree — group accounts hold structure, leaf accounts hold postings — so reports roll up without manual mapping.', i: 'M3 7h18M3 12h18M3 17h12' },
      { t: 'Balanced by construction', d: 'One business event produces one balanced entry. Opening balances post as real entries against opening balance equity rather than being bolted on at read time.', i: 'M12 3v18M5 8h14M5 16h14' },
      { t: 'Multi-currency without the mess', d: 'Accounts can carry their own currency with dated exchange rates, while the ledger stays in your base currency — so every report consolidates without conversion logic of its own.', i: 'M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20' },
      { t: 'Tax handled at the transaction', d: 'Tax is captured where the sale or purchase happens, posted to its own liability account, and reported from the ledger rather than reconstructed later.', i: 'M9 14l6-6M9.5 9h.01M14.5 14h.01M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z' },
      { t: 'Statements straight from the ledger', d: 'Trial balance, profit and loss, balance sheet and cash flow read the same postings your day-to-day work creates. No export step, no second source of truth.', i: 'M4 19V9M10 19V5M16 19v-7M22 19H2' },
      { t: 'Cost of sales posted automatically', d: 'A sale posts revenue, tax and the cost-of-sales/inventory pair together, so margin is a ledger fact rather than a monthly estimate.', i: 'M3 3h2l2.4 12.4a2 2 0 002 1.6h8.2a2 2 0 002-1.6L21 8H6' },
    ],
    faqs: [
      { q: 'Do I need an accountant to set this up?', a: 'No. It ships with a working chart of accounts you can use as-is, and your accountant can adjust it later without disturbing existing postings.' },
      { q: 'Can I run more than one currency?', a: 'Yes. Accounts can hold a foreign currency with dated exchange rates, while the ledger itself stays in your base currency so reports consolidate cleanly.' },
      { q: 'What happens to my opening balances?', a: 'They are posted as real opening entries against opening balance equity, which is why the balance sheet balances from day one instead of drifting.' },
    ],
  },
  {
    slug: 'inventory',
    name: 'Inventory',
    nav: 'Inventory',
    title: 'ERP Inventory Management Software — Stock & Warehouses | ERP Boss',
    tagline: 'Stock that reflects the shelf, not last week',
    lede:
      'Every receipt, issue, transfer and return moves the same stock ledger. What the screen says is what is on hand right now — not a figure someone updated on Friday.',
    description:
      'Multi-warehouse stock control with valuation, batch and serial tracking, transfers and reorder visibility.',
    features: [
      { t: 'Multiple warehouses, one picture', d: 'Track stock per location and see it consolidated or per site. Transfers between warehouses are logged movements, so nothing disappears in a handoff.', i: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4' },
      { t: 'Batch and serial tracking', d: 'Follow individual units or production batches through receipt, sale and return — the basis for recall, warranty and expiry handling.', i: 'M7 2h10a1 1 0 011 1v18a1 1 0 01-1 1H7a1 1 0 01-1-1V3a1 1 0 011-1zM9 18h6' },
      { t: 'Valuation that feeds the ledger', d: 'Stock value is not a separate spreadsheet: movements post to inventory and cost-of-sales accounts, so the balance sheet and the warehouse agree.', i: 'M12 2l9 5v10l-9 5-9-5V7l9-5zM3 7l9 5 9-5M12 12v10' },
      { t: 'Reorder before you run out', d: 'Reorder levels surface what is running low with the demand already visible, so purchasing is a decision rather than a discovery.', i: 'M12 9v4m0 4h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z' },
      { t: 'Stock takes that reconcile', d: 'Count, compare and post the difference as an adjustment entry — with a record of who counted what and when.', i: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
      { t: 'Movements you can audit', d: 'Every quantity change traces back to the document that caused it, which is what makes a discrepancy findable instead of theoretical.', i: 'M12 8v4l3 3M12 22a10 10 0 110-20 10 10 0 010 20z' },
    ],
    faqs: [
      { q: 'Can I track stock across several locations?', a: 'Yes. Stock is held per warehouse, with transfers recorded as movements so consolidated and per-site figures both stay accurate.' },
      { q: 'Does stock affect my accounts automatically?', a: 'Yes. Stock movements post to the inventory and cost-of-sales accounts, so the ledger and the warehouse do not drift apart.' },
      { q: 'Can I handle batches with expiry dates?', a: 'Yes, items can be tracked by batch or serial number, which is what expiry, recall and warranty handling depend on.' },
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    nav: 'Manufacturing',
    title: 'ERP Manufacturing Software — BOM & Work Orders | ERP Boss',
    tagline: 'From bill of materials to finished goods',
    lede:
      'Define what a product is made of, plan what to build, and let the consumption of raw materials and the arrival of finished goods post themselves.',
    description:
      'Bills of materials, work orders, production planning and capacity — with material consumption and finished goods posting to stock and the ledger.',
    features: [
      { t: 'Bills of materials, including sub-assemblies', d: 'Model what a product is actually made of, nested as deep as it really goes, with costs rolling up the tree.', i: 'M12 2l9 5v10l-9 5-9-5V7l9-5zM12 12v10M3 7l9 5 9-5' },
      { t: 'Work orders that move stock', d: 'Issuing materials and receiving finished goods are real stock movements, so work in progress is visible rather than assumed.', i: 'M14.7 6.3a4 4 0 10-5.4 5.4L2 19v3h3l7.3-7.3a4 4 0 005.4-5.4z' },
      { t: 'Production planning from demand', d: 'Turn sales orders and reorder levels into a production plan, with shortages surfaced before the floor is idle.', i: 'M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z' },
      { t: 'Capacity and workstations', d: 'Route operations through workstations with their own capacity, so a plan reflects what the floor can actually absorb.', i: 'M6 3v18M18 3v18M3 8h18M3 16h18' },
      { t: 'Real production cost', d: 'Materials and operations roll into the cost of the finished item, which is what makes product-level margin trustworthy.', i: 'M2 7h20v10H2zM9 12a3 3 0 106 0 3 3 0 00-6 0z' },
      { t: 'Scrap and rework recorded', d: 'Losses are posted rather than absorbed silently, so yield is something you can measure and argue about with data.', i: 'M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6' },
    ],
    faqs: [
      { q: 'Can a BOM contain sub-assemblies?', a: 'Yes, bills of materials nest, and costs roll up through the tree so a finished item reflects everything beneath it.' },
      { q: 'Does production update stock automatically?', a: 'Yes. Issuing raw materials and receiving finished goods are stock movements, so work in progress and on-hand figures stay current.' },
      { q: 'Can I plan production from sales demand?', a: 'Yes, sales orders and reorder levels can drive a production plan that flags material shortages before work starts.' },
    ],
  },
  {
    slug: 'sales-crm',
    name: 'Sales & CRM',
    nav: 'Sales & CRM',
    title: 'ERP Sales and CRM Software — Quotes to Invoice | ERP Boss',
    tagline: 'One thread from first enquiry to paid invoice',
    lede:
      'A lead becomes a quotation, a quotation becomes an order, an order becomes an invoice — carrying its own history, so nobody re-enters what was already agreed.',
    description:
      'Leads, opportunities, quotations, sales orders, invoicing and receivables in a single trail.',
    features: [
      { t: 'Leads and opportunities', d: 'Track who is interested, what they asked for and what happened last — so a follow-up does not depend on one person’s memory.', i: 'M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zM3 21c0-4 4-6 9-6s9 2 9 6' },
      { t: 'Quotations that become orders', d: 'Convert an accepted quote into a sales order without retyping it, and keep the original for the argument six months later.', i: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M8 13h8M8 17h5' },
      { t: 'Pricing rules and discounts', d: 'Customer-specific price lists and discount rules applied at the line, so the sales team is not calculating margins by hand.', i: 'M9 14l6-6M9.5 9h.01M14.5 14h.01M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4z' },
      { t: 'Invoicing tied to delivery', d: 'Invoice what was actually delivered, partially or in full, with the ledger entries posted as you go.', i: 'M3 6h18l-1.5 12H4.5L3 6zM8 10a4 4 0 008 0' },
      { t: 'Receivables you can chase', d: 'See who owes what and how overdue it is, per customer and in total, straight from the ledger rather than a side spreadsheet.', i: 'M2 7h20v10H2zM2 7l10-4 10 4M9 12a3 3 0 106 0 3 3 0 00-6 0z' },
      { t: 'Customer history in one place', d: 'Every quote, order, invoice and payment for a customer sits on one record — the context a conversation actually needs.', i: 'M4 4h16v16H4zM8 9h8M8 13h5' },
    ],
    faqs: [
      { q: 'Can I convert a quotation into an order?', a: 'Yes, without re-entering the lines, and the original quotation is retained for reference.' },
      { q: 'Does invoicing post to the accounts?', a: 'Yes. An invoice posts revenue, tax and receivable entries as it is raised, so the ledger reflects sales as they happen.' },
      { q: 'Can different customers have different prices?', a: 'Yes, through customer-specific price lists and discount rules applied at the line level.' },
    ],
  },
  {
    slug: 'purchasing',
    name: 'Purchasing',
    nav: 'Purchasing',
    title: 'ERP Purchasing Software — Suppliers, POs & Receipts | ERP Boss',
    tagline: 'Know what you ordered, what arrived, what you owe',
    lede:
      'Request, order, receive, pay — each step recorded against the last, so a disputed invoice is settled by looking rather than remembering.',
    description:
      'Suppliers, requests for quotation, purchase orders, goods receipts and payables in one trail.',
    features: [
      { t: 'Supplier records worth keeping', d: 'Terms, contacts, prices and history on one record, instead of scattered across inboxes and notebooks.', i: 'M3 21h18M6 21V9l6-4 6 4v12M10 12h4M10 16h4' },
      { t: 'Requests for quotation', d: 'Ask several suppliers at once and compare what comes back on the same terms, so the decision is on price rather than whoever replied first.', i: 'M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-3M8 3v4h8V3M8 12h8M8 16h5' },
      { t: 'Purchase orders with a paper trail', d: 'What you ordered, at what price, when it was promised — the record that makes a late or short delivery arguable.', i: 'M3 3h2l2.4 12.4a2 2 0 002 1.6h8.2a2 2 0 002-1.6L21 8H6' },
      { t: 'Goods receipts that move stock', d: 'Receiving adds to the right warehouse and posts to inventory, so on-hand figures rise the moment goods land.', i: 'M12 2l9 5v10l-9 5-9-5V7l9-5zM3 7l9 5 9-5' },
      { t: 'Three-way matching', d: 'Order, receipt and invoice checked against each other, which is how overbilling gets caught before it is paid.', i: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
      { t: 'Payables and ageing', d: 'What is due, to whom, and how soon — from the same ledger the rest of the business reports on.', i: 'M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z' },
    ],
    faqs: [
      { q: 'Can I compare quotes from several suppliers?', a: 'Yes. A request for quotation can go to multiple suppliers and their responses are compared side by side on the same terms.' },
      { q: 'Does receiving goods update stock and accounts?', a: 'Yes, a goods receipt adds stock to the chosen warehouse and posts the corresponding inventory entries.' },
      { q: 'Can I catch an invoice that does not match the order?', a: 'Yes, through matching the purchase order, the goods receipt and the supplier invoice against each other.' },
    ],
  },
  {
    slug: 'hr-payroll',
    name: 'HR & Payroll',
    nav: 'HR & Payroll',
    title: 'ERP HR and Payroll Software — Attendance to Payslip | ERP Boss',
    tagline: 'From attendance to payslip, on one record',
    lede:
      'Employee records, attendance, leave and payroll that feed each other — so payroll is a calculation from data you already have, not a monthly reconstruction.',
    description:
      'Employee records, attendance, leave management and payroll that posts to the ledger.',
    features: [
      { t: 'Employee records', d: 'Contracts, roles, salary structure and documents on one record, with a history of what changed and when.', i: 'M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M11 3a4 4 0 110 8 4 4 0 010-8z' },
      { t: 'Attendance that feeds payroll', d: 'Presence, absence and overtime captured once and used in the payroll run, rather than re-entered from a register.', i: 'M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z' },
      { t: 'Leave with balances that hold', d: 'Entitlement, applications and approvals tracked together, so a balance is a fact rather than a disagreement.', i: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
      { t: 'Salary structures', d: 'Earnings, deductions and contributions defined once and applied consistently across the payroll run.', i: 'M2 7h20v10H2zM9 12a3 3 0 106 0 3 3 0 00-6 0z' },
      { t: 'Payslips employees can read', d: 'A clear breakdown of what was earned and what was deducted — the thing that prevents most payroll questions.', i: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M8 13h8M8 17h5' },
      { t: 'Payroll posts to the ledger', d: 'A payroll run creates its accounting entries directly, so salary cost appears in the accounts without a re-keying step.', i: 'M12 3v18M5 8h14M5 16h14' },
    ],
    faqs: [
      { q: 'Does attendance flow into payroll?', a: 'Yes. Attendance and overtime are captured once and used directly in the payroll calculation.' },
      { q: 'Does payroll post to the accounts?', a: 'Yes, a payroll run creates its own ledger entries so salary costs appear without re-entry.' },
      { q: 'Can employees see their own leave balance?', a: 'Leave entitlement, applications and approvals are tracked together so balances are visible rather than disputed.' },
    ],
  },
  {
    slug: 'projects',
    name: 'Projects',
    nav: 'Projects',
    title: 'ERP Project Management Software — Tasks to Billing | ERP Boss',
    tagline: 'Know which projects actually made money',
    lede:
      'Tasks, timesheets, costs and billing on the same project record — so profitability is something you can read, not something you estimate afterwards.',
    description:
      'Project tasks, timesheets, cost tracking, billing and profitability reporting.',
    features: [
      { t: 'Projects and tasks', d: 'Break work down, assign it, and see what is actually moving — with dependencies where the work has them.', i: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
      { t: 'Timesheets against real work', d: 'Hours booked to a task rather than a vague bucket, which is what makes both billing and estimates improve.', i: 'M12 8v4l3 3M12 22a10 10 0 110-20 10 10 0 010 20z' },
      { t: 'Costs collected as they happen', d: 'Labour, materials and expenses land on the project as they occur, not in a reconstruction at the end.', i: 'M2 7h20v10H2zM9 12a3 3 0 106 0 3 3 0 00-6 0z' },
      { t: 'Billing from what was done', d: 'Invoice against time and materials or a fixed schedule, drawing on the same records the team already filled in.', i: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6' },
      { t: 'Profitability per project', d: 'Revenue against real cost, per project — the number that tells you which work to take more of and which to stop quoting for.', i: 'M4 19V9M10 19V5M16 19v-7M22 19H2' },
      { t: 'Progress you can show a client', d: 'Status drawn from the same tasks the team works on, so an update is generated rather than written from scratch.', i: 'M3 3v18h18M7 15l4-4 3 3 5-6' },
    ],
    faqs: [
      { q: 'Can I bill by time and materials?', a: 'Yes, from the timesheets and costs already booked against the project, or on a fixed schedule if that is how the work was sold.' },
      { q: 'Can I see whether a project made money?', a: 'Yes. Revenue is compared against the labour, material and expense costs collected on the project.' },
      { q: 'Do timesheets feed anything else?', a: 'They feed both billing and project cost, which is what makes future estimates improve rather than repeat.' },
    ],
  },
];

export const bySlug = Object.fromEntries(modules.map((m) => [m.slug, m]));
