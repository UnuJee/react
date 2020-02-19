import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }
    state = {
        editing: false,
        name: '',
        phone: ''
    }
    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }
    handleToggleEdit = () =>  {
        const { editing } = this.state;
        this.setState({
            editing: !editing
        });
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { info, onUpdate } = this.props;
        if (!prevState.editing && this.state.editing) {
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }
        if (prevState.editing && !this.state.editing) {
            onUpdate (
                info.id, {
                    name: this.state.name,
                    phone: this.state.phone
                }
            );
        }
    }
    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if (editing) {
            return (
                <div style={style}>
                    <div>
                        <input 
                            placeholder="이름"
                            value={this.state.name}
                            onChange={this.handleChange}
                            name="name"
                        />
                    </div>
                    <div>
                        <input 
                            placeholder="전화번호"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            name="phone"
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }

        const {
            name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
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

