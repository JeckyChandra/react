import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderLogOut } from './header/header';

export default function HomePage() {
	const navigate = useNavigate();

    useEffect(() => {
		const accessToken = localStorage.getItem('access_token');
		if (accessToken) {
			navigate('/home');
		}
	}, []);

    return (
        <div>
            <HeaderLogOut/>
            <main>
            <h2 style={{display:"flex"}}>Home Page</h2>
        </main>
        </div>
    );
}