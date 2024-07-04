/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITextbox{
    type: string;
    placeholder?: string
    value?: string | number
    onChange: (e:any)=>void
    showError?: boolean
    errorMessage?: string
}