import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
            </div>

        );
    }
}

export default PhoneInfo;

/*
5. phoneinfolist에서 받아온 info로 name과 phone에 값이 주어졌고
변화가 있었기 때문에 렌더링된다. style을 가진 name과 phone값이 리턴된다.

(1)삭제 버튼 클릭 handleRemove 작동
info와 onRemove함수가 PhoneInfoList와 App과 props으로 연결됨
onRemove의 값에 info.id를 넣음
*/

