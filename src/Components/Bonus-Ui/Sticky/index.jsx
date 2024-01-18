import React, { useState, Fragment, useEffect } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Input } from 'reactstrap';
import { StickyNote, AddNewNote } from '../../../Constant';
import axios from 'axios';
import { Breadcrumbs, H3, Btn } from '../../../AbstractElements';
import { v4 as uuidv4 } from 'uuid';

const Sticky = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/sticky.json`)
      .then(res => setNotes(res.data));
  }, []);

  const addStickyNote = () => {
    setNotes([...notes, { id: uuidv4(), isDeleted: false }]);
  };

  const deleteNote = (note) => {
    const notelist = notes.filter((item) => {
      return item.id !== note.id;
    })
    setNotes(notelist);
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle='Sticky' parent="Bonus Ui" title="Sticky" />
      <Container fluid={true}>
        <Row className="sticky-header-main">
          <Col sm="12">
            <Card>
              <CardHeader className='pb-0'>
                <H3>{StickyNote}
                  <Btn attrBtn={{ color: 'primary pull-right m-l-10', onClick: () => { addStickyNote() } }}>{AddNewNote}</Btn>
                </H3>
              </CardHeader>
              <CardBody>
                <div className="sticky-note" id="board">
                  {notes.map((data) => (
                    <div className={`note ui-draggable ui-draggable-handle ${data.isDeleted ? 'd-none' : ''}`} key={data.id}>
                      <a href="# " onClick={() => deleteNote(data)} className="button remove" >{'X'}</a>
                      <div className="note_cnt">
                        <Input type='textarea' className="form-control title" placeholder="Enter note title" style={{ height: 64 }}></Input>
                        <Input type='textarea' className="form-control cnt" placeholder="Enter note description here" style={{ height: 200 }}></Input>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Sticky;