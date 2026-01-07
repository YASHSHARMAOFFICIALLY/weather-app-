import type { PropsWithChildren } from "react";
import Header from "./Header";

const Layout = ({children}: PropsWithChildren)=>{
    return(
        <div className="bg-linear-to-br from-background to-muted ">
           <Header/>
            <main className="min-h-screen container mx-auto px-4 py-8">
                {children}
            </main>
            <footer className="border-t backdrop-blur-2xl py-12">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>Made with love by yash</p>
                </div>
            </footer>
        </div>
    )
}
export default Layout