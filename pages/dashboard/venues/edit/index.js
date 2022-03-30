const VenuesEdit = ({ id }) => {
    return <section>Hola soy el VenuesEdit {id}</section>
};

export const getServerSideProps = async (context) => {

    const { query, params } = context;

    console.log(query, params);

    return {
        props: { id: query.id }
    };
};

export default VenuesEdit;