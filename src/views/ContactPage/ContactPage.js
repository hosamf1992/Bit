import React from 'react'
import ContactList from '../../cmps/ContactList/ContactList'
// import contactService from '../../services/ContactService'
import ContactFilter from '../../cmps/ContactFilter/ContactFilter'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadContacts } from '../../modules/contacts/actions'
import './ContactPage.scss'

class ContactPage extends React.Component {

    state = {
        // contacts: [],
        filter: null,
        test: false
    }

    async componentDidMount() {

        await this.props.loadContacts()
    }

    setFilter = async (filter) => {
        const filterBy = { term: filter }
        this.props.loadContacts(filterBy)
    }

    render() {
        const { contacts } = this.props;
        return (
            <section className="contact-container">
                <ContactFilter  filter={this.setFilter} />
                <div >
                    <Link to="/contact/edit/">
                        <button className="add-btn" >+</button>
                    </Link>
                </div>
                {contacts.length !== 0 && <ContactList contacts={contacts} />}
            </section>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        contacts: state.contact.contacts
    }
}

const mapDispatchToProps = {

    loadContacts,
}
// console.log('mapdispatch:', mapDispatchToProps)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactPage)