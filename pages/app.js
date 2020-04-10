import React from 'react';

const app = () => {
    return (
        <div>
            <h1>App - Logado com sucesso</h1>
        </div>
    )   
};
export default app;

/* export async function getServerSideProps({ req, res }) {
    const session = await auth0.getSession(req);
    return;
} */