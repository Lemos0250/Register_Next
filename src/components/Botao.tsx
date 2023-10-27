interface BotaoProps {
    children: any
    className?: string
    cor?: 'green' | 'blue' | 'gray'
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {

    const cor = props.cor ?? 'gray'

    return (
        <button onClick={props.onClick} className={`
        px-4 py-2 rounded-md
        bg-gradient-to-r from-${cor}-400 to-${cor}-700
        text-white
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}