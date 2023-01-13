import React from 'react';
import { EditorialBanner } from './EditorialBanner';
import Product from './Product';

function MainBlock() {
    return ( 
        <div className = "homepage-mainblock">
            <div className = "container">
                <div className = "row">
                    <EditorialBanner />
                </div>
            </div>
            <div className = "container">
                <div className = "row">
{/* //<Suspense fallback={<><p>Loading Products</p><Spinner /></>}>
                    <Product />
                    </Suspense> */}
                    <Product />
                </div>
            </div>
            
        </div>
    );    
}
       
export default MainBlock;