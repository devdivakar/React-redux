import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => ({
    list:state.list_data,
  })
  const mapDispatchToProps = dispatch => ({
    handleList:(myJson) =>{
        dispatch({ type: 'List', data:myJson })
    }
  })




class List extends React.Component {

componentDidMount(){
    fetch('http://localhost:8000/api/',{
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

handleClick=(id)=>{
    this.props.history.push('/detail/'+id)
}
 render() {
      return ( 
      <div>

<div class="table-users">
   <div class="header">Users</div>
   
   <table cellspacing="0">

      {this.props.list.map((d,i)=>{
      return(
        <tr key={i}>
        <th className='id' onClick={()=>{
            this.handleClick(d.id)
        }}>{d.id}</th>
        <th>{d.name}</th>
        <th>{d.status}</th>
      </tr>
      )
    })}
     
   </table>
</div>
      </div>
      )
    }
  }

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(List));