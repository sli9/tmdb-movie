import {rem} from "@mantine/core";

interface AddressBookIconProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number | string;
}

export const SelectIcon = ({ size, style, ...others }: AddressBookIconProps) => {
    return (
        <svg style={{ width: rem(size), height: rem(size), ...style }} viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...others}>
            <path d="M1 0.999999L7.21905 6.33061C7.66844 6.7158 8.33156 6.7158 8.78095 6.33061L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    )
}