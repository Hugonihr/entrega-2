function ItemListContainer({ text }) {
    
    const productos = [
        {
          id: 1,
          nombre: "Polera Azul",
          precio: 12000,
          imagen: "/imagenes/Polera-azul.png"
        },
        {
          id: 2,
          nombre: "Polera Roja",
          precio: 13500,
          imagen: "/imagenes/Polera-rojo.png"
        },
        {
          id: 3,
          nombre: "Polera Verde",
          precio: 11000,
          imagen: "/imagenes/Polera-verde.png"
        },
        {
          id: 4,
          nombre: "Polera Negra",
          precio: 18000,
          imagen: "/imagenes/Polera-negra.png"
        },
        {
          id: 5,
          nombre: "Polera Blanca",
          precio: 15000,
          imagen: "/imagenes/Polera-blanca.png"
        },
        {
          id: 6,
          nombre: "Poleron Azul",
          precio: 32000,
          imagen: "/imagenes/Poleron-azul.png"
        },
        {
          id: 7,
          nombre: "Poleron Rojo",
          precio: 34000,
          imagen: "/imagenes/Poleron-rojo.png"
        },
        {
          id: 8,
          nombre: "Poleron Verde",
          precio: 36000,
          imagen: "/imagenes/Poleron-verde.png"
        },
        {
          id: 9,
          nombre: "Poleron Negro",
          precio: 39000,
          imagen: "/imagenes/Poleron-negro.png"
        },
        {
          id: 10,
          nombre: "Poleron Blanco",
          precio: 31000,
          imagen: "/imagenes/Poleron-blanco.png"
        },
        {
          id: 11,
          nombre: "Gorro Azul",
          precio: 10000,
          imagen: "/imagenes/Gorro-azul.png"
        },
        {
          id: 12,
          nombre: "Gorro Rojo",
          precio: 12000,
          imagen: "/imagenes/Gorro-rojo.png"
        },
        {
          id: 13,
          nombre: "Gorro Verde",
          precio: 11500,
          imagen: "/imagenes/Gorro-verde.png"
        },
        {
          id: 14,
          nombre: "Gorro Negro",
          precio: 13000,
          imagen: "/imagenes/Gorro-negro.png"
        },
        {
          id: 15,
          nombre: "Gorro Blanco",
          precio: 12500,
          imagen: "/imagenes/Gorro-blanco.png"
        }
    ];
    
    return (
        <div>
            {productos.map(prod => (
                <div key={prod.id} className="">
                    <img src={prod.imagen} alt={prod.nombre} />
                    <p>{prod.nombre}</p>
                    <p>$ {prod.precio}</p>
                </div>
            ))}
        </div>
    );
}

export default ItemListContainer;