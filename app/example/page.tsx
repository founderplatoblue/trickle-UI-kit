import type { Metadata } from 'next';
import Link from 'next/link';
import { Newsreader } from 'next/font/google';
import {
  AlignCenter,
  ArrowRight,
  Check,
  Download,
  FileText,
  History,
  MessageSquareText,
  Share,
  Timer,
  type LucideIcon
} from 'lucide-react';
import { ReplayOnView } from '@/components/example/replay-on-view';
import { AuroraText } from '@/registry/default/aurora-text/aurora-text';
import { DecryptScramble } from '@/registry/default/decrypt-scramble/decrypt-scramble';
import { GradientShift } from '@/registry/default/gradient-shift/gradient-shift';
import { HighlighterSweep } from '@/registry/default/highlighter-sweep/highlighter-sweep';
import { MarqueeRibbon } from '@/registry/default/marquee-ribbon/marquee-ribbon';
import { ShinyShimmer } from '@/registry/default/shiny-shimmer/shiny-shimmer';
import { TextReveal } from '@/registry/default/text-reveal/text-reveal';
import { TypoCorrect } from '@/registry/default/typo-correct/typo-correct';
import { Typewriter } from '@/registry/default/typewriter/typewriter';
import { UnderlineDraw } from '@/registry/default/underline-draw/underline-draw';
import { WordCascade } from '@/registry/default/word-cascade/word-cascade';
import { WordRotate } from '@/registry/default/word-rotate/word-rotate';

/* An example landing page for "Margin", a fictional writing app. Every
   animated piece of type on this page is a stock trickle component imported
   straight from the registry — nothing here is bespoke animation code. */

export const metadata: Metadata = {
  title: 'Example landing page',
  description:
    'A landing page for Margin, a fictional writing app, built with trickle text-animation components.'
};

const serif = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-margin-serif',
  display: 'swap'
});

/* Page-scoped palette: warm paper and ink, with a terracotta accent. Defined
   as custom properties so every section (and the trickle components that take
   CSS colors) can share them, and dark mode only has to swap the values. */
const THEME = [
  '[--paper:oklch(97.6%_0.012_85)] dark:[--paper:oklch(16.5%_0.008_60)]',
  '[--paper-2:oklch(95%_0.016_82)] dark:[--paper-2:oklch(20%_0.01_60)]',
  '[--ink:oklch(22%_0.02_55)] dark:[--ink:oklch(94%_0.012_85)]',
  '[--ink-soft:oklch(47%_0.02_60)] dark:[--ink-soft:oklch(70%_0.015_80)]',
  '[--rule:oklch(88%_0.018_80)] dark:[--rule:oklch(28%_0.01_60)]',
  '[--accent:oklch(57%_0.15_40)] dark:[--accent:oklch(73%_0.13_48)]',
  '[--mark:oklch(87%_0.12_85_/_0.7)] dark:[--mark:oklch(62%_0.12_70_/_0.4)]',
  '[--trickle-shimmer-base:var(--ink-soft)] [--trickle-shimmer-highlight:var(--ink)]'
].join(' ');

const SERIF = '[font-family:var(--font-margin-serif),Georgia,serif]';
const WIDTH = 'mx-auto w-full max-w-6xl px-6 sm:px-10';
const EYEBROW = 'font-mono text-[11px] uppercase tracking-[0.16em] text-(--ink-soft)';

