# CLAUDE.md

> Documento vivo. Toda persona o IA que abra este proyecto debe leer este archivo antes de proponer cambios o respuestas. Se actualiza al cerrar cada sesión de trabajo significativa.

---

## 1. Proyecto

- **Nombre**: IFC-Viewer
- **Tipo**: Aplicación web para visualización y análisis de modelos IFC (Industry Foundation Classes).
- **Desarrollador**: Juan, en solitario, desde Mataró (Barcelona, España).
- **Visión a medio plazo**: Visor IFC funcional con capacidades de medición, anotaciones y, eventualmente, gestión multi-modelo. Posibilidad futura de empaquetado como aplicación de escritorio (Electron).
- **Repositorio**: pendiente de inicializar en Git/GitHub.

## 2. Modo de colaboración

Este proyecto se desarrolla con asistencia activa de Claude, tanto en chat (claude.ai) como en Claude Code dentro de VSCode. Las siguientes reglas son la base del trabajo y son **vinculantes** para cualquier asistente que intervenga.

### Reparto de roles

- **Claude escribe el código.** Juan no parte de cero ni teclea desde memoria.
- **Juan revisa, entiende y valida.** Antes de avanzar, Juan debe poder explicar con sus palabras qué hace cada bloque relevante. Si no puede, se para y se aclara antes de continuar.
- **Decisiones de producto y arquitectura las toma Juan.** Claude propone opciones, expone trade-offs; Juan elige.

### Niveles de profundidad pedagógica

- **Conceptos web (JS/TS, bundlers, frameworks, ecosistema npm)**: explicación **sintética**. Lo justo para leer y entender, sin micro-detalle. Si Juan pide más profundidad puntualmente, se da.
- **Conceptos BIM / IFC / Three.js / That Open**: explicación **profunda**. Aquí se invierte tiempo en formato de datos, arquitectura interna, decisiones técnicas, trade-offs de rendimiento.

### Reglas anti-"vibe coding"

- No aceptar código sin entender qué hace.
- Antes de tareas no triviales en Claude Code: usar **modo plan** (Shift+Tab dos veces) para revisar el enfoque antes de generar código.
- Cuando Claude Code proponga ediciones, revisarlas antes de aprobar. **No usar auto-accept** durante esta fase de aprendizaje.
- Dedicar aproximadamente un 10-15% del tiempo a escribir pequeñas piezas a mano (utilidades, conversores, helpers) para mantener los fundamentos activos.

## 3. Stack y herramientas

| Componente   | Versión   | Rol                                          |
|--------------|-----------|----------------------------------------------|
| Node.js      | v24.12.0  | Runtime de JavaScript para tooling           |
| npm          | v11.7.0   | Gestor base (no se usa directamente)         |
| pnpm         | v10.33.2  | Gestor de paquetes principal                 |
| TypeScript   | 6.0.3     | Lenguaje principal (modo estricto pendiente) |
| Vite         | 8.0.13    | Bundler y servidor de desarrollo             |

### Dependencias previstas (aún no instaladas)

Cuando entremos en Fase 1, se incorporarán:

- `@thatopen/components` — componentes core de That Open Company
- `@thatopen/components-front` — componentes con UI integrada
- `@thatopen/fragments` — formato de datos optimizado para web
- `three` — motor de renderizado 3D (dependencia transitiva, pero conviene fijarla)

## 4. Estructura del proyecto

```
IFC-Viewer/
├── public/           # Archivos estáticos servidos sin procesar
│   ├── favicon.svg
│   └── icons.svg
├── src/              # Código fuente (única carpeta que se edita a diario)
│   └── main.ts       # Punto de entrada de la aplicación
├── node_modules/     # Dependencias instaladas (no se sube a Git)
├── index.html        # Cáscara HTML mínima
├── package.json      # Identidad del proyecto y dependencias
├── pnpm-lock.yaml    # Versiones exactas (sí se sube a Git)
├── tsconfig.json     # Configuración de TypeScript
├── .gitignore        # Archivos excluidos de Git
└── CLAUDE.md         # Este archivo
```

## 5. Comandos habituales

```bash
# Instalar/actualizar dependencias listadas en package.json
pnpm install

# Arrancar servidor de desarrollo (http://localhost:5173)
pnpm dev

# Compilar a producción (genera carpeta dist/)
pnpm build

# Servir la build localmente para probarla antes de desplegar
pnpm preview
```

## 6. Plan de fases

- **Fase 0 — Entorno**: Node, pnpm, scaffolding Vite, primer arranque. ✅ **Completada.**
- **Fase 1 — Fundamentos IFC y That Open**: Comprensión profunda del formato IFC, conceptos clave de That Open (fragments, World, Scene, Components), arquitectura de la librería. Carga del primer modelo IFC en pantalla.
- **Fase 2 — TypeScript con criterio**: Activar modo estricto, refactor por responsabilidades, separación core/UI.
- **Fase 3 — Interactividad**: Selección de elementos, panel de propiedades, árbol del modelo.
- **Fase 4 — Persistencia y usuarios**: Backend (probablemente Supabase) cuando lo justifique alguna funcionalidad concreta.
- **Fase 5 — Calidad**: Tests (Vitest unidad, Playwright E2E), CI en GitHub Actions.
- **Fase 6 — Distribución**: Decisión sobre formato final (web pública, SaaS, Electron, o combinación).

Cada fase puede durar días o semanas. El ritmo lo marca Juan, con 5-10h semanales de disponibilidad realista.

## 7. Estado actual

**Fase 0 completada.** El proyecto arranca correctamente con `pnpm dev` y sirve la plantilla por defecto de Vite en `http://localhost:5173`.

### Próximos pasos inmediatos

1. **Limpiar la plantilla decorativa** de `src/main.ts` y `src/style.css`: vaciar el contenido del `<div id="app">` para dejar un lienzo en blanco sobre el que construir.
2. **Iniciar Fase 1**:
   - Profundizar en el formato IFC: versiones, estructura, qué entra al exportar desde Revit, qué se pierde.
   - Entender por qué cargar IFC en web es un problema no trivial y qué soluciones existen.
   - Estudiar el formato "fragments" de That Open: motivación, diseño, relación con IFC.
   - Modelo mental de la arquitectura de That Open Components: World, Scene, Camera, FragmentsManager, IfcLoader.
   - Cargar el primer IFC en pantalla con un setup mínimo.

## 8. Referencias

- That Open Company — documentación oficial: https://docs.thatopen.com/intro
- That Open Company — repositorio GitHub: https://github.com/ThatOpen/engine_components
- IFC schema (buildingSMART): https://standards.buildingsmart.org/
- Three.js — documentación: https://threejs.org/docs/
- Vite — documentación: https://vite.dev/
- TypeScript — handbook: https://www.typescriptlang.org/docs/handbook/intro.html

## 9. Convenciones de código

_(Sin definir todavía. Se irán añadiendo decisiones a medida que se tomen: estilo, naming, organización de archivos, gestión de estado, etc.)_

## 10. Decisiones de arquitectura tomadas

_(Cuando se tomen decisiones importantes, se registran aquí con fecha y motivo, para no perder el rastro.)_

- _Pendiente de incorporar primera entrada._
