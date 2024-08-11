import './App.css'
import { useState } from "react";

function App() {
  // 국가 데이터를 저장하는 상태, 폼 입력 데이터를 저장하는 상태 선언
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    country: '',
    gold: '',
    silver: '',
    bronze: '',
  });

  // 사용자가 입력 폼의 값을 변경할 때마다 호출되는 함수
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="container">
      <h1>2024 파리 올림픽</h1>
      <form className="input-group">
        <div className="input-field">
          <label>국가명</label>
          <input
            type="text"
            name="country" 
            placeholder="국가 입력" 
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-field">
          <label>금메달</label>
          <input
            type="number"
            name="gold" 
            placeholder="금메달 수" 
            value={formData.gold}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-field">
          <label>은메달</label>
          <input
            type="number"
            name="silver" 
            placeholder="은매달 수" 
            value={formData.silver}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-field">
          <label>동메달</label>
          <input
            type="number"
            name="bronze" 
            placeholder="동메달 수" 
            value={formData.bronze}
            onChange={handleChange}
            required
          />
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
