import Tram from 'tram-one'
import './style.css';
import home from './pages/home'
import notFound from './pages/404'
import colorActions from './actions/color'
const app = new Tram()

app.addRoute('/', home)
app.addRoute('/404', notFound)
app.addActions({ color: colorActions })
app.start('#app')
