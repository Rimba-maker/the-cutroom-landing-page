import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsappLogo } from '@phosphor-icons/react';

const BRANCHES = ['SCBD – Jakarta Selatan', 'Kemang – Jakarta Selatan', 'PIK Avenue – Jakarta Utara', 'Bintaro – Tangerang Selatan', 'Surabaya West – Surabaya'];
const SERVICES_LIST = ['Classic Haircut', 'Premium Cut + Wash', 'Beard Trim & Shaping', 'Hot Towel Shave', 'Hair + Beard Combo', 'Hair Coloring', 'Haircut & Style', 'Cut + Wash + Blow Dry', 'Hair Treatment', 'Perm / Straightening'];
const BARBERS_LIST = ['Reza Pratama', 'Yusuf Maulana', 'Sari Indrawati', 'Bram Susanto', 'Linda Tjia', 'No Preference'];

const STEPS = ['Cabang', 'Service', 'Barber', 'Jadwal'];

const stepVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir: number) => ({ opacity: 0, x: dir * -40, transition: { duration: 0.25 } }),
};

function SelectGrid({ items, value, onChange }: { items: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {items.map((item) => {
        const isSelected = value === item;
        return (
          <button
            key={item}
            onClick={() => onChange(item)}
            style={{
              padding: '10px 18px',
              borderRadius: '30px',
              border: '1px solid',
              borderColor: isSelected ? 'var(--color-canvas)' : '#2a2a2a',
              backgroundColor: isSelected ? 'var(--color-canvas)' : 'transparent',
              color: isSelected ? 'var(--color-ink)' : 'var(--color-stone)',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
              textAlign: 'left',
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default function BookOnline() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [branch, setBranch] = useState('');
  const [service, setService] = useState('');
  const [barber, setBarber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  function next() {
    setDir(1);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }
  function back() {
    setDir(-1);
    setStep((s) => Math.max(s - 1, 0));
  }

  const canNext = [!!branch, !!service, !!barber, !!(date && time && name && phone)][step];

  function handleSubmit() {
    setSubmitted(true);
  }

  const waMessage = encodeURIComponent(
    `Halo The Cutroom! Saya mau booking:\n- Cabang: ${branch}\n- Service: ${service}\n- Barber: ${barber}\n- Tanggal: ${date} ${time}\n- Nama: ${name}\n- No. HP: ${phone}`
  );

  return (
    <section
      id="book"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid #2a2a2a',
        paddingTop: 'var(--section-y)',
        paddingBottom: 'var(--section-y)',
        paddingLeft: 'var(--pad-x)',
        paddingRight: 'var(--pad-x)',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="book-grid"
        >
          {/* Left: Heading */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 6vw, 76px)',
                fontWeight: 400,
                color: 'var(--color-canvas)',
                lineHeight: 0.92,
                marginBottom: '24px',
              }}
            >
              Book Slot Kamu
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'var(--color-stone)',
                lineHeight: 1.6,
                marginBottom: '40px',
                maxWidth: '380px',
              }}
            >
              Pilih cabang, service, barber, dan jadwalmu. Atau langsung chat via WhatsApp.
            </p>

            <a
              href={`https://wa.me/6281234567890?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                height: '48px',
                padding: '0 28px',
                borderRadius: '30px',
                border: '1px solid #2a2a2a',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-stone)',
                textDecoration: 'none',
                letterSpacing: '0.03em',
              }}
            >
              <WhatsappLogo size={18} weight="regular" /> Book via WhatsApp
            </a>
          </div>

          {/* Right: Form */}
          <div
            style={{
              backgroundColor: 'var(--color-bg)',
              border: '1px solid #2a2a2a',
              padding: 'clamp(24px, 4vw, 40px)',
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px 0' }}
              >
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    color: 'var(--color-canvas)',
                    marginBottom: '12px',
                  }}
                >
                  Booking Diterima!
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-stone)', lineHeight: 1.6 }}>
                  Tim kami akan konfirmasi via WhatsApp dalam 30 menit.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Step indicator */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
                  {STEPS.map((s, i) => (
                    <div key={s} style={{ flex: 1 }}>
                      <div
                        style={{
                          height: '3px',
                          borderRadius: '2px',
                          backgroundColor: i <= step ? 'var(--color-canvas)' : '#2a2a2a',
                          transition: 'background-color 0.3s',
                          marginBottom: '6px',
                        }}
                      />
                      <div
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '11px',
                          fontWeight: 500,
                          color: i === step ? 'var(--color-canvas)' : 'var(--color-stone)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {s}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Step content */}
                <div style={{ minHeight: '240px', overflow: 'hidden' }}>
                  <AnimatePresence mode="wait" custom={dir}>
                    {step === 0 && (
                      <motion.div key="step0" variants={stepVariants} initial="enter" animate="center" exit="exit" custom={dir}>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, color: 'var(--color-canvas)', marginBottom: '20px' }}>
                          Pilih cabang
                        </div>
                        <SelectGrid items={BRANCHES} value={branch} onChange={setBranch} />
                      </motion.div>
                    )}
                    {step === 1 && (
                      <motion.div key="step1" variants={stepVariants} initial="enter" animate="center" exit="exit" custom={dir}>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, color: 'var(--color-canvas)', marginBottom: '20px' }}>
                          Pilih service
                        </div>
                        <SelectGrid items={SERVICES_LIST} value={service} onChange={setService} />
                      </motion.div>
                    )}
                    {step === 2 && (
                      <motion.div key="step2" variants={stepVariants} initial="enter" animate="center" exit="exit" custom={dir}>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, color: 'var(--color-canvas)', marginBottom: '20px' }}>
                          Pilih barber
                        </div>
                        <SelectGrid items={BARBERS_LIST} value={barber} onChange={setBarber} />
                      </motion.div>
                    )}
                    {step === 3 && (
                      <motion.div key="step3" variants={stepVariants} initial="enter" animate="center" exit="exit" custom={dir}>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, color: 'var(--color-canvas)', marginBottom: '20px' }}>
                          Jadwal & data diri
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          {[
                            { label: 'Nama lengkap', value: name, onChange: setName, type: 'text', placeholder: 'John Doe', inputMode: 'text' },
                            { label: 'No. WhatsApp', value: phone, onChange: setPhone, type: 'tel', placeholder: '+62 812 3456 7890', inputMode: 'tel' },
                            { label: 'Tanggal', value: date, onChange: setDate, type: 'date', placeholder: '' },
                            { label: 'Jam', value: time, onChange: setTime, type: 'time', placeholder: '' },
                          ].map((field) => (
                            <div key={field.label}>
                              <label
                                style={{
                                  display: 'block',
                                  fontFamily: 'var(--font-body)',
                                  fontSize: '12px',
                                  fontWeight: 500,
                                  color: 'var(--color-stone)',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                  marginBottom: '6px',
                                }}
                              >
                                {field.label}
                              </label>
                              <input
                                type={field.type}
                                inputMode={(field as any).inputMode}
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                placeholder={field.placeholder}
                                style={{
                                  width: '100%',
                                  height: '44px',
                                  padding: '0 16px',
                                  backgroundColor: 'var(--color-surface)',
                                  border: '1px solid #2a2a2a',
                                  borderRadius: '0',
                                  fontFamily: 'var(--font-body)',
                                  fontSize: '15px',
                                  color: 'var(--color-canvas)',
                                  outline: 'none',
                                  colorScheme: 'dark',
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Nav buttons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', gap: '12px' }}>
                  {step > 0 ? (
                    <button
                      onClick={back}
                      style={{
                        height: '44px',
                        padding: '0 24px',
                        borderRadius: '30px',
                        border: '1px solid #2a2a2a',
                        backgroundColor: 'transparent',
                        color: 'var(--color-stone)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        letterSpacing: '0.03em',
                      }}
                    >
                      ← Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < STEPS.length - 1 ? (
                    <button
                      onClick={next}
                      disabled={!canNext}
                      style={{
                        height: '44px',
                        padding: '0 28px',
                        borderRadius: '30px',
                        border: 'none',
                        backgroundColor: canNext ? 'var(--color-canvas)' : '#2a2a2a',
                        color: canNext ? 'var(--color-ink)' : 'var(--color-stone)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        fontWeight: 500,
                        cursor: canNext ? 'pointer' : 'not-allowed',
                        letterSpacing: '0.03em',
                        transition: 'background-color 0.2s',
                      }}
                    >
                      Lanjut →
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!canNext}
                      style={{
                        height: '44px',
                        padding: '0 28px',
                        borderRadius: '30px',
                        border: 'none',
                        backgroundColor: canNext ? 'var(--color-canvas)' : '#2a2a2a',
                        color: canNext ? 'var(--color-ink)' : 'var(--color-stone)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        fontWeight: 500,
                        cursor: canNext ? 'pointer' : 'not-allowed',
                        letterSpacing: '0.03em',
                      }}
                    >
                      Konfirmasi Booking
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .book-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
