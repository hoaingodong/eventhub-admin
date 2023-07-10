import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    TextInput,
    ReferenceInput, ImageField, EditButton
} from "react-admin"

const reviewFilters = [
    <TextInput source="q" label="Search" alwaysOn/>,
    <ReferenceInput source="toUser" label="toUsers" reference="users"/>,
];

const ReviewList = () => (
    <List filters={reviewFilters}>
        <Datagrid>
            <TextField source="id"/>
            <ReferenceField source="toUser" reference="users"/>
            <TextField source="stars"/>
            <TextField source="content"/>
            <TextField source="date"/>
            <EditButton/>
        </Datagrid>
    </List>
)

export default ReviewList
