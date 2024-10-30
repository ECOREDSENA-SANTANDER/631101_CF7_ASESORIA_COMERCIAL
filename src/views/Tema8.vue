<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 8
      h1 Momentos de verdad en el servicio al cliente

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-8.col-lg-4.p-0
        img.p-0(src='@/assets/curso/temas/tema8y9/img1.png', alt='')(data-aos="fade-right")
      .col-sm-12.col-md-12.col-lg-6
        .row.bgazulclaro.p-0(data-aos="fade-left")
          p.p-4.mt-5.mb-5 Cada vez que el cliente en su encuentro con la empresa bien sea de manera presencial o virtual experimenta sensaciones que pueden o no llevarlo a realizar una compra. Para Albrecht (2006) “es un episodio en el cual el cliente entra en contacto con cualquier aspecto de la organización y tiene una impresión sobre la calidad de su servicio” (p. 33).  Igualmente, Siebold (s.f.) trae un concepto de Jan Carlzon “un momento de verdad es cada instante en que un cliente toma contacto con la persona o sistema que da el servicio”.
      
    separador
    #t_8_1.titulo-segundo.mb-4
      h2 8.1 Característica de los momentos de verdad

    p.mb-4 Están caracterizados por los sistemas principales de la organización, estos sistemas son:

    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-lg-12
        .tarjeta.tarjeta--morada
          SlyderA(tipo="b").p-4
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0 
                p(data-aos="zoom-in-left") #[b Sistema de gestión gerencial:] de ahí salen las decisiones que dan forma a los momentos de verdad y la conformación de los ciclos de servicios.
              .col-lg-4.col-md-10.mb-4.mb-md-0 
                img.mt-4(src='@/assets/curso/temas/tema8y9/tar1-1.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0 
                p(data-aos="zoom-in-left") #[b Sistema conformado por las normas y procedimientos:] son las reglas para seguir en el encuentro con el cliente.
              .col-lg-4.col-md-10.mb-4.mb-md-0 
                img.mt-4(src='@/assets/curso/temas/tema8y9/tar1-2.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0 
                p(data-aos="zoom-in-left") #[b Sistema de infraestructura técnica:] los equipos que la empresa necesita para poder operar en la atención con el cliente.
              .col-lg-4.col-md-10.mb-4.mb-md-0 
                img.mt-4(src='@/assets/curso/temas/tema8y9/tar1-3.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0 
                p(data-aos="zoom-in-left") #[b Sistema de interacción social:] todo el componente humano alrededor del encuentro con el cliente.
              .col-lg-4.col-md-10.mb-4.mb-md-0 
                img.mt-4(src='@/assets/curso/temas/tema8y9/tar1-4.png', alt='Texto que describa la imagen')

  .container.tarjeta.tarjeta--moradaadv
    .row.align-items-center.justify-content-center.mb-1.mt-1
      .col-2
        img.p-4(data-aos="zoom-in-right")(src='@/assets/curso/temas/tema8y9/adv.png', alt='')
      .col-10
        h3.text-white Importancia
        p.text-white Los momentos de verdad son aquellos puntos de contacto entre el cliente y la empresa más importantes y críticos. Son cruciales para la experiencia del cliente, puesto que definen que el cliente llegue a la venta y la fidelización.

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    separador
    #t_8_2.titulo-segundo.mb-4
      h2 8.2 Elementos que favorecen un momento de verdad
    
    p.mb-4 Cada momento de la verdad es un sistema donde interactúan cinco elementos: 

    .row.justify-content-center.justify-content-center
      .col-sm-12.col-lg-3.col-md-12.mb-4(data-aos="fade-right")
        .overflow-hidden.h-100.p-2
          .row.align-items-center.justify-content-center.bgfondotema2.p-1
            .col-5.col-md-3.col-lg-6
              img.mt-4(src='@/assets/curso/temas/tema8y9/ico1-1.png', alt='').mb-4
            .row.justify-content-center.mb-3.mt-3
              .col-12
                .bgmoradomedio
                  h3.text-center.mb-0.p-1 El soporte interno
            p.mb-5.text-center.p-4 Lo conforma esa parte interna que no es visible al servicio, pero desde ahí se produce.
      .col-sm-12.col-lg-3.col-md-12.mb-4(data-aos="fade-right")
        .overflow-hidden.h-100.p-2
          .row.align-items-center.justify-content-center.bgfondotema2.p-1
            .col-5.col-md-3.col-lg-6
              img.mt-4(src='@/assets/curso/temas/tema8y9/ico1-2.png', alt='').mb-4
            .row.justify-content-center.mb-3.mt-4
              .col-12
                .bgmoradomedio
                  h3.text-center.mb-0.p-1 El soporte físico
            p.mb-5.text-center.p-4 Está conformado por los equipos físicos que son necesarios para prestar el servicio.
      .col-sm-12.col-lg-3.col-md-12.mb-4(data-aos="fade-right")
        .overflow-hidden.h-100.p-2
          .row.align-items-center.justify-content-center.bgfondotema2.p-1
            .col-5.col-md-3.col-lg-6
              img.mt-4(src='@/assets/curso/temas/tema8y9/ico1-3.png', alt='').mb-4
            .row.justify-content-center.mt-3
              .col-12
                .bgmoradomedio
                  h3.text-center.mb-0 El personal de contacto
            p.text-center.p-5 Es quien sirve a los clientes sobre las necesidades del servicio.
      .col-sm-12.col-lg-3.col-md-12.mb-4(data-aos="fade-right")
        .overflow-hidden.h-100.p-2
          .row.align-items-center.justify-content-center.bgfondotema2.p-1
            .col-5.col-md-3.col-lg-6
              img.mt-4(src='@/assets/curso/temas/tema8y9/ico1-4.png', alt='').mb-4
            .row.justify-content-center.mb-3.mt-3
              .col-12
                .bgmoradomedio
                  h3.text-center.mb-0.p-1 El cliente y el servicio
            p.text-center.p-4 Lo conforman todos los procesos necesarios para satisfacer al cliente y la capacidad para realizar mejoras en el servicio. 

    separador
    #t_8_3.titulo-segundo.mb-4
      h2 8.3 Tipos de momentos de verdad

    p.mb-4(data-aos="zoom-in") Los encuentros con los clientes pueden ser positivos o negativos, dependiendo de cómo se sienta el cliente o cómo perciba el servicio recibido o cualquier encuentro con el sistema. Prieto (2014, p.104). 

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-8
        .row.bgazulclaro.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-left")
          .col-lg-3
            .row.align-items-center.justify-content-center
              .col-3.col-md-2.col-lg-5
                img.p-1(src='@/assets/curso/temas/tema8y9/flecha-arriba.png', alt='')
          .col-lg-8
            h5.mt-4.mb-4 Momentos de verdad positivos: 
            p.mt-4 Aquellos que satisfacen las expectativas de los clientes y que permiten convertirlos en clientes fieles y leales.
        .row.bgrosado2.align-items-center.justify-content-center(data-aos="zoom-in-right")
          .col-lg-3
            .row.align-items-center.justify-content-center
              .col-3.col-md-2.col-lg-5
                img.p-1(src='@/assets/curso/temas/tema8y9/flecha-abajo.png', alt='')
          .col-lg-8
            h5.mt-4.mb-4 Momentos de verdad negativos: 
            p.mt-4 Aquellos momentos que no satisfacen las expectativas de los clientes en su encuentro con el sistema. Los empleados pueden atenderlos muy bien, pero pueden sentirse contrariados con alguna parte del servicio técnico o con la exhibición u otro elemento. 

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
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
