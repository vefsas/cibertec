import React from 'react';

const Calendar = () => {
  return (
    <section className="calendario">
      <h2>Calendario de AGOSTO 2025</h2>
      <table className="tabla-calendario">
        <tr>
          <th>Lun</th><th>Mar</th><th>Mié</th><th>Jue</th><th>Vie</th><th>Sáb</th><th>Dom</th>
        </tr>
        <tr>
          <td></td><td>1<div className="evento-pop">Simulacro UNI</div></td>
          <td>2</td><td>3</td><td>4</td><td>5<div className="evento-pop">Feria Universitaria</div></td><td>6</td>
        </tr>
        <tr>
          <td>7</td><td>8<div className="evento-pop">Charlas Vocacionales</div></td><td>9</td><td>10</td><td>11</td><td>12<div className="evento-pop">Taller de Matemáticas</div></td><td>13</td>
        </tr>
        <tr>
          <td>14</td><td>15<div className="evento-pop">Simulacro SAN MARCOS</div></td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td>
        </tr>
        <tr>
          <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td>
        </tr>
        <tr>
          <td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td>
        </tr>
      </table>
    </section>
  );
};

export default Calendar;