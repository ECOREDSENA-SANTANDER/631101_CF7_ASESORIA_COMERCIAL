<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 5
      h1 Hallazgos en la atención al cliente

    .row.justify-content-center.align-items-center
      .col-12.col-md-8.col-lg-4
        img(src='@/assets/curso/temas/tema4y5/img2.png', alt='')
      .col-sm-12.col-md-12.col-lg-8
        p En la prestación del servicio por parte de la empresa y en la atención al cliente por parte de los empleados a parte de recibir al cliente y causarle una experiencia satisfactoria que haga que regrese, está conocer en qué momento de esos encuentros el cliente siente insatisfacción hacia el establecimiento, marca u otra causa que lo coloque en posición de perderlo. Tenga en cuenta que la prestación del servicio puede estar acompañada de la calidad del producto, de la capacitación de los empleados, de la empresa enfocada en el servicio, por ello, los clientes siempre están dispuestos a expresar su inconformidad.
        .cajon.color-acento-contenido.p-4
          p.p-3 Por tanto, la razón principal de alinear los esfuerzos y recursos para identificar inconformidades o hallazgos es la gestión de reclamos, quejas y peticiones de manera eficiente, que haga sentir al cliente que está siendo comprendido y atendido.

    separador
    #t_5_1.titulo-segundo.mb-4
      h2 5.1. Tipos de hallazgos
    p.mb-4 Desde el punto de vista del cliente cualquier evento que no esté en sus expectativas puede originar que no esté satisfecho y, corresponde a la empresa identificar qué tipo de incidencia lo afecta. La Cámara de Comercio de Cartagena (2014) define la manera de cómo identificar esos hallazgos:



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
