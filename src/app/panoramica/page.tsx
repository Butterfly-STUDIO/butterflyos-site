"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Panoramica() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4">Prossimamente...</h1>
        <p className="text-lg text-center max-w-xl mb-6 text-muted-foreground">
          La panoramica visiva di ButterflyOS arriverà presto: stiamo preparando qualcosa di speciale. Nel frattempo, puoi seguirci o contattarci tramite la pagina dedicata.
        </p>
        <Link href="/contatti">
          <Button variant="outline">Vai alla pagina Contatti</Button>
        </Link>
      </main>
    </>
  );
}