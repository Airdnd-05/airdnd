const FooterInfoItem = ({ item, index }) => (
  <li className='cursor-pointer pr-2 hover:underline' key={index}>
    {index !== 0 && <span className='mr-2 sm:mr-0'></span>}
    {item.title}
  </li>
)

export default FooterInfoItem
