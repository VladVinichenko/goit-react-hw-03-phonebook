import Section from "./components/Section/Section";
import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import s from './App.module.css'
import propTypes from "prop-types";

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
    filterInput: ''
  }



  onAddContact = (evt) => {
    evt.preventDefault()
    if (this.state.name.trim().length > 0) {
      this.setState(prevState => {
        const contacts = [...prevState.contacts, { name: this.state.name, number: this.state.number, id: nanoid() }]
        return { contacts: contacts }
      })
    }
  }

  onDeleteContact = (removeId) => {
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== removeId) })
    this.state.filterInput && this.setState({ filter: this.state.contacts.filter(el => el.id !== removeId) })
    this.onFilterChange()
  }

  onInput = (evt) => {
    const data = {}
    data[evt.target.name] = evt.target.value
    this.setState(data)
  }

  onFilterChange = () => {
    this.setState(prevState => {
      if (prevState.filterInput.trim().length > 0) {
        return { filter: prevState.contacts.filter(el => el.name.toLowerCase().includes(prevState.filterInput.toLowerCase())) }
      }
      return { filter: '' }
    })
  }

  onInputFilter = (evt) => {
    this.setState({ filterInput: evt.target.value })
    this.onFilterChange()
  }

  render() {
    const renderList = this.state.filterInput.length > 0 ? this.state.filter : this.state.contacts
    return (
      <Fragment>
        <Section>
          <h1 className={s.title}>Phonebook</h1>
          <ContactForm onAddContact={this.onAddContact} onInputName={this.onInput} onInputTel={this.onInput} />
          <h2 className={s.title}>Contacts</h2>
          <Filter onInputFilter={this.onInputFilter} />
          <ContactList renderList={renderList} onDeleteContact={this.onDeleteContact} />
        </Section>
      </Fragment>
    )
  }
}


export default App