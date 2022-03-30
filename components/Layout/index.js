import { useRouter } from 'next/router'


export const Layout = ({ children }) => {

    return (
        <div>
            <div>sidebar</div>
            <div>header</div>
            { children }
        </div>
    );
};
