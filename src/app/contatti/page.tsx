"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink} from "lucide-react";

export default function Contatti() {
    return (
        <main className="min-h-screen flex flex-col items-center pt-24 p-6">
            <h1 className="text-4xl font-bold mb-4">Restiamo in contatto</h1>
            <p className="text-lg text-center max-w-xl mb-6 text-muted-foreground">
                Segui ButterflyOS sui social
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
                <Card className="w-[280px] h-[350px] flex flex-col justify-between">
                    <CardHeader className="text-lg font-semibold">Instagram</CardHeader>
                    <CardContent className="flex justify-center mt-6">
                        <Instagram className="w-[100px] h-[100px] text-pink-500 dark:text-pink-700" />
                    </CardContent>
                    <CardFooter className="mt-auto">
                        <a
                            href="https://www.instagram.com/btflyos?igsh=cmVuaWhvcGo2MnFp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <Button variant="secondary" className="w-full">
                                <ExternalLink className="mr-1" />
                                Vai su Instagram
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}