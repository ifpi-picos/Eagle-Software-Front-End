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
              <button className="mt-6 bg-white text-blue-500 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition">
                Contratar Agora
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  