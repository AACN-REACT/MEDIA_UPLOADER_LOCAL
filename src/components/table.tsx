import * as React from "react";

export function Table({heading}) {
  return (
      <React.Fragment>
      <h2>{heading}</h2>
      <br/>
    <table>
      <tr>
        <th>one</th>
        <th>one</th>
        <th>one</th>
        <th>one</th>
        <th>one</th>
      </tr>
      <tr>
        <td>one</td>
        <td>one</td>
        <td>one</td>
        <td>one</td>
        <td>one</td>
      </tr>
      <tr>
        <td>one</td>
        <td>one</td>
        <td>one</td>
        <td>one</td>
        <td>one</td>
      </tr>
    </table>
    </React.Fragment>
  );
}
