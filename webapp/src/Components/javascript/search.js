import * as React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'


import '../css/mainstyles.css'

const Search = () => {

    const searchSubmit = (e) => {
        e.preventDefault()

        // Fetch request to api/search which deals with using the parameters to use program to search
         /*fetch('/api/search/filtered', {
            method: 'POST',
            body: JSON.stringify({ 
                
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
        })
            .then(function (response) {*/
    }
    const [radioValue, setRadioValue] = React.useState('1');

    const radios = [
        { name: 'UoG', value: '1' },
        { name: 'McGill', value: '2' },
    ];

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-secondary padding">
                <a class="navbar-brand padding" href="/query">
                    <img src={require('../images/Team6_Logo.png')} width="60" height="60" class="d-inline-block align-top" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end nav-pills" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="/query">Query</a>
                        <a class="nav-item nav-link active" href="/search">Search</a>
                        <a class="nav-item nav-link" href="/graph">Graph</a>
                    </div>
                </div>
            </nav>

            <br />

            <Container>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 6 }}>
                        <Stack gap={3}>

                            <h1 className="text-center">Search for a course</h1>

                            <ButtonGroup>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant={idx % 2 ? 'outline-info' : 'outline-info'}
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                                <input class="form-control" type="text" placeholder="Enter Course code, name" />
                                <div class="text-center d-grid">
                                <Button variant="info" type="submit" onClick={searchSubmit}>Search</Button>{' '}
                                </div>
                            <Table id="resultTable" striped bordered hover>
                                <tbody>
                                    <tr>
                                        Search results will appear here
                                    </tr>
                                </tbody>
                            </Table>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Search