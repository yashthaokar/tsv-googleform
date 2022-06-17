import './GoogleForm.css'
import { useState } from 'react'
import axios from 'axios'

const GoogleForm = () => {
    const [userinfo, setUserInfo] = useState({
        services: []
    })
    const [state, setState] = useState({
        name: "",
        locality: "",
        contact: "",
        instagram: ""
    })


    const onCHangeHandeler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    const checkHandeler = (e) => {
        // Destructuring
        const { name, checked } = e.target;
        const { services } = userinfo;

        console.log(`${name} is ${checked}`);

        // Case 1 : The user checks the box
        if (checked) {
            setUserInfo({
                services: [...services, name]
            });
        }

        // Case 2 : The user unchecks the box
        else {
            setUserInfo({
                services: services.filter((e) => e !== name)
            });
        }
    };

    const dataPost = async () => {
        const dta = {
            name: state.name,
            locality: state.locality,
            service: userinfo.services,
            instaId: state.instagram
        }
        await axios.post("http://localhost:5000/register", dta).then((response) =>
            console.log(response)).catch((err) => {
                console.log(err)
            })
    }

    const onSaveHandeler = () => {
        console.log(state)
        console.log(userinfo.services)
        dataPost()
    }
    return (
        <div className="container">
            <div className="modal">
                <div className="item">
                    <label className='itemLabel'>Name</label><br />
                    <input type="text" className="inputArea" name='name' value={state.name} onChange={onCHangeHandeler} />
                </div>
                <div className="item">
                    <label className='itemLabel'>Locality</label><br />
                    <input type="text" className="inputArea" name="locality" value={state.locality} onChange={onCHangeHandeler} />
                </div>
                <div className="item">
                    <label className='itemLabel'>Area of Services</label><br />
                    <span className="services">
                        <input type="checkbox" name="Wedding" className='checkItem' onChange={checkHandeler} />
                        <label className="serviceLabel">Wedding</label>
                    </span>
                    <span className="services">
                        <input type="checkbox" name="Portrait" className='checkItem' onChange={checkHandeler} />
                        <label className="serviceLabel">Portrait</label>
                    </span>
                    <span className="services">
                        <input type="checkbox" name="Babyshoot" className='checkItem' onChange={checkHandeler} />
                        <label className="serviceLabel">Babyshoot</label>
                    </span>
                    <span className="services">
                        <input type="checkbox" name="Prewedding" className='checkItem' onChange={checkHandeler} />
                        <label className="serviceLabel">Prewedding</label>
                    </span>
                    <span className="services">
                        <input type="checkbox" name="Product" className='checkItem' onChange={checkHandeler} />
                        <label className="serviceLabel">Product</label>
                    </span>
                    <span className="services">
                        <input type="checkbox" name="Architeture" className='checkItem' onChange={checkHandeler} />
                        <label className="serviceLabel">Architeture</label>
                    </span>
                    <span className="services">
                        <input type="checkbox" name="Birthday" className='checkItem' onChange={checkHandeler} />
                        <label className="serviceLabel">Birthday</label>
                    </span>
                    <span className="services">
                        <input type="checkbox" name="Event" className='checkItem' onChange={checkHandeler} />
                        <label className="serviceLabel">Event</label>
                    </span>
                    <span className="services">
                        <input type="checkbox" name="Other" className='checkItem' onChange={checkHandeler} />
                        <label className="serviceLabel">Other</label>
                    </span>
                </div>
                <div className="item">
                    <label className='itemLabel'>Enter your instagram id</label><br />
                    <input type="text" className="inputArea" name="instagram" value={state.instagram} onChange={onCHangeHandeler} />
                </div>
                <div className="agree">
                    <span>
                        <input type="checkbox" className='checkItem' />
                    </span>
                    <span>
                        <p>
                            Do you agree that we can use your instagram pictures to build your profile
                        </p>
                    </span>
                </div>
                <div className="item">
                    <label className='itemLabel'>Contact Number</label><br />
                    <input type="text" className="inputArea" name='contact' value={state.contact} onChange={onCHangeHandeler} />
                </div>
                <div className="footerText">
                    <p className='text'>If you have any issue or have any query
                        contact on below number 9702796695/9284924660
                    </p>
                </div>
                <button onClick={onSaveHandeler}>Submit</button>
            </div>
        </div>
    )
}

export default GoogleForm