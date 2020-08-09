import * as React from 'react'



export function FileInput({handler, stateSetter}){

    return(
        <form className="input-form" >
         <label className="input-label"htmlFor="inputButton" >OR SELECT A FILE  
        <input id="input-field" type="file" multiple onChange={(e) => {
          handler(
            e,
            "https://www.googleapis.com/upload/drive/v3/files?uploadType=media",
            true,
            stateSetter
          );
        }} />
        </label> 
      </form>
    )
}