import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from '@phosphor-icons/react';

const PLANS = [
  {
    tier: 'Bronze',
    price: 'Rp 350k',
    period: '/ bulan',
    perks: ['2x classic cut / bulan', '10% off services lain', 'Free hair wash'],
    popular: false,
    cta: 'Mulai Bronze',
  },
  {
    tier: 'Silver',
    price: 'Rp 650k',
    period: '/ bulan',
    perks: ['Unlimited classic cut', '1x beard trim / bulan', '15% off product', 'Priority booking'],
    popular: true,
    cta: 'Mulai Silver',
  },
  {
    tier: 'Gold',
    price: 'Rp 1.2jt',
    period: '/ bulan',
    perks: ['Unlimited premium cut', 'Unlimited beard trim', 'Free monthly treatment', '20% off color/treatment', 'Exclusive event invite'],
    popular: false,
    cta: 'Mulai Gold',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Membership() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="membership"
      ref={ref}
      style={{
        backgroundColor: 'var(--color-surface)',
        padding: 'clamp(64px, 8vw, 96px) 40px',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '48px' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 7vw, 80px)',
              fontWeight: 400,
              color: 'var(--color-canvas)',
              lineHeight: 0.92,
              marginBottom: '16px',
            }}
          >
            Member Plans
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-stone)',
              lineHeight: 1.6,
            }}
          >
            Untuk yang grooming-nya rutin.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            backgroundColor: '#2a2a2a',
            border: '1px solid #2a2a2a',
            maxWidth: '960px',
          }}
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.tier}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              style={{
                backgroundColor: plan.popular ? 'var(--color-canvas)' : 'var(--color-surface)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                position: 'relative',
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: 'var(--color-ink)',
                    color: 'var(--color-canvas)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '4px 12px',
                    borderRadius: '30px',
                  }}
                >
                  Most Popular
                </motion.div>
              )}

              {/* Tier */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: plan.popular ? 'var(--color-ash)' : 'var(--color-stone)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  {plan.tier}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '44px',
                      color: plan.popular ? 'var(--color-ink)' : 'var(--color-canvas)',
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: plan.popular ? 'var(--color-ash)' : 'var(--color-stone)',
                    }}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  backgroundColor: plan.popular ? 'rgba(0,0,0,0.1)' : '#2a2a2a',
                }}
              />

              {/* Perks */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {plan.perks.map((perk) => (
                  <li
                    key={perk}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: plan.popular ? 'var(--color-charcoal)' : 'var(--color-stone)',
                      lineHeight: 1.4,
                    }}
                  >
                    <span
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        backgroundColor: plan.popular ? 'var(--color-ink)' : 'rgba(255,255,255,0.15)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: 'var(--color-canvas)',
                      }}
                    >
                      <Check size={10} weight="bold" />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#book"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '44px',
                  padding: '0 24px',
                  borderRadius: '30px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  backgroundColor: plan.popular ? 'var(--color-ink)' : 'transparent',
                  color: plan.popular ? 'var(--color-canvas)' : 'var(--color-stone)',
                  border: plan.popular ? 'none' : '1px solid #2a2a2a',
                  transition: 'opacity 0.2s',
                }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
