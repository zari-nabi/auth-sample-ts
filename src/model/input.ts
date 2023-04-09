export interface IInput {
    label: string,
    name: string,
    value: string,
    onChange: (event:any) => void,
    required?: boolean,
    type?: string,
    error?: boolean,
    textError?: string
}