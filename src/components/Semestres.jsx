import React from "react";
import "../css/semetres.css";
export const Semestres = () => {
  return (
    <table>
      <h1>Ramos de Semetres</h1>
      <tr>
        <th>Semetres</th>
        <th>Ramos</th>
      </tr>
      <tr>
        <td>
          <a href="https://siga.inacap.cl/Inacap.Siga.MallaCurricular/#/index?tipomalla=PORTAL&parametros=IEI-IEI-1">
            Primer semetres
          </a>
        </td>
        <td>
          <a href="/FormacionCiudadana">formacion ciudadan</a>
        </td>
        <td>
          <a href="/ResolucionDeProblemasAlgebraico">
            Resolucion de Problemas Algebra
          </a>
        </td>
        <td>
          <a href="/FundamentosDeBaseDeDatos">Fundamentos de Base de Datos</a>
        </td>
        <td>
          <a href="/IntroducionProgramacion">Introducion Programacion</a>
        </td>
        <td>
          <a href="/FundamentosDeHardwareySofware">
            Fundamentos De Hardware y Sofware
          </a>
        </td>
      </tr>
    </table>
  );
};
