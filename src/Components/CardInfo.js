import React,{useEffect} from 'react';
import base_url from '../config';

function CardInfo(props) {
    const upiId = window.location.pathname.split('/')[2];
    const [data,setdata] = React.useState();
    useEffect(() => {
        fetch(base_url.backend_url+'/api/pay/getupiCard/'+upiId, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            setdata(data);
        })
    }, [])
    return (
        <div>
            {console.log(data)}
        </div>
    );
}

export default CardInfo;