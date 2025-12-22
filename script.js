// Tomar todos los inputs
const blanks = Array.from(document.querySelectorAll('.blank'));
const btnGenerar = document.getElementById('btn-generar');
const btnLimpiar = document.getElementById('btn-limpiar');
const btnCopiar = document.getElementById('btn-copiar');
const resultado = document.getElementById('resultado');
const textoResultado = document.getElementById('texto-resultado');

// Texto base con marcadores {0}, {1}, ...
const plantilla = `Quién diría que todo empezó con un simple “¿Qué onda?” y hoy no sé en qué momento llegamos a un “Te amo, preciosa”. Pero aquí estamos, en medio de luces, risas y ese aire navideño que huele a esperanza, sabiendo que no hay regalo más bonito que tenerte cerquita.

La Navidad siempre tuvo su magia, pero desde que estás tú, todo brilla distinto. Tu voz es mi villancico favorito, y tus abrazos, el abrigo que quiero cuando el frío se cuela por las calles.

Eres mi diciembre perfecto: cálida, caótica y con esa chispa que hace que incluso el caos se sienta hogar.

A veces pienso que lo nuestro tiene el mismo peso que Ameri para Duki: no es solo una palabra, es ese lugar soñado al que quiero llegar contigo. Ese rincón donde hay risas, amor del bueno y tazas de chocolate compartidas mientras el mundo afuera se llena de luces.

Tú eres mi destino favorito, mi Ameri personal, el futuro donde nuestras locuras se hacen recuerdos y nuestras promesas suenan más dulces que cualquier noche de paz.

Porque si Duki tiene su Sol y Luna, yo tengo mi versión más sincera: tú, con tus enojos diminutos, tus abrazos gigantes y esa manera de hacerme sentir en casa incluso lejos de todo.

No necesito árboles perfectos ni regalos envueltos con moños brillantes. Mi Navidad eres tú: nuestras carcajadas, nuestros planes sin rumbo y los besos cálidos que hacen que cada día sea un diciembre eterno.

Y si esto fuera un mundo de bloques, como en Minecraft, te construiría un refugio con vistas al amanecer, con flores en la entrada y una cama para dos, donde cada bloque colocado sea una prueba de que quiero hacer de ti mi hogar. Ahí, entre cofres llenos no de diamantes sino de recuerdos, guardaría cada risa tuya como si fuera el ítem más raro del juego.

Cuando pienso en ti, también me viene a la mente la hermosura silenciosa de Hollow Knight, ese mundo lleno de sombras bellas y rincones ocultos que solo se revelan con paciencia y corazón. Así eres tú para mí: un universo profundo donde incluso la melancolía se vuelve arte, y cada mirada tuya es como encontrar un nuevo rincón de Hallownest que me invita a explorar más.

Y así como Luffy solo quiere ser libre y se emociona por la carne más que por cualquier tesoro, yo quiero una libertad contigo: la de reír sin miedo, de ser quienes somos al cien, de buscarte una y otra vez como si fueras mi One Piece personal. Tus besos son mi banquete favorito, mi energía, mi motivo para seguir navegando incluso cuando el mar se pone bravo.

A veces siento que mi historia se parece un poco a la de Rei Ayanami, que fue creada con un propósito que al inicio parecía frío y distante, hasta que Shinji empezó a darle otro sentido a su existencia. Tal vez yo también estaba medio perdido hasta que llegaste tú, y de pronto todo lo que era gris empezó a tomar color, como si hubieras sido diseñada para encajar justo en el huequito que tenía el alma.

Quiero que sepas que si el mundo fuera un mapa gigante, lo recorrería entero solo para encontrarte de nuevo, como si cada bioma, cada reino y cada isla escondida me fueran guiando hacia ti. Serías ese punto en el mapa marcado con una “X” que no es un tesoro cualquiera, sino el lugar donde finalmente puedo decir: “Aquí me quedo, aquí es”.

No sé en qué momento pasamos de un simple “¿Qué onda?” a este nivel de locura compartida, pero me encanta. Me encanta la forma en la que tus enojos se deshacen con un abrazo, cómo tus risas hacen ruido en mi pecho incluso cuando no estás, y cómo tus besos se sienten como ese respawn seguro al que siempre quiero volver.

Así que sí, empezamos con un “¿Qué onda?” medio X, pero hoy solo sé decirte: Te amo, preciosa. Gracias por ser mi locura favorita, mi abrazo con olor a coco jajaja y la melodía que hace que esta Navidad suene a amor verdadero y con un final abierto lleno de aventuras por escribir a tu lado.`;

// Generar historia
btnGenerar.addEventListener('click', () => {
  const valores = blanks.map(input => input.value.trim());

  // Animación de pequeños errores: marcar vacíos
  blanks.forEach((input, i) => {
    if (!valores[i]) {
      input.classList.add('shake');
      setTimeout(() => input.classList.remove('shake'), 300);
    }
  });

  // Rellenar vacíos con texto por defecto suave
  const rellenos = valores.map((v, i) => v || obtenerFallback(i));

  let historia = plantilla;
  rellenos.forEach((valor, index) => {
    const regex = new RegExp(`\\{${index}\\}`, 'g');
    historia = historia.replace(regex, valor);
  });

  textoResultado.textContent = historia;
  resultado.classList.remove('oculto');
});

// Limpiar
btnLimpiar.addEventListener('click', () => {
  blanks.forEach(i => i.value = '');
  resultado.classList.add('oculto');
  textoResultado.textContent = 'PRUEBA';
  blanks[0].focus();
});

// Copiar
btnCopiar.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(textoResultado.textContent);
    btnCopiar.textContent = '¡Copiado! 🎁';
    setTimeout(() => btnCopiar.textContent = 'Copiar para enviar 💌', 2000);
  } catch (e) {
    alert('No se pudo copiar. Intenta seleccionar y copiar manualmente.');
  }
});

// Fallbacks por si dejan espacios vacíos
function obtenerFallback(index) {
  const opciones = {
    0: 'suave',
    1: 'plaza principal',
    2: 'ventana',
    3: 'inmensamente tierna',
    4: 'esta Navidad quiero todas contigo',
    5: 'chocolate y canela',
    6: 'mano',
    7: 'chocolate',
    8: 'rojo',
    9: 'abrazo',
    10: 'seguir soñando'
  };
  return opciones[index] || 'siempre sonreír';
}

// Pequeña animación CSS por JS
const style = document.createElement('style');
style.textContent = `
  .shake {
    animation: shake 0.3s;
  }
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    50% { transform: translateX(2px); }
    75% { transform: translateX(-2px); }
    100% { transform: translateX(0); }
  }
`;
document.head.appendChild(style);
