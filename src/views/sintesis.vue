<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La atención al cliente es un valor agregado que se ofrece al consumidor que se interesa y/o compra el producto o servicio ofrecido por las empresas, en este componente se realiza un desglose detallado de las características, las ventajas y los conceptos importantes que tienen que ver con la atención y el servicio al cliente, competencia necesaria para un asesor comercial. En el siguiente diagrama se presenta una síntesis del contenido trabajado: 

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="En el diagrama se presentan las características de la atención al cliente relacionadas con el cliente, como la atención, las relaciones, la satisfacción y la fidelización; también se presentan las características relacionadas con el servicio como el ciclo, el triangulo, los momentos de verdad y la trazabilidad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
