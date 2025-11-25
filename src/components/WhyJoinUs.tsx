import H2 from "./H2"
import ReasonCard from "./ReasonCard"

export type Reason = {
  title?: string
  content?: string
  icon?: string
}

export default function WhyJoinUs() {
  const reasons: Reason[] = [
    {
      title: "Televizyonunuzda izleyin",
      content:
        "Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.",
      icon: "television",
    },
    {
      title: "Çevrimdışı izlemek için içerikleri indirin",
      content:
        "En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun.",
      icon: "download",
    },
    {
      title: "İstediğiniz her yerde izleyin",
      content:
        "Telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin.",
      icon: "telescope",
    },
    {
      title: "Çocuklarınız için profiller oluşturun",
      content:
        "Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız, sadece onlara özel bir alanda en sevdikleri karakterlerle maceralara atılabilir.",
      icon: "profiles",
    },
  ]

  return (
    <section className="container mx-auto mb-20 max-md:mb-14">
      <H2>Bize Katılmanız İçin Diğer Nedenler</H2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((item) => (
          <li>
            <ReasonCard {...item} />
          </li>
        ))}
      </ul>
    </section>
  )
}
