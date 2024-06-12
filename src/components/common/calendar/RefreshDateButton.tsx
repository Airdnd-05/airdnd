export default function RefreshDateButton({ className, refreshDates, children }) {
  return (
    <button className={className} onClick={refreshDates}>
      {children}
    </button>
  )
}
