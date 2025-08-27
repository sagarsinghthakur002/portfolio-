import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex ">
      <img src="/logo.png" alt="Logo" className="w-12 h-12" /><h3 className="pt-[13px] font-bold text-[1.2rem]">Sagar.Dev</h3>
    </Link>
  );
};

export default Logo;
