import './DetailApp.css'

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div id="detailRoot">{children}</div>
}