export default function ExamplePage() {
  return (
    <div
      className={`${serif.variable} ${THEME} flex min-h-screen flex-col bg-(--paper) text-(--ink) selection:bg-(--mark)`}
    >
      <Nav />
      <main className='flex-1'>
        <Hero />
        <Ribbon />
        <Features />
        <Statement />
        <Numbers />
        <Pricing />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}

/* ── Chrome ─────────────────────────────────────────────────────────── */

function Wordmark() {
  return (
    <span className={`${SERIF} text-[1.375rem] italic leading-none tracking-[-0.01em]`}>
      margin<span className='text-(--accent)'>.</span>
    </span>
  );
}

function Nav() {
  return (
    <header className='sticky top-0 z-40 border-b border-(--rule) bg-(--paper)/85 backdrop-blur-md'>
      <div className={`${WIDTH} flex h-16 items-center justify-between`}>
        <Link href='/example' aria-label='Margin home'>
          <Wordmark />
        </Link>
        <nav className='flex items-center gap-7 text-sm text-(--ink-soft)'>
          <a href='#features' className='hidden transition-colors hover:text-(--ink) sm:inline'>
            Features
          </a>
          <a href='#pricing' className='hidden transition-colors hover:text-(--ink) sm:inline'>
            Pricing
          </a>
          <a
            href='#download'
            className='rounded-full bg-(--ink) px-4 py-1.5 text-[13px] font-medium text-(--paper) transition-opacity hover:opacity-85'
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className='border-t border-(--rule)'>
      <div
        className={`${WIDTH} flex flex-col gap-4 py-10 text-sm text-(--ink-soft) sm:flex-row sm:items-center sm:justify-between`}
      >
        <div className='flex items-center gap-4'>
          <Wordmark />
          <span className='text-[13px]'>A quieter place to write.</span>
        </div>
        <p className='text-[13px]'>
          Margin is a fictional product. This page is an example built with{' '}
          <Link href='/' className='text-(--ink) underline underline-offset-4 hover:text-(--accent)'>
            trickle
          </Link>{' '}
          components.
        </p>
      </div>
    </footer>
  );
}

/* ── Hero ───────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className={`${WIDTH} grid gap-14 pt-16 pb-20 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12`}>
      <div>
        <a
          href='#features'
          className='inline-flex items-center gap-2 rounded-full border border-(--rule) bg-(--paper-2) px-3.5 py-1.5 text-[13px] transition-colors hover:border-(--ink-soft)'
        >
          <span className='size-1.5 rounded-full bg-(--accent)' aria-hidden='true' />
          <ShinyShimmer duration={3200}>Margin 2.0 — focus sessions are here</ShinyShimmer>
          <ArrowRight className='size-3.5 text-(--ink-soft)' aria-hidden='true' />
        </a>

        <h1
          className={`${SERIF} mt-7 text-[2.75rem] leading-[1.02] tracking-[-0.025em] sm:text-[4rem] lg:text-[4.25rem]`}
        >
          {/* WordRotate reserves the width of its longest word, so short
              words keep the first line from re-wrapping on every swap. */}
          <span className='whitespace-nowrap'>
            Write the{' '}
            <WordRotate
              words={['essay', 'novel', 'thesis', 'memoir', 'zine']}
              duration={2600}
              wordClassName='italic text-(--accent)'
            />
          </span>
          <br />
          you keep <span className='whitespace-nowrap'>putting off.</span>
        </h1>

        <TextReveal
          as='p'
          mode='blur'
          split='word'
          delay={250}
          stagger={18}
          className='mt-6 max-w-[34rem] text-[1.0625rem] leading-[1.65] text-(--ink-soft)'
        >
          Margin is a calm, keyboard-first editor for long-form writing. No feeds, no formatting
          rabbit holes — just a blank page that keeps up with you.
        </TextReveal>

        <div
          className='animate-trickle-fade-up mt-9 flex flex-wrap items-center gap-3'
          style={{ animationDelay: '700ms' }}
        >
          <a
            href='#download'
            className='inline-flex items-center gap-2 rounded-full bg-(--ink) px-5 py-2.5 text-sm font-medium text-(--paper) transition-opacity hover:opacity-85'
          >
            <Download className='size-4' aria-hidden='true' />
            Download for free
          </a>
          <a
            href='#features'
            className='inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors hover:text-(--accent)'
          >
            See what&apos;s inside <ArrowRight className='size-4' aria-hidden='true' />
          </a>
        </div>
        <p
          className='animate-trickle-fade-up mt-4 text-[13px] text-(--ink-soft)'
          style={{ animationDelay: '850ms' }}
        >
          14-day trial · macOS, Windows &amp; Linux · No account needed
        </p>
      </div>

      <EditorMock />
    </section>
  );
}

