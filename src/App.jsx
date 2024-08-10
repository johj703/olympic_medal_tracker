import './App.css'

function App() {
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
          <input type="text" placeholder="국가 입력" />
        </div>
        <div className="input-field">
          <label>은메달</label>
          <input type="text" placeholder="국가 입력" />
        </div>
        <div className="input-field">
          <label>동메달</label>
          <input type="text" placeholder="국가 입력" />
        </div>
        <div className="button-group">
          <button type="submit">국가 추가</button>
          <button type="button">업데이트</button>
        </div>
      </form>
      <div>
        <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
      </div>
    </div>
  )
}

export default App
