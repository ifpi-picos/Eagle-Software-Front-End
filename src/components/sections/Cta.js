export default function CtaSection() {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div
          className="relative text-white py-16 px-8 rounded-3xl shadow-lg text-center overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #27C0EF 0%, #0DB0E2 66%, #00A8DB 100%)",
          }}
        >
          <div className="absolute inset-0 bg-blue-500 opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold">Facilitando reencontros, um objeto por vez.</h2>
            <div className="mt-6 flex justify-center md:justify-start space-x-4"></div>
              <a
                href="mailto:eaglessoftware.suporte@gmail.com?subject=Suporte%20ao%20Cliente"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition duration-300"
              >
                Fale Conosco
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}
