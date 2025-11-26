import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import H2 from "./H2"

type FaqProps = {
  title: string
  content: string | React.ReactNode
}

export default function FAQ() {
  const FAQ: FaqProps[] = [
    {
      title: "Netflix nedir?",
      content: (
        <>
          "Netflix; internet bağlantılı binlerce cihazda ödüllü diziler,
          filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir
          arşiv sunan bir streaming hizmetidir."
          <br /> <br />
          "Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman
          izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman
          keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve
          filmler ekleniyor!",
        </>
      ),
    },
    {
      title: "Netflix'in maliyeti nedir?",
      content:
        "Netflix'i sabit bir aylık ücretle akıllı telefonunuzda, tabletinizde, Akıllı TV'nizde, dizüstü bilgisayarınızda veya yayın cihazınızda izleyebilirsiniz. Aylık plan ücretleri 189,99 TL ile 379,99 TL arasında değişmektedir.",
    },
    {
      title: "Nasıl iptal ederim?",
      content:
        "Netflix esnektir. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur. Hesabınızı istediğiniz zaman başlatabilir, istediğiniz zaman durdurabilirsiniz.",
    },
    {
      title: "Netflix'te ne izleyebilirim?",
      content:
        "Netflix, uzun metrajlı filmler, belgeseller, diziler ve programlar, anime, ödüllü Netflix orijinal içerikleri ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir. İstediğiniz her zaman, istediğiniz kadar çok şey izleyin.",
    },
    {
      title: "Netflix çocuklar için uygun mudur?",
      content: (
        <>
          Üyeliğinize dâhil olan Netflix Çocuk deneyimi, çocukların ailece
          izlenebilecek dizi ve filmleri kendilerine özel bir alanda
          izlemelerini sağlarken kontrolü ebeveynlere verir.
          <br /> <br />
          Çocuk profillerinde bulunan PIN korumalı ebeveyn kontrolleri
          sayesinde, çocukların izleyebileceği içeriklerin yetişkinlik
          düzeylerini kısıtlayabilir ve onların görmesini istemediğiniz belirli
          içerikleri engelleyebilirsiniz.
        </>
      ),
    },
  ]

  return (
    <section className="container mx-auto mb-20 max-md:mb-14">
      <H2>Sıkça Sorulan Sorular</H2>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        {FAQ.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="pb-2">
            <AccordionTrigger className="cursor-pointer items-center rounded-none bg-[#2d2d2d] p-6 text-2xl font-semibold text-white hover:bg-[#414141] hover:no-underline max-lg:text-lg">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 border-t border-black bg-[#2d2d2d] p-4 text-balance">
              <p className="text-2xl text-white max-lg:text-lg">
                {item.content}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
