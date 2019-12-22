import React from 'react'
import { isLogged, loadUserMoves } from '../../modules/users/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getRate } from '../../services/BitcoinService'
import './HomePage.scss';
import MovesList from '../../cmps/MovesList/MovesList'
import Charts from '../../cmps/Chart/Chart'
class HomePage extends React.Component {
    state = {
        user: null,
        moves: [],
        btc: null
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        await this.props.isLogged()
        await this.props.loadUserMoves(id)
        const btc = await getRate()
        if (this.props.userInfo.currUser) {
            const { moves } = this.props.userInfo.currUser;
            const user = this.props.userInfo.currUser;
            this.setState({ moves, btc, user })
        }

    }
    render() {
        const { moves } = this.state;
        const { btc } = this.state;
        const { user } = this.state
        return (
            <section className="container">
                <section className="home-page">
                    <section className='form-page'>
                        <span className="main-title">Mr.BitCoin</span>
                        <p className="main-desc">Like in real life, Mr.BitCoin makes it possible to transfer BitCoin anywhere in a very easy way and it allows you to be in control of your money. Such great features also come with great security concerns.</p>
                        <Link to="/signup">
                            <button className="main-btn">Signup now</button>
                        </Link>
                    </section>
                </section>
                {user && <section>
                    < div className="moves-history">
                        <span> Hi, {user.name}</span>
                    </div>
                    <section className="balance">
                        <span >Current Balance</span>
                        {user && <span>BIT: <i className="fa fa-bitcoin bit" > {user.coins}</i> </span>}
                        <span >BTC: <span className="btc">{btc}</span></span>
                    </section>
                </section>}
                {moves.length > 0 && <section>
                    < div className="moves-history">
                        <span> Market Price (USD) </span>
                    </div>
                    <Charts></Charts>
                    <section className="moves-history">
                        <span><span className="move-icon">&Delta;</span> Last 3 Moves History</span>
                    </section>
                    <MovesList mode="home-page" moves={moves} />
                </section>}
            </section>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        userInfo: state.user,
    }
}

const mapDispatchToProps = {
    isLogged,
    loadUserMoves
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)