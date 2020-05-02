import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class PharmacyTableRow extends Component{
    constructor(props) {
        super(props);
        this.deletePharmacy = this.deletePharmacy.bind(this);
    }

    deletePharmacy() {
        axios.delete('http://localhost:4000/pharmacy/deletepharmacy/' + this.props.obj._id)
            .then((res) => {
                console.log('Successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render(){
        return(
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.phone}</td>
                <td><Link className="edit-link" to={"/editpharmacy/" + this.props.obj._id}>
                        Edit
                </Link>
                <Button onClick={this.deletePharmacy} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        )
    }
}
