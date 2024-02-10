import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './Data'
import PersonItem from "./components/PersonItem"


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [filtername, setFilterName] = useState('')

  useEffect(() => {
    personService.getALL()
      .then(result => {
        setPersons(result.data)
      })
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault();
    const newObj = {
      name: newName,
      phone: phoneNum
    }
    // if (persons.find((element) => element.name === newName)) {
    //   const newObj = persons.find((element) => element.name === newName)
    //   const updateObj = {...newObj, phone:phoneNum}
    //   if(window.confirm(`${newName} is already added to phonebook, replace old number with new one?`)){
    //     personService.updatePhone(newObj.id, updateObj)
    //     .then((response) => {
    //       console.log(response.data)
    //     })
    //     setNewName("")
    //     setPhoneNum("")
    //     const newPersons = persons.filter(el => el.id !== newObj.id)
    //     setPersons(newPersons.concat(updateObj))
    //   }
    // }
    //else {
      personService.addPerson(newObj)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
      setNewName("")
      setPhoneNum("")
    //}
  }

  const handleInput = (event) => {
    setNewName(event.target.value);
  }
  const handlePhone = (event) => {
    setPhoneNum(event.target.value)
  }
  const handleFilter = (event) => {
    setFilterName(event.target.value)
  }

  const handleDelete = (id) => {
    const newObj = persons.find((element) => element.id === id)
    if(window.confirm(`Delete ${newObj.name}`)){
      personService.deletePerson(id)
      .then(response => console.log(response.data))
      const newPersons  = persons.filter((element) => element.id !== id)
      setPersons(newPersons)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter you names: <input value={filtername}
          onChange={handleFilter} />
      </div>
      <h2>Add new Name</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName}
        handleInput={handleInput} phoneNum={phoneNum} handlePhone={handlePhone} />
      <h2>Numbers</h2>
      <ul>
        {persons.map((item) => {
          return <PersonItem key={item.id} person={item} deleteRecord={handleDelete} />
        })}
      </ul>
      <h2>Filtered Results</h2>
      <Filter persons={persons} filtername={filtername}  />
    </div>
  )
}

export default App
