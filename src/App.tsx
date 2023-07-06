import { Admin, Resource, EditGuesser } from "react-admin"
import { dataProvider } from './dataProvider';
import { UserList } from "./users";
import { EventList, EventEdit, EventCreate } from "./events";
import EventIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './Dashboard';
import {authProvider} from "./authProvider";

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider = {authProvider} dashboard = {Dashboard}>
        {/*<Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />*/}
        <Resource name="events" list={EventList} edit={EventEdit} create={EventCreate} icon={EventIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
    </Admin>
);
