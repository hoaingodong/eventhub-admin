import {Edit, ReferenceField, ReferenceInput, SimpleForm, TextInput, useRecordContext} from "react-admin";

const EventTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
}

const ReviewEdit = () => (
    <Edit title={<EventTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled  />
            <ReferenceField source="fromUser" reference="users" />
            <ReferenceField source="toUser" reference="users" />
            <TextInput source="content" fullWidth/>
            <TextInput source="stars" fullWidth />
            <TextInput source="date" fullWidth />
        </SimpleForm>
    </Edit>
);

export default ReviewEdit