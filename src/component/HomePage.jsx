import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
	const navigate = useNavigate();

    useEffect(() => {
		const accessToken = localStorage.getItem('access_token');
		if (accessToken) {
			navigate('/');
		}
	}, []);

    return (
        <main style={{ padding: "200px" }}>
            <h2 style={{display:"flex"}}>Home Page</h2>
        </main>
    );
}