import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

type Category = 'all' | 'classic' | 'fade' | 'longhair' | 'beard' | 'womens' | 'color';

const FILTERS: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'classic', label: "Men's Classic" },
  { key: 'fade', label: 'Fade' },
  { key: 'longhair', label: 'Long Hair' },
  { key: 'beard', label: 'Beard' },
  { key: 'womens', label: "Women's Cut" },
  { key: 'color', label: 'Color' },
];

interface Photo {
  id: string;
  src: string;
  style: string;
  category: Category;
  tall?: boolean;
}

const PHOTOS: Photo[] = [
  { id: 'p1', src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80', style: 'Classic Cut', category: 'classic', tall: true },
  { id: 'p2', src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80', style: 'Low Fade', category: 'fade' },
  { id: 'p3', src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80', style: 'Hair Coloring', category: 'color', tall: true },
  { id: 'p4', src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80', style: 'High Fade', category: 'fade' },
  { id: 'p5', src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&q=80', style: 'Full Beard', category: 'beard' },
  { id: 'p6', src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', style: "Women's Cut", category: 'womens', tall: true },
  { id: 'p7', src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80', style: 'Textured Crop', category: 'classic' },
  { id: 'p8', src: 'https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=600&q=80', style: 'Beard Shaping', category: 'beard' },
  { id: 'p9', src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', style: 'Blowout Style', category: 'womens' },
  { id: 'p10', src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80', style: 'Color Treatment', category: 'color' },
  { id: 'p11', src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80', style: 'Slick Back', category: 'classic', tall: true },
  { id: 'p12', src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80', style: 'Long Layers', category: 'longhair' },
];

export default function Lookbook() {
  const [active, setActive] = useState<Category>('all');
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const filtered = active === 'all' ? PHOTOS : PHOTOS.filter((p) => p.category === active);

  return (
    <section
      id="lookbook"
      style={{
        backgroundColor: 'var(--color-surface)',
        padding: 'clamp(64px, 8vw, 96px) 40px',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
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
            The Lookbook
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-stone)',
              maxWidth: '460px',
              lineHeight: 1.6,
            }}
          >
            Hasil kerja kami. Ambil inspirasi, atau show ke barber kami untuk request.
          </p>
        </div>

        {/* Filter chips with layoutId pill */}
        <LayoutGroup id="lookbook-filters">
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginBottom: '36px',
            }}
          >
            {FILTERS.map((f) => {
              const isActive = active === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  style={{
                    position: 'relative',
                    height: '36px',
                    padding: '0 18px',
                    borderRadius: '30px',
                    border: '1px solid',
                    borderColor: isActive ? 'transparent' : '#2a2a2a',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: isActive ? 'var(--color-ink)' : 'var(--color-stone)',
                    letterSpacing: '0.03em',
                    zIndex: 0,
                    transition: 'color 0.2s',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '30px',
                        backgroundColor: 'var(--color-canvas)',
                        zIndex: -1,
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {f.label}
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        {/* Masonry grid */}
        <motion.div
          layout
          style={{
            columns: 'auto 280px',
            columnGap: '1px',
            gap: '1px',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '100%',
                  marginBottom: '1px',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  aspectRatio: photo.tall ? '3/4' : '4/5',
                  backgroundColor: 'var(--color-surface-2)',
                }}
                onClick={() => setLightbox(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.style}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                  }}
                />
                {/* Hover overlay */}
                <motion.div
                  initial={{ y: '100%' }}
                  whileHover={{ y: '0%' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '20px 16px 14px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--color-canvas)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {photo.style}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: 'rgba(0,0,0,0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '680px',
                width: '100%',
              }}
            >
              <img
                src={lightbox.src.replace('w=600', 'w=1200')}
                alt={lightbox.style}
                style={{
                  width: '100%',
                  display: 'block',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-40px',
                  left: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    color: 'var(--color-canvas)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {lightbox.style}
                </span>
                <button
                  onClick={() => setLightbox(null)}
                  style={{
                    background: 'none',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '30px',
                    color: 'var(--color-stone)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 500,
                    padding: '6px 16px',
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
