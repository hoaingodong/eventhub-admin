import {Create, ReferenceInput, SimpleForm, TextInput} from "react-admin";

const EventCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="organizer" reference="users" />
            <TextInput source="title" fullWidth/>
            <TextInput source="price" fullWidth/>
            <TextInput source="address" fullWidth/>
            <TextInput source="startDate" fullWidth/>
            <TextInput source="endDate" fullWidth/>
            <TextInput source="longitude" fullWidth/>
            <TextInput source="latitude" fullWidth/>
            <TextInput source="topics" fullWidth/>
            <TextInput source="introduction" multiline rows={5} fullWidth/>
        </SimpleForm>
    </Create>
);

export default EventCreate