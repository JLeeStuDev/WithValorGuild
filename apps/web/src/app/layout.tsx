import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';


export const metadata: Metadata = { title: 'With Valor', description: 'Guild site' };
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-white text-gray-900">
                <div className="mx-auto max-w-5xl p-6">
                    <header className="mb-8 flex items-center justify-between">
                        <h1 className="text-2xl font-bold">With Valor</h1>
                            <nav className="space-x-4 text-sm">
                                <a href="/" className="hover:underline">Home</a>
                                <a href="/roster" className="hover:underline">Roster</a>
                                <a href="/events" className="hover:underline">Events</a>
                            </nav>
                    </header>
                    {children}
                </div>
            </body>
        </html>
    );
}