/** A mock of the app: an open draft with a margin note beside it. */
function EditorMock() {
  return (
    <div
      className='animate-trickle-fade-up relative'
      style={{ animationDelay: '400ms' }}
      aria-label='Preview of the Margin editor'
      role='img'
    >
      <div className='overflow-hidden rounded-xl border border-(--rule) bg-(--paper-2) shadow-[0_30px_60px_-30px_oklch(30%_0.05_50_/_0.35)]'>
        <div className='flex items-center gap-3 border-b border-(--rule) px-4 py-3'>
          <div className='flex gap-1.5' aria-hidden='true'>
            <span className='size-2.5 rounded-full bg-(--rule)' />
            <span className='size-2.5 rounded-full bg-(--rule)' />
            <span className='size-2.5 rounded-full bg-(--rule)' />
          </div>
          <span className='font-mono text-[11px] text-(--ink-soft)'>on-beginnings.md</span>
          <span className='ml-auto font-mono text-[11px] text-(--ink-soft)'>Focus · 312 / 500</span>
        </div>

        <div className='grid grid-cols-[1fr_auto] gap-5 px-6 py-7 sm:px-8'>
          <div className={`${SERIF} text-[1.0625rem] leading-[1.7]`} aria-hidden='true'>
            <p className='text-[1.625rem] leading-tight tracking-[-0.01em]'>On beginnings</p>
            <HighlighterSweep
              as='p'
              color='var(--mark)'
              delay={1400}
              className='mt-4 text-(--ink)/80'
              segments={[
                { text: 'Every good piece of writing starts life as a bad ' },
                { text: 'first draft', highlight: true },
                { text: '. The trick is to let it be bad for a while.' }
              ]}
            />
            <p className='mt-4 text-(--ink)/80'>
              Nobody reads the{' '}
              <TypoCorrect word='scaffolding' misspelled='scfaoflding' delay={2000} /> — they only
              see the building.
            </p>
            <p className='mt-4 min-h-[3.4em]'>
              <Typewriter
                text='So close the tabs, mute the group chat, and write one honest sentence.'
                delay={4200}
                charDelay={38}
                cursorClassName='bg-(--accent)'
              />
            </p>
          </div>

          {/* The margin column: the product's namesake feature. */}
          <div className='hidden w-36 border-l border-dashed border-(--rule) pl-4 sm:block'>
            <div
              className='animate-trickle-fade-slide rounded-md bg-(--paper) p-2.5 text-[12px] leading-snug shadow-sm'
              style={{ animationDelay: '1900ms' }}
            >
              <p className='font-mono text-[10px] uppercase tracking-[0.12em] text-(--accent)'>Note</p>
              <p className='mt-1 text-(--ink-soft)'>Use this line as the opener?</p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between border-t border-(--rule) px-4 py-2.5 font-mono text-[11px] text-(--ink-soft)'>
          <span>2 min read</span>
          <span className='animate-trickle-fade-blur' style={{ animationDelay: '2600ms' }}>
            Saved to ~/Writing
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Social proof ───────────────────────────────────────────────────── */

const QUOTES = [
  { quote: 'The first editor that made me want to close every other app.', who: 'Essayist' },
  { quote: 'I finished a draft I had abandoned for two years.', who: 'Novelist' },
  { quote: 'Plain Markdown files. That alone sold me.', who: 'Technical writer' },
  { quote: 'Focus sessions are the kindest deadline I have ever had.', who: 'PhD candidate' },
  { quote: 'Margin notes that never leak into the export. Finally.', who: 'Newsletter author' }
];

function Ribbon() {
  return (
    <section className='border-y border-(--rule) bg-(--paper-2) py-6' aria-label='What writers say'>
      <MarqueeRibbon duration={45} fadeWidth='96px'>
        {QUOTES.map((q) => (
          <figure key={q.who} className='flex shrink-0 items-baseline gap-3 whitespace-nowrap'>
            <blockquote className={`${SERIF} text-lg italic`}>“{q.quote}”</blockquote>
            <figcaption className='font-mono text-[11px] uppercase tracking-[0.14em] text-(--ink-soft)'>
              — {q.who}
            </figcaption>
          </figure>
        ))}
      </MarqueeRibbon>
    </section>
  );
}

/* ── Features ───────────────────────────────────────────────────────── */

const FEATURES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Timer,
    title: 'Focus sessions',
    body: 'Set a word goal or a timer. Margin quietly dims everything except the paragraph you are on.'
  },
  {
    icon: MessageSquareText,
    title: 'Notes in the margin',
    body: 'Leave yourself comments beside the text, not inside it. They never end up in the export.'
  },
  {
    icon: FileText,
    title: 'Plain-text files',
    body: 'Every document is a Markdown file in a folder you choose. Open it in anything, forever.'
  },
  {
    icon: History,
    title: 'Version timeline',
    body: 'Scrub back through every save and restore one paragraph without losing the rest.'
  },
  {
    icon: AlignCenter,
    title: 'Typewriter scrolling',
    body: 'The line you are writing stays centred, so your eyes never chase the cursor.'
  },
  {
    icon: Share,
    title: 'Export anywhere',
    body: 'PDF, EPUB, DOCX or clean HTML for your newsletter, styled by a single theme file.'
  }
];

