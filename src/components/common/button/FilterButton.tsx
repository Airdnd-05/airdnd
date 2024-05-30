'use client'

import Link from 'next/link'
import Image from 'next/image'

function FilterButton() {
  return (
    <Link href={'rooms/0'} className="flex items-center justify-center">
      <button className="h-full flex flex-col justify-center items-center px-0 py-2 transition border-solid border-[1px] rounded-lg cursor-pointer border-neutral-300 hover:shadow-md">
        <span className="flex flex-row items-center justify-between pt-0.5 px-4 pb-0 gap-2">
          <Image alt={'FilterIcon'} src={`/images/FilterIcon.svg`} width={16} height={16} />
          <span className="text-xs font-semibold">필터</span>
        </span>
      </button>
    </Link>
  )
}

export default FilterButton
