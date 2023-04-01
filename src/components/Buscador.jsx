import React , { useState, useEffect } from 'react'


function Buscador() {
    const [categorias, setCategorias] = useState([]);
    const [search, setSearch] = useState("");

    const URL = 'http://localhost:8080/categorias';

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
              dato.descripcion.toLowerCase().includes(search.toLocaleLowerCase())
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
                    <tr className="bg-curso">
                        <th>Categorias</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((categoria) => (
                        <tr key={categoria.id}>
                            <td>{categoria.descripcion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Buscador