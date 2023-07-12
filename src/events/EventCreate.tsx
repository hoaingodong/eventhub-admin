import React, { useState } from 'react';
import {
    Create,
    ReferenceInput,
    SelectArrayInput,
    SimpleForm,
    TextInput,
    required,
    useDataProvider,
    Button,
    Toolbar,
} from 'react-admin';

const validateNumber = [required()];
const validateDate = [required()];

const EventCreate = () => {
    const [imageFile, setImageFile] = useState(null);
    const dataProvider = useDataProvider();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImageFile(file);
    };

    const handleFormSubmit = async (values) => {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("title", values.title);
        formData.append("price", values.price);
        formData.append("startDate", values.startDate);
        formData.append("endDate", values.endDate);
        formData.append("introduction", values.introduction);
        formData.append("topics[]", values.topics);
        formData.append("organizer", values.organizer);
        formData.append("longitude", values.longitude);
        formData.append("latitude", values.latitude);
        formData.append("address", values.address);

        for (const value of formData.values()) {
            console.log(value);
        }
        // Add other form fields as needed

        try {
            const { data } = await dataProvider.create('events', { data: formData });
            console.log('Item created:', data);
            // Handle success, e.g., redirect to item list page
        } catch (error) {
            console.error('Error creating item:', error);
            // Handle error, e.g., show error message
        }
    };

    const CustomToolbar = (props) => (
        <Toolbar {...props}>
            <Button label="Save" type="submit" />
        </Toolbar>
    );

    return (
        <Create>
            <SimpleForm toolbar={<CustomToolbar />} onSubmit={handleFormSubmit}>
                <ReferenceInput source="organizer" reference="users" validate={required()} />
                <TextInput source="title" fullWidth validate={required()} />
                <TextInput source="price" fullWidth validate={validateNumber} />
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <TextInput source="address" fullWidth validate={required()} />
                <TextInput source="startDate" fullWidth validate={validateDate} />
                <TextInput source="endDate" fullWidth validate={validateDate} />
                <TextInput source="longitude" fullWidth validate={validateNumber} />
                <TextInput source="latitude" fullWidth validate={validateNumber} />
                <SelectArrayInput
                    source="topics"
                    choices={[
                        { id: 'Arts', name: 'Arts' },
                        { id: 'Sports', name: 'Sports' },
                        { id: 'Game onlines', name: 'Game onlines' },
                        { id: 'Cook', name: 'Cook' },
                        { id: 'Education', name: 'Education' },
                        { id: 'Technology', name: 'Technology' },
                        { id: 'Fashion', name: 'Fashion' },
                        { id: 'Cosmetic', name: 'Cosmetic' },
                    ]}
                />
                <TextInput source="introduction" multiline rows={5} fullWidth validate={required()} />
            </SimpleForm>
        </Create>
    );
};

export default EventCreate;
