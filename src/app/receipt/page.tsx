"use client";

const page = () => {

    const printWindow = () => {
        window.print();
    }

    return (
        <div className="px-20 py-20">
            <div className="flex justify-between">
                <div className="flex flex-col gap-1 w-60">
                    <h1 className="font-bold text-3xl text-gray-700">Company Name.</h1>
                    <p className="text-lg text-gray-700 mt-2 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="flex flex-col gap-1 w-60">
                    <h1 className="font-bold text-3xl text-gray-700">Receipt</h1>
                </div>
            </div>

            <div className="flex justify-between mt-20">
                <div className="flex flex-col gap-1 mt-4">
                    <h2 className="text-gray-700 font-bold">Bill To</h2>
                    <p className="font-medium text-gray-700">Customer name</p>
                    <p className="font-medium text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <div className="flex justify-between gap-20">
                        <h2 className="text-gray-700 font-bold">Receipt#</h2>
                        <p className="text-gray-700 font-bold">6537728</p>
                    </div>
                    <div className="flex justify-between gap-20">
                        <h2 className="text-gray-700 font-bold">Date Issued#</h2>
                        <p className="text-gray-700 font-bold">22-04-2024</p>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto mt-20">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border-2 text-left font-bold text-gray-800 uppercase">QTY</th>
                            <th className="px-4 py-2 border-2 text-left font-bold text-gray-800 uppercase">DESCRIPTION</th>
                            <th className="px-4 py-2 border-2 text-left font-bold text-gray-800 uppercase">UNIT PRICE</th>
                            <th className="px-4 py-2 border-2 text-left font-bold text-gray-800 uppercase">AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="px-4 py-2 border-2">1</td>
                            <td className="px-4 py-2 border-2">Product Description</td>
                            <td className="px-4 py-2 border-2">100</td>
                            <td className="px-4 py-2 border-2">100 </td>
                        </tr>
                        <tr className="bg-white">
                            <td className="px-4 py-2 border-2">2</td>
                            <td className="px-4 py-2 border-2">Product Description</td>
                            <td className="px-4 py-2 border-2">100</td>
                            <td className="px-4 py-2 border-2">100 </td>
                        </tr>
                        <tr className="bg-white">
                            <td className="px-4 py-2 border-2">3</td>
                            <td className="px-4 py-2 border-2">Product Description</td>
                            <td className="px-4 py-2 border-2">100</td>
                            <td className="px-4 py-2 border-2">100 </td>
                        </tr>
                        <tr className="bg-white">
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2 text-right text-xl font-bold">TOTAL</td>
                            <td className="px-4 py-2 border-2 text-right text-xl font-bold">&#8358;300</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-20 flex justify-center gap-8">
                <div onClick={printWindow} className="cursor-pointer text-lg underline">Print</div>
                <div onClick={() => {}} className="cursor-pointer text-lg underline">Pay Now</div>
            </div>


            <div className="mt-40">
                <p>&#169; {new Date().getFullYear()} Receipt generated with Easepay.</p>
            </div>
        </div>
    )
}

export default page
