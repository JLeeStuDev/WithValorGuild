import { Button } from '@ui/Button';


export default function Page() {
    return (
        <main className="space-y-6">
            <section className="rounded-2xl border p-6 shadow-sm">
                <h2 className="text-xl font-semibold">Welcome to With Valor</h2>
                <p className="mt-2 text-sm text-gray-600">A modern, type‑safe, production‑ready guild site starter.</p>
                <div className="mt-4">
                    <Button onClick={() => alert('For Azeroth!')}>For Azeroth</Button>
                </div>
            </section>
        </main>
    );
}