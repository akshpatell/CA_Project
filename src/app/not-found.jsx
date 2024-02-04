import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100 min-h-[calc(100vh-64px)] text-gold  flex flex-col items-center justify-center">
      <h1 className="text-heading4 text-gray-500">
        <span className="font-bold text-blue-950">404</span> Page not found
      </h1>
      <p className="text-center text-gray-700">
        The page you tried to access does not exist.
      </p>
      <Link
        href="/"
        className="group mt-4 text-blue-950 flex gap-2 items-center font-semibold"
      >
        <span className="group-hover:-translate-x-1 duration-300">-</span>
        <span className="underline">Go to frontpage</span>
      </Link>
    </div>
  );
}
