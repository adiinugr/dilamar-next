import Link from "next/link"

const ClientHeader = ({ headerTitle = "RSVP", namaClient }) => {
  const nama = namaClient || "Nama Client"

  const formatedNama = nama.replace("-", " & ").toUpperCase()

  return (
    <header className="bg-brand-dark text-gray-50 px-4 md:px-36 fixed z-20 w-screen">
      <div className="flex justify-between items-center py-4">
        <div className="font-yellowtail text-3xl">KataNikah</div>
        <div className="flex items-center">
          <div className="mr-4 font-poppins">{formatedNama}</div>
        </div>
      </div>
      <h1 className="text-white text-center py-4 text-2xl">{headerTitle}</h1>
    </header>
  )
}

export default ClientHeader
