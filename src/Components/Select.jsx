import React from 'react'
import { Form } from 'react-bootstrap';

export default function Select({ setSeason }) {

    function handleChange(event){
        setSeason(event.target.value);
    }

  return (
    <div id='select-container'>
            <Form.Select onChange={handleChange} aria-label='Default select'>
                <option value=''>Select season...</option>
                <option value='2022'>2022-2023</option>
                <option value='2021'>2021-2022</option>
                <option value='2020'>2020-2021</option>
                <option value='2019'>2019-2020</option>
                <option value='2018'>2018-2019</option>
            </Form.Select>
        </div>
  )
}
