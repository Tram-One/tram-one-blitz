import Tram from 'tram-one'
import appHeader from '../elements/app-header'

const html = Tram.html({
  'app-header': appHeader
})

export default (store, actions) => {

  const advanceColor = () => {
    actions.advance()
  }

  return html`
    <div>
      <app-header color=${store.color} onclick=${advanceColor} />
      <div>
        Thank you for using Tram-One!<br />
        To get started, edit
        <code>pages/home.js</code>.
      </div>
    </div>
  `

}
