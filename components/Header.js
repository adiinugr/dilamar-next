import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full justify-center items-center p-4 fixed h-14 z-20 text-gray-100 font-medium bg-gray-400">
      <Link href="/">
        <div className="mr-10 cursor-pointer">Home</div>
      </Link>
      <Link href="/konsultasi">
        <div className="mr-10 cursor-pointer">Konsultasi</div>
      </Link>
      <Link href="/gallery">
        <div className="cursor-pointer">Gallery</div>
      </Link>
    </header>
  );
};

export default Header;
