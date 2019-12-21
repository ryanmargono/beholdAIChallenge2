import React from 'react'
import  {FormCheckbox} from "shards-react"
import { Row, Col } from "shards-react";

const Toggle = props => (
    <Row>
        <Col sm='10' className='toggleText'>
            {props.field}
        </Col>
        <Col sm='2' className='toggleText'>
            <FormCheckbox
                toggle
                small
                checked={props.checked}
                onChange={()=>props.onToggle(props.field)}
                >
            </FormCheckbox>
        </Col>
    </Row>
)

export default Toggle