import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Title } from './Title';
import AdminIcon from './AdminIcon.svg'; // Path remains unchanged
import TransferIcon from './TransferIcon.svg'; // Path remains unchanged

export default function Header() {
    const [titleText, setTitleText] = useState('Default Title'); // Set initial title

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
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {componentInitialized && address ? (
                    <button
                      type="button"
                      className="inline-flex content-center place-items-center rounded-full border border-wood bg-black py-2 px-5 text-md font-medium text-snow hover:bg-forest"
                      onClick={disconnect}
                    >Disconnect</button>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex content-center place-items-center rounded-full border border-wood bg-forest py-2 px-5 text-md font-medium text-snow hover:bg-black"
                      onClick={() =>
                        connect().catch((e) => console.log((e as Error).message))
                      }
                    >Connect</button>
                  )}
                </div>
        </nav>
    );
}