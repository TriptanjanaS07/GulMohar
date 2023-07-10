import getCurrentUser from "@/app/actions/getCurrentUser";
import QRCode from 'react-qr-code';

const QrCode = async () => {
    const currentUser = await getCurrentUser();
    return (
        <div className="flex mt-8 flex-col items-center h-screen">
            <h2 className="mt-8">Your wallet id: {currentUser.wallet}</h2>
            <QRCode className="mt-8"value={currentUser.wallet}/>
        </div>
    )
}

export default QrCode;