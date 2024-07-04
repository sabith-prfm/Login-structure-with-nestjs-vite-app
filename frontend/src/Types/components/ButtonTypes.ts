export interface IButton{
    type?: "submit" | "reset" | "button"
    buttonLabel: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: (e:any)=>void
    loading?: boolean
}