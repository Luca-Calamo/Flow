'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import IndividualFits from '@/app/components/individual-fits/IndiFitsCard';
import articles from '@/data/articles/articles'; // Assuming this is where you store articles or fits data

export default function IndiFitsPage() {
    const { id } = useParams(); // Capture the dynamic 'id' from the URL

    const [fitData, setFitData] = useState(null);

    useEffect(() => {
        const fitId = parseInt(id); // Convert id to a number
        const fit = articles.find((item) => item.id === fitId); // Find the fit using the dynamic id

        if (fit) {
            setFitData(fit); // Set the fitData if found
        }
    }, [id]); // Re-run the effect if the id changes

    if (!fitData) {
        return <p>Loading...</p>; // Display a loading state while fetching
    }

    return (
        <div>
            <h1>Individual Fit #{fitData.id}</h1>{' '}
            {/* Show the fit's ID or some unique info */}
            <IndividualFits src={fitData.image} />{' '}
            {/* Assuming you have an image URL or path */}
        </div>
    );
}
