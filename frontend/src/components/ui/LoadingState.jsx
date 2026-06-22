export default function LoadingState({ message = 'Loading...', className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 ${className}`}>
      <div className="h-8 w-8 border-2 border-[#D4A017] border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-sm text-slate-500">{message}</p>
    </div>
  )
}
