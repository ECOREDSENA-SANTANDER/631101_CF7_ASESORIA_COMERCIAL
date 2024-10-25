<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 3
      h1 Satisfacción al cliente

    p La responsabilidad de las empresas en la satisfacción del cliente debe ser un objetivo de la calidad total, las organizaciones deben segmentar e identificar su cliente objetivo, esto les permitirá implementar el tipo de gestión determinada para cada negocio, determinando políticas y estrategias para cada proceso y la contribución de unas personas específicas.
    p Para lograr la satisfacción total del cliente es necesario hacer lo siguiente:

    .row.fondotema3.align-items-center.row.justify-content-center

        .row.justify-content-center
          .col-lg-10
            PasosA.color-acento-contenido.mb-0(tipo="l")
              .row.align-items-center.justify-content-center
                .col-lg
                  p.mb-0 Siempre hay que identificar las necesidades, deseos y expectativas de los clientes.
                .col-auto
                  figure(data-aos="zoom-in")
                    img.d-none.d-lg-block(src='@/assets/curso/temas/tema3/img1-1.png', alt='')
              .row.align-items-center.justify-content-center
                .col-auto
                  figure(data-aos="zoom-in")
                    img.d-none.d-lg-block(src='@/assets/curso/temas/tema3/img1-2.png', alt='')
                .col-lg
                  p Planificar el servicio en función de las necesidades, manifestando y exponiendo al cliente las posibilidades existentes que tiene la organización comercial para cubrir sus necesidades y expectativas, cumpliendo con los requerimientos exigidos.
              .row.align-items-center.justify-content-center
                .col-lg
                  p.mb-0 Se debe prestar el servicio de acuerdo con lo diseñado en función de los requerimientos y con los procesos acordados.
                .col-auto
                  figure(data-aos="zoom-in")
                    img.d-none.d-lg-block(src='@/assets/curso/temas/tema3/img1-3.png', alt='')
              .row.align-items-center.justify-content-center
                .col-auto
                  figure(data-aos="zoom-in")
                    img.d-none.d-lg-block(src='@/assets/curso/temas/tema3/img1-4.png', alt='')
                .col-lg
                  p.mb-0 Se debe evaluar la prestación del servicio, teniendo en cuenta las medidas internas y externas a través de indicadores y parámetros del servicio de calidad.

        .row.justify-content-center.mb-5.ps-5
          .col-sm-12.col-md-12.col-lg-8
            .row.mt-5
              .cajon.color-acento-contenido.p-4.mb-4
                p.p-3 NTC - ISO 9000-2015 es la norma técnica de gestión de la calidad vigente para el servicio al cliente. Las normas técnicas y de calidad están dirigidas a todas las entidades para mejorar el desempeño y la capacidad de proporcionar productos y servicios que cumplan con las necesidades y las expectativas del cliente.
            p La empresa debe mejorar la atención al cliente, prestando un servicio de información y consulta a usuarios de acuerdo con sus requerimientos, teniendo en cuenta las políticas institucionales y los términos establecidos por la ley, esto hecho de manera personal o por medios tecnológicos, aplicando actitudes y valores mediante la comunicación empresarial y las normas de gestión documental, de acuerdo con los estándares de calidad que garantice la atención al cliente.
          .col-12.col-md-8.col-lg-4
            img.mb-5.mt-4(src='@/assets/curso/temas/tema3/imagen1.png', alt='')

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
