import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Footer from '@/components/footer'
import React from 'react'
import NavBar from '@/components/ui/navbar'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = async ({ children }: AuthLayoutProps) => {

    const session = await auth()

    if (session) return redirect("/")

    const authenticated = !!session

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar authenticated={authenticated}/>
            <main className="flex items-center justify-center flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default AuthLayout