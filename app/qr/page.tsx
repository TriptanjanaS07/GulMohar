import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import QRCode from 'react-qr-code';

const QrCode = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
      }
    return (
        <div className="flex mt-8 flex-col items-center h-screen">
            <h2 className="mt-8">Your wallet id: {currentUser?.wallet}</h2>
            <QRCode value={`${currentUser?.wallet}`} className="mt-8"/>
        </div>
    )
}

export default QrCode;