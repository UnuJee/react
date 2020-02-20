import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpadte not defined')
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }
    // true => 렌더
    // false => 렌더 X
    // 다음 데이터와 지금 데이터가 같다면 렌더X, 다르면 렌더
    // 불변성. 배열 자체를 수정하지 않고, 기존 배열에 기반하여 새 배열을 만들어내는
    // concat, slice, map, filter 같은 함수를 사용했기 때문에
    // 불변성이 유지 되었고 비교가 가능하게 되었다.
    // 비교가 가능하게 되었기 때문에 shouldComponentUpdate api를 사용할 수 있게 되었고
    // 리액트에서 필요한 상황에 리렌더링 되도록 설계 할 수 있었다.

    // PhoneInfoList는 다음 데이타와 지금 데이타가 다를 때 렌더되어야 한다.
    // 
    render() {
        console.log('render PhoneInfoList');
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (
                <PhoneInfo
                    key={info.id}
                    info={info}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />)
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
(3)
삭제 된 데이터 list에 전달 후 list 리턴 됨
*/