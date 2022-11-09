import './App.css';
import { useEffect, useState } from 'react';

import JSONSchema from './schema.json';

import * as toJsonSchema from '@openapi-contrib/openapi-schema-to-json-schema';


// import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";

function App() {

  const [schema, setSchema] = useState(null)

  useEffect(() => {
    const convertedSchema = toJsonSchema.fromSchema(JSONSchema);

    console.log('pre schema', JSONSchema);
    console.log('voncerted schema', convertedSchema);

    setSchema(convertedSchema);
  }, [])
  return (
    <div>
      {schema && (
        <Form
          schema={{
            ...schema.components.schemas.Adress,
            "components": schema.components
          }}
          validator={validator}
          onChange={() => console.log("changed")}
          onSubmit={() => console.log("submitted")}
          onError={() => console.log("errors")}
        />
      )}
    </div>
  );
}

export default App;
