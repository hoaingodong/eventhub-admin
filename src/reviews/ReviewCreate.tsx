import {Create, number, ReferenceInput, required, SimpleForm, TextInput} from "react-admin"

const validateStars = [number(), required()];
const validateDate = [Date(), required()];

const ReviewCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="fromUser" reference="users" validate={required()}/>
            <ReferenceInput source="toUser" reference="users" validate={required()}/>
            <TextInput source="content" fullWidth validate={required()}/>
            <TextInput source="stars" fullWidth validate={validateStars}/>
            <TextInput source="date" fullWidth validate={validateDate}/>
        </SimpleForm>
    </Create>
);

export default ReviewCreate