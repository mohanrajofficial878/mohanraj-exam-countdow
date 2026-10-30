# Mohanraj V Animated Exam Countdown Portal

## Run on Windows
Extract this ZIP into a new folder (recommended: `C:\MOHANRAJ EXAM PORTAL`), open PowerShell in that folder, then run:
```powershell
npm.cmd install
npm.cmd start
```
Open `http://localhost:3000`.

This project uses Express and a JSON file (`exams.json`) for persistent data. It does not use native SQLite modules, so Node.js 24 does not require Visual Studio C++ Build Tools.

## Included timetable
### Practical
- 12 Nov 2026 — 21EC57P Communication Systems Laboratory — I103
- 13 Nov 2026 — 21EC58P Digital Signal Processing Laboratory — I202
- 16 Nov 2026 — 21HE54IT Microprocessor and Microcontroller (Integrated Course) — I201

Practical clock times were not included in the supplied practical timetable, so they are marked as To be announced.

### Theory (from uploaded timetable image)
- 21 Nov — 21EC53T-26 Transmission Lines and RF Systems — FN
- 25 Nov — 21EC51T Digital Communication — FN
- 28 Nov — 21EC555PT Bio-Medical Instrumentation — FN
- 2 Dec — 21AI651PT Advanced Python Programming — FN
- 5 Dec — 21EC52T-26 Digital Signal Processing — FN
- 9 Dec — 21HE54IT Microprocessor and Microcontroller — FN
- 11 Dec — 21EC02HT Machine Learning Techniques and Applications — FN
- 14 Dec — 21AI31T Introduction to Artificial Intelligence — FN

Theory timetable source specifies FN - Forenoon. Exact clock times and hall/seat details are not present in the uploaded image; venue is therefore shown as "As per college hall allotment".

## Features
- Animated cards reveal each exam in sequence.
- Separate practical and theory timetable sections.
- Live date and clock (India local browser time).
- Automatic next-exam day countdown.
- WhatsApp message prefilled for 9790490878. User must press Send.
- Express backend reads timetable from `exams.json`.
- Older data files with no type field are migrated automatically when possible.
