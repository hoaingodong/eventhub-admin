import {
    Edit,
    number,
    NumberInput,
    ReferenceField,
    required,
    SelectArrayInput,
    SimpleForm,
    TextInput,
    useRecordContext
} from "react-admin"

const validateNumber = [number(), required()];
const validateDate = [Date(), required()];

const EventTitle = () => {
    const record = useRecordContext()
    return <span>Post {record ? `"${record.title}"` : ''}</span>
}

const EventEdit = () => (
    <Edit title={<EventTitle/>}>
        <SimpleForm>
            <TextInput source="id" disabled validate={required()}/>
            <ReferenceField source="organizer" reference="users" />
            <TextInput source="title" fullWidth validate={required()}/>
            <TextInput source="price" fullWidth validate={validateNumber} />
            <TextInput source="address" fullWidth validate={required()}/>
            <TextInput source="startDate" fullWidth validate={validateDate}/>
            <TextInput source="endDate" fullWidth validate={validateDate}/>
            <TextInput source="location.coordinates.longitude" fullWidth validate={validateNumber}/>
            <TextInput source="location.coordinates.latitude" fullWidth validate={validateNumber}/>
            <SelectArrayInput source="topics" choices={[
                { id: 'Arts', name: 'Arts' },
                { id: 'Sports', name: 'Sports' },
                { id: 'Game onlines', name: 'Game onlines' },
                { id: 'Cook', name: 'Cook' },
                { id: 'Education', name: 'Education' },
                { id: 'Technology', name: 'Technology' },
                { id: 'Fashion', name: 'Fashion' },
                { id: 'Cosmetic', name: 'Cosmetic' },
            ]} />
            <TextInput source="introduction" multiline rows={5} fullWidth validate={required()}/>
        </SimpleForm>
    </Edit>
);

export default EventEdit