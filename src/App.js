import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
    id = 2
    state = {
        information: [
            {
                id: 0,
                name: '김민준',
                phone: '010-0000-0000'
            },
            {
                id: 1,
                name: '홍길동',
                phone: '010-0000-0001'
            }
        ]
    }
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
          information: information.concat({ id: this.id++, ...data })
        })
    }
    render() {
       return (
           <div>
                <PhoneForm
                    onCreate={this.handleCreate}
                />
                <PhoneInfoList data={this.state.information} />
           </div>
       );
    }
}

export default App;

/* 1.
information 배열이 두 개 이미 있다. 민준이 길동이. 변화 없다.
아직 handleCreate 동작 X.
폰 폼에 onCreate 함수를 넘겨준다.
3.
PhoneForm의 이벤트로 handleCreate의 data 값이 ex) name:777 phone:888 인 상태
information 배열에 위의 state 상태를 받아온다.
information의 state를 바꾸는데 그 state의 id는 1더하고 나머지 data 값이 들어간 값이다.
ex) id:3 name:777 phone:888
PhoneInfoList의 data props 값에 현재 information state 값을 넣어준다.
*/