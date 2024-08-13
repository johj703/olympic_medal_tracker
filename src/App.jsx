import "./App.css";
import { useState } from "react";

function App() {
  // 국가 데이터를 저장하는 상태, 폼 입력 데이터를 저장하는 상태 선언
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    country: "",
    gold: "",
    silver: "",
    bronze: "",
  });
  // 편집 중인 국가의 Index를 저장하는 상태 선언
  const [editIndex, setEditIndex] = useState(null);

  // 사용자가 입력 폼의 값을 변경할 때마다 호출되는 함수
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 국가 추가 버튼 클릭 시 호출되는 함수
  const handleAddCountry = () => {
    // 새로운 국가 데이터를 추가
    setCountries([...countries, formData]);

    // 국가 데이터를 금메달 수 기준으로 내림차순 정렬
    setCountries((prevCountries) =>
      [...prevCountries].sort((a, b) => b.gold - a.gold)
    );

    // 폼 필드를 초기 상태로 리셋
    setFormData({
      country: "",
      gold: "",
      silver: "",
      bronze: "",
    });
  };

  // 업데이트 버튼 클릭 시 호출되는 함수
  const handleUpdateCountry = () => {
    if (editIndex !== null) {
      // 편집 중인 국가 데이터를 업데이트
      const updatedCountries = [...countries];
      updatedCountries[editIndex] = formData;

      // 업데이트 된 국가 데이터를 금메달 수 기준으로 내림차순 정렬
      setCountries(updatedCountries.sort((a, b) => b.gold - a.gold));

      // 입력 폼을 초기 상태로 리셋
      setFormData({
        country: "",
        gold: "",
        silver: "",
        bronze: "",
      });

      // 편집 중인 인덱스를 초기화해서 추가 모드로 돌아가도록 작성
      setEditIndex(null);
    }
  };

  // 삭제 버튼이 클릭되었을 때 호출되는 함수
  const handleDelete = (index) => {
    const newCountries = [...countries];
    newCountries.splice(index, 1);
    setCountries(newCountries);
  };

  return (
    <div className="container">
      <h1>2024 파리 올림픽</h1>
      <form className="input-group" onSubmit={(e) => e.preventDefault()}>
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
            placeholder="은메달 수"
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
        {/* 버튼들을 입력 필드 오른쪽에 위치 */}
        <div className="button-group">
          <button type="button" onClick={handleAddCountry}>
            국가 추가
          </button>
          <button type="button" onClick={handleUpdateCountry}>
            업데이트
          </button>
        </div>
      </form>
      <div>
        {countries.length === 0 ? (
          <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
        ) : (
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
              {/* 국가 데이터를 금메달 수 기준으로 내림차순으로 표시 */}
              {countries.map((country, index) => (
                <tr key={index}>
                  <td>{country.country}</td>
                  <td>{country.gold}</td>
                  <td>{country.silver}</td>
                  <td>{country.bronze}</td>
                  <td>
                    <button
                      className="deleteButton"
                      onClick={() => handleDelete(index)}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
