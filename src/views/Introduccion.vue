<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 A continuación, podrá consultar el video en el que se presenta la introducción y contextualización al componente formativo, donde se exponen los conceptos y temas abordados:

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-10
        figure
          .video
            iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/G8ZXauMjv1E?si=qTj-agvid009p0gM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video: Atención al cliente.



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
