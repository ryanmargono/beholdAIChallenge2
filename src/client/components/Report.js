import React from 'react'
import Toggle from './Toggle'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Col,
    Row,
} from "shards-react"

export default class Report extends React.Component {
    state = {
        diseases: {}
    }
    
    componentDidUpdate(prevProps){
        if (this.props.data.Metadata.SOPInstanceUID !== prevProps.data.Metadata.SOPInstanceUID) {
            this.setState({diseases: this.props.data.diseases ? this.props.data.diseases : {} })
        }
    }

    onToggle = field => {
        const updated = { ...this.state.diseases }
        updated[field] = updated[field] ? false : true 
        this.setState({ diseases: updated })
    }

    render(){
        const { fields, data, onReportSubmit } = this.props 
        return (
            <>
            <Card className='report'>
                <CardHeader>Report for {data.Filename} </CardHeader>
                <CardBody>
                    {
                        fields.map(field => <Toggle onToggle={this.onToggle} checked={this.state.diseases[field]} field={field}/>)
                    }
                </CardBody>
                <CardFooter> 
                    <Button theme="info" onClick={()=>onReportSubmit(this.state, data)}> Submit Report </Button> 
                </CardFooter>
            </Card>
            <Card className='metaData'>
                <CardBody>
                        {
                            data && Object.keys(data.Metadata).map(e => (
                                <Row>
                                <Col className='metaDataText' sm='5'>
                                    {e}
                                </Col>
                                <Col className='metaDataText' sm='7'>
                                    {data.Metadata[e]}
                                </Col>
                            </Row>
                            ))
                        }
                </CardBody>
            </Card>
            </>
        )
    }
}