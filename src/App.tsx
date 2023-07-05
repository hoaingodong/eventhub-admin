import { Admin, Resource, EditGuesser } from "react-admin"
import { dataProvider } from './dataProvider';
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './Dashboard';
import {authProvider} from "./authProvider";

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider = {authProvider} dashboard = {Dashboard}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
    </Admin>
);
