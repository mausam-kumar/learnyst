import { ReactNode } from "react";

export type Gender = "Male" | "Female" | "Transgender" | "Rather not say" | "Other"

export type SelectMenuOption = { id: string; name: string | number }

export type TUser = {
    id: number
    first: string
    last: string
    dob: string
    gender: Gender
    email: string
    picture: string
    country: string
    description: string
}

export type IGlobalState = {
    isOpen: boolean
    dialogContent: ReactNode | null
}