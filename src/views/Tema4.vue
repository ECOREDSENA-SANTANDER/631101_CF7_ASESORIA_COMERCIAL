<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 4
      h1 Fidelización al cliente

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-8
        p Para tener un cliente que siempre esté comprando o consumiendo los productos o servicios de la empresa, esta debe seguir el proceso de atraer y captar para luego fidelizar a los clientes, esta fidelización busca ante todo mantener relaciones duraderas con los clientes. 
        p Promove (2012) indica que la fidelización:
        .row.bgazulclaro.p-4.mb-4
          .col-1
            i.fas.fa-quote-left.comillamorada
          .col-9
            h4.mt-4 se entiende como una acción dirigida a conseguir que los clientes mantengan relaciones estables y continuadas con la empresa a largo tiempo” (p. 19).
          .col-1.mt-5
            i.fas.fa-quote-right.comillamorada
        p.mt-0 Tanto la fidelización de los  clientes como el asesor comercial son importantes para la empresa porque buscan que el cliente siga comprando y aumentando sus ventas. Tenga en cuenta que las acciones de fidelización se aplican a los clientes que vienen comprando y están satisfechos, a los demás se les recomienda otras acciones.
      .col-12.col-md-8.col-lg-4
        img(src='@/assets/curso/temas/tema4y5/img1.png', alt='')

    p.mb-5 De acuerdo con Promove (2019) para que una empresa tenga clientes fieles se debe tener en cuenta lo siguiente:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4y5/pc1.png', alt='Texto que describa la imagen')
          .tarjeta.bgpcmorada.text-white.p-3(x="54%" y="30%" numero="1")
            p.mt-4 Mantener calidad y seriedad en la relación.
          .tarjeta.bgpcmorada.text-white.p-3(x="74%" y="45%" numero="2")
            p.mt-4 Dar orientación al cliente sobre los procesos, beneficios y ventajas de los productos o servicios.
          .tarjeta.bgpcmorada.text-white.p-3(x="3%" y="45%" numero="3")
            p.mt-4 Sobre todo, inspirar confianza y respeto en el cliente.
          .tarjeta.bgpcmorada.text-white.p-3(x="10%" y="25%" numero="4")
            p.mt-4 Mantener una buena impresión en la presentación y movimientos corporales.
          .tarjeta.bgpcmorada.text-white.p-3(x="42%" y="50%" numero="5")
            p.mt-4 Mantenerse en contacto con ellos.
          .tarjeta.bgpcmorada.text-white.p-3(x="75%" y="65%" numero="6")
            p.mt-4 Acciones que propicien relaciones duraderas con los clientes.
          .tarjeta.bgpcmorada.text-white.p-3(x="15%" y="83%" numero="7")
            p.mt-4 Cupones descuento, donde el usuario puede recortar un cupón y obtendrá una rebaja en el precio de algún producto o servicio del establecimiento.
          .tarjeta.bgpcmorada.text-white.p-3(x="11%" y="67%" numero="8")
            p.mt-4 #[b Programa de puntos]. Tarjeta de puntos redimibles en productos.
          .tarjeta.bgpcmorada.text-white.p-3(x="11%" y="67%" numero="9")
            p.mt-4 #[b #[em Newsletter]]. Comunicación personalizada a sus correos electrónicos.
          .tarjeta.bgpcmorada.text-white.p-3(x="30%" y="13%" numero="10")
            p.mt-4 #[b Regalos.] Por cumplir cuotas de compra en un periodo de tiempo.
          .tarjeta.bgpcmorada.text-white.p-3(x="84%" y="21%" numero="11")
            p.mt-4 #[b Gestión de la relación con el cliente.] Invitar al cliente a participar en alguna actividad o promociones, por ejemplo el madrugón de precios.
          .tarjeta.bgpcmorada.text-white.p-3(x="90%" y="56%" numero="12")
            p.mt-4 #[b Club de clientes.] Grupos que la empresa organiza, por ejemplo, el club de la pintura reúne a todos los interesados en pintar, reciben cursos y promociones.



















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
