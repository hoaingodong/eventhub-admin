import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput, Create, ImageField
} from "react-admin";
import { useRecordContext} from "react-admin";

const EventTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
}

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

export const EventList = () => (
    <List >
        <Datagrid>
        <TextField source="id" />
            <ReferenceField source="organizer" reference="users" />
            <TextField source="title" />
            <ImageField source="image.url" src="image.url" title="avatar" />
            <TextField source="price" />
            <TextField source="topics" />
            <TextField source="address" />
            <TextField source="startDate" />
            <TextField source="endDate" />
            <EditButton />
        </Datagrid>
    </List>
);

export const EventEdit = () => (
    <Edit title={<EventTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="organizer" reference="users"/>
            <TextInput source="title" fullWidth/>
            <TextInput source="price" />
            <TextInput source="address" />
            <TextInput source="startDate" />
            <TextInput source="endDate" />
            <TextInput source="location" />
            <TextInput source="latitude" />
            <TextInput source="introduction" multiline rows={5} />
        </SimpleForm>
    </Edit>
);

export const EventCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="organizer" reference="users" />
            <TextInput source="title" />
            <TextInput source="price" />
            <TextInput source="address" />
            <TextInput source="startDate" />
            <TextInput source="endDate" />
            <TextInput source="longitude" />
            <TextInput source="latitude" />
            <TextInput source="introduction" multiline rows={5} />
        </SimpleForm>
    </Create>
);