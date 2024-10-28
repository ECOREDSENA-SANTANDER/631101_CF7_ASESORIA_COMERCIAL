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
        img(src='@/assets/curso/temas/tema8y9/img2.png', alt='')
      .col-sm-12.col-md-12.col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p.p-4 La trazabilidad es una serie de normas, procedimientos que permiten realizar un seguimiento al producto durante su proceso de fabricación, despacho y entrega al cliente, esta trazabilidad se realiza con el apoyo de tecnologías de georreferenciación aplicadas al producto.  
        p La trazabilidad del servicio es el seguimiento o sondeo que se hace del producto o servicio según los procedimientos establecidos, con el fin de conocer la ubicación y trayectoria del producto o servicio a lo largo de la cadena logística, para lo cual se utilizan algunas herramientas, la trazabilidad es la capacidad de reconstruir la historia y recorrido de un producto o servicio. Para ello, se debe tener en cuenta lo siguiente:
    
    .row.justify-content-center.align-items-center
      .col-lg-12
        img(src='@/assets/curso/temas/tema8y9/info1.png', alt='')
        p.mt-5 Teniendo en cuenta esta información se hace posible la entrega de productos o servicios a mercados específicos, garantizando con certeza el origen y la historia de estos, la trazabilidad se asocia a procesos y procedimientos. 
        p.mb-4 Apoyado en esa información, es posible entregar productos y servicios definidos a mercados específicos, con la garantía de conocer con certeza el origen y la historia de este. La trazabilidad está asociada, sin duda, a procesos y procedimientos competitivos modernos y a productos y servicios de mayor calidad y valor para el cliente final. 

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Elementos para la trazabilidad en el servicio

    p De acuerdo con Geinfor (s.f.) los elementos que componen la trazabilidad y que garantizan la información histórica, la ubicación y trayectoria del producto son:

    






</template>

<script>
export default {
  name: 'Tema3',
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
