import React , { useState, useEffect } from 'react'


function Buscador() {
    const [categorias, setCategorias] = useState([]);
    const [search, setSearch] = useState("");

    const URL = 'http://localhost:8000/categorias';

    const getCategorias = async () => {
        const response = await fetch(URL);

        const data = await response.json();
        setCategorias(data);
    };
    console.log(categorias);
    const searcher = (e) => {
        setSearch(e.target.value);
    };

    const results = !search
        ? categorias
        : categorias.filter((dato) =>
              dato.firstName.toLowerCase().includes(search.toLocaleLowerCase())
          );
    useEffect(() => {
        getCategorias();
    }, []);
    return (
      
        <div className='container'>
            <input
                value={search}
                onChange={searcher}
                type="text"
                placeholder="Buscador de categorias"
                className="form-control"
            />

            <table className="table table-striped table-hover mt-5 shadow-lg">
                <thead>
                    <tr className="bg-curso text-white">
                        <th>Nombres</th>
                        <th>Apellidos</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((categoria) => (
                        <tr key={categoria.id}>
                            <td>{categoria.firstName}</td>
                            <td>{categoria.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Buscador