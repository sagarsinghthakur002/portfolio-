import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <img src="/logo.png" alt="Logo" className="w-12 h-12" />
    </Link>
  );
};

export default Logo;
