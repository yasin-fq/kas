# Security Policy

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 1.x     | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it privately.
Do NOT open a public GitHub issue.

We will acknowledge receipt within 48 hours and provide a fix timeline.

## Security Model

This is an **offline-first PWA** — all data is stored locally in the browser (IndexedDB). There is NO server-side component.

### Authentication
- PIN (4-digit) for quick login
- Username + Password for full login
- Sessions stored in sessionStorage (cleared on tab close)

### Access Control
- First-time app access requires an 8-character access code
- Role-based access: Manager, Supervisor, Kasir
- Transaction history cannot be deleted (anti-fraud)
- Activity log records all changes (auto-deleted after 30 days)

### Known Limitations
- Password hashing is non-cryptographic (suitable for offline-only app)
- Default credentials MUST be changed after first login
- Access code is in source code — change before deployment
- Web Bluetooth requires HTTPS

## Best Practices
1. Change access code in `src/lib/sys-props.ts`
2. Change default password after first login
3. Deploy via HTTPS
4. Only Manager role manages users
5. Review activity logs regularly
