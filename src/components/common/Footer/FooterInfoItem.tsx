const FooterInfoItem = ({ item, index }) => (
  <li className="hover:underline cursor-pointer pr-2" key={index}>
    {index !== 0 && <span className="mr-2"></span>}
    {item.title}
  </li>
)

export default FooterInfoItem
