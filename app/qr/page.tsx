import { useState } from 'react';
import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";
import QRCode from 'qrcode.react';


const QrPage = async() => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return <EmptyState
        title="Unauthorized"
        subtitle="Please login"
        />
    }
    // Implement date check

    // const listings = await getListings({ userId: currentUser.id });
    // for (let i = 0; i < listings.length; i++) {
    //     const obj = listings[i];
    //     console.log(obj.id);
    //   }


    return (
        <div>
           QR
        </div>
    );
}

export default QrPage;