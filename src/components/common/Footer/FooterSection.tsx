const FooterSection = ({ section }) => (
  <ul className="flex flex-col items-start space-y-2 text-sm">
    <li className="first:font-bold">{section.title}</li>
    {section.items.map((item, idx) => (
      <li className="hover:underline cursor-pointer" key={idx}>
        {item}
      </li>
    ))}
  </ul>
)

export default FooterSection
