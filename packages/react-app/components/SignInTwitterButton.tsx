import { useSession, signIn, signOut } from "next-auth/react";

export function SignInTwitterButton() {
    const { data: session, status } = useSession(); // Using useSession to get session data and status

    return (
        <div className="border w-full space-y-4 p-4 flex flex-col border-black">
            {status === "unauthenticated" ? (
                <button
                    onClick={() => signIn("twitter")}
                    className="border-2 border-black px-4 py-2"
                >
                    Sign in with Twitter
                </button>
            ) : status === "loading" ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <h3>Signed as:</h3>
                    <div className="flex space-x-2 w-full items-center">
                        {session && session.user && (
                            <>
                                <img
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "100%",
                                    }}
                                    src={session.user.image || ""}
                                    alt={session.user.name || "User"}
                                />
                                <div className="flex flex-col">
                                    <h2>{session.user.name}</h2>
                                    {/* <h3>{`@${session.user.username?.toLowerCase()}`}</h3> */}
                                </div>
                            </>
                        )}
                    </div>
                    <div className="flex flex-col w-full space-y-2">
                        <button
                            className="border-2 border-black px-4 py-2"
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
