# SPD Schedule Application

### This is an application designed for SPD to easliy manage daily schedules.

## Features
### Create and manage League Schedules
- Have live score updates
- Create dynamic calendar for a day/weekend
- Onboard new teams
    - Roster can be imported from .xlsx
    - Payments handled outside of application for now
    - Create a route for teams to distribute to players to signup for that team 
    - Players are onboarded through signup route and added to a team automatically 
    (_possible 2FA for confirmation_)

### Display daily match information on separate display
- This includes league matches, events, and public reservations
    - Each screen unique for 1 field
### Create public field reservations
- Payment handled outside of application
- Reservations made on user side
    - Creation requires:
        - First and Last Name
        - Phone number
        - Time start
        - Hourly rate _(Could be set dynamically set)_
    - Set as upcoming on creation, cna be changed to completed/cancelled by user
---
## Tech Stack
- **Frontend:** React, shadcn
- **Backend:** Elysia, Prisma
- **Database:** supabase _(postgres)_

---

## MVP Overview

This MVP covers two core features of the field and league management platform: a public-facing schedule calendar and a public field reservation system. Payments are handled outside the application for this phase.


### Feature 1 — Schedule calendar display

A read-only display screen (designed for TV/kiosk mounting) showing all scheduled activity for a given day or weekend. Each field gets its own column, listing matches and reservations in chronological order.

**Views:**
- Day view — single day with field columns and time-ordered match blocks; toggleable between Saturday and Sunday
- Weekend view — Saturday and Sunday displayed side by side

**Each match block shows:** team names, match time, field location, and entry type (league match or public reservation)


### Feature 2 — Public field reservations

A self-serve form allowing anyone to reserve a field without an account. Reservations surface automatically on the schedule display.

**Required fields at creation:**
- First and last name
- Phone number
- Start time
- Duration (billed at a dynamically configured hourly rate)

**Reservation lifecycle:** all reservations begin as `upcoming` and can be manually moved to `completed` or `cancelled`.


### Out of scope for MVP
- In-app payments
- Notifications
- Reporting and analytics
