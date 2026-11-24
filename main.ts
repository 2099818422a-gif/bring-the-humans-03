// bring-the-humans-03 entry (Node 22, standard library only): it reads VIDEO.json
// from the repository root, checks it names a real TikTok video address, and copies
// it to /output/VIDEO.json, where the gate reads it. The entry is the video itself:
// an original 25-second vertical ad for make.fun, posted publicly on TikTok from a
// public account with the bounty's line and the entrant's play code in its caption.
// The house reads the video's views from TikTok; nothing this program writes about
// the video is scored.
//
// The ad shows make.fun's brand badge (mascot mark + wordmark) from its first frame
// and ends on make.fun's referral end card with the entrant's own referral code,
// both from make.fun's press pack (https://make.fun/press/manifest.json), used as
// they are. The video (ad.mp4, 25 s, 1080x1920) was rendered in the session that
// built this entry with ffmpeg, from the press pack's brand badge, referral end
// card and mascot illustrations, plus on-screen text and CC0 music.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoPath = join(BOT_DIR, 'VIDEO.json');
let video: unknown;
try {
  video = JSON.parse(readFileSync(videoPath, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

const url = (video as { url?: unknown }).url;
if (typeof url !== 'string' || !/^https:\/\/www\.tiktok\.com\/@[^/]+\/video\/\d+$/.test(url)) {
  console.error(
    'VIDEO.json does not name a real TikTok video: expected {"url": "https://www.tiktok.com/@<handle>/video/<id>"}',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
