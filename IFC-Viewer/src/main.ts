import './style.css'

// Punto de entrada del IFC-Viewer.
// Aquí montaremos el visor sobre el contenedor #app definido en index.html.

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('No se encontró el contenedor #app en el documento.')
}

app.innerHTML = `
  <h1>IFC Viewer</h1>
  <p>Lienzo listo. Próximamente: visor 3D.</p>
`