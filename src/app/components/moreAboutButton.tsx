import Link from "next/link";

export default function MoreAboutButton() {
  return (
    <button className="duration-300 transform hover:scale-110 focus:scale-110">
      <Link href={'/about'} className="underline uppercase text-sm text-salad">
        more about me
      </Link>
    </button>
  );
}
