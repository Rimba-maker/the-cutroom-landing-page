import { Coffee, Flame, HandHeart, MusicNotes, Television, BeerBottle } from '@phosphor-icons/react';

const PERKS = [
  { icon: Coffee,      label: 'Welcome espresso atau teh' },
  { icon: Flame,       label: 'Hot towel sebelum cut' },
  { icon: HandHeart,   label: 'Free scalp massage' },
  { icon: MusicNotes,  label: 'Curated playlist' },
  { icon: Television,  label: 'Live sports streaming' },
  { icon: BeerBottle,  label: 'Cold beer (selected outlets)' },
];

export default function ExperiencePerks() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1px',
        backgroundColor: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {PERKS.map(({ icon: Icon, label }) => (
        <div
          key={label}
          style={{
            padding: '24px 20px',
            backgroundColor: 'rgba(13,13,13,0.6)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
          }}
        >
          <Icon
            size={22}
            weight="light"
            color="var(--color-stone)"
            style={{ flexShrink: 0, marginTop: '2px' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-canvas)',
              lineHeight: 1.4,
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
