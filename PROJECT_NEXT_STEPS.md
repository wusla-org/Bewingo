# Website + Admin: Next Steps

## What is already done
- Public pages are active: `/`, `/shop`, `/product/[id]`.
- Admin scaffold is active: `/admin`, `/admin/products`, `/admin/orders`, `/admin/inquiries`, `/admin/settings`.
- Build passes successfully with current code.

## Details needed from you
Provide these to continue with real backend integration:

1. Company profile
- Final company name
- Final logo file
- Address, support phone, support email
- Social links (Instagram/Facebook/X/LinkedIn)

2. Product catalog
- Categories list
- At least 10 real products with:
  - Name
  - SKU
  - Price
  - Description
  - Stock
  - Images

3. Business flow
- Do you want direct online payment now (`Yes/No`)?
- If yes: payment gateway choice (`Razorpay` or `Stripe`)
- Order statuses you want (example: Pending, Packed, Shipped, Delivered)

4. Admin users
- First admin email
- Optional staff emails

5. Deployment
- Domain name
- Preferred hosting for DB (`Neon` or `Supabase`)

## Next implementation phase (after you send details)
1. Add Prisma + PostgreSQL schema.
2. Add auth for admin (NextAuth with role checks).
3. Convert admin pages to real CRUD.
4. Replace static product data in public pages with DB data.
5. Add contact/bulk inquiry forms that save to DB.
