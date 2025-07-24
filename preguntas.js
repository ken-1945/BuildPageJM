const faqs = {
  seccional: [
    { pregunta: "¿Cuál es la vida útil de una puerta seccional?", respuesta: "Con mantenimiento, de 15 a 20 años." },
    { pregunta: "¿Se puede automatizar una puerta seccional existente?", respuesta: "Sí, siempre que tenga espacio y estructura adecuada." },
    { pregunta: "¿Qué materiales están disponibles para puertas seccionales?", respuesta: "Acero, aluminio y paneles con aislante térmico." },
    { pregunta: "¿Requiere mucho espacio interno?", respuesta: "Necesita espacio en el techo para el recorrido de los paneles." },
    { pregunta: "¿Cuánto demora la instalación?", respuesta: "De 1 a 2 días según las condiciones del garaje." },
    { pregunta: "¿Son seguras contra robos?", respuesta: "Sí, cuentan con cierres automáticos y seguros." },
    { pregunta: "¿Se puede personalizar el color?", respuesta: "Sí, hay varios colores y texturas disponibles." },
    { pregunta: "¿Necesita mantenimiento frecuente?", respuesta: "Revisión cada 6 meses y lubricación de piezas móviles." },
    { pregunta: "¿Hace ruido al abrirse?", respuesta: "Con instalación correcta y mantenimiento, el ruido es mínimo." },
    { pregunta: "¿Qué pasa si se va la luz?", respuesta: "Se puede operar manualmente con un desbloqueo de emergencia." },
  ],
  levadiza: [
    { pregunta: "¿Qué espacio requiere una puerta levadiza?", respuesta: "Aproximadamente 30 cm de espacio libre en la parte superior." },
    { pregunta: "¿Es ruidosa al operar?", respuesta: "Con un motor adecuado y mantenimiento, el ruido es bajo." },
    { pregunta: "¿Se puede automatizar una puerta levadiza manual?", respuesta: "Sí, instalando un motor compatible." },
    { pregunta: "¿Qué mantenimiento necesita?", respuesta: "Lubricación de ejes y revisión de resortes cada 6 meses." },
    { pregunta: "¿Son resistentes al clima?", respuesta: "Sí, están diseñadas para resistir humedad y sol." },
    { pregunta: "¿Puedo personalizar el color?", respuesta: "Sí, con pintura o paneles decorativos." },
    { pregunta: "¿Cuánto tiempo tarda la instalación?", respuesta: "De 4 a 8 horas en promedio." },
    { pregunta: "¿Qué sucede si hay un corte de luz?", respuesta: "Pueden operarse manualmente con un sistema de desbloqueo." },
    { pregunta: "¿Cuánto pesa una puerta levadiza?", respuesta: "Depende del material, pero suelen pesar entre 40 y 80 kg." },
    { pregunta: "¿Cuánto dura un motor para puerta levadiza?", respuesta: "De 8 a 12 años con uso adecuado." },
  ],
  corrediza: [
    { pregunta: "¿Qué espacio se necesita para instalar una puerta corrediza?", respuesta: "Se necesita espacio lateral igual al ancho de la puerta." },
    { pregunta: "¿Pueden instalarse en terrenos inclinados?", respuesta: "Sí, con un diseño de riel adecuado." },
    { pregunta: "¿Qué pasa si hay un corte de luz?", respuesta: "Puede operarse manualmente con desbloqueo de emergencia." },
    { pregunta: "¿Qué mantenimiento requieren?", respuesta: "Limpieza de rieles y lubricación mensual." },
    { pregunta: "¿Son seguras frente a robos?", respuesta: "Sí, con sistemas de cierre automático y robustez del material." },
    { pregunta: "¿Se puede automatizar una puerta corrediza existente?", respuesta: "Sí, con un motor compatible y ajustes en el riel." },
    { pregunta: "¿Qué materiales están disponibles?", respuesta: "Hierro, acero y aluminio principalmente." },
    { pregunta: "¿Qué velocidad de apertura tienen?", respuesta: "Depende del motor, entre 10 a 20 segundos según tamaño." },
    { pregunta: "¿Puedo controlar la puerta con control remoto?", respuesta: "Sí, incluye sistemas de control a distancia." },
    { pregunta: "¿Tienen sensores de seguridad?", respuesta: "Sí, pueden incluir sensores antiaplastamiento y fotoceldas." },
  ],
  batiente: [
    { pregunta: "¿Qué espacio se requiere para puertas batientes?", respuesta: "Un área libre del ancho de la puerta para su apertura completa." },
    { pregunta: "¿Pueden automatizarse puertas batientes existentes?", respuesta: "Sí, según el peso y estructura de la puerta." },
    { pregunta: "¿Qué mantenimiento necesitan?", respuesta: "Lubricación de bisagras y revisión de motores cada 6 meses." },
    { pregunta: "¿Se pueden instalar en entradas inclinadas?", respuesta: "Sí, con motores especiales de brazo articulado." },
    { pregunta: "¿Qué materiales están disponibles?", respuesta: "Hierro, acero galvanizado y aluminio." },
    { pregunta: "¿Tienen sensores de seguridad?", respuesta: "Sí, se pueden instalar fotoceldas de seguridad." },
    { pregunta: "¿Qué sucede si hay un corte de luz?", respuesta: "Pueden abrirse manualmente con desbloqueo." },
    { pregunta: "¿Qué tan seguras son?", respuesta: "Con cerraduras automáticas y motores con bloqueo son seguras." },
    { pregunta: "¿Qué rango de peso soporta un motor de puerta batiente?", respuesta: "Desde 200 kg hasta 1000 kg por hoja según modelo." },
    { pregunta: "¿Cuánto tiempo tarda la instalación?", respuesta: "De 1 a 2 días dependiendo de las condiciones del lugar." },
  ],
  enrollable: [
    { pregunta: "¿Ocupan espacio en el techo?", respuesta: "No, se enrollan en un eje en la parte superior de la abertura." },
    { pregunta: "¿Son seguras contra robos?", respuesta: "Sí, con sistemas de bloqueo automático." },
    { pregunta: "¿Se pueden automatizar puertas enrollables existentes?", respuesta: "Sí, con motores tubulares o laterales." },
    { pregunta: "¿Qué materiales se utilizan?", respuesta: "Aluminio, acero galvanizado o acero inoxidable." },
    { pregunta: "¿Qué mantenimiento requieren?", respuesta: "Limpieza mensual y lubricación de guías." },
    { pregunta: "¿Se puede controlar con control remoto?", respuesta: "Sí, incluye sistemas de control remoto." },
    { pregunta: "¿Qué sucede si hay un corte de luz?", respuesta: "Pueden operarse manualmente con sistema de manivela." },
    { pregunta: "¿Son ruidosas?", respuesta: "Con instalación adecuada, el ruido es mínimo." },
    { pregunta: "¿Cuánto tiempo tarda la instalación?", respuesta: "De 4 a 8 horas según el tamaño." },
    { pregunta: "¿Se pueden usar para locales comerciales?", respuesta: "Sí, son ideales para tiendas y almacenes." },
  ]
};

function mostrarFAQ(tipo) {
  const container = document.getElementById('faqContainer');
  container.innerHTML = ''; 
  const preguntas = faqs[tipo];

  preguntas.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('accordion-item');

    itemDiv.innerHTML = `
      <h2 class="accordion-header" id="heading${tipo}${index}">
        <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${tipo}${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${tipo}${index}">
          ${item.pregunta}
        </button>
      </h2>
      <div id="collapse${tipo}${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${tipo}${index}" data-bs-parent="#faqContainer">
        <div class="accordion-body">
          ${item.respuesta}
        </div>
      </div>
    `;
    container.appendChild(itemDiv);
  });
}
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash === '#faq' || true) { // siempre carga seccional al entrar
    mostrarFAQ('seccional');
  }
});