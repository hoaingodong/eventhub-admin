import {
    Create,
    number,
    ReferenceInput,
    required,
    SelectArrayInput,
    SimpleForm,
    TextInput,
    FileInput,
    FileField
} from "react-admin"

const validateNumber = [number(), required()];
const validateDate = [Date(), required()];

const EventCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="organizer" reference="users" validate={required()}/>
            <TextInput source="title" fullWidth validate={required()}/>
            <TextInput source="price" fullWidth validate={validateNumber}/>
            <FileInput source="files">
                <FileField source="src" title="title" />
            </FileInput>
            <TextInput source="address" fullWidth validate={required()}/>
            <TextInput source="startDate" fullWidth validate={validateDate}/>
            <TextInput source="endDate" fullWidth validate={validateDate}/>
            <TextInput source="longitude" fullWidth validate={validateNumber}/>
            <TextInput source="latitude" fullWidth validate={validateNumber}/>
            <SelectArrayInput source="topics" choices={[
                { id: 'Arts', name: 'Arts' },
                { id: 'Sports', name: 'Sports' },
                { id: 'Game onlines', name: 'Game onlines' },
                { id: 'Cook', name: 'Cook' },
                { id: 'Educatiomn', name: 'Education' },
                { id: 'Technology', name: 'Technology' },
                { id: 'Fashion', name: 'Fashion' },
                { id: 'Cosmetic', name: 'Cosmetic' },
            ]} />
            <TextInput source="introduction" multiline rows={5} fullWidth validate={required()}/>
        </SimpleForm>
    </Create>
);

export default EventCreate