function Features() {
  return (
    <section id='features' className={`${WIDTH} scroll-mt-16 py-24 sm:py-32`}>
      <ReplayOnView className='max-w-2xl'>
        <p className={EYEBROW}>What&apos;s inside</p>
        <HighlighterSweep
          as='h2'
          color='var(--mark)'
          delay={500}
          className={`${SERIF} mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.02em] sm:text-[3rem]`}
          segments={[
            { text: 'Everything a long draft needs. ' },
            { text: 'Nothing it doesn’t.', highlight: true }
          ]}
        />
      </ReplayOnView>

      <ReplayOnView>
        <ul className='mt-14 grid gap-px overflow-hidden rounded-xl border border-(--rule) bg-(--rule) sm:grid-cols-2 lg:grid-cols-3'>
          {FEATURES.map((f, i) => (
            <li
              key={f.title}
              className='animate-trickle-fade-up bg-(--paper) p-7'
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className='flex items-center justify-between'>
                <f.icon className='size-5 text-(--accent)' aria-hidden='true' />
                <span className='font-mono text-[11px] tabular-nums text-(--ink-soft)/70'>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className='mt-6 text-[1.0625rem] font-medium tracking-[-0.01em]'>{f.title}</h3>
              <p className='mt-2 text-sm leading-[1.65] text-(--ink-soft)'>{f.body}</p>
            </li>
          ))}
        </ul>
      </ReplayOnView>
    </section>
  );
}

/* ── Statement ──────────────────────────────────────────────────────── */

function Statement() {
  return (
    <section className='border-y border-(--rule) bg-(--paper-2)'>
      <ReplayOnView className={`${WIDTH} py-24 sm:py-32`}>
        <TextReveal
          as='p'
          mode='fade-up'
          split='word'
          stagger={45}
          className={`${SERIF} max-w-4xl text-[2rem] leading-[1.15] tracking-[-0.02em] sm:text-[3.25rem]`}
        >
          Your words live in plain files on your own disk.
        </TextReveal>
        <p
          className={`${SERIF} animate-trickle-fade-up mt-4 max-w-4xl text-[2rem] leading-[1.15] tracking-[-0.02em] text-(--ink-soft) sm:text-[3.25rem]`}
          style={{ animationDelay: '600ms' }}
        >
          Not in our cloud. Not in a format we invented. Yours,{' '}
          <AuroraText
            className='italic'
            duration={7000}
            colors={[
              'oklch(70% 0.16 70)',
              'oklch(62% 0.17 35)',
              'oklch(60% 0.16 0)',
              'oklch(55% 0.14 320)'
            ]}
          >
            forever.
          </AuroraText>
        </p>
      </ReplayOnView>
    </section>
  );
}

/* ── Numbers ────────────────────────────────────────────────────────── */

const NUMBERS = [
  { value: '4.2 MB', label: 'Download size. It opens before you finish blinking.' },
  { value: '0', label: 'Accounts, trackers or ads. There is no server to send them to.' },
  { value: '100%', label: 'Works offline. On a plane, in a cabin, during an outage.' }
];

