import clsx from 'clsx'

function HeaderNavItem({ nav, selected, onSelected }) {
  return (
    <li
      className={clsx('p-4 cursor-pointer hover:bg-gray-100 hover:rounded-3xl transition-transform', {
        'font-bold': selected === nav.key,
      })}
      onClick={() => onSelected(nav.key)}>
      {nav.title}
    </li>
  )
}

export default HeaderNavItem
