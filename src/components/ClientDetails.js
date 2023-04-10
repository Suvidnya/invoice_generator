export default function ClientDetails({ clientName, clientAddress }) {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-1">{clientName}</h2>
        <p>{clientAddress}</p>
      </section>
    </>
  )
}
