import {
    Create,
    ImageField,
    ImageInput,
    number,
    ReferenceInput,
    required,
    SimpleForm,
    TextInput
} from "react-admin"

const validateNumber = [number(), required()];
const validateDate = [Date(), required()];

const EventCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="organizer" reference="users"  validate={required()}/>
            <TextInput source="title" fullWidth  validate={required()}/>
            <TextInput source="price" fullWidth  validate={validateNumber}/>
            <ImageInput source="file" label="Event picture" validate={required()}>
                <ImageField source="src" title="title"/>
            </ImageInput>
            <TextInput source="address" fullWidth validate={required()}/>
            <TextInput source="startDate" fullWidth validate={validateDate}/>
            <TextInput source="endDate" fullWidth validate={validateDate}/>
            <TextInput source="location.coordinates.longitude" fullWidth validate={validateNumber}/>
            <TextInput source="location.coordinates.latitude" fullWidth validate={validateNumber}/>
            <TextInput source="topics" fullWidth validate={required()}/>
            <TextInput source="introduction" multiline rows={5} fullWidth validate={required()}/>
        </SimpleForm>
    </Create>
);

export default EventCreate