<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 6
      h1 Ciclo del servicio

    p Es una herramienta secuencial de pasos lógicos en la que existen interacciones que muestran el inicio del proceso de atención al cliente, puntos de contacto denominados momentos de verdad y el final del ciclo. Su objetivo se enfoca en el mejoramiento continuo para satisfacer las expectativas del cliente frente al producto o servicio. Este es un mapa de los momentos de verdad, desde el principio hasta que el cliente abandona el establecimiento.
    p.mb-4 En la siguiente figura se presenta el ciclo del servicio.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-12.col-lg-6
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 3. 
          | El ciclo del servicio
        img(src='@/assets/curso/temas/tema6y7/fig1.png', alt='La figura presenta un circulo, donde resaltan los “momentos de verdad y el inicio y fin del ciclo.')
        figcaption Nota. Adaptada de Albrecht (2006).

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-4
        img(src='@/assets/curso/temas/tema6y7/img1.png', alt='')
      .col-sm-12.col-md-12.col-lg-8
        p.mb-4 Esto inicia desde que el cliente muestra interés y se genera comunicación entre el cliente y la empresa, en el que se presenta una serie de actividades hasta llegar al final del proceso que el cliente considera y vuelve nuevamente a iniciarse. Para su elaboración se relaciona un círculo, y de forma secuencial, se presenta cada uno de los ciclos denominados momentos de verdad, estos deben ser numerados y se registran teniendo en cuenta el punto de vista del cliente; motivo por el cual se presentan de forma positiva o negativa de acuerdo con la percepción y sensación de él.
        p Los ciclos de servicio permiten a la empresa:
        .row.mt-4.bgazulclaro
          ul.lista-ul--color.fa-al.ps-5.mb-4.mt-4
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-0 Técnica para ayudar a la gente a cambiar sus hábitos.  
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-0 Que el empleado piense en el producto que él ofrece al cliente.  
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-0 Entender la realidad de la experiencia del servicio al cliente.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-0 Muestra el servicio como el cliente lo experimenta.

    p.mb-4 Prieto (2014) sugiere los siguientes pasos:

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-secundario--borde.p-4(titulo="Atender al cliente")
            p.ps-4 Ser una persona amable y empática, se recomienda que siga un protocolo de bienvenida y comportamiento corporal.
          .tarjeta.color-secundario--borde.p-4(titulo="Ofrecer su apoyo")
            p.ps-4 Buscar identificar su necesidad y dar respuestas concretas.
          .tarjeta.color-secundario--borde.p-4(titulo="Satisfacer la necesidad")
            p.ps-4 Buscar la solución y extender o complementar la solución.
          .tarjeta.color-secundario--borde.p-4(titulo="Monitorear la satisfacción del cliente")
            p.ps-4 Asegurarse de la satisfacción del cliente y despedirlo con protocolos.
      .col-8.col-md-7.col-lg-3
        img.mt-2(src='@/assets/curso/temas/tema6y7/img2.png', alt='')

    p.mb-4 Dicho eso, el foco vital de las organizaciones debe ser crear relaciones saludables con los clientes para conquistarlos en todos los puntos de contacto, es por ello que en el ciclo de vida del servicio se reconoce su importancia, características, las diferentes etapas que posee, así como los diferentes indicadores y métricas que permiten hacer una correcta medición del servicio, tal y como se presenta a continuación:

    .row
      .tarjeta.tarjeta--moradaclara.p-4
        LineaTiempoC.color-acento-contenido(text-small)
          .row(titulo="Importancia").align-items-center.justify-content-center
            .col-md-6.mb-4.mb-md-0
              h3.mb-4 Importancia del ciclo del servicio
              p.mb-4 El ciclo de servicio al cliente muestra el servicio como lo experimenta el cliente, permite identificar cuál es ese encuentro entre el cliente y el sistema (establecimiento físico, empleados, mercancía, ambiente) que causa la inconformidad del cliente y que debe ser solucionada.
              p Otra importancia significativa de los ciclos del servicio al cliente es que permiten conocer las debilidades y fortalezas que presenta la empresa al darse el contacto organización-cliente, además de permitir identificar aquello que debe ser mejorado y que le daría ventaja competitiva.
            .col-md-4
              img(src='@/assets/curso/temas/tema6y7/lt1-1.png', alt='Texto que describa la imagen')
          .row(titulo="Características").align-items-center.justify-content-center
            .col-md-6.mb-4.mb-md-0
              h3.mb-4 Características del ciclo del servicio
              p.mb-4 La principal característica del ciclo del servicio en el proceso son los encuentros o momentos de verdad entre el cliente y el sistema. La percepción que tenga el cliente de estos encuentros puede ser positiva o negativa, en función de cómo se haya sentido en el momento en que el asesor comercial o quien le ofrece el servicio lo haya atendido.
              p Otras características son los requerimientos, procesos y procedimiento de cada momento de verdad, planear cada uno de esos encuentros con el objeto de que salga bien cada encuentro.
            .col-md-4
              img(src='@/assets/curso/temas/tema6y7/lt1-2.png', alt='Texto que describa la imagen')
          .row(titulo="Etapas").align-items-center.justify-content-center
            .col-md-10.mb-4.mb-md-0
              h3.mb-4 Etapas del ciclo del servicio
              p.mb-4 Están relacionadas con la manera cómo el cliente toma su decisión de compra para satisfacer su necesidad. De tal forma que cuando el cliente define el sitio donde va a visitar cada paso que toma va conformando su ciclo de servicio. A continuación, se presenta como ejemplo el ciclo del servicio de un centro médico (Albrecht, 2006, p.41).
              .row.align-items-center.justify-content-center
                .col-6
                  ul.lista-ul--color.fa-al.mb-4
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Llamar al centro médico para pedir una cita.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Ir al centro médico a la hora fijada.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Buscar dónde estacionar el carro.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Entrar al centro médico y tratar de orientarse solo.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Leer los avisos para saber adónde ir.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Preguntar direcciones.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Tomar el ascensor y atravesar varios corredores.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Presentarse en la oficina de la administración para el examen.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Mostrar la tarjeta del seguro, llenar formas, etc.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Sentarse en la sala de espera hasta que llegue el turno.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Ir con la auxiliar al sitio del examen.
                .col-6
                  ul.lista-ul--color.fa-al.mb-4
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Dejarse tomar los signos vitales.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Analizar las condiciones físicas en una entrevista.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Pasar por una serie de pruebas y operaciones.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Tener una entrevista final con un médico.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Pedir y pagar la cuenta.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Buscar la salida del centro médico y regresar al carro.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Salir del parqueadero.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Esperar los resultados del examen.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Recibir los resultados, leerlos y reaccionar ante ellos.
                    li.mb-0 
                      i.fas.fa-check-circle
                      span.mb-0 Llamar al centro médico para algún tratamiento posterior si es necesario.
          .row(titulo="Medición").align-items-center.justify-content-center
            .col-md-6.mb-4.mb-md-0
              h3.mb-4 Medición del servicio
              p.mb-4 Se entiende los indicadores o métricas de satisfacción del cliente como aquellos datos que permiten medir el estado con relación al servicio o producto ofrecido. Serna (2007) señala indicadores de medición del servicio.
              p.mb-4 ¿Cómo medir la calidad en el servicio?
              ul.lista-ul--color.fa-al.mb-4
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Puntualidad en el servicio.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Puntualidad en la entrega del servicio.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Cumplimiento en el tiempo del ciclo del servicio.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Exactitud en el cumplimiento de los compromisos.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Relación beneficio – costo.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Personal calificado para el servicio adquirido.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Cumplimiento de los plazos acordados.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Amabilidad y buen trato en la prestación del servicio.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Servicio asociado a lo pactado.
            .col-md-4
              img(src='@/assets/curso/temas/tema6y7/lt1-3.png', alt='Texto que describa la imagen')







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
