export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-300 bg-white px-6 py-6 text-center text-sm text-slate-600">
      Copyright &copy; {year} | Nicholas Goodsell | All rights reserved
    </footer>
  );
}