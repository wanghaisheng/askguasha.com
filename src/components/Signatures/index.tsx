import React from 'react'

export const James = ({ className = '', ...other }: { className?: string }): JSX.Element => (
    <svg
        className={`fill-current ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="86"
        height="52"
        {...other}
    >
        <path d="M2.82 7.072c-.063 0-.095-.112-.095-.336 0-.288.032-.64.096-1.056.096-.416.192-.784.288-1.104.128-.352.24-.544.336-.576 1.248-.544 2.832-1.04 4.752-1.488a50.496 50.496 0 0 1 6.24-1.104 49.037 49.037 0 0 1 6.336-.432c.928 0 1.904.048 2.928.144 1.056.096 1.936.224 2.64.384.736.16 1.104.352 1.104.576 0 .032-.032.048-.096.048a51.01 51.01 0 0 0-2.304-.048c-.8-.032-1.632-.048-2.496-.048-2.368 0-4.8.24-7.296.72a45.16 45.16 0 0 0-6.96 1.824c-2.176.736-3.984 1.568-5.424 2.496H2.82Zm4.417 44.496a4.106 4.106 0 0 1-1.728-.912c-.512-.416-.768-.848-.768-1.296v-.192l.096-.192c0-.064.016-.096.048-.096h-.048c-.256 0-.464-.064-.624-.192-1.184-.832-2.048-1.808-2.592-2.928-.544-1.12-.816-2.336-.816-3.648 0-1.632.352-3.376 1.056-5.232.704-1.824 1.664-3.664 2.88-5.52a47.152 47.152 0 0 1 4.128-5.472 59.321 59.321 0 0 1 4.8-4.992 60.602 60.602 0 0 0 .384-6.768 46.56 46.56 0 0 0-.288-5.328c-.192-1.696-.496-3.2-.912-4.512 0-.16.288-.24.864-.24.544 0 1.12.112 1.728.336.64.224 1.008.64 1.104 1.248.128.8.224 1.648.288 2.544.064.864.096 1.76.096 2.688 0 1.216-.048 2.48-.144 3.792a54.666 54.666 0 0 1-.336 3.888 41.035 41.035 0 0 1 4.176-2.88c1.376-.832 2.64-1.44 3.792-1.824a1.41 1.41 0 0 1 .336-.048.906.906 0 0 1 .288-.048c.416 0 .624.112.624.336 0 .096-.08.208-.24.336a33.478 33.478 0 0 0-4.704 2.496 42.462 42.462 0 0 0-4.464 3.216c-.384 2.912-.88 5.84-1.488 8.784a177.54 177.54 0 0 1-1.92 8.256 264.453 264.453 0 0 1-1.872 6.96 94.478 94.478 0 0 1-1.008 3.408c-.256.928-.592 1.696-1.008 2.304-.384.64-.96 1.216-1.728 1.728ZM5.46 47.584c1.824-4.032 3.552-8.368 5.184-13.008.64-1.856 1.2-3.792 1.68-5.808.48-2.048.848-4.096 1.104-6.144a48.94 48.94 0 0 0-5.52 6.336c-1.632 2.208-2.912 4.4-3.84 6.576-.928 2.176-1.392 4.208-1.392 6.096 0 1.184.224 2.288.672 3.312.448 1.024 1.152 1.904 2.112 2.64ZM44.374 35.248c-.192 0-.48-.08-.864-.24a4.441 4.441 0 0 1-1.104-.672c-.32-.256-.544-.544-.672-.864-.224-.544-.368-1.296-.432-2.256a50.971 50.971 0 0 1-.096-3.264v-1.824c0-.64.016-1.28.048-1.92-.384.736-.912 1.552-1.584 2.448-.64.896-1.312 1.76-2.016 2.592-.704.832-1.36 1.52-1.968 2.064-.576.512-.992.768-1.248.768-.352 0-.736-.128-1.152-.384-.416-.288-.704-.592-.864-.912 0-.736.096-1.744.288-3.024.192-1.28.4-2.592.624-3.936.256-1.376.48-2.544.672-3.504a95.085 95.085 0 0 1-1.968 2.928 45.216 45.216 0 0 1-2.256 2.976c-.768.896-1.552 1.648-2.352 2.256-.768.576-1.488.864-2.16.864-.672 0-1.2-.224-1.584-.672a2.543 2.543 0 0 1-.576-1.632c0-.16.032-.368.096-.624a11.598 11.598 0 0 1 1.68-4.128 18.17 18.17 0 0 1 2.928-3.456c1.12-.992 2.224-1.776 3.312-2.352 1.088-.576 2.016-.864 2.784-.864a3.6 3.6 0 0 1 1.632.384c.544.224 1.056.608 1.536 1.152a.46.46 0 0 1 .144.336c0 .16-.096.32-.288.48a55.714 55.714 0 0 0-.72 2.784c-.224 1.056-.448 2.16-.672 3.312a85.201 85.201 0 0 0-.48 3.12c-.128.96-.192 1.696-.192 2.208 0 .352.048.528.144.528.128 0 .448-.24.96-.72a35.057 35.057 0 0 0 1.824-1.872c.672-.768 1.328-1.536 1.968-2.304a49.806 49.806 0 0 0 1.536-1.92l.096-3.024a91.16 91.16 0 0 0 .048-2.832c0-.512-.016-.992-.048-1.44 0-.448-.016-.848-.048-1.2-.064-.064-.256-.112-.576-.144a8.108 8.108 0 0 0-.864-.144l-.384-.096c0-.064.24-.208.72-.432.512-.256 1.232-.384 2.16-.384.928 0 1.536.176 1.824.528.288.352.432.656.432.912v.288a.906.906 0 0 1-.048.288 44.696 44.696 0 0 0-.864 6.48 93.484 93.484 0 0 0-.144 3.6c.032-.096.176-.592.432-1.488.288-.928.752-2.368 1.392-4.32.512-1.632.928-2.688 1.248-3.168.32-.512.592-.784.816-.816a5.8 5.8 0 0 0 .528.192c.288.096.576.256.864.48.288.192.432.448.432.768v.096a68.663 68.663 0 0 0-.624 4.032c-.16 1.504-.24 2.96-.24 4.368 0 .896.032 1.728.096 2.496.096.768.256 1.392.48 1.872 0-.128.096-.544.288-1.248.224-.704.48-1.504.768-2.4.288-.928.56-1.808.816-2.64l.576-1.872c.256-.768.48-1.28.672-1.536.224-.256.528-.384.912-.384.544 0 .928.336 1.152 1.008.256.64.416 1.44.48 2.4s.112 1.92.144 2.88c.032.96.096 1.776.192 2.448.128.64.368.96.72.96.416 0 .848-.304 1.296-.912a17.5 17.5 0 0 0 1.296-2.208c.448-.832.848-1.552 1.2-2.16.352-.64.624-.96.816-.96.096 0 .144.08.144.24 0 .128-.048.336-.144.624a72.461 72.461 0 0 1-1.44 3.264c-.512 1.088-1.04 2-1.584 2.736-.544.736-1.12 1.104-1.728 1.104-.768 0-1.376-.224-1.824-.672-.32-.288-.576-.816-.768-1.584-.192-.8-.352-1.632-.48-2.496-.128-.864-.256-1.6-.384-2.208-.096-.64-.208-.96-.336-.96-.096 0-.24.288-.432.864-.16.544-.336 1.232-.528 2.064-.192.832-.384 1.68-.576 2.544-.16.832-.304 1.568-.432 2.208-.096.64-.144 1.04-.144 1.2 0 .384-.176.608-.528.672-.32.064-.736.096-1.248.096-.224 0-.448-.352-.672-1.056-.224-.736-.432-1.664-.624-2.784a58.191 58.191 0 0 1-.384-3.648 47.726 47.726 0 0 1-.144-3.552v-.96c0-.32.016-.608.048-.864-.288.896-.624 1.968-1.008 3.216a39.12 39.12 0 0 0-1.008 3.936 24.375 24.375 0 0 0-.384 4.368c0 .768.064 1.392.192 1.872.128.448.32.88.576 1.296a.426.426 0 0 1 .048.192c0 .096-.064.144-.192.144Zm-18.72-7.68c.448 0 1.008-.256 1.68-.768.704-.512 1.424-1.168 2.16-1.968.768-.8 1.504-1.648 2.208-2.544a26.878 26.878 0 0 0 1.872-2.544c.544-.832.928-1.504 1.152-2.016-.64 0-1.376.24-2.208.72-.832.448-1.68 1.04-2.544 1.776a18.5 18.5 0 0 0-2.4 2.352c-.736.832-1.328 1.648-1.776 2.448-.448.8-.672 1.488-.672 2.064 0 .32.176.48.528.48Z" />
        <path d="M63.873 33.232c-1.088 0-1.936-.352-2.544-1.056-.576-.704-.976-1.6-1.2-2.688a19.852 19.852 0 0 1-.288-3.36c0-.768.032-1.488.096-2.16a55.45 55.45 0 0 1 .192-1.824c.16-1.312.368-2.576.624-3.792.256-1.216.496-2.256.72-3.12.256-.864.416-1.424.48-1.68.128-.448.368-.672.72-.672s.752.24 1.2.72c.448.448.768.816.96 1.104.736.224 1.456.496 2.16.816.704.288 1.28.608 1.728.96.48.352.72.736.72 1.152 0 .8-.336 1.6-1.008 2.4-.672.8-1.52 1.536-2.544 2.208a23.142 23.142 0 0 1-3.12 1.728 18.558 18.558 0 0 0-.144 2.304c0 1.28.16 2.4.48 3.36.32.96.864 1.44 1.632 1.44.672 0 1.312-.24 1.92-.72a8.77 8.77 0 0 0 1.776-1.824 21.616 21.616 0 0 0 1.44-2.208c.448-.768.784-1.408 1.008-1.92.064-.192.208-.288.432-.288.128 0 .192.144.192.432 0 .256-.192.8-.576 1.632a35.882 35.882 0 0 1-1.2 2.208 17.133 17.133 0 0 1-1.152 1.776 13.52 13.52 0 0 1-2.016 2.064 3.955 3.955 0 0 1-2.688 1.008Zm-.96-10.608a13.65 13.65 0 0 0 2.976-2.16c.896-.864 1.344-1.792 1.344-2.784 0-.352-.272-.704-.816-1.056a7.014 7.014 0 0 0-1.824-.96 30.05 30.05 0 0 0-1.008 3.264 51.333 51.333 0 0 0-.672 3.696ZM74.562 31.696c-.48 0-1.024-.064-1.632-.192a8.557 8.557 0 0 1-1.536-.576c-.416-.256-.624-.496-.624-.72 0-.512.48-.768 1.44-.768.544 0 1.184-.112 1.92-.336a20.855 20.855 0 0 0 2.016-.72c.64-.288 1.056-.496 1.248-.624-.128-.192-.432-.48-.912-.864a30.83 30.83 0 0 1-1.584-1.488 11.235 11.235 0 0 1-1.536-1.92 4.795 4.795 0 0 1-.624-2.4c0-.896.24-1.728.72-2.496.48-.8 1.072-1.52 1.776-2.16a17.342 17.342 0 0 1 2.208-1.728 42.54 42.54 0 0 1 1.968-1.248c.224-.128.464-.192.72-.192.512 0 .992.176 1.44.528.48.352.72.688.72 1.008 0 .032-.032.112-.096.24-.256.288-.544.736-.864 1.344a17.147 17.147 0 0 0-.768 1.92c-.224.64-.336 1.232-.336 1.776 0 .608-.128.912-.384.912-.128 0-.224-.128-.288-.384a2.976 2.976 0 0 1-.096-.72c0-.64.096-1.328.288-2.064.224-.736.368-1.264.432-1.584-.384 0-.912.256-1.584.768-.64.48-1.296 1.088-1.968 1.824a15.032 15.032 0 0 0-1.728 2.16c-.448.704-.672 1.28-.672 1.728 0 .608.208 1.168.624 1.68.416.48.928.928 1.536 1.344.64.416 1.232.864 1.776 1.344.32-.128.816-.352 1.488-.672a64.92 64.92 0 0 1 2.112-1.056c.768-.384 1.44-.704 2.016-.96.608-.256 1.008-.384 1.2-.384.064 0 .096.016.096.048 0 .224-.24.512-.72.864s-1.072.72-1.776 1.104c-.704.384-1.408.752-2.112 1.104-.672.352-1.2.624-1.584.816.096.288.144.576.144.864 0 .672-.24 1.216-.72 1.632-.448.416-1.024.736-1.728.96a7.308 7.308 0 0 1-2.016.288Z" />
    </svg>
)

export const Plus = ({ className = '', ...other }: { className?: string }): JSX.Element => (
    <svg
        className={`fill-current ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="20"
        {...other}
    >
        <path d="M7.36 19.688c-.224 0-.416-.16-.576-.48a2.732 2.732 0 0 1-.288-.864c0-.128.048-.48.144-1.056.096-.576.192-1.216.288-1.92.128-.736.24-1.408.336-2.016.096-.608.16-1.008.192-1.2-.192 0-.656-.016-1.392-.048a74.033 74.033 0 0 1-2.304-.144c-.8-.096-1.504-.224-2.112-.384-.608-.16-.912-.368-.912-.624 0-.352.096-.64.288-.864.192-.256.432-.384.72-.384 1.024 0 2.064-.016 3.12-.048a103.02 103.02 0 0 1 3.12-.048c.256-1.504.528-3.024.816-4.56A59.42 59.42 0 0 0 9.472.344c.352 0 .56.352.624 1.056.064.672.096 1.28.096 1.824 0 1.056-.032 2.128-.096 3.216a104.97 104.97 0 0 1-.144 3.168c.576 0 1.168.016 1.776.048h1.824a35.627 35.627 0 0 0 3.696-.192v.24c0 .288-.336.56-1.008.816-.64.224-1.424.432-2.352.624-.896.192-1.744.352-2.544.48s-1.328.224-1.584.288c-.032.256-.144.8-.336 1.632a39.26 39.26 0 0 1-.624 2.688 23.046 23.046 0 0 1-.72 2.448c-.256.672-.496 1.008-.72 1.008Z" />
    </svg>
)

export const Tim = ({ className = '', ...other }: { className?: string }): JSX.Element => (
    <svg
        className={`fill-current ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="57"
        height="44"
        {...other}
    >
        <path d="M13.483 43.096c-.928 0-1.712-.176-2.352-.528-.608-.32-1.088-.656-1.44-1.008-.352-.352-.56-.576-.624-.672-.064-.128-.096-.208-.096-.24 0-.16.096-.24.288-.24.192 0 .528.16 1.008.48.512.352 1.328.528 2.448.528.544 0 1.104-.096 1.68-.288a4.058 4.058 0 0 0 1.584-.864c.832-.768 1.568-1.92 2.208-3.456.64-1.568 1.2-3.408 1.68-5.52.512-2.112.944-4.4 1.296-6.864.352-2.464.64-4.992.864-7.584.256-2.592.448-5.136.576-7.632a.534.534 0 0 0-.24-.048c-.224.576-.448 1.2-.672 1.872-.224.672-.384 1.008-.48 1.008-.032 0-.048-.096-.048-.288 0-.192.048-.512.144-.96.096-.48.208-1.088.336-1.824a300.911 300.911 0 0 1-7.296-1.728c-2.4-.64-4.592-1.248-6.576-1.824.288.288.576.56.864.816.288.256.432.432.432.528 0 .032-.032.048-.096.048-.352 0-.864-.096-1.536-.288-.64-.224-1.36-.48-2.16-.768-.8-.32-1.568-.624-2.304-.912-.704-.32-1.296-.592-1.776-.816-.448-.256-.672-.4-.672-.432 0-.32.112-.736.336-1.248.192-.512.464-.976.816-1.392.352-.416.704-.624 1.056-.624.032 0 .064.016.096.048h.096c3.04.992 6.208 2.016 9.504 3.072a366.61 366.61 0 0 0 9.744 2.976l.672-3.648c.064-.448.352-.768.864-.96a5.154 5.154 0 0 1 1.728-.288c.64 0 1.04.112 1.2.336.192.224.288.592.288 1.104v.528c0 .192-.016.384-.048.576l-.336 3.552c3.136.8 6.032 1.472 8.688 2.016 2.656.512 4.848.768 6.576.768 1.504 0 2.512-.208 3.024-.624.544-.448.816-1.056.816-1.824 0-1.024-.192-1.76-.576-2.208-.384-.448-.576-.736-.576-.864 0-.032.016-.048.048-.048.096 0 .208.048.336.144.16.064.416.256.768.576.352.288.672.688.96 1.2.32.48.48 1.104.48 1.872 0 .96-.288 1.712-.864 2.256-.576.512-1.36.88-2.352 1.104-.96.192-2.016.288-3.168.288-1.376 0-2.8-.096-4.272-.288-1.44-.192-2.672-.4-3.696-.624-.992-.192-2.032-.4-3.12-.624-1.056-.224-2.16-.464-3.312-.72-.256 2.176-.56 4.432-.912 6.768-.352 2.336-.72 4.56-1.104 6.672a118.08 118.08 0 0 1-1.104 5.376 92.56 92.56 0 0 1-.816 2.88 38.35 38.35 0 0 1-1.344 3.744 23.728 23.728 0 0 1-1.92 3.696c-.704 1.152-1.536 2.096-2.496 2.832-.928.736-1.968 1.104-3.12 1.104Z" />
        <path d="M32.833 13.24c-.192 0-.4-.032-.624-.096l-.576-.288a.456.456 0 0 1-.192-.384c0-.288.176-.64.528-1.056a4.74 4.74 0 0 1 1.344-1.152c.544-.32 1.072-.48 1.584-.48.288 0 .432.08.432.24 0 .128-.144.288-.432.48a2.168 2.168 0 0 0-.768 1.056c-.16.448-.32.848-.48 1.2-.16.32-.432.48-.816.48ZM30.96 36.664c-.896 0-1.504-.4-1.824-1.2-.32-.832-.48-1.92-.48-3.264 0-1.248.064-2.56.192-3.936.16-1.408.352-2.72.576-3.936.256-1.248.544-2.256.864-3.024.32-.8.64-1.2.96-1.2.352 0 .656.176.912.528.288.32.512.688.672 1.104.192.416.288.752.288 1.008-.192.448-.432 1.168-.72 2.16-.256.96-.512 2.016-.768 3.168l-.624 3.12c-.16.928-.24 1.584-.24 1.968 0 1.152.304 1.728.912 1.728.256 0 .512-.064.768-.192.416-.192.848-.592 1.296-1.2.48-.608.944-1.296 1.392-2.064.448-.8.864-1.568 1.248-2.304a83.14 83.14 0 0 1 .96-1.872c.256-.512.416-.768.48-.768.128 0 .192.128.192.384 0 .288-.112.752-.336 1.392a13.79 13.79 0 0 1-.864 1.872c-.256.48-.576 1.088-.96 1.824a26.401 26.401 0 0 1-1.296 2.208 7.93 7.93 0 0 1-1.632 1.776c-.608.48-1.264.72-1.968.72Z" />
        <path d="M39.837 40.6c-.256 0-.672-.24-1.248-.72-.576-.448-.944-.976-1.104-1.584-.224-.8-.368-1.856-.432-3.168a88.066 88.066 0 0 1-.096-4.272c0-1.632.016-3.296.048-4.992.032-1.728.048-3.312.048-4.752v-1.92c0-.608-.032-1.136-.096-1.584-.064-.064-.256-.112-.576-.144a8.108 8.108 0 0 0-.864-.144l-.384-.096c0-.064.24-.208.72-.432.512-.256 1.232-.384 2.16-.384.928 0 1.536.176 1.824.528.288.352.432.656.432.912v.288a.906.906 0 0 1-.048.288 44.696 44.696 0 0 0-.864 6.48 93.484 93.484 0 0 0-.144 3.6c.032-.096.176-.592.432-1.488.288-.928.752-2.368 1.392-4.32.512-1.632.928-2.688 1.248-3.168.32-.512.592-.784.816-.816a5.8 5.8 0 0 0 .528.192c.288.096.576.256.864.48.288.192.432.448.432.768v.096a68.663 68.663 0 0 0-.624 4.032c-.16 1.504-.24 2.96-.24 4.368 0 .896.032 1.728.096 2.496.096.768.256 1.392.48 1.872 0-.128.096-.544.288-1.248.224-.704.48-1.504.768-2.4.288-.928.56-1.808.816-2.64l.576-1.872c.256-.768.48-1.28.672-1.536.224-.256.528-.384.912-.384.544 0 .928.336 1.152 1.008.256.64.416 1.44.48 2.4s.112 1.92.144 2.88c.032.96.096 1.776.192 2.448.128.64.368.96.72.96.416 0 .848-.304 1.296-.912a17.5 17.5 0 0 0 1.296-2.208c.448-.832.848-1.552 1.2-2.16.352-.64.624-.96.816-.96.096 0 .144.08.144.24 0 .128-.048.336-.144.624a72.461 72.461 0 0 1-1.44 3.264c-.512 1.088-1.04 2-1.584 2.736-.544.736-1.12 1.104-1.728 1.104-.768 0-1.376-.224-1.824-.672-.32-.288-.576-.816-.768-1.584-.192-.8-.352-1.632-.48-2.496-.128-.864-.256-1.6-.384-2.208-.096-.64-.208-.96-.336-.96-.096 0-.24.288-.432.864-.16.544-.336 1.232-.528 2.064-.192.832-.384 1.68-.576 2.544-.16.832-.304 1.568-.432 2.208-.096.64-.144 1.04-.144 1.2 0 .384-.176.608-.528.672-.32.064-.736.096-1.248.096-.224 0-.448-.352-.672-1.056-.224-.736-.432-1.664-.624-2.784a58.191 58.191 0 0 1-.384-3.648 47.726 47.726 0 0 1-.144-3.552v-.96c0-.32.016-.608.048-.864-.512 1.472-1.04 3.264-1.584 5.376-.544 2.08-.816 4.336-.816 6.768 0 .992.048 1.92.144 2.784.096.864.256 1.536.48 2.016a.534.534 0 0 1 .048.24c0 .128-.064.192-.192.192Z" />
    </svg>
)
