import React from 'react';
// https://marmelab.com/react-admin/Tutorial.html
// https://github.com/marmelab/react-admin/issues/4505
// @ts-ignore
import {Create, Datagrid, Edit, EditButton, Filter, List, ReferenceField, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput} from 'react-admin';

const FixtureTitle = ({record}: any) => {
  return <span>Fixture {record ? `"${record.title}"` : ''}</span>;
};

export const FixtureList = (props: any) => (
  <List filters={<FixtureFilter/>} {...props}>
    <Datagrid>
      <ReferenceField label="Property" source="property.id" reference="Property">
        <TextField source="name"/>
      </ReferenceField>
      <TextField source="id"/>
      <TextField source="name"/>
      <TextField source="created"/>
      <TextField source="attributes"/>
      <EditButton/>
    </Datagrid>
  </List>
);

export const FixtureCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Property" source="property.id" reference="Property">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <TextInput source="name"/>
      <TextInput source="attributes"/>
    </SimpleForm>
  </Create>
);

export const FixtureEdit = (props: any) => (
  <Edit title={<FixtureTitle/>} {...props}>
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

const FixtureFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn/>
    {/*<ReferenceInput label="Property" source="property.id" reference="Property" allowEmpty>*/}
    {/*    <SelectInput optionText="name"/>*/}
    {/*</ReferenceInput>*/}
  </Filter>
);

