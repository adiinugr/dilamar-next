import Link from "next/link";

const ClientHeader = ({ namaClient }) => {
  const nama = namaClient || "Nama Client";

  const formatedNama = nama.replace("-", " & ").toUpperCase();

  return (
    <section className="bg-green-600 text-gray-50 px-4 md:px-36 fixed z-20 w-screen">
      <div className="flex justify-between items-center py-4">
        <div className="font-display text-3xl">Nehan Dev</div>
        <div className="flex items-center">
          <div className="mr-4">{formatedNama}</div>
          {/* <div className="cursor-pointer bg-green-700 px-4 py-1 rounded-sm">
            Logout
          </div> */}
        </div>
      </div>
      <div className="flex justify-center py-4">
        <Link href="/client/rsvp">
          <div className="mr-4 cursor-pointer bg-green-700 px-4 py-1 rounded-sm">
            RSVP
          </div>
        </Link>
        {/* <Link href="/client/whatsapp-sender">
          <div className="cursor-pointer bg-green-700 px-4 py-1 rounded-sm">
            Whatsapp Sender
          </div>
        </Link> */}
      </div>
    </section>
  );
};

export default ClientHeader;
