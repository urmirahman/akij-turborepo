export type BaseLink = {
    href: string
    text: string
}

export type BaseImage = {
    src: string
    alt: string
}

export type FormField = {
    label: string
    helpMessage?: string
}

export type FormFieldWithValidation = FormField & {
    errorMessage: string
}

export type FormOptionField = {
    label: string
}

export type TrackLinkHandler = (event: { buttonName: string; buttonText: string; buttonCategory: string }) => void

export type AddressLookupState = 'loading' | 'lookup' | 'manual'

export type AddressSuggestion = {
    singleLineName: string
    addressLine1: string
    addressLine2?: string
    city: string
    state?: string
    zipCode: string
}
