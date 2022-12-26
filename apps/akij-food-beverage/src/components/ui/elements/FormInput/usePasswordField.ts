import type { ClipboardEvent, ForwardedRef } from 'react';
import { useEffect, useImperativeHandle, useRef, useState } from 'react'

import type { IconProps } from '../Icon'
import type { FormInputProps } from './FormInput'

type UsePasswordFieldParams = {
    forwardedRef: ForwardedRef<HTMLInputElement> | undefined
    inputType: Required<FormInputProps>['type']
}

export function usePasswordField({ forwardedRef, inputType }: UsePasswordFieldParams) {
    const inputRef = useRef<HTMLInputElement>(null)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(forwardedRef, () => inputRef.current ?? null!)

    const [internalType, setInternalType] = useState(inputType)

    /*
     * To prevent browsers trying to save the password form value when it's set to [type=text], we'll reset it back to a
     * [type=password] field when the (assumed) form is submitted.
     */
    useEffect(() => {
        if (inputType !== 'password') return

        function onFormSubmit() {
            setInternalType('password')
        }

        const $form = inputRef.current?.closest('form')

        $form?.addEventListener('submit', onFormSubmit)

        return () => {
            $form?.removeEventListener('submit', onFormSubmit)
        }
    }, [inputType])

    return {
        inputRef,
        onCopy: inputType === 'password' ? (e: ClipboardEvent<HTMLDivElement>) => e.preventDefault() : undefined,
        internalType,
        togglePasswordType: () => setInternalType((prev: string) => (prev === 'text' ? 'password' : 'text')),
        passwordIconProps: {
            name: internalType === 'text' ? 'hide' : 'show',
            title: internalType === 'text' ? 'hide' : 'show',
        } as IconProps,
    }
}
