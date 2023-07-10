import {Edit, ReferenceField, SimpleForm, TextInput, useRecordContext} from "react-admin"

const EventTitle = () => {
    const record = useRecordContext()
    return <span>Post {record ? `"${record.title}"` : ''}</span>
}

const EventEdit = () => (
    <Edit title={<EventTitle/>}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <ReferenceField source="organizer" reference="users"/>
            <TextInput source="title" fullWidth/>
            <TextInput source="price" fullWidth/>
            <TextInput source="address" fullWidth/>
            <TextInput source="startDate" fullWidth/>
            <TextInput source="endDate" fullWidth/>
            <TextInput source="location.coordinates.longitude" fullWidth/>
            <TextInput source="location.coordinates.latitude" fullWidth/>
            <TextInput source="introduction" multiline rows={5} fullWidth/>
        </SimpleForm>
    </Edit>
);

export default EventEdit