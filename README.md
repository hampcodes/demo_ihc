# demo_ihc

Página de contacto responsive en HTML, CSS y JavaScript puro, implementada a partir de los mockups de Figma **demo** (Desktop 1440×900 y Móvil 390×844).

## Estructura

```
demo_ihc/
├── index.html        # Página: barra de navegación y formulario "Contáctanos"
├── css/
│   ├── tokens.css    # Design tokens (colores, tipografía, espaciado, radios, sombra, layout)
│   └── style.css     # Estilos de los componentes, basados en los tokens
├── js/
│   └── menu.js       # Abre y cierra el menú hamburguesa en móvil
└── img/              # Imágenes (vacía por ahora)
```

## Uso

No requiere instalación ni compilación. Abre `index.html` en el navegador.

## Guía de estilo

Los tokens viven en [css/tokens.css](css/tokens.css) como variables CSS.

| Token | Valor |
|---|---|
| `--color-primary` | #4f46e5 |
| `--color-text` | #0f172a |
| `--color-text-muted` | #64748b |
| `--color-surface` | #ffffff |
| `--color-border` | #cbd5e1 |
| `--color-bg` | #f1f5f9 |

- **Tipografía:** Inter (400, 500, 600, 700), cargada desde Google Fonts. Tamaños de 14, 16, 20, 24 y 32 px.
- **Radios:** 8 px (campos y botón) y 16 px (tarjeta).
- **Sombra de tarjeta:** `0 4px 12px rgba(15, 23, 41, 0.08)`.

## Responsive

| Ancho | Versión | Diferencias |
|---|---|---|
| ≥ 768 px | Escritorio | Enlaces visibles en la barra, márgenes de 64 px, título de 32 px |
| < 768 px | Móvil | Botón hamburguesa, márgenes de 16 px, título de 24 px |

El punto de corte de 768 px es una decisión de implementación; Figma solo define los frames de 390 px y 1440 px.

## Convención de nombres

Las clases siguen una nomenclatura tipo BEM, heredada de los nombres de capa del diseño: `menu`, `menu__lista`, `menu__link--activo`, `card`, `campo`, `boton`.

## Diseño

Mockups en Figma: <https://www.figma.com/design/QYk9qOk4PjtMUhPXoaodfe/demo>
