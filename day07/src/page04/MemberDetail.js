import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';

const MemberDetail = () => {

    const { memberId } = useParams()
    const navigate = useNavigate()
    const [member, setMember] = useState({})
    const onBack = () => {
      navigate(-1)
    }
    const {name, email, phone, website} = member

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${memberId}`)
        .then(res => setMember(res.data))
    })

    const css = {
        border: '1px solid salmon',
        margin: 20,
        padding: 20
    }
    return (
        <div style={css}>
            <h2>MemberDetail Page</h2>
            <h4>아이디: {memberId}</h4>
            <h4>이름: {name}</h4>
            <h4>이메일: {email}</h4>
            <h4>전화번호: {phone}</h4>
            <h4>웹사이트: {website}</h4>
            <button onClick={onBack}>뒤로</button>
        </div>
    );
};

export default MemberDetail;