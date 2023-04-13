import { VideoCameraIcon, EyeIcon, AdjustmentsVerticalIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Image from 'next/image'
const features = [
  {
    name: 'Produkcja Filmowa',
    description:
      '  Dostarczamy filmy, które przyciągną uwagę i zostaną zapamiętane na długo. ',
    icon: VideoCameraIcon,
  },
  {
    name: 'Reklama, która przyciąga uwagę',
    description: 'Wiemy jak zaprojektować i zrealizować reklamę, która trafi w gusta odbiorców i skłoni ich do podjęcia działania. ',
    icon: EyeIcon,
  },
  {
    name: 'Postprodukcja na najwyższym poziomie',
    description: 'Zadbamy o każdy detal, aby finalny efekt był imponujący i spełniał oczekiwania naszych klientów. ',
    icon: AdjustmentsVerticalIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-black  sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-babyblue">Tworzymy filmy z pasją i zaangażowaniem</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Nie robimy filmów tylko dla zysku</p>
              <p className="mt-6 text-lg leading-8 text-white">
              Robimy je z pasją i zaangażowaniem, bo kochamy to, co robimy. Chcemy, aby nasze filmy przekazywały emocje i przyciągały uwagę. Dlatego zawsze staramy się wyjść poza schematy i zaskoczyć naszych klientów oryginalnymi pomysłami. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-babyblue" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/Plan1.jpg"
            alt="Plan zdjeciowy simple"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
        
          />
        </div>
      </div>
    </div>
  )
}
