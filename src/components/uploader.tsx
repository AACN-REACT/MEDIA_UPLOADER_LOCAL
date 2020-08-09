import * as React from "react";
//import icon from '../icon.gif'
import { dragenter, dragleave, dragover, drop, pick } from "../utils/eventhandlers";
import * as network from "../utils/networkrequests";
import {FileList} from './filelist.jsx'
import {FileInput} from './fileinput.jsx'
import {Table} from './table.tsx'
export function Uploader() {
  const [files, addFile] = React.useState([]);

  return (
    <div>
    <div className="center-content">
      <div
        className="uploader"
        onDragEnter={dragenter}
        onDragLeave={dragleave}
        onDragOver={dragover}
        onDrop={(e) => {
          drop(
            e,
            "https://www.googleapis.com/upload/drive/v3/files?uploadType=media",
            true,
            addFile
          );
        }}
      >
        {`Drag your files here
    to upload`}
<FileInput handler={pick} stateSetter={addFile}/>
      </div>
    </div>
<FileList files={files}/>
</div>
  );
}
