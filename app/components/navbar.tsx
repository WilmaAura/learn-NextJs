import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between h-14 border-b items-center">
        <Link href="/">
          <h1 className="font-bold text-xl">Wilma Auraruna Khalif</h1>
        </Link>
        <div className="flex gap-x-5 ">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/project">
            <p>Project</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
