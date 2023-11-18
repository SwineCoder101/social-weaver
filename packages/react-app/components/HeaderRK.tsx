import Link from 'next/link';
import Image from 'next/image';
import { Title } from './Title';
import AdminIcon from './AdminIcon.svg'; // Path remains unchanged
import TransferIcon from './TransferIcon.svg'; // Path remains unchanged
import { useAccount } from "wagmi";
import { useSession, signIn, signOut } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";



export default function Header() {
    const [titleText, setTitleText] = useState('Default Title'); // Set initial title
    // const [session, loading] = useSession();
    // const {address, connector} = useAccount();

    return (
        <nav className="bg-prosperity flex justify-between items-center border-b py-4 border-black">
            <div className="ml-4"> {/* Add margin to the left of the title */}
                <Title text= "SOCIAL WEAVER" />
            </div>
            <div className="flex space-x-6 mr-4">
                <Link href="/admin">
                    <span onClick={() => setTitleText('Admin')} className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        <Image src="./admin.svg"  alt="Admin" width={32} height={32} />
                        Admin
                    </span>
                </Link>

                <Link href="/transfer">
                    <span onClick={() => setTitleText('Transfer')} className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        <Image src="transfer.svg" alt="Transfer" width={32} height={32} />
                        Transfer
                    </span>
                </Link>
            </div>
            <div>
                <ConnectButton/>
            </div>
            
        </nav>
    );
}