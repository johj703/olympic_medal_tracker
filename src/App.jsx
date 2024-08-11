import './App.css'
import { useState } from "react;"

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <div className="container">
      <h1>2024 파리 올림픽</h1>
      <form className="input-group">
        <div className="input-field">
          <label>국가명</label>
          <input type="text" placeholder="국가 입력" />
        </div>
        <div className="input-field">
          <label>금메달</label>
          <input type="number" placeholder="국가 입력" />
        </div>
        <div className="input-field">
          <label>은메달</label>
          <input type="number" placeholder="국가 입력" />
        </div>
        <div className="input-field">
          <label>동메달</label>
          <input type="number" placeholder="국가 입력" />
        </div>
        <div className="button-group">
          <button type="submit">국가 추가</button>
          <button type="button">업데이트</button>
        </div>
      </form>
      <div>
        {countries.length === 0 ? (
          <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
        ): (
          <table>
            <thead>
              <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              <td>대한민국</td>
              <td>11</td>
              <td>8</td>
              <td>10</td>
              <td>
                <button>삭제</button>
              </td>
            </tbody>
          </table>
      )}
      </div>
    </div>
  )
}

export default App
