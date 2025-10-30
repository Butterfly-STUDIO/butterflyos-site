"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ExternalLink, Mail, Send } from "lucide-react";

export default function Assistenza() {
    return (
        <main className="min-h-screen flex flex-col items-center pt-24 p-6">
            <h1 className="text-4xl font-bold mb-4">Come possiamo aiutarti?</h1>
            <p className="text-lg text-center max-w-xl mb-6 text-muted-foreground">
                Scegli l&apos;opzione più adatta a te per ricevere supporto
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
                <Card className="w-[280px] h-[350px] flex flex-col justify-between">
                    <CardHeader className="text-lg font-semibold">Guida online</CardHeader>
                    <CardContent className="flex justify-center mt-6">
                        <Globe className="w-[100px] h-[100px] text-orange-500 dark:text-orange-700" />
                    </CardContent>
                    <CardFooter className="mt-auto">
                        <a
                            href="https://butterflyos-docs.pages.dev/guide/introduzione"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <Button variant="secondary" className="w-full">
                                <ExternalLink className="mr-1" />
                                Vai alla documentazione
                            </Button>
                        </a>
                    </CardFooter>
                </Card>

                <Card className="w-[280px] h-[350px] flex flex-col justify-between">
                    <CardHeader className="text-lg font-semibold">Mail al supporto</CardHeader>
                    <CardContent className="flex justify-center mt-6">
                        <Mail className="w-[100px] h-[100px] text-blue-500 dark:text-blue-700" />
                    </CardContent>
                    <CardFooter className="mt-auto">
                        <a
                            href="mailto:btflyos@gmail.com?subject=ButterflyOS%20-%20Richiesta%20supporto"
                            className="w-full"
                        >
                            <Button variant="secondary" className="w-full">
                                <Send className="mr-1" />
                                Invia una mail al supporto
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}