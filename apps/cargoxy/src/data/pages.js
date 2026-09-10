/* CargoXY inner-page content.
   NOTE: capability claims need verifying against the app at
   /var/bench/awbix_bench/apps/awbix before launch. Wording is
   deliberately about what the system does, not about certifications
   or message types that have not been confirmed. */

export const pages = [
  {
    slug: 'air-cargo-edi',
    nav: 'Airline EDI',
    title: 'Air Cargo EDI Software — Send AWB Data Electronically | CargoXY',
    description:
      'Send AWB and House AWB data to airlines electronically and receive status updates back automatically. Air cargo EDI built into the forwarding system, not bolted on.',
    eyebrow: 'Air',
    h1: 'Airline connectivity, built in',
    lede:
      'The difference between a forwarder that scales and one that stalls is usually how many times a shipment gets typed. Air cargo EDI removes the retyping between your desk and the airline — and with it, the errors that come from doing the same job twice.',
    features: [
      { t: 'Send AWB and House AWB data', d: 'Master and house-level shipment data goes to the airline electronically from the record you already created, rather than being rekeyed into a carrier portal.', i: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z' },
      { t: 'Status updates come back automatically', d: 'Carrier milestones flow into the shipment record, so tracking a consignment is reading a screen rather than making a phone call.', i: 'M12 8v4l3 3M12 22a10 10 0 110-20 10 10 0 010 20z' },
      { t: 'Checked before it leaves', d: 'Shipment data is validated before transmission, so problems surface at your desk while they are still cheap to fix — not at acceptance.', i: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
      { t: 'EGM and IGM from the same data', d: 'Export and import manifests are generated from the AWB records you already captured, so the manifest matches the shipment by construction.', i: 'M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-3M8 3v4h8V3M8 12h8M8 16h5' },
      { t: 'AWB documents from the job', d: 'Air waybills produced from the shipment record, with the details already in place, rather than filled into a template by hand.', i: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M8 13h8M8 17h5' },
      { t: 'Proof after the fact', d: 'What was sent, when, and what came back is retained — which is what makes a dispute with a carrier a matter of record rather than recollection.', i: 'M4 4h16v16H4zM8 9h8M8 13h5' },
    ],
    faqs: [
      { q: 'Do we need our own EDI setup with each airline?', a: 'Connectivity is configured per carrier as part of onboarding. The point of the demo is to establish which of your carriers are in scope before anything is committed.' },
      { q: 'What happens if a message is rejected?', a: 'Data is validated before it is sent, and the outcome of each transmission is recorded against the shipment so a rejection is visible and actionable rather than silent.' },
      { q: 'Can we still handle carriers we have no connection to?', a: 'Yes. Those shipments run through the same system and documents; only the electronic transmission step differs.' },
    ],
  },
  {
    slug: 'ocean',
    nav: 'Ocean',
    title: 'Ocean Freight Software — FCL, LCL and Bills of Lading | CargoXY',
    description:
      'Run ocean shipments alongside air and courier in one system, with bills of lading produced from the job record and billing that reconciles.',
    eyebrow: 'Ocean',
    h1: 'Sea freight on the same system as everything else',
    lede:
      'Most forwarders run ocean on a different tool from air, then spend the month reconciling two sets of numbers. CargoXY keeps sea shipments on the same customers, the same rates and the same ledger as the rest of the business.',
    features: [
      { t: 'FCL and LCL shipments', d: 'Full and part container loads handled as first-class jobs, with the consolidation detail an LCL shipment actually needs.', i: 'M2 20s2-1 4-1 3 1 6 1 4-1 6-1 4 1 4 1M4 18l1-6h14l1 6M8 12V7h8v5' },
      { t: 'Bills of lading from the job', d: 'B/L documents produced from the shipment record rather than a separate template, so the paperwork matches what was actually booked.', i: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6' },
      { t: 'Manifests and customs paperwork', d: 'The documentation that moves a container generated from data already captured, instead of re-entered against a deadline.', i: 'M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-3M8 3v4h8V3' },
      { t: 'Shared customers and rates', d: 'The customer who ships by air this week and by sea next month is one record, with one balance and one history.', i: 'M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zM3 21c0-4 4-6 9-6s9 2 9 6' },
      { t: 'Costs captured per shipment', d: 'Freight, handling and local charges booked against the job as they occur, so margin per shipment is a number rather than a feeling.', i: 'M2 7h20v10H2zM9 12a3 3 0 106 0 3 3 0 00-6 0z' },
      { t: 'One invoice run', d: 'Sea, air and courier bill from the same place, which is what removes the month-end job of stitching three systems together.', i: 'M3 6h18l-1.5 12H4.5L3 6z' },
    ],
    faqs: [
      { q: 'Can one customer ship by both air and sea?', a: 'Yes — that is the point of running them on one system. The customer, their rates, their balance and their history are shared across every mode.' },
      { q: 'Are bills of lading produced by the system?', a: 'Yes, from the shipment record rather than a separate document template, so the paperwork reflects the booking.' },
      { q: 'Does ocean billing work the same way as air?', a: 'Yes. All modes bill through the same quotation, invoicing and accounts flow.' },
    ],
  },
  {
    slug: 'courier',
    nav: 'Courier',
    title: 'Courier Management Software for Freight Forwarders | CargoXY',
    description:
      'Run door-to-door courier consignments alongside air and ocean freight, with tracking, billing and accounts in the same system.',
    eyebrow: 'Courier',
    h1: 'Door-to-door work, on the same books',
    lede:
      'Courier volume is usually the part of a forwarding business that grows first and gets tracked worst — a spreadsheet, a WhatsApp thread, and an invoice reconstructed at month end. It belongs on the same system as everything else.',
    features: [
      { t: 'Consignments as proper records', d: 'Each shipment is a record with a sender, a receiver, contents and a status — not a row someone will tidy up later.', i: 'M3 3h2l2.4 12.4a2 2 0 002 1.6h8.2a2 2 0 002-1.6L21 8H6' },
      { t: 'Tracking customers can follow', d: 'Status visible against the consignment, so "where is my parcel" is answered by a screen rather than a search through messages.', i: 'M12 8v4l3 3M12 22a10 10 0 110-20 10 10 0 010 20z' },
      { t: 'Rate cards that apply themselves', d: 'Weight and zone-based pricing applied at booking, which is what stops undercharging from becoming a habit.', i: 'M9 14l6-6M9.5 9h.01M14.5 14h.01M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4z' },
      { t: 'Bulk handling', d: 'Book and process consignments in volume, because courier work is rarely one shipment at a time.', i: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z' },
      { t: 'The same customer record', d: 'A client sending parcels this week and a container next month is one account with one balance, not two relationships.', i: 'M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M11 3a4 4 0 110 8 4 4 0 010-8z' },
      { t: 'Billing that includes it', d: 'Courier revenue lands in the same invoicing and accounts as freight, so it stops being the part of the business nobody can size.', i: 'M2 7h20v10H2zM2 7l10-4 10 4' },
    ],
    faqs: [
      { q: 'Is courier a separate product?', a: 'No. It runs in the same system as air and ocean, sharing customers, rates, invoicing and accounts.' },
      { q: 'Can we price by weight and zone?', a: 'Yes, through rate cards applied at booking rather than calculated by hand afterwards.' },
      { q: 'Can customers track their own consignments?', a: 'Consignment status is held on the record so it can be shared rather than looked up by a staff member each time.' },
    ],
  },
  {
    slug: 'platform',
    nav: 'Platform',
    title: 'Freight Forwarding Platform — Quotes, Billing and Accounts | CargoXY',
    description:
      'Quotations, client hub, invoicing and built-in accounting — the commercial side of a forwarding business on the same records as its operations.',
    eyebrow: 'Platform',
    h1: 'The commercial side, on the same records',
    lede:
      'Operations software that stops at the shipment leaves the hardest part — getting paid correctly — to a spreadsheet. CargoXY runs quotations, billing and accounts on the same records the operations team already fills in.',
    features: [
      { t: 'Quotations and rate management', d: 'Quote from managed rates rather than memory, and keep the quote for the conversation that follows three months later.', i: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M8 13h8' },
      { t: 'Client hub', d: 'Give customers somewhere to raise booking requests and follow shipments, so status chasing stops arriving as phone calls.', i: 'M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zM3 21c0-4 4-6 9-6s9 2 9 6' },
      { t: 'Invoicing from the job', d: 'Bill what was actually shipped, with the charges already collected against the consignment rather than assembled at month end.', i: 'M3 6h18l-1.5 12H4.5L3 6zM8 10a4 4 0 008 0' },
      { t: 'Accounting built in', d: 'A double-entry ledger underneath the freight work, so revenue, cost and receivables are posted rather than estimated.', i: 'M12 3v18M5 8h14M5 16h14' },
      { t: 'Multi-currency', d: 'Freight is rarely billed in one currency. Accounts can carry their own, with the ledger consolidating in yours.', i: 'M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20' },
      { t: 'Reports from the ledger', d: 'Profitability by shipment, customer and lane, read from the same postings the day-to-day work creates.', i: 'M4 19V9M10 19V5M16 19v-7M22 19H2' },
    ],
    faqs: [
      { q: 'Does CargoXY replace our accounting software?', a: 'It carries a full double-entry ledger, so it can. Whether it should depends on what else your finance team runs — worth covering in the demo.' },
      { q: 'Can we bill in more than one currency?', a: 'Yes. Accounts can hold their own currency while the ledger consolidates in your base currency.' },
      { q: 'Can customers raise their own bookings?', a: 'Yes, through the client hub, which also lets them follow shipment status without calling the desk.' },
    ],
  },
];
