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

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-4
        img(src='@/assets/curso/temas/tema4y5/img3.png', alt='')
      .col-sm-12.col-md-12.col-lg-8
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="P")
            .row.align-items-center.justify-content-center
              .col-md-5.mb-4.mb-md-0
                h4 Petición:
                p Facultad que tienen todas las personas de presentar solicitudes respetuosas a entidades de carácter público o privado, por motivos de interés general o particular, bajo la garantía de obtener una respuesta oportuna, clara, completa y de fondo.           
              .col-md-5
                img(src='@/assets/curso/temas/tema4y5/tab1-1.png', alt='Texto que describa la imagen')
          .py-3.py-md-4(titulo="Q")
            .row.justify-content-center.align-items-center
              .col-md-5.mb-4.mb-md-0
                h4 Quejas:
                p Manifestación de inconformidad sobre la irregularidad administrativa, una conducta incorrecta o acción irregular de un funcionario.      
              .col-md-5
                img(src='@/assets/curso/temas/tema4y5/tab1-2.png', alt='Texto que describa la imagen')
          .py-3.py-md-4(titulo="R")
            .row.justify-content-center.align-items-center
              .col-md-5.mb-4.mb-md-0
                h4 Reclamos:
                p Manifestación de inconformidad sobre la prestación de un servicio o deficiente actuación por parte de una autoridad administrativa.      
              .col-md-5
                img(src='@/assets/curso/temas/tema4y5/tab1-3.png', alt='Texto que describa la imagen')
          .py-3.py-md-4(titulo="S")
            .row.align-items-center.justify-content-center
              .col-md-5.mb-4.mb-md-0
                h4 Sugerencia:
                p Es la aportación de ideas o iniciativas para mejorar nuestra calidad.     
              .col-md-5
                img(src='@/assets/curso/temas/tema4y5/tab1-4.png', alt='Texto que describa la imagen')

    separador
    #t_5_2.titulo-segundo.mb-4
      h2 5.2. Acciones de mejora en la atención al cliente

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-4
        img(src='@/assets/curso/temas/tema4y5/img4.png', alt='')
      .col-sm-12.col-md-12.col-lg-8
        p.mb-4 La empresa y el asesor comercial deben tener siempre presente que el servicio es lo que los clientes piensan que es, por tanto, las acciones que se tomen deben ir dirigidas a llenar esas expectativas. 
        p.mb-4 Algunas acciones de mejora que las empresas pueden implementar para la prestación del servicio son:
        .row.mt-4.bgazulclaro
          ul.lista-ul--color.fa-al.ps-5.mb-5.mt-5
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-0 Capacitación a los empleados sobre cómo prestar el servicio.     
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-0 Claridad en los procesos del ciclo de servicio.     
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-0 Productos de reconocida calidad. 
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-0 Cumplimiento de la promesa de venta.
    p.mb-4 Es recomendable seguir los requisitos de la Norma ISO 9000 en lo referente al proceso para gestionar las reclamaciones de los clientes, enfocado en la atención a facilitar la satisfacción de los clientes y la mejora continua de la misma. Entre esas acciones la empresa debe contar con un proceso de gestión de reclamaciones (PQR) que procure la retención y la conversión de los clientes. 
    p #[b De acuerdo con IsoTools (2016) este proceso sería:]     

    .row
      SlyderF(columnas="col-lg-6 col-xl-4 col-md-6").mb-5
        .tarjeta.colorazulclaro.p-4
          .row.justify-content-center.p-4
            img.mt-2(src='@/assets/curso/temas/tema4y5/ico1-1.png' alt='AvatarTop').img95
            p.text-center.mt-4.mb-4(data-aos="fade-right") Asignar responsabilidades para gestionar las reclamaciones.
        .tarjeta.colorazulclaro.p-4
          .row.justify-content-center.p-4
            img.mt-2(src='@/assets/curso/temas/tema4y5/ico1-2.png' alt='AvatarTop').img95
            p.text-center.mt-4.mb-4(data-aos="fade-right") Considerar las diferentes opciones de denuncia (PQR) por parte del cliente y detallar las formas en que se considera aceptable esa reclamación.
        .tarjeta.colorazulclaro.p-4
          .row.justify-content-center.p-4
            img.mt-2(src='@/assets/curso/temas/tema4y5/ico1-3.png' alt='AvatarTop').img95
            p.text-center.mt-4.mb-4(data-aos="fade-right") Definir cómo gestionar las reclamaciones: utilizar un flujograma desde que se inicia la queja hasta darle solución.
        .tarjeta.colorazulclaro.p-4
          .row.justify-content-center.p-4
            img.mt-2(src='@/assets/curso/temas/tema4y5/ico1-4.png' alt='AvatarTop').img95
            p.text-center.mt-4.mb-4(data-aos="fade-right") Explicar cómo subir de nivel un problema. Referente a quiénes les toca dar solución a la reclamación.
        .tarjeta.colorazulclaro.p-4
          .row.justify-content-center.p-4
            img.mt-2(src='@/assets/curso/temas/tema4y5/ico1-5.png' alt='AvatarTop').img95
            p.text-center.mt-4.mb-4(data-aos="fade-right") Detallar el proceso de revisión continua de la reclamación.
        .tarjeta.colorazulclaro.p-4
          .row.justify-content-center.p-4
            img.mt-2(src='@/assets/curso/temas/tema4y5/ico1-6.png' alt='AvatarTop').img95
            p.text-center.mt-4.mb-4(data-aos="fade-right") Evaluar la eficacia de las medidas adoptadas para su gestión.











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
