import { useMemo } from 'react'

//Para obtener el Dominio
const origin = typeof window === 'undefined' ? '' : window.location.origin
const title = typeof window === 'undefined' ? '' : document.title

//Para obtener la url amigable
const originPathname =
  typeof window === 'undefined' ? '' : window.location.pathname

const variable = [
  {
    id: 1,
    slug: 'transporte-de-agua-potable-en-callao',
    nombre: 'Transporte de Agua Potable en Callao las 24 horas',
  },
  {
    id: 3,
    slug: 'transporte-de-agua-potable-en-lima',
    nombre: 'Transporte de Agua Potable en Lima las 24 horas',
  },
  {
    id: 1,
    slug: 'transporte-de-agua-potable-en-bellavista',
    nombre: 'Transporte de Agua Potable en Bellavista las 24 horas',
  },
]

export const schemas = data => {
  const schemaOrganization = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Corporation',
      name: 'Paz, Amor Y Esperanza',
      alternateName: [
        'Paz Amor y Esperanza',
        'Paz, Amor y Esperanza',
        'Servicio de Sepultura',
        'Sepultura',
        'Servicio de Nichos',
        'Nichos',
        'Servicio Funerario',
        'Funeraria',
        'Servicio de Sepelios',
        'Sepelios',
      ],
      url: `${origin}`,
      logo: `${origin}/images/logo.svg`,
    }),
    [],
  )
  const schemaProduct = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Transporte de agua y alquiler de camiones cisterna',
      image: `${origin}/images/general/06.webp`,
      description:
        'Transporte y abastecimiento de agua en todo Lima y Callao. Alquiler de camiones cisterna para proyectos a nivel nacional.',
      logo: `${origin}/images/general/tysawys-logo.svg`,
      brand: {
        '@type': 'Brand',
        name: 'Transporte y Servicios de Agua W y S S.A.C.',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '0',
        ratingCount: '1351',
      },
      review: {
        '@type': 'Review',
        name: 'Opinión de usuario',
        reviewBody:
          'Excelente servicio de transporte de agua y alquiler de camiones cisterna, muy agradecidos.',
        datePublished: '2023-01-13',
        author: { '@type': 'Person', name: 'Alexander' },
      },
    }),
    [],
  )
  const schemaLocal = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Transporte y Servicios de Agua W y S S.A.C.',
      image: `${origin}/images/general/01.webp`,
      '@id': '',
      url: `${origin}`,
      telephone: '+51977834196',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Villa María del Triunfo',
        addressLocality: 'Lima',
        postalCode: '15817',
        addressCountry: 'PE',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
      },
    }),
    [],
  )
  const schemaWebSite = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Transporte y Servicios de Agua W y S S.A.C.',
      url: `${origin}`,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${origin}/{search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    }),
    [],
  )

  const schemaList = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',

    itemListElement: data.map((info, i) => {
      return {
        '@type': 'ListItem',
        position: i + 1,
        name: info.nombre,
        item: `${origin}/${info.slug}`,
      }
    }),
  }

  return {
    schemaOrganization,
    schemaProduct,
    schemaLocal,
    schemaWebSite,
    schemaList,
  }
}
