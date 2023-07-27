import { Card, Col, Container, Form, Row } from "react-bootstrap"
import ComparedCard from "../Components/Comparedcard"
import { useEffect, useState } from "react"

export default function Dashboard() {

    const [selectVal,setSelectVal] = useState('');

    function handleSelect(event){
        setSelectVal(event.target.value);
    }

//  const url = 'https://api-football-v1.p.rapidapi.com/v3/players?id=276&season=2020';
//  const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '35e9ca2e0emsh8ae9f0bf9a5e3fep134fa6jsn397ec355d9a0',
//         'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//  	}
//  };

// async function data() {
// 	const response =  await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } 
// data()



    // selectVal==='team' ? console.log("team") : selectVal==='players' ? console.log("players") : console.log('neither player or team')
    // useEffect(()=>(
    //     console.log(selectVal)
    // ),[selectVal])

  return (
    <Container>
        <Row>
            <Col md={{span:4 , offset:4}}>
                <Form.Select onChange={handleSelect} size='sm' aria-label="Default select example">
                    <option value={null}>Compare...</option>
                    <option value="team">Compare Team</option>
                    <option value="players">Compare Player</option>
                </Form.Select>
            </Col>
        </Row>
        <Row>
            <Col>
                <ComparedCard player={null} />
            </Col>
            <Col>
                <ComparedCard player={null} />
            </Col>
        </Row>
    </Container>

    
  )
}


'https://api-football-v1.p.rapidapi.com/v3/players'
'https://api-football-v1.p.rapidapi.com/v3/teams/statistics'