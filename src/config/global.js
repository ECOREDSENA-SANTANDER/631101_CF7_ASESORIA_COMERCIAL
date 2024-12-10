export default {
  global: {
    componenteFormativo: 'Atención al cliente',
    descripcionCurso:
      'El servicio y atención al cliente es una actividad importante para el asesor comercial, con herramientas y técnicas identifica situaciones que le permiten tomar acciones de mejora que logran relaciones duraderas con el cliente. El vendedor conocerá cómo define la empresa el triángulo del servicio, los momentos de verdad, el ciclo del servicio al cliente y cómo medir la trazabilidad de servicio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    /*imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],*/
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Atención al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características de la atención al cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Finalidad de la atención al cliente',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Relaciones con clientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Satisfacción al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Fidelización al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Hallazgos en la atención al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de hallazgos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Acciones de mejora',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Ciclo de servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Triángulo del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Característica del triángulo del servicio',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Estructura del triángulo del servicio',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Momentos de verdad en el servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Característica de los momentos de verdad',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Elementos que favorecen un momento de verdad',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Tipos de momentos de verdad',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Trazabilidad de servicio al cliente',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Atención al cliente',
      referencia:
        'Da Silva, D. (2020). Diferencia entre atención al cliente y servicio al cliente. ',
      tipo: 'Página web',
      link:
        'https://www.zendesk.com.mx/blog/diferencia-servicio-atencion-al-cliente/ ',
    },
    {
      tema: 'Atención al cliente',
      referencia:
        'Serna, H., Barrios, C., Barrios, A. y Castillo, M. (2007). Cómo medir al cliente. Editorial 3R Editores. ',
      tipo: 'Libro',
      link: 'https://isbn.cloud/9789583036422/como-medir-el-valor-del-cliente/',
    },
    {
      tema: 'Características de la atención al cliente',
      referencia:
        'Beetrack. (sf). Las características de un buen servicio al cliente.',
      tipo: 'Página web',
      link:
        'https://www.beetrack.com/es/blog/como-dar-buen-servicio-al-cliente-sector-logistico',
    },
    {
      tema: 'Ciclo de servicio',
      referencia:
        'Da Silva, D. (2020). Protocolo de atención al cliente: 4 beneficios para empresas.',
      tipo: 'Página web',
      link: 'https://www.zendesk.com.mx/blog/protocolo-de-atencion-al-cliente/',
    },
    {
      tema: 'Trazabilidad de servicio al cliente',
      referencia:
        'Geinfor. (sf). Cómo implementar un sistema de trazabilidad en tu empresa.',
      tipo: 'Página web',
      link:
        'https://geinfor.com/business/como-implementar-un-sistema-de-trazabilidad-en-tu-empresa/',
    },
    {
      tema: 'Triángulo del servicio',
      referencia:
        'Cano, Y. (s.f). Ceiba. Triángulo del servicio: una mirada estratégica para los negocios. ',
      tipo: 'Página web',
      link: 'https://www.ceiba.com.co/triangulo-del-servicio/  ',
    },
  ],
  glosario: [
    {
      termino: 'Atención al cliente',
      significado:
        '“la atención al cliente se centra en la resolución de problemas, el manejo de quejas y el soporte técnico” (Da Silva, 2020).',
    },
    {
      termino: 'Intangible',
      significado:
        'No se puede tocar, oler, no tienen acceso a la propiedad, no se pueden cargar, ni llevar.',
    },
    {
      termino: 'Momento de verdad',
      significado:
        '“Es un episodio en el cual el cliente entra en contacto con cualquier aspecto de la organización y tiene una impresión sobre la calidad de su servicio” (Albrecht, 2006).',
    },
    {
      termino: 'Personal de contacto',
      significado:
        'Es quien sirve a los clientes sobre las necesidades del servicio.',
    },
    {
      termino: 'Petición',
      significado:
        'Facultad que tienen todas las personas de presentar solicitudes respetuosas a entidades de carácter público o privado, por motivos de interés general o particular, bajo la garantía de obtener una respuesta oportuna, clara, completa y de fondo.',
    },
    {
      termino: 'Queja',
      significado:
        'Manifestación de inconformidad sobre la irregularidad administrativa, una conducta incorrecta o acción irregular de un funcionario.',
    },
    {
      termino: 'Reclamo',
      significado:
        'Manifestación de inconformidad sobre la prestación de un servicio o deficiente actuación por parte de una autoridad administrativa.',
    },
    {
      termino: 'Soporte interno',
      significado:
        'Lo conforma esa parte interna que no es visible al servicio, pero desde ahí se produce.',
    },
    {
      termino: 'Soporte físico',
      significado:
        'Está conformado por los equipos físicos que son necesarios para prestar el servicio.',
    },
    {
      termino: 'Sugerencia',
      significado:
        'Es la aportación de ideas o iniciativas para mejorar nuestra calidad.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Es una serie de normas, procedimientos que permiten realizar un seguimiento al producto durante su proceso de fabricación, despacho y entrega al cliente, esta trazabilidad se realiza con el apoyo de tecnologías de georreferenciación aplicadas al producto. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Albrecht, K. (2006). La revolución del servicio. Temas gerenciales 1ª edición. Editorial 3R Editores.',
      link: '',
    },
    {
      referencia:
        'Beetrack. (sf). Las características de un buen servicio al cliente.',
      link:
        'https://www.beetrack.com/es/blog/como-dar-buen-servicio-al-cliente-sector-logistico',
    },
    {
      referencia:
        'Cámara de Comercio de Cartagena. (2014). Procedimiento atención de PQRS.',
      link: 'https://www.cccartagena.org.co/pqrsd',
    },
    {
      referencia:
        'Da Silva, D. (2020). Diferencia entre atención al cliente y servicio al cliente. ',
      link:
        'https://www.zendesk.com.mx/blog/diferencia-servicio-atencion-al-cliente/ ',
    },
    {
      referencia:
        'Geinfor. (sf). Cómo implementar un sistema de trazabilidad en tu empresa.',
      link:
        'https://geinfor.com/business/como-implementar-un-sistema-de-trazabilidad-en-tu-empresa/',
    },
    {
      referencia:
        'ISOTools. (2016). Cómo definir un proceso para gestionar las reclamaciones de los clientes.',
      link:
        'https://co.isotools.us/definir-proceso-gestionar-las-reclamaciones-los-clientes/',
    },
    {
      referencia:
        'Prieto, J. (2014). Gerencia del servicio. 3ª edición. Ecoe Ediciones. ',
      link: '',
    },
    {
      referencia:
        'Siebold, M. (s.f.). Momentos de verdad en la administración del servicio.',
      link:
        'http://www.mercadeo.com/blog/1967/09/momentos-de-verdad-en-la-administracion-del-servicio/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johana Gómez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier del Carmen Martínez Pérez',
          cargo: 'Instructor',
          centro: 'Centro de Comercio y Servicios - Regional Bolívar',
        },
        {
          nombre: 'Zenith Chinchilla Ruedas',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full-stack</i> Junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y producción audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
