import Link from "next/link";

export default function ScrollToTop() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      href="#inicio"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-blue-500 text-white text-3xl px-4 py-2 rounded-xl shadow-lg transition duration-300 hover:bg-blue-600"
      aria-label="Voltar ao topo"
    >
      &#9650;
    </Link>
  );
}
