import React from "react";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-main py-2 min-h-screen">
        <div className="flex flex-col gap-4 h-auto m-8 bg-container overflow-hidden shadow-lg rounded-xl p-8 mx-4 sm:mx-6 lg:mx-14">
          <img
            src="assets/about-image.png"
            alt="About Image"
            className="rounded-lg shadow-md w-[800px] h-auto mx-auto"
          />
          <h1 className="text-2xl xl:text-4xl font-bold mt-4 text-gray-800 text-center opacity-90">
            Meal Brain'e Hoş Geldiniz!
          </h1>
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Meal Brain Nedir?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Meal Brain, yemek hazırlama sürecini hızlı, kolay ve keyifli hale
              getirmek için tasarlanmış bir yapay zeka destekli platformdur.
              Sedanter çalışanlar, öğrenciler, zamanı kısıtlı bireyler ve yemek
              yapmaya yeni başlayanlar için özel olarak geliştirilmiştir.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Amacımız
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Uygulamanın temel amacı, kullanıcıların yemek yapma konusunda
              kararsızlık yaşadığı anlarda onlara rehberlik etmek ve birkaç
              basit adımla lezzetli yemek önerileri sunmaktır. Aynı zamanda,
              mevcut malzemelerinizle en verimli şekilde yemek tarifleri
              oluşturmanıza yardımcı olarak, hem zamandan hem de bütçeden
              tasarruf etmenizi sağlar.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Ne Sunuyoruz?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
              <li>
                <strong>Yapay Zeka Destekli Öneriler:</strong> Kullanıcıların
                tercihlerine göre yemek tarifleri önerir ve malzemelerinizi
                dikkate alarak yaratıcı çözümler sunar.
              </li>
              <li>
                <strong>Gıda İsrafını Azaltma:</strong> Elinizdeki malzemelere
                uygun tarif önerileriyle, gıda israfını minimuma indirmenize
                yardımcı olur.
              </li>
              <li>
                <strong>Zamandan Tasarruf:</strong> Günlük hayatın
                koşuşturmasında yemek yapma sürecinizi hızlandırarak, daha fazla
                kişisel zaman kazanmanızı sağlar.
              </li>
              <li>
                <strong>Yeni Tarifler Keşfetme:</strong> Mutfak becerilerinizi
                geliştirecek ve yemek çeşitliliğinizi artıracak öneriler sunar.
              </li>
              <li>
                <strong>Sürdürülebilir Yaşam Tarzı:</strong> Malzemelerinizi en
                verimli şekilde kullanarak bütçenizi kontrol altında tutabilir
                ve sürdürülebilir bir yaşam tarzı benimseyebilirsiniz.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Neden Meal Brain?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Meal Brain, yemek yapmayı eğlenceli hale getirmekle kalmaz, aynı
              zamanda kullanıcıların sağlıklı, dengeli ve çeşitli beslenme
              alışkanlıkları kazanmasına yardımcı olur. Herkesin yemek yapma
              sürecini daha kolay, daha verimli ve daha keyifli hale getirmek
              için buradayız!
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Hemen Keşfet!
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Zamandan tasarruf ederek, yepyeni tatlar keşfetmek ve mutfağınızı
              daha verimli kullanmak için bizi deneyin. Afiyet olsun! 🍽️
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
