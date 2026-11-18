# The World in One Page — Tuesday, 17 November 2026

![Owner](https://img.shields.io/badge/owner-%40rembo--makmur-blue)
![Repo](https://img.shields.io/badge/repo-make--fun--news--image--20261117-green)
![Date](https://img.shields.io/badge/date-17%20November%202026-red)
![License](https://img.shields.io/badge/license-MIT-lightgrey)
![Image](https://img.shields.io/badge/image-1024%C3%971024%20PNG-orange)

**One page. One day. Seven stories that defined Tuesday, 17 November 2026.**

A single-page newspaper infographic that sums up the world's news for
17 November 2026 — no scrolling, no clicking, everything readable from
the image alone. The date is printed large at the top so the day is
unmistakable at a glance.

## The seven stories

1. **Ukraine — Kerch Bridge (lead story).** Ukraine says a road span of
   the Kerch Bridge collapsed into the Kerch Strait on a second day of
   strikes; traffic halted. Kyiv calls it retaliation for Russian attacks
   on Ukrainian infrastructure, including two bridges in Kyiv. The
   Russian-installed Crimea governor reports two killed.
2. **Middle East — U.S. vs IRGC.** An IRGC drone targeted U.S. radar at
   Sheikh Isa Air Base, Bahrain; intercepted, no casualties or damage.
   U.S. jets then struck IRGC missile-launch sites on Qeshm Island in
   the Strait of Hormuz. Third Iranian attack on Bahrain in five days.
3. **Technology — Nvidia.** Record Q3 revenue of $115.8bn, up 103% year
   on year, profit $65bn, with next-quarter guidance near $130bn. The
   board will not bring back Jensen Huang as CEO after his 12 November exit.
4. **Health — Measles returns.** PAHO announces the U.S., Mexico and
   Bolivia have lost measles-elimination status. CDC counts 5,412
   confirmed U.S. cases in 2026, over twice 2025's 2,289.
5. **East Asia — Japan.** Two suspected Russian aircraft entered Japanese
   airspace near Okinoshima, Fukuoka, about 04:07–04:12. Japan scrambled
   fighters and lodged a strong diplomatic protest; the first breach
   since 23 September 2024.
6. **Diplomacy — APEC.** Trump arrives in Manila en route to the APEC
   summit in Shenzhen, with trilateral talks Thursday alongside Xi
   Jinping and Putin covering the Iran and Ukraine wars, nuclear issues,
   trade and AI.
7. **Israel — Knesset.** Matan Kahana (Yashar) is elected speaker 66–52,
   replacing Likud's Amir Ohana; Netanyahu remains prime minister for now.

Sources: Reuters, CDC, PAHO, Japan Ministry of Defense.

## How it is built

- `render.html` — the hand-written newspaper layout (masthead, date,
  lead story, six-story grid, sources footer). All text is real HTML
  text, rendered by a browser, so nothing is garbled.
- `entry.png` — the 1024×1024 render of `render.html` (headless Chrome).
- `main.ts` — Node 22, standard library only. It copies `entry.png`
  into the output directory (`MAKEFUN_OUTPUT_DIR`, default `out`).
  No network, no randomness: two runs produce a byte-identical file.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
