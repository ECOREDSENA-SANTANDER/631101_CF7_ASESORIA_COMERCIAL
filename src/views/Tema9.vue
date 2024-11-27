<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 9
      h1 Trazabilidad de servicio al cliente

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.col-lg-4
        img(src='@/assets/curso/temas/tema8y9/img2.png', alt='')(data-aos="zoom-in-right")
      .col-sm-12.col-md-12.col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
          p.p-4 La trazabilidad es una serie de normas, procedimientos que permiten realizar un seguimiento al producto durante su proceso de fabricación, despacho y entrega al cliente, esta trazabilidad se realiza con el apoyo de tecnologías de georreferenciación aplicadas al producto.  
        p La trazabilidad del servicio es el seguimiento o sondeo que se hace del producto o servicio según los procedimientos establecidos, con el fin de conocer la ubicación y trayectoria del producto o servicio a lo largo de la cadena logística, para lo cual se utilizan algunas herramientas, la trazabilidad es la capacidad de reconstruir la historia y recorrido de un producto o servicio. Para ello, se debe tener en cuenta lo siguiente:
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-lg-12
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema8y9/info1.png', alt='Texto que describa la imagen')
          .tarjeta.borde-especial1.p-3(x="28%" y="28%" numero="+")
            p.mb-0.mt-0 El origen de los componentes del producto o de las circunstancias de este o si se trata de las situaciones de un servicio.
          .tarjeta.borde-especial2.p-3(x="26%" y="63%" numero="+")
            p.mb-0.mt-0 La historia de los procesos o procedimientos aplicados al producto o al servicio.
          .tarjeta.borde-especial3.p-3(x="71%" y="36%" numero="+")
            p.mb-0.mt-0 La distribución y monitoreo de la entrega del producto o servicio, del servicio postventa o de la satisfacción del cliente.
          .tarjeta.borde-especial4.p-3(x="70%" y="86%" numero="+")
            p.mb-0.mt-0 El análisis de seguimiento del producto, servicio o bien sustituto o complementario.
        p.mt-5 Teniendo en cuenta esta información se hace posible la entrega de productos o servicios a mercados específicos, garantizando con certeza el origen y la historia de estos, la trazabilidad se asocia a procesos y procedimientos. 
        p.mb-4 Apoyado en esa información, es posible entregar productos y servicios definidos a mercados específicos, con la garantía de conocer con certeza el origen y la historia de este. La trazabilidad está asociada, sin duda, a procesos y procedimientos competitivos modernos y a productos y servicios de mayor calidad y valor para el cliente final. 

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Elementos para la trazabilidad en el servicio

    p.mb-4 De acuerdo con Geinfor (s.f.) los elementos que componen la trazabilidad y que garantizan la información histórica, la ubicación y trayectoria del producto son:

    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-lg-12
        SlyderB.mb-5.p-5.bgfondotema9(:datos="datosSlyder")

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Herramientas para la trazabilidad en el servicio

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.col-lg-4
        img(data-aos="fade-right")(src='@/assets/curso/temas/tema8y9/img3.png', alt='')
      .col-sm-12.col-md-12.col-lg-8
        p En la cadena de suministros se realiza seguimiento a la entrega de los productos desde producción hasta la entrega del producto a los clientes, para realizar este seguimiento la empresa utiliza herramientas que apoyan este monitoreo con códigos de barras, apoyados por sistemas de radiofrecuencia (RFID), códigos alfanuméricos u otras tecnologías más avanzadas de geolocalización.
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-left")
          p La Norma ISO 9000 regula las normas de Control de calidad y gestión de calidad del proceso en la trazabilidad.  

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Canales

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-8
        p.mb-5 Existen diversos canales de atención al cliente y la utilización de estos depende de las políticas de la empresa y el público al cual se desea atender, entre ellos figuran:
        .row.bgazulclaro.align-items-center.justify-content-center.ps-5(data-aos="zoom-in")
          .col-lg-4.mt-5.mb-5
            ul.lista-ul--color.fa-al
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-0 El teléfono y/o móvil.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-0 Correo electrónico.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-0 Páginas web.
          .col-lg-8.mb-5.mt-5
            ul.lista-ul--color.fa-al
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-0 Mensajes SMS.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-0 WhatsApp.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-0 Redes sociales: Facebook, Twitter, Instagram, entre otras.
        p.mt-5 Cabe resaltar que la tecnología ha tenido un gran avance con el paso de los años y, actualmente, los empresarios tienen diferentes formas de comunicarse con los clientes de una forma ágil, personalizada y oportuna.
      .col-12.col-md-10.col-lg-4
        img(src='@/assets/curso/temas/tema8y9/img4.png', alt='')(data-aos="fade-left")

</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Sistema de identificación',
        texto:
          'Los sistemas de identificación son uno de los componentes básicos de cualquier seguimiento de la trazabilidad en el ámbito empresarial. Mediante estos sistemas se hace posible la identificación de los artículos, ya sea de forma individual o agrupados en lotes. Igualmente, permiten la identificación de los embalajes y cajas relacionas con la logística de almacén y reparto.',
        imagen: require('@/assets/curso/temas/tema8y9/sly1-1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Sistema de captura de datos',
        texto:
          'A la hora de implantar un buen sistema de trazabilidad es fundamental utilizar alguna herramienta de captura de datos. Esta debe obtener y registrar la información sobre las materias primas utilizadas, los datos de la planta en la que se fabrica y los datos de la gestión de almacenes.',
        imagen: require('@/assets/curso/temas/tema8y9/sly1-2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<i>Software</i> para captura de datos',
        texto:
          'Sin negar la importancia de los dos sistemas anteriormente analizados, de poco servirían todos los datos obtenidos si después no se cuenta con las herramientas para analizarlos y darles un uso adecuado. Por esto, es esencial la utilización de un <i>software</i> especializado que permita la gestión correcta de toda la información acumulada y su posterior administración.',
        imagen: require('@/assets/curso/temas/tema8y9/sly1-3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Los datos para registrar',
        texto:
          'Una vez se tienen todos los datos llega el momento de registrarlos, analizarlos y darles un uso adecuado. La información sobre la trazabilidad va a ser muy diferente, dependiendo de la clase de producto, del sector empresarial y de cuáles son los requerimientos del usuario final.',
        imagen: require('@/assets/curso/temas/tema8y9/sly1-4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
