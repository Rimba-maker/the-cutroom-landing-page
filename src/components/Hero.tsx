import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const HEADLINE = ['Sharp Cut.', 'Clean Fade.', 'No Compromise.'];

const STATS = [
  { value: 20000, suffix: '+', label: 'Cuts' },
  { value: 8, suffix: ' Tahun', label: 'Pengalaman' },
  { value: 5, suffix: '', label: 'Cabang' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count >= 1000
        ? (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + 'k'
        : count}
      {suffix}
    </span>
  );
}

const wordVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.015 } },
};

const charVariants = {
  hidden: { opacity: 0, y: 48, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        backgroundColor: '#0d0d0d',
      }}
    >
      {/* Background Image with parallax */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10%',
          y: parallaxY,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
        aria-hidden
      />

      {/* Dark overlay gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.7) 40%, rgba(13,13,13,0.3) 100%)',
        }}
        aria-hidden
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 var(--pad-x) 80px',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            color: 'var(--color-stone)',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          Barbershop & Salon — Jakarta
        </motion.p>

        {/* Headline — split text per character */}
        <h1 style={{ perspective: '600px', marginBottom: '28px', fontWeight: 'inherit', fontSize: 'inherit' }}>
          {HEADLINE.map((line, lineIdx) => (
            <motion.div
              key={lineIdx}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              style={{ overflow: 'hidden', lineHeight: 0.92 }}
              custom={lineIdx}
            >
              {line.split('').map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  variants={charVariants}
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(56px, 8.5vw, 104px)',
                    fontWeight: 400,
                    color: 'var(--color-canvas)',
                    letterSpacing: char === ' ' ? '0.3em' : '-0.01em',
                  }}
                >
                  {char === ' ' ? ' ' : char}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            fontWeight: 400,
            color: 'var(--color-stone)',
            lineHeight: 1.6,
            maxWidth: '500px',
            marginBottom: '36px',
          }}
        >
          Barbershop & salon modern untuk pria dan wanita yang serius tentang
          grooming. Booking online, walk-in welcome.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.85}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}
        >
          <a
            href="#book"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '48px',
              padding: '0 32px',
              backgroundColor: 'var(--color-canvas)',
              color: 'var(--color-ink)',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textDecoration: 'none',
              borderRadius: '30px',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-soft-cloud)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-canvas)';
            }}
          >
            Book Sekarang
          </a>
          <a
            href="#services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '48px',
              padding: '0 32px',
              backgroundColor: 'transparent',
              color: 'var(--color-canvas)',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textDecoration: 'none',
              borderRadius: '30px',
              border: '1px solid rgba(255,255,255,0.3)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.7)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.3)';
            }}
          >
            Lihat Services
          </a>
        </motion.div>

        {/* Stat Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.0}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: '28px',
          }}
        >
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              style={{
                paddingRight: '16px',
                borderRight: idx < STATS.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                paddingLeft: idx > 0 ? '16px' : 0,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  color: 'var(--color-canvas)',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--color-stone)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
