export type Gender = "Male" | "Female" | "Transgender" | "Rather not say" | "Other"
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