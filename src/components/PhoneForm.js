import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;

/* 2.
name과 phone 모두 공백으로 state 설정.
handleChange, hamdleSubmit 아직 동작 X
input의 name혹은 phone에서 변화가 일어나면 handleChange 동작.
e.target.name 으로 인해 변화 일어난 곳 input name에 이벤트 일어난 값으로 state 변경
따라서 그 name을 가진 input의 밸류값도 변경
이벤트를 마치고 submit타입의 버튼 클릭
onSubmit함수로 jandleSubmit메소드 동작
app.js에서 props를 받아왔기 때문에 onCreate(this.handleCreate)인 상태
이벤트로 인해 state는 변경되어 있고 handleCreate이 동작.
상태 초기화

*/