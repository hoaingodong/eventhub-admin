// in src/users.tsx
import { useMediaQuery } from "@mui/material";
import {List, SimpleList, Datagrid, TextField, EmailField, ImageField} from "react-admin"
import MyUrlField from './MyUrlField';

export const UserList = () => {
    // @ts-ignore
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <ImageField source="avatar.url" src="avatar.url" title="avatar" />
                    <EmailField source="email" />
                    <TextField source="interests" />
                    <TextField source="bio" />
                </Datagrid>
            )}
        </List>
    );
};