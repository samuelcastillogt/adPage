import React from 'react';
import Link from 'next/link'
const GenericLinkButton = (props) => {
    const {title, to} = props
    return (
        <Link href={to} className='bg-yellow-700 p-3 rounded-lg m-2 text-center text-white'>{title}</Link>
    );
};

export default GenericLinkButton;