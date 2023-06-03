import React from 'react';
import Link from 'next/link'
const GenericLinkButton = (props) => {
    const {title, to} = props
    return (
        <Link href={to} className='bg-[#FEAE00] p-3 rounded-full m-2 text-center '>{title}</Link>
    );
};

export default GenericLinkButton;