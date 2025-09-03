import useNavigation from '../hooks/use-navigation';

function Link({to, children}) {
    const { navigate } = useNavigation();

    const handleLinkClick = (e) => {
        e.preventDefault();
        navigate(to);
    };

    return (
        <a className='pointer-events' onClick={handleLinkClick} href={to}>
        {children}
        </a>
    )
}

export default Link;
