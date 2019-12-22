import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadCurrContact,deleteContact,saveContact } from '../../modules/contacts/actions'
import './ContactEditPage.scss'
import avatar from '../../assets/imgs/avatar.png'

class ContactEditPage extends React.Component {
    state = {
        contact: {
            name: '',
            phone: '',
            email: ''
        },
        isEditing: false
    }

    async componentDidMount() {

        const { id } = await this.props.match.params
        if (id) {
            await this.props.loadCurrContact(id)
            const currContact = await this.props.currContact
            this.setState({ contact: currContact, isEditing: true })
        }
    }
    componentWillUnmount() {
        const emptyContact = this.emptyContact
        this.setState({ contact: emptyContact })
    }

    handleInput(value, type) {
        this.setState(prevState => ({
            contact: {
                ...prevState.contact,
                [type]: value
            }
        }))
    }
    emptyContact() {
        const contact = {
            name: '',
            phone: '',
            email: ''
        };
        return contact
    }

    async save() {
        const newUser = this.state.contact
        // await contactService.saveContact(newUser)
        this.props.saveContact(newUser)
        this.props.history.push('/contact')
    }
    async delete(id) {
        this.props.deleteContact(id)
        this.props.history.push('/contact')
    }

    render() {
        const { contact } = this.state
        const { isEditing } = this.state
        return (
            <section className="container edit-page">
                <div className="toolbar toolbar-edit">
                <Link to="/contact">
                    <button>Back</button>
                    </Link>
                </div>
                <section className="form-edit">
                <img className="avatar" src={avatar} />  
               <input onChange={(ev) => this.handleInput(ev.target.value, 'name')} value={contact.name} placeholder="Name" type="text" />
                <input onChange={(ev) => this.handleInput(ev.target.value, 'phone')} value={contact.phone} placeholder="Phone" type="text" />
              <input onChange={(ev) => this.handleInput(ev.target.value, 'email')} value={contact.email} placeholder="Email" type="text" />
              <div className="edit-btns">
              <button onClick={() => this.save(this)}>Save</button>
                {isEditing && <button onClick={() => this.delete(contact._id)}>Delete</button>}
              </div>
               

                </section>
            </section>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        currContact: state.contact.currContact
    }
}

const mapDispatchToProps = {

    saveContact,
    loadCurrContact,
    deleteContact
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactEditPage)