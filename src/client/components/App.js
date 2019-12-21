import React from 'react'
import { Container, Row, Col} from 'shards-react'
import { connect } from 'react-redux'

import ImageSelector from './ImageSelector'
import Report from './Report'
import { fetchData, postData } from '../stores/data/DataEffect'
import { fetchDisease } from '../stores/disease/DiseaseEffect'
import Nav from './Nav'

class App extends React.Component {
  state = {
    selected: {}
  };

  componentDidMount(){
    const {fetchData, fetchDisease} = this.props
    Promise.all([ fetchData(), fetchDisease() ])
      .then(res => this.setState({selected: res[0].data[0]}))
  }

  onImageSelect = image => {
    this.setState({selected: image})
  }

  onReportSubmit = (report, data) => {
    this.props.postData({...report, ...data})
      .then(()=>{
        const state = Object.keys(this.props.data)
        const next = state.findIndex(e=> e === data.Metadata.SOPInstanceUID) + 1
        if (next < state.length) this.setState({selected: this.props.data[state[next]]})
      })
  }

  render() {
    const { data, diseases } = this.props
    const { selected } = this.state
    if (!data || !diseases || !selected.Filename) return <div> loading... </div>
    return (
      <Container id="content">
        <Nav />
        <Row>
          <Col sm='2' className='imageSelector app'> 
             <ImageSelector selected={selected} data={data} onImageSelect = {this.onImageSelect}/>  
          </Col>
          <Col className='app grey'>
            <img className='selectedImg' src={`images/${selected.Filename}`} />
          </Col>
          <Col className='app grey'>  
            <Report data={selected} fields={diseases} onReportSubmit={this.onReportSubmit}/>  
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapState = store => ({
  data: store.data,
  diseases: store.diseases
})
const mapProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
  fetchDisease: () => dispatch(fetchDisease()),
  postData: data => dispatch(postData(data))
})

export default connect(mapState, mapProps)(App)
