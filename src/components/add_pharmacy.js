import React,{Component} from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import axios from 'axios';


export default class AddPharmacy extends Component{
    constructor(props){
        super(props)

        this.onChangePharmacyName = this.onChangePharmacyName.bind(this);
        this.onChangePharmacyAddress = this.onChangePharmacyAddress.bind(this);
        this.onChangePharmacyPNo = this.onChangePharmacyPNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            name: '',
            address: '',
            phone: ''
        }
    }

    onChangePharmacyName(e){
        this.setState({name: e.target.value});
    }
    onChangePharmacyAddress(e){
        this.setState({address: e.target.value});
    }
    onChangePharmacyPNo(e){
        this.setState({phone: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        
        const pharmacyObj ={
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone
        };
        axios
            .post('http://localhost:4000/pharmacy/addpharmacy',pharmacyObj)
            .then(res =>console.log(res.data));
        
        this.setState(
            {name: '',
            address: '',
            phone: ''})
    }
    render(){
        return(
           <div className="form-wrapper">
               <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="PharmacyName">
                        <Form.Label>Name of the Pharmacy:</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangePharmacyName}/>
                    </Form.Group>
                    <Form.Group controlId="PharmacyAddress">
                        <Form.Label>Address of the Pharmacy:</Form.Label>
                        <Form.Control type="text" value={this.state.address} onChange={this.onChangePharmacyAddress}/>
                    </Form.Group>
                    <Form.Group controlId="PharmacyPNo">
                        <Form.Label>Phone of the Pharmacy:</Form.Label>
                        <Form.Control type="text" value={this.state.phone} onChange={this.onChangePharmacyPNo}/>
                    </Form.Group>
                    <Button varient="primary" size="lg" block="block" type="submit">
                        New Pharmacy
                    </Button>
               </Form>
           </div>
        );
    }
}