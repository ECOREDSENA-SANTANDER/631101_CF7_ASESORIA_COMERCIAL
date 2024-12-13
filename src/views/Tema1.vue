<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 1
      h1 Atención al cliente
    
    p.mb-4 En la siguiente presentación encontrará conceptos clave en la atención al cliente.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tarjeta.tarjeta--morada
          SlyderA(tipo="b").p-4
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0 
                p(data-aos="zoom-in-left") Para el mercadeo, una estrategia de servicio al cliente significa lograr la más alta y agradable experiencia del cliente. Atender al cliente es una habilidad que el vendedor debe tener como parte de la aplicación del proceso de la venta, de él depende en gran manera captar y fidelizar los clientes con apoyo de la aplicación de las técnicas de venta.
              .col-lg-4.col-md-10.mb-4.mb-md-0 
                figure
                  img.mt-4(src='@/assets/curso/temas/tema1/sly1-1.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0 
                p(data-aos="zoom-in-left") Para poder entender cómo atender al cliente es importante conocer el servicio al cliente. Para Da Silva (2020) “la atención al cliente se centra en la resolución de problemas, el manejo de quejas y el soporte técnico”, mientras el servicio al cliente engloba una serie de actividades indispensables para poder atender al cliente.
              .col-lg-4.col-md-10.mb-4.mb-md-0 
                figure
                  img.mt-4(src='@/assets/curso/temas/tema1/sly1-2.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0 
                p(data-aos="zoom-in-left") Respecto al servicio al cliente Da Silva (2020) manifiesta que “es un conjunto de prácticas e interacciones a lo largo del ciclo de ventas, cuyo objetivo es asegurar que se cumplan las necesidades y expectativas del consumidor”.
              .col-lg-4.col-md-10.mb-4.mb-md-0 
                figure
                  img.mt-4(src='@/assets/curso/temas/tema1/sly1-3.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-md-0 
                p(data-aos="zoom-in-left") El servicio al cliente lo estructura la empresa para poder satisfacer una necesidad, por ejemplo, el transporte, la empresa necesita crear toda una serie de infraestructura y actividades que apoyen el servicio, y la interacción entre personas es la atención que procura resolver una situación o problema a un cliente.
              .col-lg-4.col-md-10.mb-4.mb-md-0 
                figure
                  img.mt-4(src='@/assets/curso/temas/tema1/sly1-4.png', alt='Texto que describa la imagen')
        
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-4.p-0.mb-0.mt-0
        img(data-aos="fade-right")(src='@/assets/curso/temas/tema1/img1.png', alt='')
      .col-sm-12.col-md-12.col-lg-6
        .row.bgazulclaro
          p.p-4.mt-5.mb-4 Con base en los conceptos anteriores se puede expresar que el servicio es el conjunto de actividades que se realizan para satisfacer las necesidades de los clientes, desde que tienen contacto con la empresa hasta finalizar el ciclo del servicio. Es importante anotar que el asesor comercial de manera individual se acerca al cliente teniendo en cuenta sus características, sus necesidades y expectativas; por lo anterior, se debe hacer el seguimiento para identificar no solo esos comportamientos para realizar las ventas sino igualmente en la postventa.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Servicio visible & Servicio invisible

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El servicio se ubica en un plano visible e invisible para el cliente, a ambos se le debe dar absoluta prioridad por posicionamiento de la marca y por razones de normatividad legal. El servicio invisible para el cliente es aquel que no está a la vista, pero que es necesario para producir el servicio y entregarlo al servicio visible, por ejemplo, un restaurante para entregar el servicio de comidas necesita la cocina, baños, área de servicios, entre otros, aspectos que no ve el cliente. 

    p.mb-4 El servicio visible para el cliente es donde se recibe al cliente, el cual consta de:

    .row.mb-4
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              img.p-5(src='@/assets/curso/temas/tema1/ico1-1.png', alt='')
              h5.text-center Contexto inanimado
              p.text-center La oficina de un agente de seguros, escritorios, teléfonos, PC, etc.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tar1-1.png')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              img.p-5(src='@/assets/curso/temas/tema1/ico1-2.png', alt='')
              h5.text-center Personal de contacto
              p.text-center Los empleados que interactúan con el cliente.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tar1-2.png')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              img.p-5(src='@/assets/curso/temas/tema1/ico1-3.png', alt='')
              h5.text-center Prestadores de servicios
              p.text-center Son quienes prestan el servicio directamente al cliente.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tar1-3.png')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              img.p-5(src='@/assets/curso/temas/tema1/ico1-4.png', alt='')
              h5.text-center Otros Clientes
              p.text-center Los clientes que reciben el mismo servicio y pueden influir de manera positiva o negativa en su uso futuro.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tar1-4.png')})`}")

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-md-12.col-lg-9
        p.mb-2 Las estructuras organizacionales orientadas al mercado dan importancia a la experiencia del consumidor, a sus empleados de base frente a una estrategia de servicio al cliente, utiliza funciones internas para ayudar a los trabajadores a cumplir con los objetivos de servir a los clientes, compartiendo la responsabilidad que implica alcanzar los resultados del negocio, mientras las estructuras organizacionales orientadas a lo tradicional tienden a operar proyectos enormes que conllevan mucho tiempo de implementación, los empleados al frente de la línea de servicios son los menos importantes, cuando en ellos recae el cara a cara con el cliente.
        p A través de la siguiente figura puede ver la estructura organizacional tradicional respecto a la orientada al mercado.  
      .col-8.col-md-6.col-lg-3
        img(data-aos="fade-left")(src='@/assets/curso/temas/tema1/img3.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6(data-aos="fade-right")
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 1. 
          | Estructura organizacional tradicional vs. orientada al mercado
        img(src='@/assets/curso/temas/tema1/fig1.png', alt='La figura presenta dos pirámides, en la primera la base es el cliente, seguido de los empleados de servicio al cliente, la gerencia media, y en la punta superior se encuentra el CEO. La segunda pirámide está invertida y en la punta, en la parte de abajo, se encuentra el CEO, seguido de la gerencia media, luego los empleados de servicio al cliente y por último y más grande los clientes.')
        figcaption.text-center Nota. Adaptada de Albrecht (2006).

    separador
    #t_1_1.titulo-segundo.mb-4
      h2 1.1. Características de la atención al cliente
    p.mb-4 Para la prestación del servicio que requiere cualquier actividad se debe tener en cuenta unas características, que el vendedor debe recordar. De acuerdo con la página web Beetrack se señala algunas como:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-left")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/pc1.png', alt='Texto que describa la imagen')
          .tarjeta.bgpcmorada.text-white.p-3(x="14%" y="61%" numero="1")
            .h5.mt-4 Empatía por las necesidades del comprador
            p.mt-4 Capacidad de interesarse por las demás personas y ayudar en la solución de sus problemas.
          .tarjeta.bgpcmorada.text-white.p-3(x="79%" y="62%" numero="2")
            .h5.mt-4 Servicio ágil y resolutivo
            p.mt-4 El solo deseo de atender bien a la persona no es suficiente, la empresa debe contar de manera organizada para hacer efectiva las PQR que realicen los clientes.
          .tarjeta.bgpcmorada.text-white.p-3(x="58%" y="23%" numero="3")
            .h5.mt-4 Anticiparse a los posibles problemas
            p.mt-4 El vendedor debe ser proactivo, adelantarse a situaciones para dar solución antes que el cliente lo detecte, por ejemplo, si un producto que se vendió tiene fallas, recogerlo cuanto antes.
          .tarjeta.bgpcmorada.text-white.p-3(x="43%" y="50%" numero="4")
            .h5.mt-4 Comunicación clara, fluida y concisa
            p.mt-4 El servicio ayuda a la empresa y el vendedor a tener una relación duradera y rentable.
          .tarjeta.bgpcmorada.text-white.p-3(x="85%" y="15%" numero="5")
            .h5.mt-4 Experiencia personalizada
            p.mt-4 El trato personalizado de frente al cliente y enfocado en sus necesidades deja gratas experiencias, también puede realizarse utilizando la omnicanalidad dando respuestas inmediatas.
          .tarjeta.bgpcmorada.text-white.p-3(x="31%" y="26%" numero="6")
            .h5.mt-4 Sensación de haber recibido un servicio excelente
            p.mt-4 Problema resuelto a satisfacción, es cliente que vuelve a comprar.

    p.mb-4 Estas características pueden ser otras asociadas a la actividad que desarrolla la empresa, con seguridad una empresa de servicios médicos, logística o comercial tiene diferentes estructuras de servicio; sin embargo, la prestación del servicio cumple las siguientes características:

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-12
        TabsA.color-acento-botones
          .tarjeta.color-secundario--borde.p-4(titulo="Son intangibles")
            p.ps-4 Los servicios son intangibles, estos no se pueden tocar, oler, no tienen acceso a la propiedad, no se pueden cargar, ni llevar.
          .tarjeta.color-secundario--borde.p-4(titulo="Son indivisibles")
            p.ps-4 Son los servicios que se le prestan a todos por igual, independientemente de lo que haya pagado.
          .tarjeta.color-secundario--borde.p-4(titulo="Son heterogéneos")
            p.ps-4 Estos servicios son muy diversos y variados, raramente coinciden entre sí y usualmente se prestan muchas veces con relación al cliente.
          .tarjeta.color-secundario--borde.p-4(titulo="No se pueden conservar")
            p.ps-4 Estos servicios no se pueden almacenar, ni llevarlos por partes, todos deben consumirse.

    separador
    #t_1_2.titulo-segundo.mb-4
      h2 1.2. Finalidad de la atención al cliente

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-md-8.col-lg-4.sobavatar1.d-none.d-lg-block(data-aos="fade-right")
        img(src="@/assets/curso/temas/tema1/img5.png", alt="alt")
      .col-sm-12.col-md-12.col-lg-6(data-aos="fade-left")
        .bgavatarazulclaro.p-4
          p.p-5.moverderecha1 La atención y el servicio al cliente además de ofrecer experiencias significativas a los clientes, tienen entre sus fines el fortalecimiento de la marca, el posicionamiento, y captar, retener y fidelizar clientes.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
