import React from 'react'
import { isLogged, loadUserMoves } from '../../modules/users/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getRate } from '../../services/BitcoinService'
import './StatisticPage.scss';
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
            const user = this.props.userInfo.currUser;
            this.setState({ moves: user.moves, user, btc })
        }
        console.log(this.state.user)

    }
    render() {
        const { isLogged } = this.props.userInfo
        const { moves } = this.state
        const { btc } = this.state;
        const { user } = this.state
        return (
            <section className="container profile-page">
                <div className="name-profile">Hello Hosam</div>
                <section className="balance">
                    <span >Current Balance</span>
                    <span className="bit">BTC: <span className="btc">{btc}</span></span>
                    {user && <span>BIT: <i className="fa fa-bitcoin" ></i> {user.coins}</span>}
                </section>
                {moves.length > 0 && <section>

                    <section className="moves-history">
                        <span><span className="move-icon">&Delta;</span> Last 3 Moves History</span>
                    </section>
                    <MovesList mode="home-page" moves={moves} />
                    {/* <Charts></Charts> */}
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