import React from 'react'

export const YCBadge = ({ className }: { className: string }): JSX.Element => {
    return (
        <svg fill="none" className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 63">
            <rect x=".5" y=".5" width="93.804" height="41" rx="1.5" fill="#fff" />
            <g clipPath="url(#a)">
                <path d="M38 4H4v34h34V4Z" fill="#FB651E" />
                <path
                    d="m19.854 23.224-5.836-10.932h2.667l3.433 6.918c.052.123.114.251.184.383.07.132.132.269.185.41a.813.813 0 0 1 .08.145c.017.044.035.083.052.119.088.176.168.347.238.514.07.168.132.322.185.463.14-.3.295-.621.462-.964.167-.344.339-.7.515-1.07l3.486-6.918h2.482l-5.889 11.064v7.05h-2.244v-7.182Z"
                    fill="#fff"
                />
            </g>
            <path
                d="M64.528 12.564 60.76 29.028h-2.568l-2.04-9.144c-.4-1.776-.688-3.336-.864-4.68a64.708 64.708 0 0 1-.84 4.536l-2.016 9.288h-2.544L46 12.564h2.112l2.088 9.624c.176.8.472 2.472.888 5.016a82.09 82.09 0 0 1 .936-4.776l2.184-9.864h2.232l2.136 9.552c.56 2.512.888 4.208.984 5.088.176-1.248.496-2.944.96-5.088l2.04-9.552h1.968ZM75.96 27.492l-.383 1.536h-9.168v-1.512a23.301 23.301 0 0 0 1.68-1.296l1.896-1.584a60.994 60.994 0 0 0 1.704-1.464c.464-.432.776-.776.936-1.032.368-.624.552-1.232.552-1.824 0-1.392-.848-2.088-2.544-2.088-1.072 0-2.28.48-3.624 1.44l-.168.12-.768-.96c1.712-1.488 3.392-2.232 5.04-2.232 1.184 0 2.168.272 2.952.816.896.624 1.344 1.504 1.344 2.64 0 1.136-.568 2.288-1.704 3.456-.576.592-1.624 1.432-3.144 2.52l-2.16 1.56a29.849 29.849 0 0 1 2.472-.096h5.088ZM88.804 23.172c0 1.808-.432 3.272-1.296 4.392-.96 1.248-2.312 1.872-4.056 1.872-1.808 0-3.184-.624-4.128-1.872-.848-1.12-1.272-2.616-1.272-4.488 0-1.808.432-3.272 1.296-4.392.96-1.248 2.312-1.872 4.056-1.872 1.808 0 3.184.624 4.128 1.872.848 1.12 1.272 2.616 1.272 4.488Zm-1.968.312c0-1.552-.192-2.712-.576-3.48-.544-1.088-1.504-1.632-2.88-1.632-2.24 0-3.36 1.464-3.36 4.392 0 1.552.192 2.712.576 3.48.544 1.088 1.504 1.632 2.88 1.632 2.24 0 3.36-1.464 3.36-4.392Z"
                fill="#000"
            />
            <rect x=".5" y=".5" width="93.804" height="41" rx="1.5" stroke="#FB651E" />
            <g opacity=".75" fill="currentColor">
                <path d="M38.879 62h-1.066l-.52-6.539a29.367 29.367 0 0 1-.065-1.521 20.73 20.73 0 0 1-.351 1.404L34.966 62h-.91l-1.768-6.331a28.81 28.81 0 0 1-.442-1.742c-.026.598-.061 1.174-.104 1.729L31.248 62H30.22l.78-8.918h1.56l1.625 5.824c.147.529.264 1.049.35 1.56.13-.659.239-1.144.326-1.456l1.677-5.928h1.573L38.879 62ZM44.944 58.932H40.9v.156c0 .641.1 1.114.299 1.417.347.529.884.793 1.612.793a2.26 2.26 0 0 0 1.586-.611l.39.65c-.59.537-1.317.806-2.184.806-.962 0-1.694-.342-2.197-1.027-.45-.615-.676-1.421-.676-2.418 0-.91.22-1.677.663-2.301.503-.702 1.187-1.053 2.054-1.053.72 0 1.304.238 1.755.715.32.338.533.763.637 1.274.07.33.104.815.104 1.456v.143Zm-1.08-.767c-.008-.615-.099-1.079-.272-1.391-.234-.416-.633-.624-1.196-.624-.945 0-1.443.672-1.495 2.015h2.964ZM54.512 62h-1.04v-4.784c0-.633-.277-.949-.832-.949-.32 0-.628.117-.923.351-.121.095-.347.277-.676.546l-.117.104V62h-1.027v-4.602c0-.355-.052-.615-.156-.78-.121-.208-.351-.312-.69-.312-.467 0-1.017.286-1.65.858V62h-.975v-4.823c0-.65-.078-1.174-.234-1.573l.988-.234c.156.312.234.615.234.91v.052c.624-.65 1.252-.975 1.885-.975.737 0 1.24.36 1.508 1.079.676-.72 1.37-1.079 2.08-1.079.494 0 .888.169 1.183.507.295.33.442.745.442 1.248V62ZM61.729 58.672c0 .919-.195 1.699-.585 2.34-.46.763-1.122 1.144-1.99 1.144-.32 0-.65-.078-.987-.234a2.158 2.158 0 0 1-.793-.624 2.43 2.43 0 0 1-.182.702h-1.014c.13-.286.195-.823.195-1.612v-6.149c0-.676-.087-1.187-.26-1.534l1.105-.221c.113.485.169 1.023.169 1.612v1.443c0 .373-.009.611-.026.715.59-.58 1.209-.871 1.859-.871.858 0 1.508.351 1.95 1.053.373.58.559 1.326.559 2.236Zm-1.131-.065c0-1.534-.533-2.301-1.6-2.301-.658 0-1.2.282-1.624.845v3.328c.399.52.932.78 1.599.78 1.083 0 1.625-.884 1.625-2.652ZM68.07 58.932h-4.044v.156c0 .641.1 1.114.3 1.417.346.529.883.793 1.611.793a2.26 2.26 0 0 0 1.586-.611l.39.65c-.59.537-1.317.806-2.184.806-.962 0-1.694-.342-2.197-1.027-.45-.615-.676-1.421-.676-2.418 0-.91.221-1.677.663-2.301.503-.702 1.188-1.053 2.054-1.053.72 0 1.305.238 1.755.715.32.338.533.763.637 1.274.07.33.104.815.104 1.456v.143Zm-1.08-.767c-.008-.615-.1-1.079-.273-1.391-.234-.416-.632-.624-1.196-.624-.945 0-1.443.672-1.495 2.015h2.964ZM72.762 55.396l-.416 1.105a1.003 1.003 0 0 0-.286-.052c-.26 0-.52.078-.78.234a1.442 1.442 0 0 0-.559.559c-.078.147-.117.381-.117.702V62H69.59v-4.94c0-.598-.078-1.075-.234-1.43l1.014-.273c.147.32.221.641.221.962v.091c.512-.72 1.118-1.079 1.82-1.079.104 0 .221.022.351.065Z" />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" transform="translate(4 4)" d="M0 0h34v34H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}