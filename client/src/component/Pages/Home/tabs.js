import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './styles.scss';

function HomeTabs() {
  return (
    <>
    <div className='tabsContainer'>
      <Tabs
            defaultActiveKey="rent"
            id="fill-tab-example"
            className="tabsCaption"
            fill
        >
            <Tab eventKey="rent" title="Rent">
                  <div className='formTab'>
                    <div className='optionField'>
                    <Container>
                    <Row>
                        <Col md={10} xs={12}>
                          <Row>
                            <Col md={4} xs={12} className="colSelect">
                              <Form.Select aria-label="Default select example">
                                <option>Select Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                            <Col md={4} xs={12} className="colSelect">
                              <Form.Select aria-label="Default select example">
                                <option>Province</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                            <Col md={4} xs={12} className="colSelect">
                              <Form.Select aria-label="Default select example">
                                <option>City/Muncipality</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={2} xs={12} className="buttonField">
                          <Button variant="primary" full-width>Primary</Button>
                        </Col>
                      </Row>
                    </Container>
                    </div>
                  </div>
            </Tab>
            <Tab eventKey="sale" title="Sale">
            <div className='formTab'>
                <div className='optionField'>
                    <Container>
                    <Row>
                        <Col md={10} xs={12}>
                        <Row>
                            <Col md={4} xs={12} className="colSelect">
                            <Form.Select aria-label="Default select example">
                                <option>Select Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            </Col>
                            <Col md={4} xs={12} className="colSelect">
                            <Form.Select aria-label="Default select example">
                                <option>Province</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            </Col>
                            <Col md={4} xs={12} className="colSelect">
                            <Form.Select aria-label="Default select example">
                                <option>City/Muncipality</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            </Col>
                        </Row>
                        </Col>
                        <Col md={2} xs={12} className="buttonField">
                        <Button variant="primary" full-width>Primary</Button>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </div>
            </Tab>
            <Tab eventKey="lease" title="Lease">
            <div className='formTab'>
                <div className='optionField'>
                    <Container>
                    <Row>
                        <Col md={10} xs={12}>
                        <Row>
                            <Col md={4} xs={12} className="colSelect">
                            <Form.Select aria-label="Default select example">
                                <option>Select Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            </Col>
                            <Col md={4} xs={12} className="colSelect">
                            <Form.Select aria-label="Default select example">
                                <option>Province</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            </Col>
                            <Col md={4} xs={12} className="colSelect">
                            <Form.Select aria-label="Default select example">
                                <option>City/Muncipality</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            </Col>
                        </Row>
                        </Col>
                        <Col md={2} xs={12} className="buttonField">
                        <Button variant="primary" full-width>Primary</Button>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </div>
            </Tab>
      </Tabs>
    </div>
    </>
  );
}
export default HomeTabs;