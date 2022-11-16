import Link from "next/link";

const Menu = () => {
  return (
    <nav style={{ display: "flex", columnGap: "10px" }}>
      <Link href="/">Anasayfa</Link>
      <Link href="/about">Hakkımda</Link>
      <Link href="/contact">İletişim</Link>
    </nav>
  );
};
export default Menu;
