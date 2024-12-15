import Image from 'next/image'
import React from 'react'
import Container from 'components/Container'
import avatarImage1 from 'public/avatars/Vastint.gif'
import avatarImage2 from 'public/avatars/Elis.gif'
import avatarImage3 from 'public/avatars/Mindray.gif'
import avatarImage4 from 'public/avatars/MPack.gif'
import avatarImage5 from 'public/avatars/Lot.gif'
import avatarImage6 from 'public/avatars/Beko.gif'


const testimonials = [
  [
    {
      content:
        'Simple Frame to firma, na którą zawsze możesz liczyć, jeśli potrzebujesz profesjonalnych usług filmowych i animacyjnych.',
      author: {
        name: 'Vastint',
        role: 'CEO at Lynch LLC',
        image: avatarImage1,
      },
    },
    {
      content:
        'Ich projekty reklamowe są nie tylko kreatywne i efektowne, ale także skuteczne w przyciąganiu uwagi klientów.',
      author: {
        name: 'Elis',
        role: 'Director at Velocity Industries',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'Jestem pod wrażeniem jakości produkcji filmowych, jakie tworzy Simple Frame - każdy detal jest dopracowany i widoczna jest dbałość o szczegóły.',
      author: {
        name: 'Mindray',
        role: 'Founder of Kiehn and Sons',
        image: avatarImage3,
      },
    },
    {
      content:
        'Pracowałem z wieloma firmami filmowymi, ale Simple Frame zdecydowanie wyróżnia się swoim profesjonalizmem i zaangażowaniem.',
      author: {
        name: 'Mpack',
        role: 'COO at Armstrong Inc',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'Jeśli chcesz, aby Twoja firma zyskała wizerunek nowoczesnej i innowacyjnej marki, Simple Frame z pewnością spełni Twoje oczekiwania.',
      author: {
        name: 'Lot',
        role: 'Founder of West Inc',
        image: avatarImage5,
      },
    },
    {
      content:
        'Zespół Simple Frame to grupa utalentowanych i kreatywnych ludzi, którzy zawsze potrafią wyjść poza schematy i stworzyć coś wyjątkowego dla swoich klientów!',
      author: {
        name: 'Beko',
        role: 'Director at Velocity Industries',
        image: avatarImage6,
      },
    },
  ],
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-black pb-20 sm:pb-32 "
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="testimonials-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl"
          >
            Polecane przez naszych klientów
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          Zespół Simple Frame to grupa utalentowanych i kreatywnych ludzi, którzy zawsze potrafią wyjść poza schematy i stworzyć coś wyjątkowego dla swoich klientów.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute top-6 left-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                        
                        </div>
                        <div className="h-14 w-14 overflow-hidden rounded-full border-none bg-slate-50">
                          <Image src={testimonial.author.image} alt="" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
