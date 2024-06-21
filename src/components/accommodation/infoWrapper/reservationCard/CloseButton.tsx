export default function CloseButton({ close, className }) {
  return (
    <button className={className} onClick={close}>
      닫기
    </button>
  )
}
