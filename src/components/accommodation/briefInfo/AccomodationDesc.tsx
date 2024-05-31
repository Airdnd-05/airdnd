export default function AccomodationDesc({ desc }) {
  return (
    <div className="pt-8 pb-12 border-b border-neutral-300 border-solid whitespace-pre">
      <div className="line-clamp-6 text-wrap">{desc}</div>
      <div className="mt-4">
        <span className="cursor-pointer font-semibold underline">더 보기</span>
        <span className="ml-1">{`>`}</span> {/*svg로 변경 필요*/}
      </div>
    </div>
  )
}
