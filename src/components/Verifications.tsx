import React from 'react';
// https://marmelab.com/react-admin/Tutorial.html
// https://github.com/marmelab/react-admin/issues/4505
// @ts-ignore
import {Create, Datagrid, Edit, EditButton, Filter, List, ReferenceField, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput} from 'react-admin';


const VerificationTitle = ({p}: any) => {
  return <span>Verification {p ? `"${p.name}"` : ''}</span>;
};

export const VerificationList = (props: any) => (
  <List filters={<VerificationFilter/>} {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField label="Property" source="property.id" reference="Property">
        <TextField source="name"/>
      </ReferenceField>
      <TextField source="id"/>
      <TextField source="name"/>
      <TextField source="attributes"/>
      <TextField source="created"/>
    </Datagrid>
  </List>
);

export const VerificationCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Property" source="property.id" reference="Property">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <TextInput source="name"/>
      <TextInput source="attributes"/>
    </SimpleForm>
  </Create>
)

export const VerificationEdit = (props: any) => (
  <Edit title={<VerificationTitle/>} {...props}>
    <SimpleForm>
      <ReferenceInput label="Property" source="property.id" reference="Property">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <TextInput disabled source="id"/>
      <TextInput source="name"/>
      <TextInput source="attributes"/>
    </SimpleForm>
  </Edit>
);

const VerificationFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn/>
    {/*<ReferenceInput label="Property" source="property.id" reference="Property" allowEmpty>*/}
    {/*    <SelectInput optionText="name"/>*/}
    {/*</ReferenceInput>*/}
  </Filter>
);