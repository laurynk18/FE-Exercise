import {Route, Switch} from 'react-router-dom'
import AllBreeds from './components/AllBreeds'
import SingleDog from './components/SingleDog'

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={AllBreeds} />
        <Route path="/:breed" component={SingleDog} />
      </Switch>
    )
}