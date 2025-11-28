# npm install react-pdf
pnpm ls react-pdf                                                                                                                                     ─╯
Legend: production dependency, optional only, dev only

my-react-app@0.0.0 /Users/manojseetaramgowda/projects/my-react-app (PRIVATE)

dependencies:
react-pdf 7.7.2

╭─    ~/projects/my-react-app    main !4 ?5 ────────────────────────────────────────────────────────────────────────────── ✔    02:19:26 PM  ─╮
╰─ pnpm ls pdfjs-dist                                                                                                                                    ─╯

╭─    ~/projects/my-react-app    main !4 ?5 ────────────────────────────────────────────────────────────────────────────── ✔    02:19:35 PM  ─╮
╰─ pnpm ls pdfjs-dist                                                                                                                                    ─╯

╭─    ~/projects/my-react-app    main !4 ?5 ────────────────────────────────────────────────────────────────────────────── ✔    02:19:41 PM  ─╮
╰─ pnpm add pdfjs-dist@5.4.296                                                                                                                           ─╯
 WARN  deprecated react-pdf@7.7.2: This version shipped an incorrect fix for a security vulnerability
 WARN  6 deprecated subdependencies found: are-we-there-yet@2.0.0, gauge@3.0.2, glob@7.2.3, inflight@1.0.6, npmlog@5.0.1, rimraf@3.0.2
Packages: +3
+++
Progress: resolved 302, reused 247, downloaded 0, added 3, done
 WARN  Issues with peer dependencies found
.
└─┬ react-pdf 7.7.2
  ├── ✕ unmet peer @types/react@"^16.8.0 || ^17.0.0 || ^18.0.0": found 19.2.7
  ├── ✕ unmet peer react@"^16.8.0 || ^17.0.0 || ^18.0.0": found 19.2.0
  └── ✕ unmet peer react-dom@"^16.8.0 || ^17.0.0 || ^18.0.0": found 19.2.0

dependencies:
+ pdfjs-dist 5.4.296 (5.4.394 is available)

╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: canvas.                                                           │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯

Done in 749ms using pnpm v10.14.0

╭─    ~/projects/my-react-app    main !4 ?5 ────────────────────────────────────────────────────────────────────────────── ✔    02:20:13 PM  ─╮
╰─ pnpm ls pdfjs-dist                                                                                                                                    ─╯
Legend: production dependency, optional only, dev only

my-react-app@0.0.0 /Users/manojseetaramgowda/projects/my-react-app (PRIVATE)

dependencies:
pdfjs-dist 5.4.296

╭─    ~/projects/my-react-app    main !4 ?5 ────────────────────────────────────────────────────────────────────────────── ✔    02:20:19 PM  ─╮
╰─ pnpm dev                                                                                                                                              ─╯

> my-react-app@0.0.0 dev /Users/manojseetaramgowda/projects/my-react-app
> vite

2:20:27 pm [vite] (client) Re-optimizing dependencies because lockfile has changed
Port 5173 is in use, trying another one...
Port 5174 is in use, trying another one...
Port 5175 is in use, trying another one...

  VITE v7.2.4  ready in 521 ms

  ➜  Local:   http://localhost:5176/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
2:23:07 pm [vite] (client) hmr update /src/App.tsx











