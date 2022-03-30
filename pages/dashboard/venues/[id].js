const VenueId = ({ id }) => {
    return <section>Hola soy el VenueId { id }</section>
};

export const getServerSideProps = async (context) => {

    const { query, params } = context;

    console.log(query, params);

    return {
        props: { id: params.id }
    };
};

export default VenueId;