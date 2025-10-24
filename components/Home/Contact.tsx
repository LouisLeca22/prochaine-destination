"use client"
import { useScopedI18n } from "@/locales/client"
import ScrollFloat from "../ui/ScrollFloat"
import Separator from "../ui/Separator"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/Button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/Form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"


function ContactForm() {
    const t = useScopedI18n("Home.Contact")

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
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-cyan-500 flex-1/3 flex flex-col items-center space-y-10  backdrop-blur-md p-8 rounded-2xl shadow-lg"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input className="dark:text-white dark:placeholder:text-white" placeholder={t("emailLabel")} {...field} />
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
                                <Textarea className="dark:text-white dark:placeholder:text-white" placeholder={t("messageLabel")} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="relative bg-amber-300 text-cyan-900 font-medium border-none rounded-xl px-4 py-2 w-[200px] hover:bg-gradient-to-r from-amber-400 to-yellow-300 cursor-pointer shadow-md hover:scale-110" type="submit">{t("submit")}</Button>
            </form>
        </Form>
    )
}


function Contact() {
    const t = useScopedI18n("Home.Contact")
    return (
        <section className="h-screen snap-start">
            <div className="sticky z-40 overflow-hidden top-0 left-0 bg-background pt-20 md:pt-15 pb-4 mb-10 text-center flex flex-col items-center">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-5xl font-josefin-sans font-bold text-cyan-500"
                >
                    {t("Heading")}
                </ScrollFloat>
                <Separator width="w-200" />
            </div>
            <div className="flex md:flex-row flex-col w-[80vw] mx-auto">

                <ContactForm />
                <div className="flex-2/3">

                </div>
            </div>
        </section>
    )
}
export default Contact