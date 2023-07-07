import {Create, ReferenceInput, SimpleForm, TextInput} from "react-admin";

const ReviewCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="fromUser" reference="users" />
            <ReferenceInput source="toUser" reference="users" />
            <TextInput source="content" fullWidth/>
            <TextInput source="stars" fullWidth/>
            <TextInput source="date" fullWidth/>
        </SimpleForm>
    </Create>
);

export default ReviewCreate