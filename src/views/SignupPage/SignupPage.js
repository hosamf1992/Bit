import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup, logout, isLogged } from '../../modules/users/actions'
import avatar from '../../assets/imgs/avatar.png'
import './SignupPage.scss'
class SignupPage extends React.Component {


    state = {
        userName: '',
        msg: ''
    }


    async componentDidMount() {
        await this.props.isLogged()
    }
    handleInput(text) {
        this.setState({ userName: text })
    }

    async signup() {
        const userName = this.state.userName
        if (userName !== '') await this.props.signup(userName)
        else this.setState({ msg: 'Enter username' })

    }

    async logout() {
        await this.props.logout()
        this.props.history.push('/')

    }

    render() {
        const { msg } = this.state
        const { userInfo } = this.props
        return (
            <section className="container signup-contianer">
                <div className="signup-form">
                    <img className="avatar" src={avatar} />   <br />
                    <input onChange={(ev) => this.handleInput(ev.target.value)} type="text" />
                    <div className="signup-btns">
                        {!userInfo.isLogged && <button onClick={() => this.signup(this)}>Signup</button>}
                        {userInfo.isLogged && <button onClick={() => this.logout(this)}>logout</button>}
                    </div>
                    {msg}
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        userInfo: state.user
    }
}

const mapDispatchToProps = {

    signup,
    logout,
    isLogged

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupPage)
