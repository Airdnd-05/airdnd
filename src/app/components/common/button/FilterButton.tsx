'use client'

import Link from 'next/link'
import FilterIcon from '@icons/FilterIcon.svg'

function FilterButton() {
  return (
    <Link href={'rooms/0'} className="flex items-center justify-center">
      <button className="h-full flex flex-col justify-center items-center px-0 py-2 transition border-solid border-[1px] rounded-lg cursor-pointer border-neutral-300 hover:shadow-md">
        <span className="flex flex-row items-center justify-between pt-0.5 px-4 pb-0 gap-2">
          <FilterIcon
            href="/rooms"
            alt="Filter Icon"
            viewBox="-10 -10 50 50"
            className="block overflow-visible stroke-current fill-none"
            style={{ width: 'auto', height: 'auto' }}
          />
          <span className="text-xs font-semibold">필터</span>
        </span>
      </button>
    </Link>
  )
}

export default FilterButton
