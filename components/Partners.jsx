export default function Partners() {
    const partners = [
      {
        name: 'Transistor',
        src: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg',
        alt: 'Transistor',
      },
      {
        name: 'Reform',
        src: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg',
        alt: 'Reform',
      },
      {
        name: 'Tuple',
        src: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
        alt: 'Tuple',
      },
      {
        name: 'SavvyCal',
        src: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg',
        alt: 'SavvyCal',
      },
      {
        name: 'Statamic',
        src: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg',
        alt: 'Statamic',
      },
    ];
  
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Backed by the World’s Most Innovative Teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {partners.map((partner, index) => (
              <img
                key={index}
                className={`col-span-2 max-h-12 w-full object-contain ${
                  index === 3 ? 'sm:col-start-2' : ''
                } lg:col-span-1`}
                src={partner.src}
                alt={partner.alt}
                width={158}
                height={48}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  