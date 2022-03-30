import { useRouter } from "next/router";
import { useState } from "react";
import { Layout } from "../../../../components/Layout";

const VenuesBalance = ({ view }) => {

    const router = useRouter();

    const handleMethodPayment = (id) => {
        if (id) {
            router.push('/dashboard/venues/up-balance?view=card', undefined, { shallow: true })
        } else {
            router.push('/dashboard/venues/up-balance?view=transfer', undefined, { shallow: true });
        }
    }
    console.log(router.query);
    
    return (
    <Layout>
        <button onClick={() => handleMethodPayment(0)}>transferencia</button>
        <button onClick={() => handleMethodPayment(1)}>tarjeta</button>
        { (router.query.view === "transfer") ? <span>hola soy una tranferencia</span> : <h1>hola soy un abono por tarjeta</h1>}
    </Layout>
    );
};

export const getServerSideProps = async (context) => {

    const { query, params } = context;

    console.log(query, params);

    return {
        props: { view: query.view || "transfer" }
    };
};

export default VenuesBalance;