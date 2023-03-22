import React from "react";

export const Horario = () => {
  return (
    <div>
      {" "}
      <table>
        <h1>Horaro de clase</h1>
        <tr>
          <th>Horario</th>
          <th>lunes</th>
          <th>Martes</th>
          <th>Miercoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
        </tr>
        <tr>
          <td>13:25 / 15:40</td>
          <td>Fundamento de Base de Datos</td>
          <td>FormacionCiudadana</td>
          <td>Introducion Programacion</td>
          <td>*</td>
          <td>Fundamentos De Hardware y Sofware</td>
        </tr>
        <tr>
          <td>15:40 / 17:20</td>
          <td>Resolucion de Problemas de Algebra</td>
          <td>Introducion Programacion</td>
          <td>Resolucion de Problemas de Algebra</td>
          <td>*</td>
          <td>*</td>
        </tr>
      </table>
    </div>
  );
};
