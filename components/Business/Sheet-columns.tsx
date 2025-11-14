"use client"

import { ColumnDef } from "@tanstack/react-table"
import { PressRelease } from "../../app/[locale]/press/pressData"
import { ExternalLink, Hash } from "lucide-react"
import Link from "next/link"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { DataSheet } from "@/app/[locale]/business/businessData"



export const getDataSheetsColumns = (locale: "fr" | "en"): ColumnDef<DataSheet>[] => [

    {
        accessorKey: "title",
        header: () => <div className="text-center">{locale === "fr" ? "Titre" : "Title"} </div>

    },
    {
        accessorKey: "tagline",
        header: () => <div className="text-center">{locale === "fr" ? "Accroche" : "Tagline"} </div>

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