import Header from "../components/layout/header/header";
import Hero from "../components/sections/hero";
import Benefits from "../components/sections/Benefits";
import ScrollToTop from "../components/layout/header/scrollToTop";
import FeatureSection from "../components/sections/Features";
import CtaSection from "../components/sections/Cta";
import TeamSection from "../components/sections/Team";
import Footer from "../components/layout/header/footer";

export default function Index() {
  return (
    <div>
      <Header />
      <Hero />
      <Benefits />
      <FeatureSection
        image="/Macbook1.jpg"
        title="Cadastro Inteligente"
        text="Registre todas as informações importantes sobre os objetos para o sistema online. Sem correr o risco de esquecê-las."
      />
      <FeatureSection
        image="/Macbook2.jpg"
        title="Gerenciamento Completo"
        text="O administrador tem total controle sobre as informações que serão exibidas. Simples, rápido e organizado."
        reverse
      />
      <FeatureSection
        image="/Macbook3.jpg"
        title="Divulgação Eficiente"
        text="Toda e qualquer pessoa devidamente cadastrado no sistema terá acesso aos objetos que estão sendo exibidos."
      />
      <CtaSection/>
      <TeamSection/>
      <Footer/>
      <ScrollToTop />
    </div>
  );
}
