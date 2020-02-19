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
    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        });
    }
    handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState({
            information: information.map(
                info => id === info.id
                    ? { ...info, ...data }
                    : info
            )
        });
    }
    render() {
        const { information } = this.state;
        return (
           <div>
                <PhoneForm
                    onCreate={this.handleCreate}
                />
                <PhoneInfoList
                    data={this.state.information}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                />
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

(2) PhoneInfo > PhoneInfoList > App onRemove가 넘어오고 handleRemove 동작
information 배열을 state로 불러옴
information의 state를 변경하는데, filter 내장함수를 통해 배열 수정에 들어감
원래의 배열 info에서, 원래의 배열 info들 중 불러온 값의 id를 가지는 데이터와 불러온 값을 비교
그 데이터를 삭제
information 배열에 변화가 생김
data가 PhoneInfoList로 넘어감
*/