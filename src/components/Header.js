import React from "react";

import CellTowerIcon from '@mui/icons-material/CellTower';

export default function Header(){
    return(
        <header>
            <h1 style={{display: 'flex', alignItems: 'center'}}>
                <CellTowerIcon style={{ fontSize: '2rem', marginRight: '0.5rem' }} />
                Contact Lister
            </h1>
        </header>
    )
}