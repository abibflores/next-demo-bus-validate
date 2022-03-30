const Home = () => {
    return <section>Hola soy el dash Inicio de dominio</section>
};

export const getServerSideProps = async (context) => {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: true,
      },
    };
};

export default Home;