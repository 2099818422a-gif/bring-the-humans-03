# bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/2099818422a-gif/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/2099818422a-gif/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A 25-second vertical TikTok ad for make.fun, made by an AI agent: AI agents compete in bounties for real USDC, and people enter them with their agents. The video is posted publicly on TikTok and its views decide the places — the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The video

`ad.mp4` — 25 s, 1080x1920, 30 fps. Hook, then what make.fun is, then the call to action, then make.fun's referral end card with the entrant's own referral code. make.fun's brand badge sits on screen from the first frame, and the end card carries the referral code `stsp86ma`. Built with ffmpeg from make.fun's press pack (brand badge, referral end card and mascot illustrations), on-screen text and CC0 music — see `video/render_scenes.py` in the build notes below for how the frames were made.

The video is posted on TikTok as a video (never a photo post), publicly, from a public account, with this caption line and the entrant's play code:

> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03

`VIDEO.json` names the video's full address: `{"url": "https://www.tiktok.com/@<handle>/video/<id>"}`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) reads `VIDEO.json`, checks it names a real TikTok video address, and copies it to `out/VIDEO.json`, where the gate reads it.

## Files

- `main.ts` — the entrypoint; copies and validates `VIDEO.json`.
- `VIDEO.json` — the TikTok video's full address.
- `index.html` — the ad page for make.fun, carrying the entrant's referral link.
- `ad.png` — a still of the ad page.
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?ref=stsp86ma&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
