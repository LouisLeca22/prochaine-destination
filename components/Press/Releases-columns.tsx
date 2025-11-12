"use client"

import { ColumnDef } from "@tanstack/react-table"
import { PressRelease } from "../../app/[locale]/press/pressData"
import { ExternalLink, Hash } from "lucide-react"
import Link from "next/link"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/Button"



export const getReleasesColumns = (locale: "fr" | "en"): ColumnDef<PressRelease>[] => [

    {
        accessorKey: "title",
        header: () => <div className="text-center">{locale === "fr" ? "Titre" : "Title"} </div>

    },
    {
        accessorKey: "date",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="flex items-center justify-center"
            >
                {locale === "fr" ? "Date" : "Date"}
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const date = row.original.date
            return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            }).format(date)
        },
        sortingFn: "datetime",
    },
    {
        accessorKey: "tags",
        header: () => <div className="text-center">Tags</div>,
        cell: ({ row }) => {
            const tags = row.original.tags
            return (
                <div className="flex gap-1">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full text-gray-600 bg-white"
                        >
                            <Hash className="w-3 h-3 text-primary" />
                            {tag}
                        </span>
                    ))}
                </div>
            )
        },
    },
    {
        accessorKey: "season",
        header: () => <div className="text-center">{locale === "fr" ? "Saison" : "Season"}</div>
    },
    {
        id: "action",
        header: () => <div className="text-center">Action</div>,
        cell: ({ row }) => {
            return (
                <Link href="http://www.linkedin.com/in/louis-leca" target="_blank" className="flex justify-center">
                    <ExternalLink className="h-6 w-6 text-secondary-foreground" />
                </Link>
            )
        },
    },
]