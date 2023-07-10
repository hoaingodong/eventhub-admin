import {
    Edit,
    number,
    ReferenceInput, required,
    SimpleForm,
    TextInput,
    useRecordContext
} from "react-admin"

const validateStars = [number(), required()];
const validateDate = [Date(), required()];

const EventTitle = () => {
    const record = useRecordContext()
    return <span>Post {record ? `"${record.id}"` : ''}</span>
}

const ReviewEdit = () => (
    <Edit title={<EventTitle/>}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <ReferenceInput source="fromUser" reference="users" validate={required()}/>
            <ReferenceInput source="toUser" reference="users" validate={required()}/>
            <TextInput source="content" fullWidth validate={required()}/>
            <TextInput source="stars" fullWidth validate={validateStars}/>
            <TextInput source="date" fullWidth validate={validateDate}/>
        </SimpleForm>
    </Edit>
);

export default ReviewEdit