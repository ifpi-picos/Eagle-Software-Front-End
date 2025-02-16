import Image from "next/image";

export default function FeatureSection({ image, title, text, reverse }) {
  return (
    <section className="py-12">
      <div className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
        
        <div className={`flex justify-center ${reverse ? "md:order-2" : "md:order-1"}`}>
          <Image src={image} alt={title} width={650} height={300} className="rounded-lg" />
        </div>

        <div className={`px-6 text-center md:text-left ${reverse ? "md:order-1" : "md:order-2"}`}>
          <h2 className="text-3xl font-bold text-blue-700">{title}</h2>
          <p className="mt-4 text-gray-600 text-lg">{text}</p>
        </div>

      </div>
    </section>
  );
}
