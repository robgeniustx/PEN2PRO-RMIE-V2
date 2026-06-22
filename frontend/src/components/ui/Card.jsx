export default function Card({ children, className = '', noPad = false }) {
  return (
    <div
      className={`rounded-2xl border border-[#1A2235] ${noPad ? '' : 'p-6'} ${className}`}
      style={{ background: '#0F1520' }}
    >
      {children}
    </div>
  )
}
