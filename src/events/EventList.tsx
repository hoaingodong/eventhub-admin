import {
    Datagrid,
    EditButton,
    ImageField,
    List,
    ReferenceField,
    ReferenceInput,
    TextField,
    TextInput
} from "react-admin"

const eventFilters = [
    <TextInput source="q" label="Search" alwaysOn/>,
    <ReferenceInput source="organizer" label="organizer" reference="users"/>,
];

const EventList = () => (
    <List filters={eventFilters}>
        <Datagrid>
            <TextField source="id"/>
            <ReferenceField source="organizer" reference="users"/>
            <TextField source="title"/>
            <ImageField source="image.url" src="image.url" title="avatar"/>
            <TextField source="price"/>
            <TextField source="topics"/>
            <TextField source="address"/>
            <TextField source="startDate"/>
            <TextField source="endDate"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export default EventList