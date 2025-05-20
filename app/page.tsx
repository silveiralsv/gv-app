import ActivitiesCard from "@/components/activities-card";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";
import { getCardContent } from "@/lib/get-card-content";
import Image from "next/image";

export default function Home() {
  const cardContents = getCardContent()

  return (
    <>
      <main className="w-full h-full bg-secondary">
        <WhatsappButton />
        <section className="relative w-full h-screen flex items-center justify-center ">
          <Image src="/office.png" fill alt="office" className="object-cover" />
          <h1 className="z-50 text-3xl md:text-4xl font-bold text-white bg-black/40 rounded-md p-2 mx-2">
            Assistência jurídica completa na área Civil e Criminal
          </h1>
        </section>

        <section className="relative w-full py-14 flex flex-col items-center gap-10 px-3">
          <h1 className="text-2xl text-center">
            Defendemos seus direitos com compromisso e excelência, garantindo
            justiça com agilidade e estratégia
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cardContents.map((content, index) => (
              <ActivitiesCard
                key={index}
                title={content.title}
                description={content.description}
              />
            ))}
          </div>
        </section>

        <section className="w-full bg-gray-300/80 gap-5 grid grid-cols-1 md:grid-cols-5">
          <div className="relative aspect-video md:aspect-auto md:col-span-3">
            <Image src="/team.png" fill alt="Team" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center gap-2 px-5 py-10 md:py-24 text-center md:text-wrap md:col-span-2">
            <h1 className="text-3xl mb-4">
              Advogados experientes, especialistas nas áreas Cível e Penal
            </h1>
            <p className="text-black/80">
              Nosso escritório oferece atendimento especializado nas áreas de
              <b> Direito Civil</b> e <b>Penal</b>, atuando com excelência na
              defesa dos interesses de nossos clientes. No <b>Direito Civil</b>,
              garantimos suporte jurídico para contratos, indenizações, disputas
              patrimoniais e direito de família. Já no <b>Direito Penal</b>,
              oferecemos defesa técnica estratégica em processos criminais,
              incluindo crimes patrimoniais e do Tribunal do Júri.
            </p>
            <p className="text-black/80">
              Contamos com uma equipe altamente qualificada, preparada para
              atuar em casos de grande complexidade, sempre com ética,
              compromisso e total dedicação.
            </p>

            <li className="text-lg text-black/90">Dra. Giovanna Gheorghiu</li>
            <li className="text-lg text-black/90">Dra. Gabriela Vieira</li>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