function Numbers() {
  return (
    <section className={`${WIDTH} py-24 sm:py-28`}>
      <dl className='grid gap-12 sm:grid-cols-3 sm:gap-10'>
        {NUMBERS.map((n, i) => (
          <div key={n.value} className='border-t border-(--ink) pt-5'>
            <dt className={`${SERIF} text-[3.5rem] leading-none tracking-[-0.03em]`}>
              <DecryptScramble
                text={n.value}
                trigger='view'
                charset='0123456789'
                duration={900}
                delay={i * 150}
              />
            </dt>
            <dd className='mt-4 max-w-[17rem] text-sm leading-[1.65] text-(--ink-soft)'>{n.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ── Pricing ────────────────────────────────────────────────────────── */

const PLANS = [
  {
    name: 'Draft',
    price: 'Free',
    note: 'for as long as you like',
    perks: ['Up to 3 projects', 'The full editor', 'Markdown export'],
    cta: 'Download',
    featured: false
  },
  {
    name: 'Margin',
    price: '$49',
    note: 'once — includes a year of updates',
    perks: [
      'Unlimited projects',
      'Focus sessions & margin notes',
      'Version timeline',
      'PDF, EPUB, DOCX & HTML export'
    ],
    cta: 'Buy a licence',
    featured: true
  }
];

function Pricing() {
  return (
    <section id='pricing' className='scroll-mt-16 border-t border-(--rule)'>
      <div className={`${WIDTH} py-24 sm:py-32`}>
        <ReplayOnView className='max-w-2xl'>
          <p className={EYEBROW}>Pricing</p>
          <h2 className={`${SERIF} mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.02em] sm:text-[3rem]`}>
            Pay once.{' '}
            <UnderlineDraw delay={400} thickness='3px' color='var(--accent)'>
              Keep it.
            </UnderlineDraw>
          </h2>
          <p className='mt-4 text-[1.0625rem] leading-[1.65] text-(--ink-soft)'>
            No subscription to forget about. If you stop updating, the version you have keeps
            working for good.
          </p>
        </ReplayOnView>

        <div className='mt-14 grid gap-5 md:grid-cols-2'>
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={
                p.featured
                  ? 'rounded-xl bg-(--ink) p-8 text-(--paper)'
                  : 'rounded-xl border border-(--rule) bg-(--paper-2) p-8'
              }
            >
              <p className='font-mono text-[11px] uppercase tracking-[0.16em] opacity-70'>{p.name}</p>
              <p className='mt-5 flex items-baseline gap-3'>
                <span className={`${SERIF} text-[3rem] leading-none tracking-[-0.03em]`}>{p.price}</span>
                <span className='text-sm opacity-70'>{p.note}</span>
              </p>
              <ul className='mt-7 space-y-2.5 text-sm'>
                {p.perks.map((perk) => (
                  <li key={perk} className='flex items-center gap-2.5'>
                    <Check
                      className={p.featured ? 'size-4 text-(--accent)' : 'size-4 text-(--ink-soft)'}
                      aria-hidden='true'
                    />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href='#download'
                className={
                  p.featured
                    ? 'mt-8 inline-flex w-full justify-center rounded-full bg-(--paper) px-5 py-2.5 text-sm font-medium text-(--ink) transition-opacity hover:opacity-90'
                    : 'mt-8 inline-flex w-full justify-center rounded-full border border-(--ink)/20 px-5 py-2.5 text-sm font-medium transition-colors hover:border-(--ink)'
                }
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Closing CTA ────────────────────────────────────────────────────── */

function Closing() {
  return (
    <section id='download' className='scroll-mt-16 border-t border-(--rule) bg-(--paper-2)'>
      <ReplayOnView className={`${WIDTH} flex flex-col items-center py-28 text-center sm:py-36`}>
        <h2 className={`${SERIF} text-[2.75rem] leading-[1.05] tracking-[-0.025em] sm:text-[4.5rem]`}>
          The page is blank.{' '}
          <GradientShift
            className='italic'
            duration={5000}
            colors={['oklch(62% 0.16 40)', 'oklch(68% 0.15 75)', 'oklch(58% 0.15 15)']}
          >
            Good.
          </GradientShift>
        </h2>
        <WordCascade
          as='p'
          text='Download Margin and write the first sentence tonight.'
          delay={300}
          stagger={60}
          className='mt-6 text-[1.0625rem] text-(--ink-soft)'
        />
        <div
          className='animate-trickle-fade-up mt-10 flex flex-wrap justify-center gap-3'
          style={{ animationDelay: '900ms' }}
        >
          {['macOS', 'Windows', 'Linux'].map((os, i) => (
            <a
              key={os}
              href='#download'
              className={
                i === 0
                  ? 'inline-flex items-center gap-2 rounded-full bg-(--ink) px-5 py-2.5 text-sm font-medium text-(--paper) transition-opacity hover:opacity-85'
                  : 'inline-flex items-center gap-2 rounded-full border border-(--ink)/20 px-5 py-2.5 text-sm font-medium transition-colors hover:border-(--ink)'
              }
            >
              <Download className='size-4' aria-hidden='true' />
              {os}
            </a>
          ))}
        </div>
      </ReplayOnView>
    </section>
  );
}
