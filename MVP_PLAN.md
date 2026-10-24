# Nachy POS — MVP

A universal point-of-sale platform for retail, food service, and service businesses.

## First milestone

Build a touchscreen-friendly checkout prototype with a product catalog, cart, simulated sales, inventory adjustments, and sales history. No real card processing.

## Planned stack

- Next.js, React, TypeScript
- PostgreSQL for production persistence
- Managed authentication and tenant isolation
- Stripe Connect and Stripe Terminal (only after partner, compliance, and integration review)

## Build order

1. App shell and checkout UI
2. Products and services catalog
3. Cart and demo checkout
4. Sales history and inventory tracking
5. Business accounts, permissions, and PostgreSQL
6. Processor integration in test mode
7. Security review and controlled merchant pilot

## Safety

Do not collect or store raw card details. Keep all real credentials in server-side secrets, never in Git. Treat all prototype transactions as simulated.
