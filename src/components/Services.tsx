import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Scissors,
  Knife,
  Flame,
  PaintBrush,
  Wind,
  Drop,
  ArrowsCounterClockwise,
  HandHeart,
  Sparkle,
} from '@phosphor-icons/react';

type Tab = 'him' | 'her' | 'addons';

const TABS: { key: Tab; label: string }[] = [
  { key: 'him', label: 'For Him' },
  { key: 'her', label: 'For Her' },
  { key: 'addons', label: 'Add-Ons' },
];

const IC = { size: 28, weight: 'light' as const, color: 'currentColor' };
const IC_SM = { size: 22, weight: 'light' as const, color: 'currentColor' };

const SERVICES = {
  him: [
    { icon: <Scissors {...IC} />, name: 'Classic Haircut', price: 'Rp 85k', duration: '45 min' },
    { icon: <Scissors {...IC} />, name: 'Premium Cut + Wash', price: 'Rp 125k', duration: '60 min' },
    { icon: <Knife {...IC} />, name: 'Beard Trim & Shaping', price: 'Rp 65k', duration: '30 min' },
    { icon: <Flame {...IC} />, name: 'Hot Towel Shave', price: 'Rp 95k', duration: '45 min' },
    { icon: <Scissors {...IC} />, name: 'Hair + Beard Combo', price: 'Rp 140k', duration: '75 min' },
    { icon: <PaintBrush {...IC} />, name: 'Hair Coloring', price: 'Rp 250k+', duration: '90 min' },
  ],
  her: [
    { icon: <Scissors {...IC} />, name: 'Haircut & Style', price: 'Rp 150k', duration: '60 min' },
    { icon: <Wind {...IC} />, name: 'Cut + Wash + Blow Dry', price: 'Rp 200k', duration: '75 min' },
    { icon: <PaintBrush {...IC} />, name: 'Hair Coloring', price: 'Rp 450k+', duration: '120 min' },
    { icon: <Drop {...IC} />, name: 'Hair Treatment', price: 'Rp 250k+', duration: '90 min' },
    { icon: <ArrowsCounterClockwise {...IC} />, name: 'Perm / Straightening', price: 'Rp 600k+', duration: '180 min' },
  ],
  addons: [
    { icon: <Drop {...IC_SM} />, name: 'Hair Wash', price: 'Rp 35k', duration: '' },
    { icon: <HandHeart {...IC_SM} />, name: 'Scalp Massage', price: 'Rp 50k', duration: '' },
    { icon: <Sparkle {...IC_SM} />, name: 'Pomade Styling', price: 'Rp 25k', duration: '' },
  ],
};

type ServiceItem = { icon: React.ReactElement; name: string; price: string; duration: string };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

function ServiceCard({ icon, name, price, duration }: ServiceItem) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ y: hovered ? -6 : 0, borderColor: hovered ? 'rgba(255,255,255,0.25)' : '#2a2a2a' }}
      transition={{ duration: 0.25 }}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid #2a2a2a',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        cursor: 'default',
      }}
    >
      <motion.div
        animate={{ scale: hovered ? 1.15 : 1 }}
        transition={{ duration: 0.2 }}
        style={{ color: hovered ? 'var(--color-canvas)' : 'var(--color-stone)', display: 'flex' }}
      >
        {icon}
      </motion.div>

      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          fontWeight: 500,
          color: 'var(--color-canvas)',
          lineHeight: 1.3,
          flex: 1,
        }}
      >
        {name}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px' }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '24px',
            color: 'var(--color-canvas)',
            letterSpacing: '0.02em',
          }}
        >
          {price}
        </span>
        {duration && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 500,
              color: 'var(--color-stone)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {duration}
          </span>
        )}
      </div>
    </motion.div>
  );
}

function AddOnCard({ icon, name, price }: ServiceItem) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ borderColor: hovered ? 'rgba(255,255,255,0.25)' : '#2a2a2a' }}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid #2a2a2a',
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <div style={{ color: 'var(--color-stone)', display: 'flex', flexShrink: 0 }}>{icon}</div>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 500, color: 'var(--color-canvas)', flex: 1 }}>
        {name}
      </span>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--color-canvas)' }}>
        {price}
      </span>
    </motion.div>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<Tab>('him');
  const [prevTab, setPrevTab] = useState<Tab>('him');
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const tabOrder: Tab[] = ['him', 'her', 'addons'];
  const direction = tabOrder.indexOf(activeTab) > tabOrder.indexOf(prevTab) ? 1 : -1;

  function handleTab(tab: Tab) {
    if (tab === activeTab) return;
    setPrevTab(activeTab);
    setActiveTab(tab);
  }

  const currentServices = SERVICES[activeTab];
  const isAddons = activeTab === 'addons';

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid #2a2a2a',
        paddingTop: 'var(--section-y)',
        paddingBottom: 'var(--section-y)',
        paddingLeft: 'var(--pad-x)',
        paddingRight: 'var(--pad-x)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{ marginBottom: '56px' }}
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
            Services
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-stone)', maxWidth: '440px', lineHeight: 1.6 }}>
            Semua dengan konsultasi dulu — kami pastikan hasilnya pas untukmu.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.15 }}
          style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTab(tab.key)}
                style={{
                  position: 'relative',
                  height: '44px',
                  padding: '0 20px',
                  borderRadius: '30px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.03em',
                  backgroundColor: isActive ? 'var(--color-canvas)' : 'var(--color-surface)',
                  color: isActive ? 'var(--color-ink)' : 'var(--color-stone)',
                  transition: 'color 0.2s',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {isAddons ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1px',
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #2a2a2a',
                  maxWidth: '860px',
                }}
              >
                {(currentServices as ServiceItem[]).map((s) => (
                  <AddOnCard key={s.name} {...s} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: '1px',
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #2a2a2a',
                }}
              >
                {(currentServices as ServiceItem[]).map((s) => (
                  <ServiceCard key={s.name} {...s} />
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ marginTop: '40px' }}
        >
          <a
            href="#book"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
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
            }}
          >
            Book Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
}
