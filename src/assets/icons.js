const ListIcon = ({color}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5"
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="9" y1="6" x2="20" y2="6"/>
        <line x1="9" y1="12" x2="20" y2="12"/>
        <line x1="9" y1="18" x2="20" y2="18"/>
        <line x1="5" y1="6" x2="5" y2="6.01"/>
        <line x1="5" y1="12" x2="5" y2="12.01"/>
        <line x1="5" y1="18" x2="5" y2="18.01"/>
    </svg>
);

const CardIcon = ({color}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-grid" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="4" y="4" width="6" height="6" rx="1"/>
        <rect x="14" y="4" width="6" height="6" rx="1"/>
        <rect x="4" y="14" width="6" height="6" rx="1"/>
        <rect x="14" y="14" width="6" height="6" rx="1"/>
    </svg>
)

export { ListIcon, CardIcon };
