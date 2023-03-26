import { useEffect, useState } from 'react'
import validateInfo from './validateInfo';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


const useForm = () => {

    const [object, setObject] = useState({})
    const navigates = useNavigate()
    const data = useSelector((state) => state.Reducer);

    useEffect(() => {
        data.map((item) => {
            setObject(item)
        })
    }, [])

    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardType: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardPostalCode: '',
        focus: ''
    })

    const [errors, setErrors] = useState({})

    const handleFocus = (e) => {
        setValues({
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { movie_name, price, language, userSelectedTime, seats, Theater, totalTiketPrice, seatNumber } = object
        if (values.cardName && values.cardNumber && values.cardType && values.cardExpiration && values.cardSecurityCode && values.cardPostalCode) {
            setErrors(validateInfo(values))
            navigates("/finalBooking");
            alert("your Ticket booked successfuly")

            let response = await fetch("http://localhost:5000/finalTicket", {
                method: "POST",
                body: JSON.stringify({
                    movie_name, price, language, userSelectedTime, seats, Theater, totalTiketPrice, seatNumber
                }),
                headers: {
                    "content-type": "application/json"
                }
            }).then((item) => {
                console.log(item.body)
            })
        } else {
            alert("plase fill all the required filleds")
        }
    }
    return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm; 