/* ERP module content. NOTE: capability claims need sign-off against the
   actual product before launch — see plan_erpboss_three_products.md. */

export const modules = [
  {
    slug: 'accounting',
    name: 'Accounting',
    nav: 'Accounting',
    title: 'ERP Accounting Software — Double-Entry Ledger | ERPBoss',
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
    title: 'ERP Inventory Management Software — Stock & Warehouses | ERPBoss',
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
    title: 'ERP Manufacturing Software — BOM & Work Orders | ERPBoss',
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
    title: 'ERP Sales and CRM Software — Quotes to Invoice | ERPBoss',
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
    title: 'ERP Purchasing Software — Suppliers, POs & Receipts | ERPBoss',
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
    slug: 'hr',
    name: 'HR',
    nav: 'HR',
    title: 'HR Software — Attendance, Leave, Recruitment | ERPBoss',
    tagline: 'The employee record everything else hangs off',
    lede:
      'Hiring, attendance, leave, appraisals and exits on one employee record — so the answer to "how much leave does she have left" is a lookup rather than an argument with a spreadsheet.',
    description:
      'Employee records, attendance and shifts, leave policies, recruitment, appraisals, training and the full employee lifecycle.',
    features: [
      { t: 'Attendance and shifts', d: 'Shift types, schedules and assignments with employee check-ins, attendance requests and bulk upload — so a roster is a plan the system holds rather than a printout on a wall.', i: 'M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z' },
      { t: 'Leave that balances', d: 'Leave types, policies and allocations with a leave ledger behind them, plus encashment, compensatory leave and block lists for the periods you cannot spare anyone.', i: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
      { t: 'Recruitment end to end', d: 'Job requisitions, openings, applicants, interview rounds with structured feedback, offers and appointment letters — one trail from vacancy to first day.', i: 'M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M11 3a4 4 0 110 8 4 4 0 010-8z' },
      { t: 'Onboarding and lifecycle', d: 'Onboarding activities, promotions, transfers, grievances, separations, exit interviews and full-and-final statements including company assets to recover.', i: 'M12 2l9 5v10l-9 5-9-5V7l9-5z' },
      { t: 'Appraisals with real criteria', d: 'Appraisal cycles built on KRAs and goals rather than a form, with structured performance feedback from more than one person.', i: 'M12 22a10 10 0 110-20 10 10 0 010 20zM12 16a4 4 0 110-8 4 4 0 010 8z' },
      { t: 'Expenses, advances and travel', d: 'Expense claims with their own tax handling, employee advances settled against them, and travel requests with itineraries and costing.', i: 'M2 7h20v10H2zM9 12a3 3 0 106 0 3 3 0 00-6 0z' },
      { t: 'Skills and training', d: 'Skill maps and assessments against designations, with training programmes, events, results and feedback recorded against the employee.', i: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6' },
      { t: 'One employee record', d: 'Grade, designation, documents, skills, property history and health insurance on the same record — the context a decision about someone actually needs.', i: 'M4 4h16v16H4zM8 9h8M8 13h5' },
    ],
    faqs: [
      { q: 'Can we run shifts and rosters?', a: 'Yes — shift types, schedules, assignments and requests, with employee check-ins feeding attendance rather than being recorded separately.' },
      { q: 'How are leave balances calculated?', a: 'From leave policies and allocations backed by a leave ledger, so a balance is derived from recorded entries rather than maintained by hand.' },
      { q: 'Does it cover hiring?', a: 'Yes, from job requisition and opening through applicants, interview rounds with feedback, offers and appointment letters.' },
      { q: 'What happens when someone leaves?', a: 'Separation, exit interview and a full-and-final statement that includes outstanding amounts and company assets to be returned.' },
    ],
  },
  {
    slug: 'payroll',
    name: 'Payroll',
    nav: 'Payroll',
    title: 'Payroll Software — Salary Structures, Tax and Gratuity | ERPBoss',
    tagline: 'Payroll that calculates itself and posts itself',
    lede:
      'Salary structures, tax slabs and gratuity rules defined once, then applied across a payroll run that posts its own accounting entries. Month end stops being a rebuild.',
    description:
      'Salary structures and components, income tax slabs and exemptions, gratuity, employee benefits, and payroll runs that post to the ledger.',
    features: [
      { t: 'Salary structures and components', d: 'Earnings, deductions and their formulas defined as reusable components, assigned per employee — including bulk assignment when a change hits everyone at once.', i: 'M2 7h20v10H2zM9 12a3 3 0 106 0 3 3 0 00-6 0z' },
      { t: 'Payroll runs, not payroll evenings', d: 'A payroll entry picks up the right employees for the period and produces their salary slips together, rather than one person working through a list.', i: 'M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z' },
      { t: 'Income tax slabs and exemptions', d: 'Tax slabs with their own charges, plus employee exemption declarations and proof submission — so the deduction reflects what was actually declared and evidenced.', i: 'M9 14l6-6M9.5 9h.01M14.5 14h.01M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z' },
      { t: 'Gratuity with rules behind it', d: 'Gratuity rules and slabs applied to the components that qualify, so an end-of-service figure is calculated rather than negotiated.', i: 'M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z' },
      { t: 'Benefits, incentives and bonuses', d: 'Benefit applications and claims, retention bonuses, incentives and additional salary handled inside the run rather than as manual adjustments.', i: 'M12 22a10 10 0 110-20 10 10 0 010 20zM12 16a4 4 0 110-8 4 4 0 010 8z' },
      { t: 'Timesheets and loans included', d: 'Salary slips can draw on timesheets for hours worked and carry loan repayments, so the payslip reflects everything rather than most things.', i: 'M12 8v4l3 3M12 22a10 10 0 110-20 10 10 0 010 20z' },
      { t: 'Withholding when you need it', d: 'Salary can be withheld and released across cycles on the record, instead of being handled off-system and remembered by one person.', i: 'M10 9v6M14 9v6M12 22a10 10 0 110-20 10 10 0 010 20z' },
      { t: 'It posts to the ledger', d: 'A payroll run creates its own accounting entries, mapped through salary component accounts and cost centres, so salary cost lands in the books without re-keying.', i: 'M12 3v18M5 8h14M5 16h14' },
    ],
    faqs: [
      { q: 'Does payroll post to the accounts automatically?', a: 'Yes. Salary components map to accounts and cost centres, and a payroll run creates its own ledger entries.' },
      { q: 'Can it handle income tax declarations and proofs?', a: 'Yes — employees declare exemptions and submit proof, and the tax deduction reflects what has actually been evidenced.' },
      { q: 'Is gratuity supported?', a: 'Yes, through gratuity rules and slabs applied to the qualifying salary components.' },
      { q: 'Can salary slips include timesheet hours?', a: 'Yes, and loan repayments too, so the payslip covers the full picture rather than base salary alone.' },
    ],
  },
  {
    slug: 'projects',
    name: 'Projects',
    nav: 'Projects',
    title: 'ERP Project Management Software — Tasks to Billing | ERPBoss',
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
  {
    slug: 'assets',
    name: 'Asset Management',
    nav: 'Assets',
    title: 'ERP Fixed Asset Management Software — Depreciation | ERPBoss',
    tagline: 'Fixed assets that depreciate themselves',
    lede:
      'Every asset carries its own depreciation schedule, its own finance book and its own maintenance history — so the balance sheet reflects what you actually own, without a spreadsheet running alongside it.',
    description:
      'Fixed asset registers, automatic depreciation schedules, finance books, capitalisation and asset maintenance.',
    features: [
      { t: 'An asset register that posts', d: 'Assets are recorded against categories with their own accounts, so acquisition, depreciation and disposal all reach the ledger without a manual journal.', i: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4' },
      { t: 'Depreciation schedules, calculated', d: 'Each asset carries a schedule that posts on time rather than waiting for someone to remember it at year end.', i: 'M4 19V9M10 19V5M16 19v-7M22 19H2' },
      { t: 'Multiple finance books', d: 'Keep a different depreciation basis for statutory and management reporting on the same asset, instead of maintaining two registers.', i: 'M4 4h16v16H4zM8 9h8M8 13h5' },
      { t: 'Capitalisation from what you bought', d: 'Turn stock items, services and costs into a capitalised asset, so the value carried is what was actually spent assembling it.', i: 'M12 2l9 5v10l-9 5-9-5V7l9-5zM3 7l9 5 9-5' },
      { t: 'Asset maintenance', d: 'Maintenance teams, tasks and logs held against the asset — the record that turns a breakdown into a pattern you can act on.', i: 'M14.7 6.3a4 4 0 10-5.4 5.4L2 19v3h3l7.3-7.3a4 4 0 005.4-5.4z' },
      { t: 'Movement and disposal', d: 'Transfers, adjustments and sales recorded against the asset with the accounting handled, so a disposal is not a manual write-off exercise.', i: 'M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6' },
    ],
    faqs: [
      { q: 'Does depreciation post automatically?', a: 'Yes. Each asset carries its own depreciation schedule, and the entries reach the ledger on schedule rather than being journalled by hand.' },
      { q: 'Can we depreciate differently for tax and management accounts?', a: 'Yes, through multiple finance books on the same asset, each with its own basis.' },
      { q: 'Can we track maintenance on our assets?', a: 'Yes, with maintenance teams, scheduled tasks and a log held against the asset record.' },
    ],
  },
  {
    slug: 'subcontracting',
    name: 'Subcontracting',
    nav: 'Subcontracting',
    title: 'ERP Subcontracting Software — Supplied Materials | ERPBoss',
    tagline: 'Work sent out, materials accounted for',
    lede:
      'Subcontracting is where stock quietly disappears: materials go to a vendor, finished parts come back, and nobody can say what the difference cost. Every supplied item stays on your books until it returns as something else.',
    description:
      'Subcontracting orders and receipts with supplied-material tracking, so outsourced work is accounted for rather than estimated.',
    features: [
      { t: 'Subcontracting orders', d: 'Send work to a vendor as a proper order, with the service and the materials it consumes both recorded against it.', i: 'M3 3h2l2.4 12.4a2 2 0 002 1.6h8.2a2 2 0 002-1.6L21 8H6' },
      { t: 'Supplied materials stay yours', d: 'Raw materials issued to a subcontractor remain on your stock, in their own location, until they come back as a finished item.', i: 'M12 2l9 5v10l-9 5-9-5V7l9-5zM3 7l9 5 9-5' },
      { t: 'Subcontracting BOM', d: 'Define what the vendor consumes to produce the item, so the material issue is calculated rather than guessed at each time.', i: 'M12 2l9 5v10l-9 5-9-5V7l9-5zM12 12v10' },
      { t: 'Receipts that reconcile', d: 'Receiving the finished item consumes the supplied materials and records the service cost, which is what makes the yield visible.', i: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
      { t: 'True landed cost', d: 'Material plus service plus any additional cost rolls into the value of what comes back, so subcontracted parts are not cheaper than they look.', i: 'M2 7h20v10H2zM9 12a3 3 0 106 0 3 3 0 00-6 0z' },
      { t: 'Losses surfaced, not absorbed', d: 'A difference between materials issued and materials consumed is visible against the order rather than quietly written into overheads.', i: 'M12 9v4m0 4h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z' },
    ],
    faqs: [
      { q: 'Do materials sent to a subcontractor leave our stock?', a: 'No. They stay on your books in a separate location until the finished item is received, which is what keeps the valuation honest.' },
      { q: 'How is the cost of a subcontracted item calculated?', a: 'Supplied materials, the service charge and any additional costs roll into the value of the item received.' },
      { q: 'Can we see if a subcontractor is wasting material?', a: 'Yes. The difference between materials issued and consumed is recorded against the order rather than absorbed into general overheads.' },
    ],
  },
  {
    slug: 'quality',
    name: 'Quality Management',
    nav: 'Quality',
    title: 'ERP Quality Management Software — Non-Conformance | ERPBoss',
    tagline: 'Quality as a process, not a promise',
    lede:
      'Documented procedures, recorded non-conformances and actions that get closed. The structure an audit expects, kept as part of daily work rather than assembled the week before an inspection.',
    description:
      'Quality procedures, goals, non-conformance handling, corrective actions, reviews and customer feedback.',
    features: [
      { t: 'Documented procedures', d: 'Processes recorded as procedures with their steps, so the way work should be done is written down rather than held in one person\'s head.', i: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M8 13h8' },
      { t: 'Non-conformance handling', d: 'Record what went wrong against the procedure it breached — the starting point for any corrective action that will survive scrutiny.', i: 'M12 9v4m0 4h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z' },
      { t: 'Actions with resolutions', d: 'Corrective actions carry their own resolutions and owners, so an issue is closed on the record rather than in conversation.', i: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
      { t: 'Goals and objectives', d: 'Quality goals broken into measurable objectives, which is what turns a policy statement into something reviewable.', i: 'M12 22a10 10 0 110-20 10 10 0 010 20zM12 16a4 4 0 110-8 4 4 0 010 8z' },
      { t: 'Reviews with minutes', d: 'Meetings, agendas and minutes kept against the quality system, so the review trail an auditor asks for already exists.', i: 'M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M11 3a4 4 0 110 8 4 4 0 010-8z' },
      { t: 'Customer feedback captured', d: 'Structured feedback against templates and parameters rather than scattered email, so complaints become data.', i: 'M4 4h16v12H4zM8 20h8' },
    ],
    faqs: [
      { q: 'Is this enough for an audit?', a: 'It provides the structure auditors look for — documented procedures, recorded non-conformances, corrective actions and review minutes. Whether it satisfies a specific standard depends on that standard and how you use it.' },
      { q: 'Can we link a non-conformance to a procedure?', a: 'Yes, which is what makes a corrective action traceable to the process it was meant to fix.' },
      { q: 'Can we collect structured customer feedback?', a: 'Yes, through feedback templates with defined parameters rather than free-form email.' },
    ],
  },
  {
    slug: 'support',
    name: 'Support',
    nav: 'Support',
    title: 'ERP Helpdesk and Support Software — SLA Tracking | ERPBoss',
    tagline: 'Issues with a clock on them',
    lede:
      'Customer issues tracked against service level agreements that actually measure response and resolution — so a missed commitment is visible while you can still do something about it.',
    description:
      'Issue tracking, service level agreements, priorities and warranty claims tied to the customer record.',
    features: [
      { t: 'Issues against customers', d: 'Every issue sits on the customer record alongside their orders and invoices, so support has the context a conversation needs.', i: 'M12 22a10 10 0 110-20 10 10 0 010 20zM12 8v5M12 17h.01' },
      { t: 'Service level agreements', d: 'Response and resolution targets defined per priority and applied automatically, rather than remembered by whoever picks the ticket up.', i: 'M12 8v4l3 3M12 22a10 10 0 110-20 10 10 0 010 20z' },
      { t: 'Priorities that mean something', d: 'Each priority carries its own targets, so urgent is a commitment with a clock rather than a label.', i: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z' },
      { t: 'The clock pauses correctly', d: 'SLA timers can hold while an issue waits on the customer, which is what stops the measurement from punishing you for someone else\'s delay.', i: 'M10 9v6M14 9v6M12 22a10 10 0 110-20 10 10 0 010 20z' },
      { t: 'Warranty claims', d: 'Claims tracked against the item and its serial number, connecting a support case to what was actually sold.', i: 'M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z' },
      { t: 'Issue types and history', d: 'Categorised issues build into a record of what breaks most — the difference between firefighting and fixing.', i: 'M4 19V9M10 19V5M16 19v-7M22 19H2' },
    ],
    faqs: [
      { q: 'Can we set different response times per priority?', a: 'Yes. Each priority within a service level agreement carries its own response and resolution targets.' },
      { q: 'Does the SLA clock stop while we wait on the customer?', a: 'Yes, SLA timers can be paused on defined statuses so waiting on a reply does not count against your target.' },
      { q: 'Can support see the customer\'s orders?', a: 'Yes. Issues sit on the same customer record as their quotations, orders and invoices.' },
    ],
  },
  {
    slug: 'maintenance',
    name: 'Maintenance',
    nav: 'Maintenance',
    title: 'ERP Maintenance Scheduling Software — Visits | ERPBoss',
    tagline: 'Scheduled service, not reactive callouts',
    lede:
      'Maintenance schedules generated from what you sold or own, with visits recorded against them — so servicing is planned work rather than a phone call you were not expecting.',
    description:
      'Maintenance schedules and visit records for serviced equipment, linked to items and customers.',
    features: [
      { t: 'Schedules per item', d: 'Generate a service calendar from the equipment itself, so the next visit is known rather than negotiated after a failure.', i: 'M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z' },
      { t: 'Visits recorded against the schedule', d: 'What was done, by whom and what was found, held against the plan it belonged to.', i: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
      { t: 'Preventive and corrective', d: 'Both planned servicing and unplanned callouts recorded the same way, which is the only way to compare them honestly.', i: 'M14.7 6.3a4 4 0 10-5.4 5.4L2 19v3h3l7.3-7.3a4 4 0 005.4-5.4z' },
      { t: 'Tied to the customer', d: 'Service history sits with the customer and the item sold, so a technician arrives knowing what happened last time.', i: 'M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zM3 21c0-4 4-6 9-6s9 2 9 6' },
      { t: 'Serviceable items identified', d: 'Only what actually needs servicing carries a schedule, keeping the calendar useful rather than noisy.', i: 'M12 2l9 5v10l-9 5-9-5V7l9-5z' },
      { t: 'A record worth keeping', d: 'Consistent visit history is what turns maintenance from a cost into an argument for replacing the thing that keeps failing.', i: 'M4 19V9M10 19V5M16 19v-7M22 19H2' },
    ],
    faqs: [
      { q: 'Can schedules be generated automatically?', a: 'Yes, maintenance schedules can be produced for serviceable items rather than built by hand each period.' },
      { q: 'Do visits link back to what we sold?', a: 'Yes. Service history is held against the customer and the item, so past work is visible before the next visit.' },
      { q: 'Can we record unplanned callouts too?', a: 'Yes, both preventive and corrective visits are recorded the same way so they can be compared.' },
    ],
  },
];

export const bySlug = Object.fromEntries(modules.map((m) => [m.slug, m]));
