import React from "react"

export default function Table({ list, total }) {
  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-semibold  text-xs md:text-lg lg:text-md">Description</td>
            <td className="font-semibold  text-xs md:text-lg lg:text-md">Quantity</td>
            <td className="font-semibold  text-xs md:text-lg lg:text-md">Price</td>
            <td className="font-semibold  text-xs md:text-lg lg:text-md">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td className="text-xs md:text-lg lg:text-md">{description}</td>
                <td className="text-xs md:text-lg lg:text-md">{quantity}</td>
                <td className="text-xs md:text-lg lg:text-md">{price}</td>
                <td className="text-xs md:text-lg lg:text-md">{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-600 text-2xl font-bold">
          TOTAL - {total.toLocaleString()}
        </h2>
      </div>
    </>
  )
}
