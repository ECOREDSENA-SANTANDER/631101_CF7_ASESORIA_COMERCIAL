<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 7
      h1 Triángulo del servicio

    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-sm-12.col-md-12.col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema6y7/img3.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-2.mt-2 Este integra los momentos de verdad y el ciclo del servicio en las actividades clave de la empresa, con el fin de brindar al cliente una mejor experiencia. El cliente es el centro y eje principal de la dinámica de la empresa, por tanto conocer su comportamiento, sus gustos, deseos, motivaciones y expectativas son fundamentales para los demás elementos que integran el triángulo como lo son la estrategia de servicio al cliente, el personal que estará al frente en la atención del cliente y los demás sistemas (establecimiento, procedimientos, normas, ambiente), que integran la manera cómo se va a prestar el servicio.

    separador
    #t_7_1.titulo-segundo.mb-4
      h2 7.1. Característica del triángulo del servicio

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
          p.p-4 El triángulo del servicio se construye a partir de las relaciones que tiene la empresa con los clientes cada vez que el servicio es solicitado, por tanto, la principal característica son los momentos de verdad. Son estos momentos los que la empresa tiene en cuenta para lograr la experiencia de servicio y esa estructura está diseñada para tal fin. 
        p Otras características son los requerimientos, procesos y procedimiento de cada momento de verdad, planear cada uno de esos encuentros con el objeto de que salga bien cada encuentro.
      .col-10.col-md-8.col-lg-4
        img(src='@/assets/curso/temas/tema6y7/img4.png', alt='')(data-aos="fade-left")

    separador
    #t_7_2.titulo-segundo.mb-4
      h2 7.2. Estructura del triángulo del servicio
    p.mb-4 Estos tres elementos componen la estructura del triángulo del servicio e interactúan con el cliente para mantener un nivel de percepción alto en el cliente.

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-4.col-md-12.col-sm-12
        img(src='@/assets/curso/temas/tema6y7/img5.png', alt='')
      .col-lg-8.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Estrategia de servicio al cliente")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Acciones que orientan a la empresa hacia lo que hace feliz al cliente.
          .row.col-xl-11.m-auto(titulo="Sistemas amables para el cliente")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Un sistema donde el personal atenderá al cliente, debe estar diseñado para la satisfacción y necesidades del cliente.
          .row.col-xl-11.m-auto(titulo="Personal capacitado para la atención al cliente")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Un personal con orientación de servicio, empático y debidamente entrenado al servicio de atender los requerimientos del cliente.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-md-12.col-lg-6
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 4. 
          | Triángulo de servicio
        figure
          img(src='@/assets/curso/temas/tema6y7/fig2.png', alt='La figura presenta un circulo con la palabra clientes en el medio, y tres recuadros alrededor donde se lee: sistemas amables para el cliente, estrategia de servicio y personal de contacto.')
        figcaption.mt-4 Nota. Adaptada de Albrecht (2006).

</template>

<script>
export default {
  name: 'Tema7',
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
