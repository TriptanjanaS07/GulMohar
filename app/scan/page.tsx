import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

const ActiveEvent = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return <EmptyState
        title="Unauthorized"
        subtitle="Please login"
        />
    }

    const listings = await getListings({ userId: currentUser.id });

    if (listings.length === 0) {
        return (
          <ClientOnly>
            <EmptyState
              title="No active event at the moment :("
              subtitle="Looks your events are yet to be held!."
            />
          </ClientOnly>
        );
      }
      console.log(listings)
    return (
        <div>
            hii
        </div>
    )
}

export default ActiveEvent;