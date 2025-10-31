"use client"
import { useScopedI18n } from "@/locales/client"
import ScrollFloat from "../ui/ScrollFloat"
import Separator from "../ui/Separator"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import emailjs from '@emailjs/browser';

import { Button } from "@/components/ui/Button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { ComposableMap, Annotation, Geographies, Geography } from "react-simple-maps"
import { useRef, useState } from "react"


function MapChart() {
    const t = useScopedI18n("Home.Contact")
    const geoUrl = "/topojson/features.json"
    return (
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                center: [0, 48],
                scale: 1400,
            }}
            className="aspect-video mt-8 md:mt-0 md:h-[70vh] w-full md:w-[50%] mask-gradient"
        >
            <Geographies
                fill="#06B6D4"
                stroke="#FFFFFF"
                strokeWidth={0.5}
                geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => {
                        return < Geography key={geo.rsmKey} geography={geo} />
                    })
                }
            </Geographies>
            <Annotation
                subject={[0.1079, 49.4944]}
                dx={-200}
                dy={80}
                curve={3}
                connectorProps={{
                    stroke: "#fff",
                    strokeWidth: 3,
                    strokeLinecap: "round"
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#06B6D4">
                    {t("destination")}
                </text>
            </Annotation>
        </ComposableMap>
    )
}

function ContactForm() {
    const formRef = useRef(null);
    const t = useScopedI18n("Home.Contact")

    const [success, setSucces] = useState<boolean | null>(null)
    const [error, setError] = useState<boolean | null>(null)

    const contactFormSchema = z.object({
        email: z
            .string()
            .trim()
            .email({ message: t("emailFormat") })
            .min(1, { message: t("emailRequired") }),

        message: z
            .string()
            .trim()
            .min(10, { message: t("messageMin") })
            .max(1000, { message: t("messageMax") }),
    });
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            email: "",
            message: ""
        },
    })

    function onSubmit(values: z.infer<typeof contactFormSchema>) {
        emailjs
            .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, values, {
                publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            })
            .then(
                () => {
                    setSucces(true)
                },
                (error) => {
                    console.log(error)
                    setError(true)
                },
            );
    }

    return (
        <Form {...form}>
            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className=" w-full md:w-[50%] md:mx-20 mx-0 flex flex-col items-center justify-center space-y-5 md:space-y-10  rounded-2xl p-2 md:p-20 "
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input className="dark:text-white dark:placeholder:text-white  border-primary" placeholder={t("emailLabel")} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Textarea className="dark:text-white dark:placeholder:text-white resize-none border-primary h-32 overflow-y-auto" placeholder={t("messageLabel")} {...field} />
                            </FormControl>
                            <FormMessage />
                            {success && <div>{t("emailSuccess")}</div>}
                            {error && <div>{t("emailError")}</div>}
                        </FormItem>
                    )}
                />
                <Button variant="secondary"
                    className="relative bg-secondary text-primary-foreground font-medium border-none rounded-xl px-4 py-2 w-[200px]
             hover:bg-linear-to-r from-emerald-400 to-emerald-300 cursor-pointer shadow-md
             hover:scale-110 transition-all duration-300 ease-out"
                    type="submit"
                >
                    {t("submit")}
                </Button>
            </form>
        </Form>
    )
}


function Contact() {
    const t = useScopedI18n("Home.Contact")
    return (
        <section className="h-screen">
            <div className="sticky z-40 overflow-hidden top-0 left-0 bg-background pt-20 md:pt-15 pb-4 mb-10 text-center flex flex-col items-center">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-3xl md:text-4xl font-josefin-sans font-bold text-primary"
                >
                    {t("Heading")}
                </ScrollFloat>
                <Separator width="w-200" />
            </div>
            <div className="flex md:flex-row flex-col">
                <ContactForm />
                <MapChart />
            </div>
        </section>
    )
}
export default Contact