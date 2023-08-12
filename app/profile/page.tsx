import React from 'react';
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";
import WalletConnect from '../components/WalletConnect';

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();



  return (
    <ClientOnly>
      <div className="profile-container">
        <div className="profile-image">
          <img id="profileImage" src="https://o.remove.bg/downloads/0a8d40f8-c52b-424d-8d78-87123a34f5ca/download-removebg-preview.png" alt="Profile" />
        </div>
        <div className="profile-name">
          {currentUser.name}
        </div>
      </div>
      {/* Add other profile information and components here */}
    </ClientOnly>
  );
}
 
export default ListingPage;
