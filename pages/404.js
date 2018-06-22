import Tram from 'tram-one'
const html = Tram.html()

export default () => {
  return html`
    <div>
      <h1>404</h1>
      <code>No route ${window.location.pathname}</code><br />
      Check <code>tram-one-stackblitz/main.js</code> to see all the available routes.
    </div>
  `
}
