
interface SelectIconProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: {width: number | string, height: number | string}
}

export const SelectIcon = ({ size, style, ...others }: SelectIconProps) => {
    return (
        <svg style={{ width: size?.width, height: size?.height, ...style }} viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...others}>
            <path d="M1 0.999999L7.21905 6.33061C7.66844 6.7158 8.33156 6.7158 8.78095 6.33061L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    )
}