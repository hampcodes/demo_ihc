# Prompt para diseñar la página "Contáctanos" con menú y formulario

## Enlace del archivo de Figma
[https://www.figma.com/design/QYk9qOk4PjtMUhPXoaodfe/demo?node-id=1-2&t=OWZq6mznFoHaXHlP-1 ]

## Objetivo
Diseñar una página sencilla para que cualquier persona pueda dejar su nombre y
correo, enviar el formulario y saber con claridad si el envío se realizó o si
debe corregir algo.

## Usuarios
Estudiantes y visitantes del sitio, con distintos niveles de experiencia digital.
Considera que algunos usarán el celular con una mano y que otros llegarán desde
un computador de escritorio.

## Formatos responsive
- Diseña una versión móvil de 390 x 844 px.
- Diseña una versión de escritorio de 1440 x 900 px.
- Conserva las mismas funciones, contenidos y jerarquía visual en ambas.
- En móvil usa el menú con el logotipo y un botón de menú (hamburguesa), y el
  formulario en una sola columna con ancho completo.
- En escritorio usa un menú superior con el logotipo a la izquierda y los
  enlaces a la derecha; el formulario va centrado en una card de 440 px de ancho.
- Adapta el menú, la card y los campos al espacio disponible; no escales
  simplemente la versión móvil.

## Estilo visual
- Diseño sencillo, limpio y fácil de entender.
- Colores principales: índigo (#4F46E5) y blanco, con fondo gris muy claro
  (#F1F5F9) detrás de la card.
- Texto en azul oscuro casi negro (#0F172A) y texto de apoyo en gris (#64748B).
- Tipografía Inter o una sans serif legible.
- Botones de ancho completo dentro de la card, con buen contraste.
- Usa Auto Layout y capas editables con nombres claros.
- Nombra las capas con la etiqueta HTML que les corresponde: nav.menu,
  a.logo, div.card, div.campo, input, button.boton.

## Guía de estilo
Crea una página independiente llamada "Guía de estilo" e incluye:
- Logotipo o nombre del sitio y reglas básicas de uso.
- Paleta de colores con nombre, muestra, código HEX y función de cada color:
  primary, primary-dark, bg, surface, text, text-muted y border. Agrega
  también los colores de estado: error, éxito y advertencia.
- Tipografía con familia, pesos y escala: título 32 Bold, subtítulo 24 Semi Bold,
  cuerpo 16 Regular, etiqueta 14 Medium y nota 12 Regular.
- Escala de espaciado: 8, 16, 24 y 32 px.
- Radios de borde (8 y 16 px), bordes y sombra de la card.
- Reglas de contraste y estado de foco visible en campos y botones.
- Componentes reutilizables con variantes y estados: normal, hover, focus,
  deshabilitado, error y éxito cuando corresponda.
- Ejemplos del menú, campo de texto, botón primario, card y mensaje de estado.
- Colores, espacios y radios definidos como variables, para pasarlos después
  a css/tokens.css.

## Pantallas que debe crear

1. Contáctanos (estado inicial)
- Menú superior con "Mi sitio" y los enlaces Inicio, Servicios y Contacto
  (Contacto marcado como página actual).
- Card con el título "Contáctanos".
- Texto de apoyo: "Déjanos tu nombre y correo y te responderemos pronto."
- Campo "Nombre" con ejemplo "Tu nombre".
- Campo "Correo" con ejemplo "tu@correo.com".
- Botón primario "Enviar".

2. Contáctanos con errores
- Los mismos elementos de la pantalla 1.
- Campo con error: borde de error, icono y mensaje breve debajo, por ejemplo
  "Escribe un correo válido, como nombre@correo.com".
- Los datos ya escritos se conservan.
- Mensaje general sobre el botón: "Revisa los campos marcados".

3. Enviando y mensaje de confirmación
- Estado "Enviando…" con el botón deshabilitado.
- Mensaje "Mensaje enviado correctamente" con un icono y texto.
- Resumen de lo enviado: nombre y correo.
- Botón secundario "Enviar otro mensaje".

## Requisitos de usabilidad y accesibilidad
- Cada campo debe tener una etiqueta visible sobre el campo.
- No depender solo del color para comunicar errores o éxito: usa icono y texto.
- Texto de al menos 14 px y área táctil de al menos 44 px de alto.
- Mostrar confirmación después de enviar el formulario.
- El menú debe indicar claramente la página actual.
- Utilizar textos breves y español sencillo.

## Componentes reutilizables
- Menú de navegación (escritorio y móvil).
- Campo de texto con estados normal, focus, error y éxito.
- Botón primario con estados normal, hover, deshabilitado y enviando.
- Card.
- Mensaje de estado (error y éxito).

## Aplicación de las 10 heurísticas de Nielsen en el diseño
Aplica estas diez heurísticas al diseñar las versiones móvil y de escritorio.
No se pide un reporte ni una página de evaluación: las heurísticas deben verse
reflejadas en las pantallas, los componentes y los mensajes del diseño.

1. Visibilidad del estado del sistema
La interfaz debe informar la página actual en el menú, si el formulario se está
enviando, si el envío tuvo éxito o si hay campos que corregir.

2. Correspondencia entre el sistema y el mundo real
Usa palabras conocidas por cualquier persona, como "Nombre", "Correo" y
"Enviar", y mensajes en lenguaje sencillo, sin términos técnicos.

3. Control y libertad del usuario
Permite corregir los datos antes de enviar y ofrece "Enviar otro mensaje"
después del envío. Ningún paso debe dejar a la persona sin salida.

4. Consistencia y estándares
Mantén los mismos colores, tipografía, botones, campos, mensajes y patrón de
menú en todas las pantallas y versiones.

5. Prevención de errores
Marca los campos obligatorios, usa el tipo de campo correcto para el correo y
deshabilita el botón mientras se envía para evitar envíos duplicados.

6. Reconocer antes que recordar
Muestra una etiqueta visible en cada campo y un ejemplo de lo que se espera,
como "tu@correo.com", para que el usuario no tenga que recordar nada.

7. Flexibilidad y eficiencia de uso
Permite completar y enviar el formulario solo con el teclado y aprovechar el
autocompletado del navegador para el nombre y el correo.

8. Diseño estético y minimalista
Presenta solo la información necesaria: título, una frase de apoyo, dos campos
y un botón, con jerarquía clara, espacios adecuados y una sola acción principal.

9. Ayudar a reconocer, diagnosticar y recuperarse de errores
Explica el error en lenguaje sencillo, indica cómo resolverlo y conserva los
datos escritos para que el usuario no tenga que empezar nuevamente.

10. Ayuda y documentación
Incluye una frase breve de ayuda junto al formulario e indica cuándo se
recibirá respuesta.

## Entrega
- Tres pantallas móviles de 390 x 844 px alineadas horizontalmente.
- Las mismas tres pantallas adaptadas a escritorio en 1440 x 900 px.
- Una página de guía de estilo completa.
- Las diez heurísticas aplicadas en las pantallas, los componentes y los
  mensajes; no se entrega un reporte de evaluación.
- Componentes y variantes reutilizables.
- Colores, tipografía, espacios y radios definidos como estilos o variables.
- Prototipo navegable del flujo: Contáctanos > Enviando > Mensaje enviado, y
  Contáctanos > Error > Corrección.
- Capas con nombres de etiqueta HTML (nav.menu, div.card, input, button.boton)
  para pasar luego el diseño a código.
- Todo el contenido debe ser editable; no usar una captura como diseño final.
