import React from 'react'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import NewTransactionForm from './NewTransactionForm'

const CardShow = (props) => {

  const handleDelete = (event) => {
    event.preventDefault()
    props.deleteCard(props.cardData.id)
  }

  return(
    <div>
      <div className = 'rows'>
        <div className = "columns medium-12 card-tile">
          <h1>{props.cardData.name}</h1>
          <img src = {props.cardData.image}/>
          <h3>{props.cardData.description}</h3>
          <ul className = "list">
            <li>Expiration Date: {props.cardData.date}</li>
            <li>Limit: ${props.cardData.limit}</li>
            <li>Annual Fee: ${props.cardData.fee}</li>
          </ul>

          <Button variant="contained" color="primary" type="submit" onClick={handleDelete}>
            Delete Card
          </Button>
          <Button variant="contained" color="primary" type="submit" href={`/cards/${props.cardData.id}/edit`}>
            Edit Card
          </Button>
        </div>
        <div className = "columns medium-12 card-tile">
          <div className = 'rows'>
            <h4>Add a new transaction</h4>
            <NewTransactionForm
              onSubmit = {props.submitNewTransaction}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardShow
