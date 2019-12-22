import React from 'react';
import { Link } from 'react-router-dom'
// import contactService from '../../services/ContactService'
import ContactPreview from '../../cmps/ContactPreview/ContactPreview'
import { connect } from 'react-redux'
import TransferFund from '../../cmps/TransferFund/TransferFund'
import { loadCurrContact } from '../../modules/contacts/actions'
import { isLogged, addMove, loadUserMoves } from '../../modules/users/actions'
import MovesList from '../../cmps/MovesList/MovesList'
import './ContactDetailsPage.scss'

class ContactDetails extends React.Component {
    state = {
        contact: null,
        isLogged: null

    }
    async componentDidMount() {
        const { id } = this.props.match.params
        await this.props.loadCurrContact(id)
        await this.props.isLogged()
        await this.props.loadUserMoves(id)
        const { isLogged } = this.props.userInfo
        this.setState({ isLogged })
    }

    async handleAmount(amount) {
        const { currContact } = await this.props
        const { currUser } = await this.props.userInfo
        if (this.state.isLogged) {
            if (amount > currUser.coins) return console.log('no money');
            this.props.addMove(currContact, amount)
            await this.props.loadUserMoves(currContact._id)

        }
        else {
            this.props.history.push('/signup')
        }

    }

    render() {
        const { currContact } = this.props
        const { moves } = this.props.userInfo
        // console.log(userMoves)
        return (
            <section className="container contact-details">
                <div className="toolbar">
                    <Link to="/contact">
                        <button>Back</button>
                    </Link>

                    {currContact && <Link to={`/contact/edit/${currContact._id}`}>
                        <button>Edit</button>
                    </Link>}
                </div>

                {currContact && <ContactPreview mode="full" contact={currContact}
                />}
                <TransferFund amount={(amount) => this.handleAmount(amount)} contact={currContact} />
                <div className="moves-history">
                    <span><span className="move-icon">&Delta;</span> Moves History</span>
                </div>
                {moves && <MovesList moves={moves} />}

            </section>
        )

    }
}

const mapStateToProps = (state) => {

    return {
        currContact: state.contact.currContact,
        userInfo: state.user,
        // userMoves: state.user.moves
    }
}

const mapDispatchToProps = {
    loadCurrContact,
    isLogged,
    addMove,
    loadUserMoves
}
// console.log('mapdispatch:', mapDispatchToProps)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetails)