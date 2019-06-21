import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => {
    return (
        <NavStyles>
            <Link href="/items">
                <a>Items</a>
            </Link>
            <Link href="/sell">
                <a>Sell</a>
            </Link>
            <Link href="/orders">
                <a>Orders</a>
            </Link>
            <Link href="/account">
                <a>Account</a>
            </Link>
            <Link href="/singup">
                <a>SingUp</a>
            </Link>
        </NavStyles>
    )
}

export default Nav
