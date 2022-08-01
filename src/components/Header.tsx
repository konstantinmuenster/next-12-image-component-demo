import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Fixed Image Sizes" },
  { href: "/fill", label: "Fill Mode" },
];

export const Header = () => {
  const router = useRouter();

  return (
    <header>
      <h1 className="text-2xl">
        <code>next/future/image</code>
        <span className="block text-xl my-2 opacity-60">
          Introduced in Next.js 12.2
        </span>
      </h1>
      <div className="my-10">
        {links.map((link, key) => {
          const isActive = router.pathname === link.href;

          return (
            <Link href={link.href} key={key} passHref>
              <a
                className={`mr-6 p-3 transition-all rounded-md font-bold text-gray-600 hover:bg-slate-100 ${
                  isActive ? "bg-slate-100 " : ""
                }`}
              >
                {link.label}
              </a>
            </Link>
          );
        })}
      </div>
    </header>
  );
};
