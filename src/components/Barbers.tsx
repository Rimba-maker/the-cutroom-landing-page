import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BARBERS = [
  {
    name: 'Reza Pratama',
    role: 'Lead Barber',
    specialty: 'Fade & Classic Cut',
    years: '10+ tahun',
    tags: ['Classic Cut', 'Low Fade', 'High Fade', 'Taper'],
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    initial: 'RP',
  },
  {
    name: 'Yusuf Maulana',
    role: 'Beard Specialist',
    specialty: 'Beard & Traditional Shave',
    years: '7 tahun',
    tags: ['Beard Trim', 'Hot Towel Shave', 'Beard Shaping', 'Line Up'],
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
    initial: 'YM',
  },
  {
    name: 'Sari Indrawati',
    role: 'Senior Stylist',
    specialty: "Women's Cut & Color",
    years: '9 tahun',
    tags: ['Women Cut', 'Blowout', 'Hair Coloring', 'Treatment'],
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
    initial: 'SI',
  },
  {
    name: 'Bram Susanto',
    role: 'Style Expert',
    specialty: 'Pomade & Vintage Style',
    years: '6 tahun',
    tags: ['Pompadour', 'Slick Back', 'Vintage Style', 'Textured Crop'],
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
    initial: 'BS',
  },
  {
    name: 'Linda Tjia',
    role: 'Coloring Specialist',
    specialty: "L'Oréal Professional",
    years: '8 tahun',
    tags: ['Balayage', 'Highlight', 'Color Correction', 'Ombre'],
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
    initial: 'LT',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function BarberCard({ barber }: { barber: (typeof BARBERS)[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      style={{
        perspective: '1000px',
        cursor: 'pointer',
        height: '360px',
      }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 20 }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            overflow: 'hidden',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid #2a2a2a',
          }}
        >
          <img
            src={barber.img}
            alt={barber.name}
            style={{
              width: '100%',
              height: '75%',
              objectFit: 'cover',
              objectPosition: 'top',
              display: 'block',
            }}
          />
          <div style={{ padding: '16px 18px' }}>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                fontWeight: 500,
                color: 'var(--color-canvas)',
                marginBottom: '4px',
              }}
            >
              {barber.name}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: 500,
                color: 'var(--color-stone)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {barber.role}
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: 'var(--color-ink)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Initial badge */}
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: '18px',
              color: 'var(--color-canvas)',
              letterSpacing: '0.05em',
              marginBottom: '16px',
            }}
          >
            {barber.initial}
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                color: 'var(--color-canvas)',
                letterSpacing: '0.02em',
                marginBottom: '4px',
              }}
            >
              {barber.name}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--color-stone)',
                marginBottom: '20px',
              }}
            >
              {barber.specialty} · {barber.years}
            </div>

            {/* Specialty tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {barber.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '4px 12px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '30px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'var(--color-stone)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#book"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '44px',
              padding: '0 22px',
              backgroundColor: 'var(--color-canvas)',
              color: 'var(--color-ink)',
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textDecoration: 'none',
              borderRadius: '30px',
              width: 'fit-content',
            }}
          >
            Book {barber.name.split(' ')[0]}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Barbers() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="barbers"
      ref={ref}
      style={{
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid #2a2a2a',
        paddingTop: 'var(--section-y)',
        paddingBottom: 'var(--section-y)',
        paddingLeft: 'var(--pad-x)',
        paddingRight: 'var(--pad-x)',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
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
            Tangan Yang Mengerti Detail
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-stone)',
              maxWidth: '440px',
              lineHeight: 1.6,
            }}
          >
            Hover card untuk lihat spesialisasi, atau swipe untuk jelajahi tim kami.
          </p>
        </motion.div>

        {/* Desktop: flip cards grid */}
        <motion.div
          className="barbers-desktop"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1px',
            backgroundColor: '#2a2a2a',
            border: '1px solid #2a2a2a',
          }}
        >
          {BARBERS.map((barber) => (
            <BarberCard key={barber.name} barber={barber} />
          ))}
        </motion.div>

        {/* Mobile: horizontal swipe */}
        <div className="barbers-mobile">
          {BARBERS.map((barber) => (
            <div
              key={barber.name}
              className="barbers-swipe-card"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid #2a2a2a',
                overflow: 'hidden',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Photo */}
              <div style={{ position: 'relative', aspectRatio: '3/4', flexShrink: 0 }}>
                <img
                  src={barber.img}
                  alt={barber.name}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    color: 'var(--color-canvas)',
                    letterSpacing: '0.02em',
                    marginBottom: '4px',
                  }}>
                    {barber.name}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'var(--color-stone)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>
                    {barber.role} · {barber.years}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {barber.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '4px 10px',
                        border: '1px solid #2a2a2a',
                        borderRadius: '30px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        fontWeight: 500,
                        color: 'var(--color-stone)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#book"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '44px',
                    padding: '0 20px',
                    backgroundColor: 'var(--color-canvas)',
                    color: 'var(--color-ink)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    borderRadius: '30px',
                    marginTop: 'auto',
                  }}
                >
                  Book {barber.name.split(' ')[0]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
