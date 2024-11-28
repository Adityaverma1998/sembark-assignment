import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
    name: string;
    link: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="breadcrumb py-4">
            <ol className="breadcrumb ">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}
                    >
                        {index === items.length - 1 ? (
                            item.name
                        ) : (
                            <Link to={item.link}>{item.name}</Link>
                        )}
                        {index < items.length - 1 && <span>{' > '}</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
