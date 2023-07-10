import {Admin, Resource, EditGuesser} from "react-admin"
import {dataProvider} from './dataProvider/dataProvider'
import {Dashboard} from './dashboard'
import authProvider from "./authProvider"
import events from './events'
import users from './users'
import reviews from './reviews'

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
        <Resource name="events" {...events}/>
        <Resource name="users" {...users} recordRepresentation="name"/>
        <Resource name="reviews" {...reviews}/>
    </Admin>
);
