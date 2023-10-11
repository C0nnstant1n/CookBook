import Link from "next/link";
export default function Header() {
  return (
    <header className='header'>
      <a href='http://127.0.0.1:8000/swagger-ui'>API</a>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
    </header>
  );
}
