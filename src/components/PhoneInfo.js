import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            name, phone, id
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>

        );
    }
}

export default PhoneInfo;

/*
5. phoneinfolist에서 받아온 info로 name과 phone에 값이 주어졌고
변화가 있었기 때문에 렌더링된다. style을 가진 name과 phone값이 리턴된다.
*/