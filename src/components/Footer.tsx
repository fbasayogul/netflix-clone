import React from "react"

type FooterProps = {
  title: string
  link: string
}

export default function Footer() {
  const FooterItem: FooterProps[] = [
    { title: "SSS", link: "/" },
    { title: "Yardım Merkezi", link: "/" },
    { title: "Hesap", link: "/" },
    { title: "Medya Merkezi", link: "/" },
    { title: "Yatırımcı İlişkileri", link: "/" },
    { title: "İş İmkanları", link: "/" },
    { title: "Hediye Kartı Kullan", link: "/" },
    { title: "İzleme Yolları", link: "/" },
    { title: "Kullanım Koşulları", link: "/" },
    { title: "Gizlilik", link: "/" },
    { title: "Çerez Tercihleri", link: "/" },
    { title: "Kurumsal Bilgiler", link: "/" },
    { title: "Bize Ulaşın", link: "/" },
    { title: "Hız Testi", link: "/" },
    { title: "Yasal Hükümler", link: "/" },
    { title: "Sadece Netflix'te", link: "/" },
  ]

  return (
    <footer className="container mx-auto pb-20">
      <h3 className="pb-9 text-base text-[#ffffffb3]">
        Sorularınız mı var?{" "}
        <a href="tel:0850-390-7444" className="underline">
          0850-390-7444
        </a>{" "}
        numaralı telefonu arayın.
      </h3>
      <ul className="grid grid-cols-4 gap-3 pb-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {FooterItem.map((item) => (
          <li>
            <a
              href={item.link}
              className="text-sm text-[#ffffffb3] underline underline-offset-2"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-sm text-[#ffffffb3]">Netflix Türkiye</p>
    </footer>
  )
}
