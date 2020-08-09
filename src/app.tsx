import * as React from "react";
import { Uploader } from "./components/uploader.tsx";
import { Heading } from "./components/heading.tsx";
import * as googleapi from './utils/googleapi'
import {Table} from './components/table'



export default function App() {
  return (
    <div>
      <Heading title="AACN VideoUploader"/>
      <Uploader/>
      <div className="center-content">
      <Table heading="Pending"/>
      <Table heading="Completed"/>
      </div>
    </div>
  );
}
