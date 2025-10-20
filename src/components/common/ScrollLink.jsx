import { Link } from "react-router-dom";

function ScrollLink({ to, children, ...props }) {
    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Link to={to} onClick={handleClick} {...props}>
            {children}
        </Link>
    );
}

export default ScrollLink;
