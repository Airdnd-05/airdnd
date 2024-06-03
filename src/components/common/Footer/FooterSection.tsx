const FooterSection = ({ section }) => (
  <ul className='flex flex-col items-start space-y-2 text-sm'>
    <li className='first:font-bold'>{section.title}</li>
    {section.items.map((item, idx) => (
      <li key={`FooterSection-${idx}`} className='cursor-pointer hover:underline'>
        {item}
      </li>
    ))}
  </ul>
)

export default FooterSection
