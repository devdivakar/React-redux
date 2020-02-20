import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    detail:state.detail_data,
  })
  const mapDispatchToProps = dispatch => ({
    handleList:(myJson) =>{
        dispatch({ type: 'Detail', data:myJson })
    }
  })
class Detail extends React.Component {

    componentDidMount(){
        fetch('http://localhost:8000/api/'+this.props.match.params.id,{
          headers: {
            'samplepgm': true
          }
        })
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
        this.props.handleList(myJson)
    })
    }
    render() {
      return (<div className='body'>
          <div class="shadow">
  <div class="card">
    <div class="card-header">Hover me</div>
    <div class="card-body">
      <dl>
        <span>
          <dt><a target="_blank"></a></dt>
          <dd>{this.props.detail['name']}</dd>
        </span>
        <span>
          <dt><a></a></dt>
          <dd>{this.props.detail['value']}</dd>
        </span>
        <span>
          <dt><a></a></dt>
          <dd>{this.props.detail['config']}</dd>
        </span>
        <span>
          <dt><a></a></dt>
          <dd>{this.props.detail['detail']}</dd>
        </span>
      </dl>
    </div>
  </div>
</div>

      </div>)
    }
  }

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Detail));