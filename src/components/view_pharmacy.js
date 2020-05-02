import React,{Component} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PharmacyTableRow from './PharmacyTableRow.js';

export default class ViewPharmacy extends Component{
    constructor(props){
        super(props)
        this.state = {
            pharmacy: []
        };
    }
    componentDidMount(){
        axios.get('http://localhost:4000/pharmacy')
        .then(res => {
            this.setState({
                pharmacy: res.data
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    DataTable(){
        return this.state.pharmacy.map((res,i)=>{
            return <PharmacyTableRow obj={res} key={i} />
        })
    }

    render(){
        return(
            <div className="table-warapper">
                <Table striped border hover>
                    <thead>
                        <tr>
                            <th>Pharmacy Name</th>
                            <th>City</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        );
    }
}