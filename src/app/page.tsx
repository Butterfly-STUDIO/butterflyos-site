"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <Image
          src="/img/logo.png"
          alt="ButterflyOS logo"
          width={120}
          height={120}
          className="mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">ButterflyOS</h1>
        <p className="text-lg text-center max-w-xl mb-12 text-muted-foreground">
          Un'esperienza Linux minimale e bellissima
        </p>
        <h3 className="text-2xl font-semibold mb-4">In arrivo prossimamente...</h3>
        <div className="flex gap-4 mb-6">
          <Link href="/panoramica">
            <Button variant="outline">Scopri di più</Button>
          </Link>
        </div>
      </main>
    </>
  );
}