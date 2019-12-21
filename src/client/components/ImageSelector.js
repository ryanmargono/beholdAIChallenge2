import React from 'react'
import { Container, Row, Col } from "shards-react";

const ImageSelector = props => {
    const { data, onImageSelect, selected } = props
    const images = Object.keys(data).map(key => data[key])
    return (
        <Container>
        {
            images && images.map(image => (
                <Row className='imageRow' onClick={() => onImageSelect(image)}>
                    <Col> 
                        <img 
                            style={{borderRadius: '4%', opacity: image.Metadata.SOPInstanceUID === selected.Metadata.SOPInstanceUID ? '1': '0.5'}} 
                            src={`images/${image.Filename}`}  
                        />
                    </Col>
                </Row>
            ))
        }
        </Container>
    )
}

export default ImageSelector
