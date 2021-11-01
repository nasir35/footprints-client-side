import React from 'react';
import usePackages from '../../../Hooks/usePackages';
import Package from './Package';

const Packages = () => {
    const {packages} = usePackages();
    return (
        <div className="md:p-12 sm:p-8 p-4">
            <div className="text-center">
            <h2 className="sm:text-2xl text-xl font-qsand inline-block border-b-4 border-green-custom px-4 text-stromboli font-medium">Choose your Package</h2>
            </div>

            {packages.length ==0 ?
            <div class="flex justify-center items-center py-6">
                <div className="animate-bounce text-stromboli mr-5 font-qsand font-medium">loading...</div>
                <div class=" animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coral"></div>
            </div>
            :
            <div className="mt-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {
                    packages.map(pack => <Package key={pack._id} pack={pack}></Package>)
                }
            </div>}
        </div>
    );
};

export default Packages;