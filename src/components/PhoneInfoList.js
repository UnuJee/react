import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }
    render() {
        const { data } = this.props;
        const list = data.map(
            dataReal => (<PhoneInfo key={dataReal.id} info={dataReal}/>)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;

/*4.
data 배열은 app.js에서 props 값을 받아왔기 때문에 id:3 name:777 phone:777 이다.
상수 list를 통해 컴포넌트 PhoneInfo 의 key는 dataReal의 id가 되었고
props info 값을 dataReal로 넘겼다. (배열렌더링)
이 컴포넌트에서는 data 라는 배열을 가져와서 map 을 통하여 JSX 로 변환을 해줍니다.
이 과정에서, key 라는 값도 설정이 되었는데요, 여기서 key 는 리액트에서 배열을
렌더링을 할 때 꼭 필요한 값입니다. 
6.
PhoneInfo컴포넌트의 값이 바뀌게 된 상태에서 {list}를 리턴함으로써 박스가 추가된다.

*/